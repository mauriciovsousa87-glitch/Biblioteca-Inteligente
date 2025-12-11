
import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Message } from '../types';
import { IMAGE_MAP } from '../constants';

interface ChatInterfaceProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-slate-100">
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-slate-400 mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p className="text-lg font-medium">Arquivo Técnico Inteligente</p>
          <p className="text-sm">Pergunte sobre operação, peças ou envie uma foto.</p>
        </div>
      )}

      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[90%] md:max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white rounded-br-none'
                : 'bg-white text-slate-800 rounded-bl-none border border-slate-200'
            }`}
          >
            {msg.image && (
                <div className="mb-3">
                    <img src={msg.image} alt="User upload" className="rounded-lg max-h-48 object-cover border border-white/20" />
                    <div className="text-xs opacity-75 mt-1 mb-2 border-b border-white/20 pb-2">Identificação Visual de Peça</div>
                </div>
            )}
            
            <div className={`prose ${msg.role === 'user' ? 'prose-invert' : 'prose-slate'} max-w-none text-sm leading-relaxed break-words`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: (props) => {
                    const { src, alt } = props;
                    // Check if src is a shortcode in our map
                    const imageSource = (src && IMAGE_MAP[src]) ? IMAGE_MAP[src] : src;
                    
                    if (!imageSource) return null;

                    return (
                      <div className="my-3 bg-white p-2 rounded-lg border border-slate-300 shadow-sm inline-block w-full">
                          <img 
                              src={imageSource} 
                              alt={alt || "Diagrama Técnico"}
                              className="max-w-full h-auto rounded bg-slate-50 mx-auto"
                              style={{ maxHeight: '400px', objectFit: 'contain' }}
                          />
                          <div className="text-center text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                            {alt}
                          </div>
                      </div>
                    );
                  },
                  table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 shadow-sm">
                      <table className="min-w-full divide-y divide-slate-200 text-sm" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}) => (
                    <thead className="bg-slate-50" {...props} />
                  ),
                  tbody: ({node, ...props}) => (
                    <tbody className="divide-y divide-slate-200 bg-white" {...props} />
                  ),
                  tr: ({node, ...props}) => (
                    <tr className="hover:bg-slate-50 transition-colors" {...props} />
                  ),
                  th: ({node, ...props}) => (
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap" {...props} />
                  ),
                  td: ({node, ...props}) => (
                    <td className="px-4 py-3 text-slate-700 whitespace-normal" {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul className="list-disc pl-5 my-2 space-y-1" {...props} />
                  ),
                  ol: ({node, ...props}) => (
                    <ol className="list-decimal pl-5 my-2 space-y-1" {...props} />
                  ),
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-2 italic bg-blue-50 text-slate-700 rounded-r" {...props} />
                  ),
                  code: ({node, inline, className, children, ...props}: any) => {
                      return inline ? (
                          <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs font-mono border border-slate-200" {...props}>
                              {children}
                          </code>
                      ) : (
                          <pre className="bg-slate-800 text-slate-100 p-3 rounded-lg overflow-x-auto text-xs font-mono my-3 shadow-inner">
                              <code {...props}>{children}</code>
                          </pre>
                      )
                  }
                }}
              >
                {msg.text}
              </ReactMarkdown>
            </div>

            {msg.groundingMetadata?.groundingChunks && Array.isArray(msg.groundingMetadata.groundingChunks) && msg.groundingMetadata.groundingChunks.length > 0 && (
              <div className="mt-3 pt-2 border-t border-slate-200/50 text-xs">
                <p className="font-semibold opacity-70 mb-1">Fontes Externas:</p>
                <ul className="list-disc pl-4 space-y-1">
                  {msg.groundingMetadata.groundingChunks.map((chunk, idx) => (
                    chunk.web && (
                      <li key={idx}>
                        <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">
                          {chunk.web.title}
                        </a>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-slate-200">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatInterface;
