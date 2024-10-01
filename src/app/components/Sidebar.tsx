'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-100 transition-all duration-300 ${isOpen ? 'w-80' : 'w-20'} relative`}>
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-4 bg-white rounded-full p-1 shadow-md z-10"
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      <div className={`p-4 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
        <h2 className="mb-4 text-lg font-semibold text-[#00454E]">Værktøjer</h2>
        <ul className="space-y-2">
          <li className="group flex items-center space-x-2 rounded-md p-1.5 transition-colors hover:bg-gray-200">
            <span role="img" aria-label="Document" className="text-lg">📄</span>
            {isOpen && (
              <Link href="/" className="text-sm text-black group-hover:text-black">
                Oprettelse af bemærkninger
              </Link>
            )}
          </li>
          <li className="group flex items-center space-x-2 rounded-md p-1.5 transition-colors hover:bg-gray-200">
            <span role="img" aria-label="Magnifying Glass" className="text-lg">🔍</span>
            {isOpen && (
              <Link href="/search" className="text-sm text-black group-hover:text-black">
                Søg dokumenter
              </Link>
            )}
          </li>
        </ul>
        <h2 className="mb-2 mt-4 text-lg font-semibold text-[#00454E]">Andet</h2>
        <ul className="space-y-2">
          <li className="group flex items-center space-x-2 rounded-md p-1.5 transition-colors hover:bg-gray-200">
            <span role="img" aria-label="Question Mark" className="text-lg">❓</span>
            {isOpen && (
              <Link href="/how-to" className="text-sm text-black group-hover:text-black">
                How-to
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}