'use client';

import { CompanyProfile } from '@/types/company';

interface CompanyProfileCardProps {
  profile: CompanyProfile;
}

export default function CompanyProfileCard({ profile }: CompanyProfileCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 shadow-lg transform hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="p-8 border-b-2 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline space-x-4">
            <h2 className="text-3xl font-bold text-gray-900">{profile.company_name}</h2>
            <p className="text-lg text-gray-600">{profile.website_url}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-3 text-2xl">📝</span>
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4">
            {profile.company_description}
          </p>
        </div>

        {/* Service Lines */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-3 text-2xl">🛠️</span>
            Service Lines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.service_lines.map((serviceLine, index) => (
              <div
                key={index}
                className="p-4 bg-blue-50 border-blue-200 transform hover:brightness-95 transition-transform duration-200"
              >
                <h4 className="font-bold text-gray-900 mb-2">{serviceLine.name}</h4>
                <p className="text-gray-700 text-sm">{serviceLine.description}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="mt-8 grid grid-cols-2">
          {/* Keywords */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-3 text-2xl">🏷️</span>
              Keywords
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Tier 1 Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.tier1_keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600 text-white text-sm font-medium hover:brightness-105 hover:scale-105 transition-transform duration-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Tier 2 Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.tier2_keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500 text-white text-sm font-medium hover:brightness-105 hover:scale-105 transition-transform duration-200"
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
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3 text-2xl">📧</span>
                Contact Information
              </h3>

              {/* Emails */}
              {profile.emails && profile.emails.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Email Addresses</h4>
                  <div className="flex flex-col flex-wrap gap-2">
                    {profile.emails.map((email: string, index: number) => (
                      <a
                        key={index}
                        className=" text-purple-600 font-medium underline"
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
                  <h4 className="font-bold text-gray-900 mb-2">Points of Contact</h4>
                  <div>
                    {profile.poc.map((contact: string, index: number) => (
                      <p key={index} className="font-medium text-gray-900">{contact}</p>
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