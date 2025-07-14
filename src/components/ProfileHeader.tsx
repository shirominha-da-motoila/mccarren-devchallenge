'use client';

import { CompanyProfile } from '@/types/company';

interface ProfileHeaderProps {
  profile: CompanyProfile;
  isEditing: boolean;
  onProfileChange: (updates: Partial<CompanyProfile>) => void;
  onSave: () => void;
  onCancel: () => void;
  onEdit: () => void;
}

export default function ProfileHeader({
  profile,
  isEditing,
  onProfileChange,
  onSave,
  onCancel,
  onEdit
}: ProfileHeaderProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 border-b-2 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline space-y-2 sm:space-y-0 sm:space-x-4">
          {isEditing ? (
            <input
              type="text"
              value={profile.company_name}
              onChange={(e) => onProfileChange({ company_name: e.target.value })}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />
          ) : (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{profile.company_name}</h2>
          )}
          {isEditing ? (
            <input
              type="text"
              value={profile.website_url}
              onChange={(e) => onProfileChange({ website_url: e.target.value })}
              className="text-sm sm:text-base lg:text-lg text-gray-600 break-all bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              placeholder="Website URL"
            />
          ) : (
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 break-all">{profile.website_url}</p>
          )}
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={onSave}
                className="px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                Save
              </button>
              <button
                onClick={onCancel}
                className="px-4 py-2 bg-gray-600 text-white font-medium hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={onEdit}
              className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 