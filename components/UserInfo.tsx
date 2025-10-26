import React, { useState } from 'react';
import { TikTokIcon } from './Icons';

const UserInfo: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      const searchUrl = `https://www.tiktok.com/@${username.trim()}`;
      window.open(searchUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center mb-6">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 shrink-0">
        <TikTokIcon className="w-5 h-5 text-white" fill="white" />
      </div>
      <form onSubmit={handleSearch} className="flex-grow flex items-center space-x-2">
        <div className="relative flex-grow">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-lg pointer-events-none">@</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="bg-transparent w-full pl-5 text-lg font-medium text-gray-800 focus:outline-none"
            aria-label="TikTok Username"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm shrink-0"
          disabled={!username.trim()}
          aria-label="Search user on TikTok"
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default UserInfo;