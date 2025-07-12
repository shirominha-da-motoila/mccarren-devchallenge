'use client';

import { useState } from 'react';
import { ServiceLine } from '@/types/company';

interface UrlInputProps {
  onSubmit: (data: {
    url: string;
    emails: string[];
    poc: string[];
    serviceLines: ServiceLine[];
  }) => void;
  isLoading: boolean;
}

export default function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [url, setUrl] = useState('');
  const [emails, setEmails] = useState<string[]>(['']);
  const [poc, setPoc] = useState<string[]>(['']);
  const [serviceLines, setServiceLines] = useState<ServiceLine[]>([
  ]);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Please enter a website URL');
      return;
    }

    try {
      // Basic URL validation
      const validUrl = url.startsWith('http') ? url : `https://${url}`;
      new URL(validUrl);

      // Filter out empty emails and POC
      const filteredEmails = emails.filter(email => email.trim() !== '');
      const filteredPoc = poc.filter(contact => contact.trim() !== '');

      // Filter out empty service lines
      const filteredServiceLines = serviceLines.filter(line => line.name.trim() !== '');

      onSubmit({
        url: validUrl,
        emails: filteredEmails,
        poc: filteredPoc,
        serviceLines: filteredServiceLines
      });
    } catch {
      setError('Please enter a valid URL');
    }
  };

  const addEmail = () => {
    setEmails([...emails, '']);
  };

  const removeEmail = (index: number) => {
    if (emails.length > 1) {
      setEmails(emails.filter((_, i) => i !== index));
    }
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const addPoc = () => {
    setPoc([...poc, '']);
  };

  const removePoc = (index: number) => {
    if (poc.length > 1) {
      setPoc(poc.filter((_, i) => i !== index));
    }
  };

  const updatePoc = (index: number, value: string) => {
    const newPoc = [...poc];
    newPoc[index] = value;
    setPoc(newPoc);
  };

  const addServiceLine = () => {
    setServiceLines([...serviceLines, { name: '', description: '' }]);
  };

  const removeServiceLine = (index: number) => {
    if (serviceLines.length > 1) {
      setServiceLines(serviceLines.filter((_, i) => i !== index));
    }
  };

  const updateServiceLine = (index: number, field: 'name' | 'description', value: string) => {
    const newServiceLines = [...serviceLines];
    newServiceLines[index] = { ...newServiceLines[index], [field]: value };
    setServiceLines(newServiceLines);
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-end">
          {/* URL Input */}
          <div className="flex-1 w-full">
            <label htmlFor="url" className="block text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🔗</span>
              Company Website URL *
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter company website URL (e.g., https://example.com)"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 sm:pt-6 w-full sm:w-auto">
            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg sm:text-xl border-2 border-blue-700 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? '🤖 Generating Profile...' : '🚀 Generate Profile'}
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-6 sm:gap-8'>
          {/* Service Lines */}
          <div>
            <label className="block text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 items-center">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🛠️</span>
              Service Lines (Optional - leave empty to auto-generate)
            </label>
            <div className="space-y-3 sm:space-y-4">
              {serviceLines.map((line, index) => (
                <div key={index} >
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <input
                      type="text"
                      value={line.name}
                      onChange={(e) => updateServiceLine(index, 'name', e.target.value)}
                      placeholder="Service name"
                      className="px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                      disabled={isLoading}
                    />
                    <input
                      type="text"
                      value={line.description}
                      onChange={(e) => updateServiceLine(index, 'description', e.target.value)}
                      placeholder="Service description"
                      className="px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                      disabled={isLoading}
                    />
                  </div>
                  {serviceLines.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeServiceLine(index)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 disabled:opacity-50 font-bold text-base sm:text-lg"
                      disabled={isLoading}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addServiceLine}
                className="text-blue-600 hover:text-blue-800 disabled:opacity-50 font-bold text-base sm:text-lg flex items-center"
                disabled={isLoading}
              >
                <span className="mr-2">+</span> Add Service Line
              </button>
            </div>
          </div>

          {/* Emails */}
          <div>
            <label className="block text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 items-center">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">📧</span>
              Email Addresses (Optional)
            </label>
            <div className="space-y-2 sm:space-y-3">
              {emails.map((email, index) => (
                <div key={index} className='flex'>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => updateEmail(index, e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                    disabled={isLoading}
                  />
                  {emails.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEmail(index)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 disabled:opacity-50 font-bold text-base sm:text-lg"
                      disabled={isLoading}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addEmail}
                className="text-purple-600 hover:text-purple-800 disabled:opacity-50 font-bold text-base sm:text-lg flex items-center"
                disabled={isLoading}
              >
                <span className="mr-2">+</span> Add Email
              </button>
            </div>
          </div>

          {/* Points of Contact */}
          <div>
            <label className="block text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 items-center">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">👥</span>
              Points of Contact (Optional)
            </label>
            <div className="space-y-2 sm:space-y-3">
              {poc.map((contact, index) => (
                <div key={index} className='flex'>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => updatePoc(index, e.target.value)}
                    placeholder="Enter contact name or information"
                    className="flex-1 px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                    disabled={isLoading}
                  />
                  {poc.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePoc(index)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 disabled:opacity-50 font-bold text-base sm:text-lg"
                      disabled={isLoading}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addPoc}
                className="text-yellow-600 hover:text-yellow-800 disabled:opacity-50 font-bold text-base sm:text-lg flex items-center"
                disabled={isLoading}
              >
                <span className="mr-2">+</span> Add Contact
              </button>
            </div>
          </div>

        </div>

        {error && (
          <div className="p-4 bg-red-50 border-2 border-red-200">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
} 