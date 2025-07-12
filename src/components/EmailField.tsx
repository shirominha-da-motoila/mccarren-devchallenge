'use client';

interface EmailFieldProps {
  emails: string[];
  onEmailsChange: (emails: string[]) => void;
  disabled?: boolean;
}

export default function EmailField({ emails, onEmailsChange, disabled = false }: EmailFieldProps) {
  const addEmail = () => {
    onEmailsChange([...emails, '']);
  };

  const removeEmail = (index: number) => {
    if (emails.length > 1) {
      onEmailsChange(emails.filter((_, i) => i !== index));
    }
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    onEmailsChange(newEmails);
  };

  return (
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
              disabled={disabled}
            />
            {emails.length > 1 && (
              <button
                type="button"
                onClick={() => removeEmail(index)}
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
          onClick={addEmail}
          className="text-blue-600 hover:text-blue-800 disabled:opacity-50 font-bold text-base sm:text-lg flex items-center"
          disabled={disabled}
        >
          <span className="mr-2">+</span> Add Email
        </button>
      </div>
    </div>
  );
} 