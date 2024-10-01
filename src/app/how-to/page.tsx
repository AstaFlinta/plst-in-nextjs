'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sidebar } from '../components/Sidebar';
import SettingsMenu from '../components/SettingsMenu';
import { howToContent } from './HowToContent';

export default function HowToPage() {
  const [activeTab, setActiveTab] = useState<'oprettelse' | 'søg'>('oprettelse');

  return (
    <div className="flex h-screen bg-white font-sans">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto relative">
        <SettingsMenu />
        <h1 className="text-2xl font-semibold mb-4">{howToContent.title}</h1>
        
        <div className="flex mb-4">
          {(Object.keys(howToContent.tabs) as Array<'oprettelse' | 'søg'>).map((key) => (
            <button
              key={key}
              className={`mr-4 pb-2 flex items-center ${activeTab === key ? 'border-b-2 border-red-500 text-red-500' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="mr-2">{howToContent.tabs[key].emoji}</span> {howToContent.tabs[key].label}
            </button>
          ))}
        </div>

        <div>
          <h2 className="text-xl mb-4">{howToContent.tabs[activeTab].title}</h2>
          <ReactMarkdown className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
            {howToContent.tabs[activeTab].content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}