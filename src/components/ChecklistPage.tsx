import React, { useState, useEffect } from 'react';
import ChecklistItem from './ChecklistItem';
import RocuroniumTimer from './RocuroniumTimer';
import { ChecklistPageProps } from '../types';
import { Clock } from 'lucide-react';

const ChecklistPage: React.FC<ChecklistPageProps> = ({ title, items }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    if (title === "Prepare the team") {
      const updateTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString());
      };
      
      updateTime(); // Initial update
      const interval = setInterval(updateTime, 1000);
      
      return () => clearInterval(interval);
    }
  }, [title]);

  const renderItem = (item: string | ChecklistItem, index: number) => {
    if (title === "Prepare the team" && item === "Who is noting the time?") {
      return (
        <div key={index} className="flex items-center justify-between">
          <ChecklistItem item={item} />
          <div className="flex items-center text-gray-600 ml-4">
            <Clock size={16} className="mr-2" />
            <span className="font-mono">{currentTime}</span>
          </div>
        </div>
      );
    }
    return <ChecklistItem key={index} item={item} />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto">
      <div className="card-header mb-6">
        <h2 className="text-xl font-bold text-blue-800">{title}</h2>
      </div>
      <div className="space-y-4 overflow-y-auto">
        {items.map((item, index) => renderItem(item, index))}
      </div>
      {title === "Prepare for difficulty" && <RocuroniumTimer />}
    </div>
  );
};

export default ChecklistPage;