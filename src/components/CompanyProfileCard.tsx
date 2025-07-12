'use client';

import { CompanyProfile } from '@/types/company';

interface CompanyProfileCardProps {
  profile: CompanyProfile;
}

export default function CompanyProfileCard({ profile }: CompanyProfileCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 shadow-lg transform hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="p-4 sm:p-6 lg:p-8 border-b-2 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline space-y-2 sm:space-y-0 sm:space-x-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{profile.company_name}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 break-all">{profile.website_url}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Description */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
            <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">📝</span>
            Description
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-gray-50 p-3 sm:p-4">
            {profile.company_description}
          </p>
        </div>

        {/* Service Lines */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
            <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🛠️</span>
            Service Lines
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {profile.service_lines.map((serviceLine, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 bg-blue-50 border-blue-200 transform hover:brightness-95 transition-transform duration-200"
              >
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{serviceLine.name}</h4>
                <p className="text-gray-700 text-xs sm:text-sm">{serviceLine.description}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Keywords */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🏷️</span>
              Keywords
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Tier 1 Keywords</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {profile.tier1_keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-purple-600 text-white text-xs sm:text-sm font-medium hover:brightness-105 hover:scale-105 transition-transform duration-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Tier 2 Keywords</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {profile.tier2_keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-blue-500 text-white text-xs sm:text-sm font-medium hover:brightness-105 hover:scale-105 transition-transform duration-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          {((profile.emails && profile.emails.length > 0) || (profile.poc && profile.poc.length > 0)) && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">📧</span>
                Contact Information
              </h3>

              {/* Emails */}
              {profile.emails && profile.emails.length > 0 && (
                <div className="mb-3 sm:mb-4">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Email Addresses</h4>
                  <div className="flex flex-col flex-wrap gap-1 sm:gap-2">
                    {profile.emails.map((email: string, index: number) => (
                      <a
                        key={index}
                        className="text-purple-600 font-medium underline text-sm sm:text-base break-all"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Points of Contact */}
              {profile.poc && profile.poc.length > 0 && (
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Points of Contact</h4>
                  <div>
                    {profile.poc.map((contact: string, index: number) => (
                      <p key={index} className="font-medium text-gray-900 text-sm sm:text-base">{contact}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 