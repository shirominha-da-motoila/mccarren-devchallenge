import { CompanyProfileFormData, ServiceLine } from '@/types/company';

export interface AIProvider {
  generateProfile(url: string, serviceLines?: ServiceLine[]): Promise<CompanyProfileFormData>;
}

export interface PromptTemplate {
  generate(url: string, serviceLines?: ServiceLine[]): string;
}

export interface AIProviderConfig {
  apiKey: string;
  model: string;
  maxTokens?: number;
  temperature?: number;
} 