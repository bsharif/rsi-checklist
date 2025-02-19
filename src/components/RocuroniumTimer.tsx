import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

const RocuroniumTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime(time => time + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    if (!isRunning) {
      // When starting, set the current time
      setStartTime(new Date().toLocaleTimeString());
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setStartTime(null);
  };

  const formatTime = (centiseconds: number) => {
    const mins = Math.floor(centiseconds / 6000);
    const secs = Math.floor((centiseconds % 6000) / 100);
    const cs = centiseconds % 100;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${cs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">Rocuronium Timer</h3>
      <div className="flex items-center justify-between">
        <div className="text-3xl font-mono font-bold text-blue-900 tabular-nums">
          {formatTime(time)}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleStartStop}
            className={`p-2 rounded-full ${
              isRunning 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-green-100 text-green-600 hover:bg-green-200'
            }`}
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>
      {startTime && (
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>Started at {startTime}</span>
        </div>
      )}
    </div>
  );
};

export default RocuroniumTimer;