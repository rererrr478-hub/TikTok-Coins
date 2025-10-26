import React, { useState } from 'react';
import { TikTokIcon } from './Icons';

const UserInfo: React.FC = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center mb-6">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 shrink-0">
        <TikTokIcon className="w-5 h-5 text-white" fill="white" />
      </div>
      <div className="relative w-full">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-lg pointer-events-none">@</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="bg-transparent w-full pl-5 text-lg font-medium text-gray-800 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default UserInfo;