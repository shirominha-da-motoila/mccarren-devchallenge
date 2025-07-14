'use client';

import { useState } from 'react';
import { CompanyProfile, ServiceLine } from '@/types/company';
import ProfileHeader from './ProfileHeader';
import ProfileDescription from './ProfileDescription';
import ServiceLinesSection from './ServiceLinesSection';
import KeywordsSection from './KeywordsSection';
import ContactSection from './ContactSection';

interface CompanyProfileCardProps {
  profile: CompanyProfile;
  onProfileUpdate?: (updatedProfile: CompanyProfile) => void;
}

export default function CompanyProfileCard({ profile, onProfileUpdate }: CompanyProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<CompanyProfile>(profile);

  const handleSave = () => {
    if (onProfileUpdate) {
      onProfileUpdate(editedProfile);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleProfileChange = (updates: Partial<CompanyProfile>) => {
    setEditedProfile(prev => ({ ...prev, ...updates }));
  };

  const handleDescriptionChange = (description: string) => {
    setEditedProfile(prev => ({ ...prev, company_description: description }));
  };

  const handleServiceLinesChange = (serviceLines: ServiceLine[]) => {
    setEditedProfile(prev => ({ ...prev, service_lines: serviceLines }));
  };

  const handleTier1KeywordsChange = (keywords: string[]) => {
    setEditedProfile(prev => ({ ...prev, tier1_keywords: keywords }));
  };

  const handleTier2KeywordsChange = (keywords: string[]) => {
    setEditedProfile(prev => ({ ...prev, tier2_keywords: keywords }));
  };

  const handleEmailsChange = (emails: string[]) => {
    setEditedProfile(prev => ({ ...prev, emails }));
  };

  const handlePocChange = (poc: string[]) => {
    setEditedProfile(prev => ({ ...prev, poc }));
  };

  return (
    <div className="bg-white border-2 border-gray-200 shadow-lg transform hover:shadow-xl transition-shadow duration-300">
      <ProfileHeader
        profile={editedProfile}
        isEditing={isEditing}
        onProfileChange={handleProfileChange}
        onSave={handleSave}
        onCancel={handleCancel}
        onEdit={handleEdit}
      />

      <div className="p-4 sm:p-6 lg:p-8">
        <ProfileDescription
          description={editedProfile.company_description}
          isEditing={isEditing}
          onDescriptionChange={handleDescriptionChange}
        />

        <ServiceLinesSection
          serviceLines={editedProfile.service_lines || []}
          isEditing={isEditing}
          onServiceLinesChange={handleServiceLinesChange}
        />

        <hr className="border-gray-200" />

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <KeywordsSection
            tier1Keywords={editedProfile.tier1_keywords || []}
            tier2Keywords={editedProfile.tier2_keywords || []}
            isEditing={isEditing}
            onTier1KeywordsChange={handleTier1KeywordsChange}
            onTier2KeywordsChange={handleTier2KeywordsChange}
          />

          <ContactSection
            emails={editedProfile.emails || []}
            poc={editedProfile.poc || []}
            isEditing={isEditing}
            onEmailsChange={handleEmailsChange}
            onPocChange={handlePocChange}
          />
        </div>
      </div>
    </div>
  );
} 