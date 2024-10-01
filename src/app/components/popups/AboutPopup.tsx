import React from 'react';
import { X } from 'lucide-react';

export default function AboutPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Made with</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      <a href="https://streamlit.io" className="text-blue-600 hover:underline mb-2 block">
        https://streamlit.io
      </a>

      <p className="text-sm text-gray-600">
        Copyright 2024 Snowflake Inc. All rights reserved.
      </p>
    </div>
  );
}