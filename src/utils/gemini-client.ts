import { CompanyProfileFormData } from '@/types/company';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ServiceLine {
  id: string;
  name: string;
  description?: string;
}

// Gemini client for AI-powered profile generation
export async function generateProfileWithAI(
  websiteUrl: string,
  serviceLines?: ServiceLine[],
): Promise<CompanyProfileFormData> {
  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  // Create the prompt with the HTML content
  const prompt = `
Analyze the following website HTML content and generate a comprehensive company profile in JSON format.

Website URL: ${websiteUrl}

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

  // Generate content using Gemini
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  if (!text) {
    throw new Error('No valid response received from Gemini');
  }

  // Clean the response text to extract JSON
  const cleanedText = cleanJsonResponse(text);

  // Parse the JSON response
  const profileData = JSON.parse(cleanedText);

  // Validate and ensure proper structure
  return {
    company_name: profileData.company_name || 'Unknown Company',
    company_description: profileData.company_description || 'No description available',
    tier1_keywords: Array.isArray(profileData.tier1_keywords) ? profileData.tier1_keywords : [],
    tier2_keywords: Array.isArray(profileData.tier2_keywords) ? profileData.tier2_keywords : [],
    service_lines: serviceLines || Array.isArray(profileData.service_lines) ? profileData.service_lines : [],
  };
}

// Function to clean JSON response from markdown formatting
function cleanJsonResponse(text: string): string {
  // Remove markdown code blocks
  let cleaned = text.replace(/```json\s*/g, '').replace(/```\s*$/g, '');

  // Remove any leading/trailing whitespace
  cleaned = cleaned.trim();

  // If the response still doesn't look like JSON, try to extract JSON from the text
  if (!cleaned.startsWith('{')) {
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleaned = jsonMatch[0];
    }
  }

  return cleaned;
}
