'use client';

interface EditableKeywordProps {
  keyword: string;
  index: number;
  isEditing: boolean;
  color: 'purple' | 'blue';
  onRemove: (index: number) => void;
}

export default function EditableKeyword({
  keyword,
  index,
  isEditing,
  color,
  onRemove
}: EditableKeywordProps) {
  const bgColor = color === 'purple' ? 'bg-purple-100' : 'bg-blue-100';

  return (
    <span className={`px-2 sm:px-3 py-1 ${bgColor} text-black text-xs sm:text-sm font-medium hover:brightness-105 hover:scale-105 transition-transform duration-200 relative group`}>
      {keyword}
      {isEditing && (
        <button
          onClick={() => onRemove(index)}
          className="absolute -top-1 -right-1 bg-red-600 text-white w-4 h-4 text-xs hover:bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ×
        </button>
      )}
    </span>
  );
} 