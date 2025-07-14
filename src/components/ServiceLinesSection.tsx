'use client';

import { useState } from 'react';
import { ServiceLine } from '@/types/company';
import EditableServiceLine from './EditableServiceLine';

interface ServiceLinesSectionProps {
  serviceLines: ServiceLine[];
  isEditing: boolean;
  onServiceLinesChange: (serviceLines: ServiceLine[]) => void;
}

export default function ServiceLinesSection({
  serviceLines,
  isEditing,
  onServiceLinesChange
}: ServiceLinesSectionProps) {
  const [newServiceLine, setNewServiceLine] = useState<ServiceLine>({ name: '', description: '' });

  const handleServiceLineChange = (index: number, updatedServiceLine: ServiceLine) => {
    const updatedServiceLines = [...serviceLines];
    updatedServiceLines[index] = updatedServiceLine;
    onServiceLinesChange(updatedServiceLines);
  };

  const handleRemoveServiceLine = (index: number) => {
    const updatedServiceLines = serviceLines.filter((_, i) => i !== index);
    onServiceLinesChange(updatedServiceLines);
  };

  const handleAddServiceLine = () => {
    if (newServiceLine.name.trim()) {
      onServiceLinesChange([...serviceLines, { ...newServiceLine }]);
      setNewServiceLine({ name: '', description: '' });
    }
  };

  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🛠️</span>
        Service Lines
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {serviceLines && Array.isArray(serviceLines) && serviceLines.map((serviceLine, index) => (
          <EditableServiceLine
            key={index}
            serviceLine={serviceLine}
            index={index}
            isEditing={isEditing}
            onServiceLineChange={handleServiceLineChange}
            onRemove={handleRemoveServiceLine}
          />
        ))}
        {(!serviceLines || !Array.isArray(serviceLines) || serviceLines.length === 0) && !isEditing && (
          <div className="p-3 sm:p-4 bg-gray-50 border-gray-200">
            <p className="text-gray-500 text-xs sm:text-sm italic">No service lines available</p>
          </div>
        )}
        {isEditing && (
          <div className="p-3 sm:p-4 bg-green-50 border-green-200 border-2 border-dashed">
            <div className="space-y-2">
              <input
                type="text"
                value={newServiceLine.name}
                onChange={(e) => setNewServiceLine(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Service line name"
                className="w-full font-bold text-gray-900 text-sm sm:text-base bg-transparent border-b border-green-500 focus:outline-none focus:border-green-700"
              />
              <textarea
                value={newServiceLine.description}
                onChange={(e) => setNewServiceLine(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Service line description"
                className="w-full text-gray-700 text-xs sm:text-sm bg-transparent border-b border-green-500 focus:outline-none focus:border-green-700 resize-none"
                rows={2}
              />
              <button
                onClick={handleAddServiceLine}
                className="px-3 py-1 bg-green-600 text-white text-xs hover:bg-green-700 transition-colors"
              >
                Add Service Line
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 