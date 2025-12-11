
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MACHINES } from "../constants";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getSystemInstruction = (context: string) => `
${context}

DIRETRIZES DE RESPOSTA:
1. Você é o assistente oficial do Arquivo Técnico Inteligente (Ziemann Liess).
2. Baseie suas respostas ESTRITAMENTE nos dados manuais fornecidos acima para a MÁQUINA SELECIONADA.
3. Se o usuário perguntar algo que não está no manual, você pode usar a ferramenta 'googleSearch' para encontrar informações gerais, mas DEVE SEMPRE contextualizar com o manual.
4. FORMATAÇÃO VISUAL:
   - Use **Tabelas Markdown** sempre que listar peças, códigos, parâmetros técnicos, cronogramas de manutenção ou diagnósticos de problemas.
   - Use **Negrito** para destacar códigos de peças e valores importantes.
   - Use listas (bullets) para procedimentos passo-a-passo.
5. IMAGENS TÉCNICAS:
   - Se houver códigos de imagem disponíveis no manual (ex: IMAGE_VAPOR), use-os como link de imagem Markdown. Caso contrário, descreva a peça ou localização com base no texto.
6. ANÁLISE DE PEÇAS:
   - Se for uma análise de imagem enviada pelo usuário, tente identificar visualmente a peça comparando com as descrições do Catálogo de Peças específico desta máquina.
`;

export const streamChatResponse = async (
  message: string, 
  history: { role: string, parts: { text: string }[] }[],
  machineContextId: string
) => {
  try {
    const modelId = "gemini-2.5-flash"; 
    const machine = MACHINES.find(m => m.id === machineContextId);
    const contextContent = machine ? machine.content : "Nenhuma máquina selecionada.";

    // Configure tools to allow Google Search
    const tools = [{ googleSearch: {} }];

    const response = await ai.models.generateContentStream({
      model: modelId,
      contents: [
        ...history.map(h => ({
            role: h.role,
            parts: h.parts
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(contextContent),
        tools: tools,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};

export const analyzePartImage = async (
  base64Image: string, 
  promptText: string = "Identifique esta peça baseado no catálogo fornecido.",
  machineContextId: string
) => {
  try {
    // Using gemini-2.5-flash for multimodal tasks (text + image input, text output)
    const modelId = "gemini-2.5-flash";
    const machine = MACHINES.find(m => m.id === machineContextId);
    const contextContent = machine ? machine.content : "Nenhuma máquina selecionada.";

    const response = await ai.models.generateContent({
        model: modelId,
        contents: {
            parts: [
                {
                    inlineData: {
                        mimeType: 'image/jpeg',
                        data: base64Image
                    }
                },
                {
                    text: `Baseado estritamente no seguinte contexto técnico:\n${contextContent}\n\nTarefa: ${promptText}. Se identificar a peça, forneça o CÓDIGO, DESCRIÇÃO e MATERIAL em formato de Tabela Markdown.`
                }
            ]
        }
    });

    return response;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};