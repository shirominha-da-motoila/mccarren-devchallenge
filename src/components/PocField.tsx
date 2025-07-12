'use client';

interface PocFieldProps {
  poc: string[];
  onPocChange: (poc: string[]) => void;
  disabled?: boolean;
}

export default function PocField({ poc, onPocChange, disabled = false }: PocFieldProps) {
  const addPoc = () => {
    onPocChange([...poc, '']);
  };

  const removePoc = (index: number) => {
    if (poc.length > 1) {
      onPocChange(poc.filter((_, i) => i !== index));
    }
  };

  const updatePoc = (index: number, value: string) => {
    const newPoc = [...poc];
    newPoc[index] = value;
    onPocChange(newPoc);
  };

  return (
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
              disabled={disabled}
            />
            {poc.length > 1 && (
              <button
                type="button"
                onClick={() => removePoc(index)}
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
          onClick={addPoc}
          className="text-blue-600 hover:text-blue-800 disabled:opacity-50 font-bold text-base sm:text-lg flex items-center"
          disabled={disabled}
        >
          <span className="mr-2">+</span> Add Contact
        </button>
      </div>
    </div>
  );
} 