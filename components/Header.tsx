import React from 'react';
import { TikTokIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-10 border-b border-gray-200">
      <div className="max-w-md mx-auto h-14 flex items-center justify-center relative">
        <TikTokIcon className="absolute left-4 w-8 h-8 text-black" />
        <h1 className="text-lg font-semibold text-gray-800">Get Coins</h1>
      </div>
    </header>
  );
};

export default Header;