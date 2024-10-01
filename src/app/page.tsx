'use client';

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import SettingsMenu from './components/SettingsMenu';

export default function HomePage() {
  return (
    <div className="flex h-screen bg-white font-sans">
      <Sidebar />
      <main className="flex-1 overflow-auto relative">
        <MainContent />
        <SettingsMenu />
      </main>
    </div>
  );
}