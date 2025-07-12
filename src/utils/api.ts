import { CompanyProfile, CompanyProfileFormData, ServiceLine } from '@/types/company';

// Real GPT API for generating company profiles
export async function generateCompanyProfile(
  websiteUrl: string, 
  serviceLines?: ServiceLine[],
): Promise<CompanyProfileFormData> {
    // Call the GPT API to analyze the website and generate profile
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