
import React, { useState, useRef } from 'react';
import ChatInterface from './components/ChatInterface';
import { streamChatResponse, analyzePartImage } from './services/geminiService';
import { Message } from './types';
import { GenerateContentResponse } from '@google/genai';
import { MACHINES } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMachineId, setSelectedMachineId] = useState<string>(MACHINES[0].id);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentMachine = MACHINES.find(m => m.id === selectedMachineId) || MACHINES[0];

  const handleMachineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMachineId(e.target.value);
    setMessages([]); // Clear chat on machine switch to avoid context pollution
    setSelectedImage(null);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      image: selectedImage || undefined,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    const currentImage = selectedImage;
    setSelectedImage(null); // Clear image after sending
    setIsLoading(true);

    try {
      if (currentImage) {
        // Visual Search Mode
        const prompt = input || "Identifique esta peça e encontre o código no manual.";
        const response = await analyzePartImage(currentImage.split(',')[1], prompt, selectedMachineId);
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: response.text || "Não consegui identificar a peça na imagem.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, aiMessage]);

      } else {
        // Standard Text Chat Mode
        // Create a placeholder for the streaming response
        const aiMessageId = (Date.now() + 1).toString();
        setMessages((prev) => [
          ...prev,
          {
            id: aiMessageId,
            role: 'model',
            text: '',
            timestamp: Date.now(),
          },
        ]);

        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text + (m.image ? " [Image Uploaded]" : "") }]
        }));

        const stream = await streamChatResponse(userMessage.text, history, selectedMachineId);
        
        let fullText = '';
        let groundingData = undefined;

        for await (const chunk of stream) {
            const typedChunk = chunk as GenerateContentResponse;
            const textChunk = typedChunk.text || '';
            fullText += textChunk;
            
            // Check for grounding metadata in the chunk
            if (typedChunk.candidates?.[0]?.groundingMetadata) {
                groundingData = typedChunk.candidates[0].groundingMetadata;
            }

            setMessages((prev) =>
                prev.map((msg) =>
                msg.id === aiMessageId ? { ...msg, text: fullText, groundingMetadata: groundingData } : msg
                )
            );
        }
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: "Desculpe, ocorreu um erro ao processar sua solicitação. Verifique sua conexão ou tente novamente.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto shadow-2xl bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 shadow-md z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
            <div>
                <h1 className="text-lg font-bold tracking-tight">Arquivo Técnico Inteligente</h1>
                <p className="text-xs text-slate-400">{currentMachine.line}</p>
            </div>
            </div>

            <div className="flex items-center">
                <label htmlFor="machine-select" className="mr-2 text-xs text-slate-400 uppercase font-semibold tracking-wider">Máquina:</label>
                <select 
                    id="machine-select"
                    value={selectedMachineId} 
                    onChange={handleMachineChange}
                    className="bg-slate-800 text-white text-sm rounded-lg px-3 py-2 border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    {MACHINES.map(machine => (
                        <option key={machine.id} value={machine.id}>
                            {machine.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
      </header>

      {/* Chat Area */}
      <ChatInterface messages={messages} isLoading={isLoading} />

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-slate-200">
        
        {selectedImage && (
            <div className="mb-3 flex items-center bg-blue-50 p-2 rounded-lg border border-blue-100 max-w-fit">
                <img src={selectedImage} alt="Preview" className="h-12 w-12 object-cover rounded bg-white" />
                <div className="ml-3 mr-2">
                    <p className="text-xs font-semibold text-blue-800">Imagem selecionada</p>
                    <p className="text-[10px] text-blue-600">Pronta para análise visual</p>
                </div>
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="p-1 hover:bg-blue-100 rounded-full text-blue-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        )}

        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            className="hidden"
            accept="image/*"
            capture="environment" 
          />
          
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-3 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors border border-slate-200"
            title="Adicionar foto da peça"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={selectedImage ? "Pergunte sobre esta peça..." : `Dúvida sobre ${currentMachine.name}...`}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || (!input.trim() && !selectedImage)}
            className={`p-3 rounded-full text-white transition-all shadow-md ${
              isLoading || (!input.trim() && !selectedImage)
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform active:scale-95'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
