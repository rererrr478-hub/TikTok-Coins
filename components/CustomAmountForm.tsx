import React, { useState, useMemo } from 'react';
import { ArrowLeftIcon, CoinIcon } from './Icons';

interface CustomAmountFormProps {
  onBack: () => void;
  onContinue: (amount: number) => void;
}

const COIN_PRICE_RATE = 0.0104;
const QUICK_AMOUNTS = [100, 500, 1000, 5000];
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 100000;


const CustomAmountForm: React.FC<CustomAmountFormProps> = ({ onBack, onContinue }) => {
  const [amount, setAmount] = useState<string>('');
  
  const numericAmount = parseInt(amount, 10);
  
  const calculatedPrice = useMemo(() => {
    if (!isNaN(numericAmount) && numericAmount > 0) {
      return (numericAmount * COIN_PRICE_RATE).toFixed(2);
    }
    return '0.00';
  }, [numericAmount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    const numValue = parseInt(value, 10);
    if (value === '' || (numValue >= MIN_AMOUNT && numValue <= MAX_AMOUNT)) {
      setAmount(value);
    } else if (numValue > MAX_AMOUNT) {
      setAmount(String(MAX_AMOUNT));
    }
  };

  const handleQuickAmountClick = (quickAmount: number) => {
    setAmount(String(quickAmount));
  };

  const handleContinue = () => {
    if (!isNaN(numericAmount) && numericAmount >= MIN_AMOUNT) {
      onContinue(numericAmount);
    }
  };

  const isContinueDisabled = isNaN(numericAmount) || numericAmount < MIN_AMOUNT;

  return (
    <div className="h-screen flex flex-col">
      <header className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="max-w-md mx-auto h-14 flex items-center justify-center relative">
          <button onClick={onBack} className="absolute left-4 p-2">
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Custom Amount</h1>
        </div>
      </header>
      
      <main className="flex-grow p-4 overflow-y-auto flex flex-col items-center">
        <div className="w-full max-w-sm">
            <div className="text-center my-8">
                <p className="text-gray-600 mb-2">Enter number of coins</p>
                <div className="relative">
                    <CoinIcon className="w-8 h-8 text-yellow-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                        type="tel"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="e.g. 1000"
                        className="w-full text-center text-4xl font-bold p-4 pl-12 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-colors"
                        autoFocus
                    />
                </div>
                <p className="text-gray-800 font-semibold text-lg mt-4">
                    Price: ${calculatedPrice}
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 my-6">
                {QUICK_AMOUNTS.map(quickAmount => (
                    <button
                        key={quickAmount}
                        onClick={() => handleQuickAmountClick(quickAmount)}
                        className="bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        {quickAmount.toLocaleString()}
                    </button>
                ))}
            </div>

             <div className="text-xs text-gray-500 text-center">
                Min: {MIN_AMOUNT.toLocaleString()} coins, Max: {MAX_AMOUNT.toLocaleString()} coins.
            </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleContinue}
          disabled={isContinueDisabled}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default CustomAmountForm;