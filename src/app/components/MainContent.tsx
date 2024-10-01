'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Button } from "../Button.js";
import { Upload, X } from "lucide-react";

const activities = ['🏃', '🚴', '🏊', '🏋️', '👨‍🦽'];

export function MainContent() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [themes, setThemes] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
    setFileUploaded(true);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
    if (newFiles.length === 0) {
      setFileUploaded(false);
    }
  };

  const startProcessing = () => {
    setIsProcessing(true);
    // Add your processing logic here
  };

  useEffect(() => {
    let intervalId;
    if (isProcessing) {
      intervalId = setInterval(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
      }, 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isProcessing]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden relative pt-20">
      {isProcessing && (
        <div className="fixed top-4 right-20 flex items-center space-x-2 bg-white p-2 rounded-md shadow-md z-10">
          <span className="text-2xl">{activities[currentActivity]}</span>
          <span className="font-medium font-sans text-sm">RUNNING...</span>
          <Button
            variant="outline"
            size="sm"
            className="bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600 text-xs px-2 py-1"
            onClick={() => setIsProcessing(false)}
          >
            Stop
          </Button>
        </div>
      )}
      <div className="flex flex-1 flex-col items-center justify-center px-4 mt-32">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 flex items-center justify-center space-x-2 text-xl font-semibold text-[#00454E]">
            <span role="img" aria-label="Document" className="text-2xl">📄</span>
            <span>Automatisk oprettelse af bemærkninger</span>
          </h2>
          <p className="mb-4 text-center text-sm text-black">Upload en pdf, docx eller email.</p>
          <div className="rounded-lg border-2 border-dashed border-[#D4AF37] p-4 mb-4">
            <div className="flex flex-col items-center">
              <Upload className="mb-2 h-8 w-8 text-[#00454E]" />
              <p className="mb-1 text-sm font-medium text-black">Drag and drop files here</p>
              <p className="mb-3 text-xs text-black">Limit 200MB per file • TXT, MD, EML, PDF, DOCX</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                multiple
                accept=".txt,.md,.eml,.pdf,.docx"
              />
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-[#00454E] text-white border-[#00454E] transition-colors hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black"
                onClick={handleBrowseClick}
              >
                Browse files
              </Button>
            </div>
          </div>
          {fileUploaded && (
            <div className="space-y-4">
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span className="text-sm text-gray-700 truncate">{file.name}</span>
                    <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-[#00454E] mb-1">
                  Tilføj nøgleord, som modellen skal bruge til at fokusere sin opsummering.
                </label>
                <input
                  type="text"
                  id="keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00454E]"
                  placeholder="Indtast nøgleord..."
                />
              </div>
              <div>
                <label htmlFor="themes" className="block text-sm font-medium text-[#00454E] mb-1">
                  Tilføj temaer, som modellen skal bruge til at klassificere bemærkningerne. Sørg for at de er adskilt af komma.
                </label>
                <input
                  type="text"
                  id="themes"
                  value={themes}
                  onChange={(e) => setThemes(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00454E]"
                  placeholder="Indtast temaer..."
                />
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-[#00454E] text-white border-[#00454E] transition-colors hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black"
                onClick={startProcessing}
              >
                Start opsummering
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}