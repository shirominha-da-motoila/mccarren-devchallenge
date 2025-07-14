'use client';

import { useState } from 'react';
import EditableKeyword from './EditableKeyword';

interface KeywordsSectionProps {
  tier1Keywords: string[];
  tier2Keywords: string[];
  isEditing: boolean;
  onTier1KeywordsChange: (keywords: string[]) => void;
  onTier2KeywordsChange: (keywords: string[]) => void;
}

export default function KeywordsSection({
  tier1Keywords,
  tier2Keywords,
  isEditing,
  onTier1KeywordsChange,
  onTier2KeywordsChange
}: KeywordsSectionProps) {
  const [newTier1Keyword, setNewTier1Keyword] = useState('');
  const [newTier2Keyword, setNewTier2Keyword] = useState('');

  const handleAddKeyword = (type: 'tier1' | 'tier2', keyword: string) => {
    if (keyword.trim()) {
      if (type === 'tier1') {
        onTier1KeywordsChange([...tier1Keywords, keyword.trim()]);
        setNewTier1Keyword('');
      } else {
        onTier2KeywordsChange([...tier2Keywords, keyword.trim()]);
        setNewTier2Keyword('');
      }
    }
  };

  const handleRemoveKeyword = (type: 'tier1' | 'tier2', index: number) => {
    if (type === 'tier1') {
      onTier1KeywordsChange(tier1Keywords.filter((_, i) => i !== index));
    } else {
      onTier2KeywordsChange(tier2Keywords.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🏷️</span>
        Keywords
      </h3>
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Tier 1 Keywords</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {tier1Keywords && Array.isArray(tier1Keywords) && tier1Keywords.map((keyword, index) => (
              <EditableKeyword
                key={index}
                keyword={keyword}
                index={index}
                isEditing={isEditing}
                color="purple"
                onRemove={(index) => handleRemoveKeyword('tier1', index)}
              />
            ))}
            {(!tier1Keywords || !Array.isArray(tier1Keywords) || tier1Keywords.length === 0) && !isEditing && (
              <span className="text-gray-500 text-xs sm:text-sm italic">No tier 1 keywords available</span>
            )}
          </div>
          {isEditing && (
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={newTier1Keyword}
                onChange={(e) => setNewTier1Keyword(e.target.value)}
                placeholder="Add tier 1 keyword"
                className="flex-1 text-xs sm:text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => handleAddKeyword('tier1', newTier1Keyword)}
                className="px-2 py-1 bg-purple-600 text-white text-xs hover:bg-purple-700 transition-colors"
              >
                Add
              </button>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Tier 2 Keywords</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {tier2Keywords && Array.isArray(tier2Keywords) && tier2Keywords.map((keyword, index) => (
              <EditableKeyword
                key={index}
                keyword={keyword}
                index={index}
                isEditing={isEditing}
                color="blue"
                onRemove={(index) => handleRemoveKeyword('tier2', index)}
              />
            ))}
            {(!tier2Keywords || !Array.isArray(tier2Keywords) || tier2Keywords.length === 0) && !isEditing && (
              <span className="text-gray-500 text-xs sm:text-sm italic">No tier 2 keywords available</span>
            )}
          </div>
          {isEditing && (
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={newTier2Keyword}
                onChange={(e) => setNewTier2Keyword(e.target.value)}
                placeholder="Add tier 2 keyword"
                className="flex-1 text-xs sm:text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => handleAddKeyword('tier2', newTier2Keyword)}
                className="px-2 py-1 bg-blue-500 text-white text-xs hover:bg-blue-600 transition-colors"
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 