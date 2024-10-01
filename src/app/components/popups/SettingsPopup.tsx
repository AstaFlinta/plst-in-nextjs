import React from 'react';
import { X } from 'lucide-react';

export default function SettingsPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Development</h3>
        <div className="flex items-center mb-1">
          <input 
            type="checkbox" 
            id="runOnSave" 
            className="w-4 h-4 text-[#00454E] bg-gray-100 border-gray-300 rounded focus:ring-[#00454E] focus:ring-2" 
            defaultChecked 
          />
          <label htmlFor="runOnSave" className="ml-2">Run on save</label>
        </div>
        <p className="text-sm text-gray-600">Automatically updates the app when the underlying code is updated.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Appearance</h3>
        <div className="flex items-center mb-1">
          <input 
            type="checkbox" 
            id="wideMode" 
            className="w-4 h-4 text-[#00454E] bg-gray-100 border-gray-300 rounded focus:ring-[#00454E] focus:ring-2" 
            defaultChecked 
          />
          <label htmlFor="wideMode" className="ml-2">Wide mode</label>
        </div>
        <p className="text-sm text-gray-600">Turn on to make this app occupy the entire width of the screen</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">Choose app theme, colors and fonts</h3>
        <select className="w-full p-2 border rounded">
          <option>Use system setting</option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </section>
    </div>
  );
}