'use client';

import { ServiceLine } from '@/types/company';

interface EditableServiceLineProps {
  serviceLine: ServiceLine;
  index: number;
  isEditing: boolean;
  onServiceLineChange: (index: number, serviceLine: ServiceLine) => void;
  onRemove: (index: number) => void;
}

export default function EditableServiceLine({
  serviceLine,
  index,
  isEditing,
  onServiceLineChange,
  onRemove
}: EditableServiceLineProps) {
  return (
    <div className="p-3 sm:p-4 bg-blue-50 border-blue-200 transform hover:brightness-95 transition-transform duration-200 relative">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={serviceLine.name}
            onChange={(e) => onServiceLineChange(index, { ...serviceLine, name: e.target.value })}
            className="w-full font-bold text-gray-900 text-sm sm:text-base bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
          />
          <textarea
            value={serviceLine.description || ''}
            onChange={(e) => onServiceLineChange(index, { ...serviceLine, description: e.target.value })}
            className="w-full text-gray-700 text-xs sm:text-sm bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700 resize-none"
            rows={2}
          />
          <button
            onClick={() => onRemove(index)}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-sm"
          >
            ×
          </button>
        </div>
      ) : (
        <>
          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{serviceLine.name}</h4>
          <p className="text-gray-700 text-xs sm:text-sm">{serviceLine.description}</p>
        </>
      )}
    </div>
  );
} 