import { GoogleGenerativeAI } from '@google/generative-ai';
import { CompanyProfileFormData, ServiceLine } from '@/types/company';
import { AIProvider, AIProviderConfig, PromptTemplate } from '@/types/ai-provider';

export class GeminiPromptTemplate implements PromptTemplate {
  generate(url: string, serviceLines?: ServiceLine[]): string {
    return `
Analyze the following website HTML content and generate a comprehensive company profile in JSON format.

Website URL: ${url}

Please generate a JSON object with the following structure:
{
  "company_name": "The company name",
  "company_description": "A comprehensive description of the company based on the website content",
  "tier1_keywords": ["keyword1", "keyword2", "keyword3"],
  "tier2_keywords": ["keyword1", "keyword2", "keyword3"],
  ${!serviceLines ? `"service_lines": [
    {
      "id": "unique-id",
      "name": "Service line name",
      "description": "Brief description of the service"
    }
  ],
` : ''}
}

Guidelines:
- company_name: Extract the actual company name from the website
- company_description: Write a 2-3 sentence description based on the website content
- tier1_keywords: Keywords this company would use to search for government opportunities (4-6 keywords)
- tier2_keywords: Keywords this company MIGHT use to search for government opportunities (4-6 keywords)
${!serviceLines ? `- service_lines: Identify the main services/products the company offers (minimum 1, maximum 5)` : ''}

Focus on government contracting opportunities when generating keywords. For example:
- A solar company might use: "solar", "renewable energy", "solar panels", "green energy"
- A construction company might use: "construction", "building", "infrastructure", "commercial construction"
- A tech company might use: "cybersecurity", "software development", "IT consulting", "digital transformation"

IMPORTANT: Return ONLY the JSON object, no markdown formatting, no code blocks, no additional text.
`;
  }
}

export class GeminiProvider implements AIProvider {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private promptTemplate: PromptTemplate;

  constructor(config: AIProviderConfig, promptTemplate?: PromptTemplate) {
    this.genAI = new GoogleGenerativeAI(config.apiKey);
    this.model = this.genAI.getGenerativeModel({ 
      model: config.model || 'gemini-1.5-flash',
      generationConfig: {
        maxOutputTokens: config.maxTokens || 2048,
        temperature: config.temperature || 0.7,
      }
    });
    this.promptTemplate = promptTemplate || new GeminiPromptTemplate();
  }

  async generateProfile(url: string, serviceLines?: ServiceLine[]): Promise<CompanyProfileFormData> {
    const prompt = this.promptTemplate.generate(url, serviceLines);
    
    const result = await this.model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    if (!text) {
      throw new Error('No valid response received from Gemini');
    }

    const cleanedText = this.cleanJsonResponse(text);
    const profileData = JSON.parse(cleanedText);

    return {
      company_name: profileData.company_name || 'Unknown Company',
      company_description: profileData.company_description || 'No description available',
      tier1_keywords: Array.isArray(profileData.tier1_keywords) ? profileData.tier1_keywords : [],
      tier2_keywords: Array.isArray(profileData.tier2_keywords) ? profileData.tier2_keywords : [],
      service_lines: serviceLines || (Array.isArray(profileData.service_lines) ? profileData.service_lines : []),
    };
  }

  private cleanJsonResponse(text: string): string {
    let cleaned = text.replace(/```json\s*/g, '').replace(/```\s*$/g, '');
    cleaned = cleaned.trim();

    if (!cleaned.startsWith('{')) {
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        cleaned = jsonMatch[0];
      }
    }

    return cleaned;
  }
} 