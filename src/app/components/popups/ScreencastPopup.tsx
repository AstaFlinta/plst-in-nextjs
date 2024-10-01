import React from 'react';
import { X } from 'lucide-react';

export default function ScreencastPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Record a screencast</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      <p className="mb-4 text-gray-600">
        This will record a video with the contents of your screen, so you can
        easily share what you're seeing with others.
      </p>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="recordAudio" className="form-checkbox h-5 w-5 text-[#00454E] rounded border-gray-300 focus:ring-[#00454E]" />
        <label htmlFor="recordAudio" className="ml-2">Also record audio</label>
      </div>

      <p className="mb-4">
        Press <span className="bg-gray-200 px-2 py-1 rounded">Esc</span> any time to stop recording.
      </p>

      <div className="flex justify-end">
        <button 
          className="bg-[#00454E] text-white border border-[#00454E] rounded px-4 py-2 font-bold transition-colors hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black"
        >
          Start recording!
        </button>
      </div>
    </div>
  );
}