import React from 'react'

export default function LaunchingSoonOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-black bg-opacity-70 w-full h-full absolute rounded-lg"></div>
      <div className="relative transform -rotate-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-xl">
        <span className="text-lg font-bold tracking-wider">LAUNCHING SOON</span>
        <div className="absolute -top-2 -right-2">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500"></span>
          </span>
        </div>
      </div>
    </div>
  );
};
