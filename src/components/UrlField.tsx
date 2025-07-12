'use client';

import { useState } from 'react';

interface UrlFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export default function UrlField({ value, onChange, disabled = false, error }: UrlFieldProps) {
  return (
    <div className="flex-1 w-full">
      <label htmlFor="url" className="block text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🔗</span>
        Company Website URL *
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          id="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter company website URL (e.g., https://example.com)"
          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
          disabled={disabled}
        />
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
} 