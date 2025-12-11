
export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  image?: string; // Base64 string
  timestamp: number;
  isThinking?: boolean;
  groundingMetadata?: GroundingMetadata;
}

export interface GroundingMetadata {
  searchEntryPoint?: {
    renderedContent?: string;
  };
  groundingChunks?: {
    web?: {
      uri: string;
      title: string;
    };
  }[];
}

export enum AppMode {
  CHAT = 'CHAT',
  VISUAL_SEARCH = 'VISUAL_SEARCH'
}

export interface Machine {
  id: string;
  name: string;
  line: string;
  description: string;
  content: string; // The full manual context
}
