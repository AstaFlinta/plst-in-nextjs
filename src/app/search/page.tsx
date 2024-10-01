import React from 'react';
import { Sidebar } from '../components/Sidebar';
import SettingsMenu from '../components/SettingsMenu';

export default function SearchPage() {
  return (
    <div className="flex h-screen bg-white font-sans">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto relative">
        <SettingsMenu />
        <h1 className="text-2xl font-semibold mb-4">Søg dokumenter</h1>
        <p>This is the search page. Add your search functionality here.</p>
      </main>
    </div>
  );
}