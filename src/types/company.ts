export interface ServiceLine {
  name: string;
  description?: string;
}

export interface CompanyProfile {
  website_url: string;
  company_name: string;
  company_description: string;
  tier1_keywords: string[];
  tier2_keywords: string[];
  service_lines: ServiceLine[];
  emails?: string[];
  poc?: string[];
}

export interface CompanyProfileFormData {
  company_name: string;
  service_lines: ServiceLine[];
  company_description: string;
  tier1_keywords: string[];
  tier2_keywords: string[];
} 