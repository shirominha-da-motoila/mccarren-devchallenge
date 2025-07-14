'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CompanyProfile } from '@/types/company';
import CompanyProfileCard from '@/components/CompanyProfileCard';

export default function ProfilePage() {
  const [currentProfile, setCurrentProfile] = useState<CompanyProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Load current profile from sessionStorage
    const storedProfile = sessionStorage.getItem('currentProfile');
    if (storedProfile) {
      setCurrentProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleGenerateNew = () => {
    // Clear the current profile
    sessionStorage.removeItem('currentProfile');
    router.push('/');
  };

  const handleProfileUpdate = (updatedProfile: CompanyProfile) => {
    // Update the profile in sessionStorage
    sessionStorage.setItem('currentProfile', JSON.stringify(updatedProfile));
    setCurrentProfile(updatedProfile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Generated Profile
            </h1>
            <p className="text-base sm:text-xl text-gray-700 mb-4">
              View and edit your AI-generated company profile
            </p>
          </div>
          <button
            onClick={handleGenerateNew}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white font-bold text-base sm:text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            Generate New Profile
          </button>
        </div>

        {/* Profile */}
        <div className="space-y-6 sm:space-y-8">
          {!currentProfile ? (
            <div className="text-center py-12 sm:py-20">
              <div className="inline-block p-4 sm:p-6 mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white transform rotate-3">
                <div className="text-4xl sm:text-6xl">📋</div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                No profile generated
              </h3>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto">
                Generate a profile to see it here.
              </p>
              <button
                onClick={handleGenerateNew}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg border-2 border-blue-700 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                Generate Profile
              </button>
            </div>
          ) : (
            <div className="transform hover:shadow-lg transition-transform duration-200">
              <CompanyProfileCard 
                profile={currentProfile} 
                onProfileUpdate={handleProfileUpdate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 