
import React from 'react';
import { InviteIcon } from './Icons';

const InviteBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-3 flex items-center cursor-pointer">
      <InviteIcon className="mr-4" />
      <div>
        <h3 className="font-semibold text-gray-800">Invite & Get Rewards</h3>
        <p className="text-sm text-gray-500">Check out this new feature!</p>
      </div>
      <span className="ml-auto text-gray-400">&gt;</span>
    </div>
  );
};

export default InviteBanner;
