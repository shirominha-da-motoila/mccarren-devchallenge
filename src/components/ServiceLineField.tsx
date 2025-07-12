'use client';

import { ServiceLine } from '@/types/company';

interface ServiceLineFieldProps {
  serviceLines: ServiceLine[];
  onServiceLinesChange: (serviceLines: ServiceLine[]) => void;
  disabled?: boolean;
}

export default function ServiceLineField({ serviceLines, onServiceLinesChange, disabled = false }: ServiceLineFieldProps) {
  const addServiceLine = () => {
    onServiceLinesChange([...serviceLines, { name: '', description: '' }]);
  };

  const removeServiceLine = (index: number) => {
    if (serviceLines.length > 1) {
      onServiceLinesChange(serviceLines.filter((_, i) => i !== index));
    }
  };

  const updateServiceLine = (index: number, field: 'name' | 'description', value: string) => {
    const newServiceLines = [...serviceLines];
    newServiceLines[index] = { ...newServiceLines[index], [field]: value };
    onServiceLinesChange(newServiceLines);
  };

  return (
    <div>
      <label className="block text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 items-center">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">🛠️</span>
        Service Lines (Optional - leave empty to auto-generate)
      </label>
      <div className="space-y-3 sm:space-y-4">
        {serviceLines.map((line, index) => (
          <div key={index}>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <input
                type="text"
                value={line.name}
                onChange={(e) => updateServiceLine(index, 'name', e.target.value)}
                placeholder="Service name"
                className="px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                disabled={disabled}
              />
              <input
                type="text"
                value={line.description}
                onChange={(e) => updateServiceLine(index, 'description', e.target.value)}
                placeholder="Service description"
                className="px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white font-medium text-sm sm:text-base"
                disabled={disabled}
              />
            </div>
            {serviceLines.length > 1 && (
              <button
                type="button"
                onClick={() => removeServiceLine(index)}
                className="px-3 py-2 text-red-600 hover:text-red-800 disabled:opacity-50 font-bold text-base sm:text-lg"
                disabled={disabled}
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
          disabled={disabled}
        >
          <span className="mr-2">+</span> Add Service Line
        </button>
      </div>
    </div>
  );
} 