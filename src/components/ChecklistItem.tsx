import React, { useState } from 'react';
import { ChecklistItemProps } from '../types';

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  if (typeof item === 'string') {
    return (
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          id={`item-${item}`}
          className="mt-1 h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <label
          htmlFor={`item-${item}`}
          className={`flex-grow cursor-pointer ${isChecked ? 'line-through text-gray-500' : 'text-gray-900'}`}
        >
          {item}
        </label>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          id={`item-${item.text}`}
          className="mt-1 h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <label
          htmlFor={`item-${item.text}`}
          className={`flex-grow cursor-pointer ${isChecked ? 'line-through text-gray-500' : 'text-gray-900'}`}
        >
          {item.text}
        </label>
      </div>
      {item.subitems && (
        <div className="ml-8 space-y-3">
          {item.subitems.map((subitem, index) => (
            <ChecklistItem key={index} item={subitem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChecklistItem;