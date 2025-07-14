'use client';

interface ProfileDescriptionProps {
  description: string;
  isEditing: boolean;
  onDescriptionChange: (description: string) => void;
}

export default function ProfileDescription({
  description,
  isEditing,
  onDescriptionChange
}: ProfileDescriptionProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
        <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">📝</span>
        Description
      </h3>
      {isEditing ? (
        <textarea
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className="w-full text-sm sm:text-base text-gray-700 leading-relaxed bg-gray-50 p-3 sm:p-4 border-2 border-blue-500 focus:outline-none focus:border-blue-700 resize-y min-h-[100px]"
          rows={4}
        />
      ) : (
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-gray-50 p-3 sm:p-4">
          {description}
        </p>
      )}
    </div>
  );
} 