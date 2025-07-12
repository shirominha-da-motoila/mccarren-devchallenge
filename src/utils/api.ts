import { CompanyProfile, CompanyProfileFormData, ServiceLine } from '@/types/company';
import { AIProvider } from '@/types/ai-provider';

// API client for generating company profiles
export class ProfileGeneratorService {
  constructor(private aiProvider: AIProvider) {}

  async generateCompanyProfile(
    websiteUrl: string, 
    serviceLines?: ServiceLine[],
  ): Promise<CompanyProfileFormData> {
    return await this.aiProvider.generateProfile(websiteUrl, serviceLines);
  }

  createCompanyProfile(data: CompanyProfileFormData, websiteUrl: string): CompanyProfile {
    return {
      ...data,
      website_url: websiteUrl,
    };
  }
}

// Legacy function for backward compatibility
export async function generateCompanyProfile(
  websiteUrl: string, 
  serviceLines?: ServiceLine[],
): Promise<CompanyProfileFormData> {
  const response = await fetch('/api/generate-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      websiteUrl: websiteUrl,
      serviceLines: serviceLines
    })
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export function createCompanyProfile(data: CompanyProfileFormData, websiteUrl: string): CompanyProfile {
  return {
    ...data,
    website_url: websiteUrl,
  };
} 