'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServiceLine } from '@/types/company';
import { generateCompanyProfile, createCompanyProfile } from '@/utils/api';
import UrlInput from '@/components/UrlInput';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleUrlSubmit = async (data: {
    url: string;
    emails: string[];
    poc: string[];
    serviceLines: ServiceLine[];
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      // Generate profile data with optional user-provided data
      const profileData = await generateCompanyProfile(data.url, data.serviceLines);
      const generatedProfile = createCompanyProfile(profileData, data.url);

      const newProfile = {
        ...generatedProfile,
        emails: data.emails,
        poc: data.poc,
      }
      // Store the profile data in sessionStorage (temporary, cleared on page close)
      sessionStorage.setItem('currentProfile', JSON.stringify(newProfile));

      // Redirect to the profile page
      router.push('/profile');
    } catch (error) {
      console.error('Error generating profile:', error);
      setError('Error generating profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="flex flex-col mx-auto px-4 sm:px-8 lg:px-16 py-4 sm:py-8 min-h-screen">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Company Profile Generator
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16 min-h-[100%]">
          {/* Instructions */}
          <div className="text-center w-full lg:flex-1 order-2 lg:order-1">
            <div className="grid gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="p-4 sm:p-6 bg-white border-2 border-blue-200 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-4">🔗</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Enter URL</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">Provide the company website URL you want to analyze</p>
              </div>
              <div className="p-4 sm:p-6 bg-white border-2 border-purple-200 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-4">🤖</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">AI Analysis</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">Our AI analyzes the website and generates comprehensive profiles</p>
              </div>
              <div className="p-4 sm:p-6 bg-white border-2 border-green-200 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-4">📊</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Get Results</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">View detailed profiles with service lines and keywords</p>
              </div>
            </div>
          </div>
          {/* URL Input */}
          <div className="w-full lg:flex-[3] order-1 lg:order-2">
            <UrlInput onSubmit={handleUrlSubmit} isLoading={isLoading} />
            {error && (
              <div className="mt-6 p-4 sm:p-6 bg-red-50 border-2 border-red-200">
                <p className="text-red-800 font-medium text-sm sm:text-base">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
