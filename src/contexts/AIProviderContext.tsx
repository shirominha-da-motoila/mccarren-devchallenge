'use client';

import { createContext, useContext, ReactNode } from 'react';
import { AIProvider } from '@/types/ai-provider';
import { GeminiProvider } from '@/utils/gemini-provider';

interface AIProviderContextType {
  aiProvider: AIProvider;
}

const AIProviderContext = createContext<AIProviderContextType | undefined>(undefined);

interface AIProviderProviderProps {
  children: ReactNode;
  provider?: AIProvider;
}

export function AIProviderProvider({ children, provider }: AIProviderProviderProps) {
  // Default to Gemini provider if none provided
  const defaultProvider = provider || new GeminiProvider({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY || '',
    model: 'gemini-1.5-flash'
  });

  return (
    <AIProviderContext.Provider value={{ aiProvider: defaultProvider }}>
      {children}
    </AIProviderContext.Provider>
  );
}

export function useAIProvider() {
  const context = useContext(AIProviderContext);
  if (context === undefined) {
    throw new Error('useAIProvider must be used within an AIProviderProvider');
  }
  return context;
} 