import React from 'react';
import type { CoinPackage } from '../types';
import { LockIcon, PaymentIcons } from './Icons';

interface PaymentFooterProps {
  selectedPackage: CoinPackage;
  onBuyClick: () => void;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({ selectedPackage, onBuyClick }) => {
  const buttonText = selectedPackage.isCustom ? 'Enter Custom Amount' : `Buy for $${selectedPackage.price.toFixed(2)}`;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-600">Special offer</p>
            <a href="#" className="text-sm font-semibold text-red-500 hover:text-red-600">
                Unlock 5% cash back &gt;
            </a>
        </div>
        <div className="flex items-center justify-between mb-4">
          <PaymentIcons />
        </div>
        <button 
          onClick={onBuyClick}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center text-lg hover:bg-red-600 transition-colors disabled:opacity-50"
        >
          {!selectedPackage.isCustom && <LockIcon className="w-5 h-5 mr-2" />}
          {buttonText}
        </button>
      </div>
    </footer>
  );
};

export default PaymentFooter;