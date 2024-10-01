'use client';

import React, { useState } from 'react';
import { MoreVertical, X } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Tooltip from '@radix-ui/react-tooltip';
import SettingsPopup from './popups/SettingsPopup';
import ScreencastPopup from './popups/ScreencastPopup';
import AboutPopup from './popups/AboutPopup';

export default function SettingsMenu({ onRerun }: { onRerun: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleRerun = () => {
    console.log('Rerunning the current operation');
    onRerun();
  };

  const handleSettings = () => {
    setModalContent('Settings');
    setIsModalOpen(true);
  };

  const handlePrint = () => {
    console.log('Printing the current view');
    // Add your print logic here
  };

  const handleScreencast = () => {
    setModalContent('Record a screencast');
    setIsModalOpen(true);
  };

  const handleAbout = () => {
    setModalContent('About');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 'Settings':
        return <SettingsPopup onClose={handleCloseModal} />;
      case 'Record a screencast':
        return <ScreencastPopup onClose={handleCloseModal} />;
      case 'About':
        return <AboutPopup onClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <Tooltip.Provider>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="fixed top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 z-20">
            <MoreVertical className="h-6 w-6 text-gray-600" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content 
            className="min-w-[200px] bg-white rounded-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_15px_30px_-10px_rgba(0,0,0,0.3)] p-1 z-30"
          >
            <TooltipWrapper content="Re-run the current operation">
              <DropdownMenu.Item className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 outline-none" onSelect={handleRerun}>
                Rerun
              </DropdownMenu.Item>
            </TooltipWrapper>
            <TooltipWrapper content="Adjust application settings">
              <DropdownMenu.Item className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 outline-none" onSelect={handleSettings}>
                Settings
              </DropdownMenu.Item>
            </TooltipWrapper>
            <DropdownMenu.Separator className="h-[1px] bg-gray-200 m-1" />
            <TooltipWrapper content="Print the current view">
              <DropdownMenu.Item className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 outline-none" onSelect={handlePrint}>
                Print
              </DropdownMenu.Item>
            </TooltipWrapper>
            <TooltipWrapper content="Start recording a screencast">
              <DropdownMenu.Item className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 outline-none" onSelect={handleScreencast}>
                Record a screencast
              </DropdownMenu.Item>
            </TooltipWrapper>
            <DropdownMenu.Separator className="h-[1px] bg-gray-200 m-1" />
            <TooltipWrapper content="View information about the application">
              <DropdownMenu.Item className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 outline-none" onSelect={handleAbout}>
                About
              </DropdownMenu.Item>
            </TooltipWrapper>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl">
            {renderModalContent()}
          </div>
        </div>
      )}
    </Tooltip.Provider>
  );
}

function TooltipWrapper({ children, content }: { children: React.ReactNode; content: string }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-gray-800 text-white px-2 py-1 rounded text-xs"
          sideOffset={5}
        >
          {content}
          <Tooltip.Arrow className="fill-gray-800" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}