import React, { useState, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, User2, Wrench, Users, AlertTriangle } from 'lucide-react';
import ChecklistPage from './components/ChecklistPage';
import { checklistData } from './data/checklistData';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchMoveX = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchMoveX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchMoveX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchMoveX.current === null) return;

    const diff = touchStartX.current - touchMoveX.current;
    const threshold = 50; // minimum distance for swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentPage < checklistData.length - 1) {
        // Swipe left
        setCurrentPage(currentPage + 1);
      } else if (diff < 0 && currentPage > 0) {
        // Swipe right
        setCurrentPage(currentPage - 1);
      }
    }

    touchStartX.current = null;
    touchMoveX.current = null;
  };

  const nextPage = () => {
    if (currentPage < checklistData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageIcons = [
    { icon: User2, label: 'Patient' },
    { icon: Wrench, label: 'Equipment' },
    { icon: Users, label: 'Team' },
    { icon: AlertTriangle, label: 'Difficulty' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <svg 
                viewBox="0 0 768 768" 
                className="h-8 w-8 text-blue-800"
                fill="currentColor"
              >
                <path d="M118.95 251.44c1.54 0 2.99-.32 4.32-.88 3.98-1.68 6.76-5.6 6.76-10.18 0-2.79.3-5.52.42-8.28 4.16-38.71 37.02-68.97 76.82-68.97h276.05c6.1 0 11.06 4.96 11.06 11.05v55.18h-.05c-6.1 0-11.04 4.95-11.04 11.04v66.16c0 .03-.01.04-.01.05v342.2c-6.1 0-11.04 4.94-11.04 11.04v66.21c0 6.11 4.93 11.04 11.04 11.04h165.62c6.1 0 11.04-4.93 11.04-11.04v-66.21c0-6.1-4.93-11.04-11.04-11.04V306.61c0-.01-.01-.03-.01-.05v-66.16c0-6.07-4.9-11-10.98-11.03v-44.17s0 0 0-.01c0-.01 0 0 0-.01V52.71h.01c6.11 0 11.04-4.94 11.04-11.04 0-6.09-4.93-11.04-11.04-11.04H317.71c-112.1 0-203.69 88.47-209.22 199.21-.37 3.47-.58 6.99-.58 10.56 0 6.1 4.94 11.04 11.04 11.04zm397.51-55.2h99.37v33.1h-99.37v-33.1zm-11.08 55.2h121.44v44.13H505.38v-44.13zm132.49 463.59H494.33v-44.13h143.54v44.13zm-132.5-66.21V317.65h121.46v331.17zm-187.66-596.1h298.12v121.45h-99.37c-.01-18.26-14.87-33.12-33.13-33.12H207.27c-22.26 0-42.75 7.44-59.32 19.84 30-63.8 94.71-108.17 169.76-108.17z"/>
              </svg>
              <h1 className="text-2xl font-bold text-blue-800">
                RSI Checklist
              </h1>
            </div>
          </div>
          <p className="text-gray-600 mt-1 text-center">To be done with whole team present.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevPage}
              className={`p-2 rounded-full ${
                currentPage === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
              disabled={currentPage === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-4">
              {pageIcons.map((PageIcon, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                    idx === currentPage ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  disabled={idx === currentPage}
                >
                  <PageIcon.icon
                    size={20}
                    className={`${
                      idx === currentPage 
                        ? 'text-blue-600' 
                        : 'text-gray-300'
                    }`}
                  />
                  <span className={`text-xs mt-1 ${
                    idx === currentPage 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-400'
                  }`}>
                    {PageIcon.label}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={nextPage}
              className={`p-2 rounded-full ${
                currentPage === checklistData.length - 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
              disabled={currentPage === checklistData.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div 
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {checklistData.map((page, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0"
                >
                  <ChecklistPage title={page.title} items={page.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Reference */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-gray-500 text-center">
            Based on: Higgs A, McGrath BA, Goddard C, Rangasami J, Suntharalingam G, Gale R, et al. Guidelines for the management of tracheal intubation in critically ill adults. <i>British Journal of Anaesthesia</i>. 2018;120(2):323-352. DOI: <a href="https://www.bjanaesthesia.org/article/S0007-0912(17)54060-X/fulltext#fig2" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">10.1016/j.bja.2017.10.021</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;