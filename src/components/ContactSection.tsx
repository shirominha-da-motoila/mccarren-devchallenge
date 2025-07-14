'use client';

import { useState } from 'react';

interface ContactSectionProps {
  emails: string[];
  poc: string[];
  isEditing: boolean;
  onEmailsChange: (emails: string[]) => void;
  onPocChange: (poc: string[]) => void;
}

export default function ContactSection({
  emails,
  poc,
  isEditing,
  onEmailsChange,
  onPocChange
}: ContactSectionProps) {
  const [newEmail, setNewEmail] = useState('');
  const [newPoc, setNewPoc] = useState('');

  const handleAddEmail = () => {
    if (newEmail.trim()) {
      onEmailsChange([...emails, newEmail.trim()]);
      setNewEmail('');
    }
  };

  const handleRemoveEmail = (index: number) => {
    onEmailsChange(emails.filter((_, i) => i !== index));
  };

  const handleAddPoc = () => {
    if (newPoc.trim()) {
      onPocChange([...poc, newPoc.trim()]);
      setNewPoc('');
    }
  };

  const handleRemovePoc = (index: number) => {
    onPocChange(poc.filter((_, i) => i !== index));
  };

  // Only show contact section if there are contacts or we're in editing mode
  if ((!emails || emails.length === 0) && (!poc || poc.length === 0) && !isEditing) {
    return null;
  }

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">📧</span>
        Contact Information
      </h3>

      {/* Emails */}
      <div className="mb-3 sm:mb-4">
        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Email Addresses</h4>
        {emails && emails.length > 0 && (
          <div className="flex flex-col flex-wrap gap-1 sm:gap-2">
            {emails.map((email: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <a
                  className="text-purple-600 font-medium underline text-sm sm:text-base break-all"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
                {isEditing && (
                  <button
                    onClick={() => handleRemoveEmail(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        {isEditing && (
          <div className="flex gap-2 mt-2">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Add email address"
              className="flex-1 text-xs sm:text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddEmail}
              className="px-2 py-1 bg-purple-600 text-white text-xs hover:bg-purple-700 transition-colors"
            >
              Add
            </button>
          </div>
        )}
      </div>

      {/* Points of Contact */}
      <div>
        <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Points of Contact</h4>
        {poc && poc.length > 0 && (
          <div>
            {poc.map((contact: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <p className="font-medium text-gray-900 text-sm sm:text-base">{contact}</p>
                {isEditing && (
                  <button
                    onClick={() => handleRemovePoc(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        {isEditing && (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={newPoc}
              onChange={(e) => setNewPoc(e.target.value)}
              placeholder="Add point of contact"
              className="flex-1 text-xs sm:text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddPoc}
              className="px-2 py-1 bg-blue-500 text-white text-xs hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 