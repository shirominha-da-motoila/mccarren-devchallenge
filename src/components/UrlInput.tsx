'use client';

import { useState } from 'react';
import { ServiceLine } from '@/types/company';
import { validateFormData, validationRules } from '@/utils/validation';
import UrlField from './UrlField';
import EmailField from './EmailField';
import ServiceLineField from './ServiceLineField';
import PocField from './PocField';

interface FormData {
  url: string;
  emails?: string[];
  poc?: string[];
  serviceLines?: ServiceLine[];
}

interface UrlInputProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export default function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [formData, setFormData] = useState<FormData>({
    url: '',
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    // Validate form data
    const validation = validateFormData(formData, {
      url: validationRules.url
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    try {
      // Basic URL validation
      const validUrl = formData.url.startsWith('http') ? formData.url : `https://${formData.url}`;
      new URL(validUrl);

      // Filter out empty values
      const filteredData = {
        url: validUrl,
        emails: formData.emails?.filter(email => email.trim() !== ''),
        poc: formData.poc?.filter(contact => contact.trim() !== ''),
        serviceLines: formData.serviceLines?.filter(line => line.name.trim() !== '')
      };

      onSubmit(filteredData);
    } catch {
      setErrors(['Please enter a valid URL']);
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-end">
          {/* URL Input */}
          <UrlField
            value={formData.url}
            onChange={(value) => updateFormData('url', value)}
            disabled={isLoading}
            error={errors.find(e => e.includes('URL'))}
          />

          {/* Submit Button */}
          <div className="pt-4 sm:pt-6 w-full sm:w-auto">
            <button
              type="submit"
              disabled={isLoading || !formData.url.trim()}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg sm:text-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? '🤖 Generating Profile...' : '🚀 Generate Profile'}
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-6 sm:gap-8'>
          {/* Service Lines */}
          <ServiceLineField
            serviceLines={formData.serviceLines || []}
            onServiceLinesChange={(value) => updateFormData('serviceLines', value)}
            disabled={isLoading}
          />

          {/* Emails */}
          <EmailField
            emails={formData.emails || []}
            onEmailsChange={(value) => updateFormData('emails', value)}
            disabled={isLoading}
          />

          {/* Points of Contact */}
          <PocField
            poc={formData.poc || []}
            onPocChange={(value) => updateFormData('poc', value)}
            disabled={isLoading}
          />
        </div>

        {errors.length > 0 && (
          <div className="p-4 bg-red-50 border-2 border-red-200">
            {errors.map((error, index) => (
              <p key={index} className="text-red-800 font-medium">{error}</p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
} 