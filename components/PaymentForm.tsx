import React, { useState, useEffect } from 'react';
import type { CoinPackage, CardDetails } from '../types';
import { ArrowLeftIcon, LockIcon, CoinIcon, SpinnerIcon } from './Icons';

interface PaymentFormProps {
  selectedPackage: CoinPackage;
  onBack: () => void;
  onPaymentSuccess: (cardDetails: CardDetails) => void;
  savedCard: CardDetails | null;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ selectedPackage, onBack, onPaymentSuccess, savedCard }) => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '', // This will now store the raw, unmasked number
    cardName: '',
    expiry: '',
  });
  const [displayCardNumber, setDisplayCardNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [saveCard, setSaveCard] = useState(true);

  const maskAndFormatCardNumber = (digits: string): string => {
    let masked = '';
    for (let i = 0; i < digits.length; i++) {
        // Mask digits from index 4 up to 12
        if (i >= 4 && i < 12) {
            masked += '*';
        } else {
            masked += digits[i];
        }
    }
    // Add spaces for formatting
    return masked.replace(/(.{4})/g, '$1 ').trim();
  };


  useEffect(() => {
    if (savedCard) {
      // Sanitize previously saved formatted number to raw digits
      const rawCardNumber = savedCard.cardNumber.replace(/\s/g, '');
      setCardDetails({ ...savedCard, cardNumber: rawCardNumber });
      setDisplayCardNumber(maskAndFormatCardNumber(rawCardNumber));
    }
  }, [savedCard]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const rawValue = value.replace(/[^\d]/g, '').slice(0, 16);
      setCardDetails(prev => ({ ...prev, cardNumber: rawValue }));
      setDisplayCardNumber(maskAndFormatCardNumber(rawValue));
      return;
    }

    let formattedValue = value;
    if (name === 'expiry') {
      formattedValue = value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').trim().slice(0, 5);
    }
    setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
  };

  const isFormInvalid = () => {
    return !cardDetails.cardNumber || cardDetails.cardNumber.length < 16 || !cardDetails.cardName || !cardDetails.expiry || cardDetails.expiry.length < 5;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormInvalid()) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      if (saveCard) {
        onPaymentSuccess(cardDetails);
      }
      setTimeout(() => {
        onBack();
      }, 2000);
    }, 15000);
  };

  if (paymentSuccess) {
    return (
      <div className="p-4 h-full flex flex-col items-center justify-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600">You will be redirected to the main page.</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="max-w-md mx-auto h-14 flex items-center justify-center relative">
          <button onClick={onBack} className="absolute left-4 p-2">
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Payment details</h1>
        </div>
      </header>

      <main className="flex-grow p-4 overflow-y-auto">
        <div className="bg-gray-100 rounded-lg p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <CoinIcon className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="font-bold text-gray-800">{selectedPackage.coins} Coins</p>
              <p className="text-sm text-gray-500">One-time purchase</p>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-800">${selectedPackage.price.toFixed(2)}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
              <input type="text" id="cardName" name="cardName" value={cardDetails.cardName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100" required disabled={isProcessing} />
            </div>
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
              <input type="tel" id="cardNumber" name="cardNumber" value={displayCardNumber} onChange={handleChange} placeholder="0000 **** **** 0000" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100" required disabled={isProcessing} maxLength={19} />
            </div>
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
              <input type="text" id="expiry" name="expiry" value={cardDetails.expiry} onChange={handleChange} placeholder="MM/YY" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100" required disabled={isProcessing} />
            </div>
          </div>

          <div className="flex items-center my-6">
            <input type="checkbox" id="saveCard" checked={saveCard} onChange={(e) => setSaveCard(e.target.checked)} className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500" disabled={isProcessing} />
            <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-900">Save this card for future payments</label>
          </div>
        </form>
      </main>

      <footer className="bg-white border-t border-gray-200 p-4">
        <button 
          onClick={handleSubmit}
          disabled={isProcessing || isFormInvalid()}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center text-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <SpinnerIcon className="w-5 h-5 mr-3" />
              Processing...
            </>
          ) : (
            <>
              <LockIcon className="w-5 h-5 mr-2" />
              {`Pay $${selectedPackage.price.toFixed(2)}`}
            </>
          )}
        </button>
        <p className="text-xs text-gray-400 text-center mt-2">
          Payments are secure and encrypted.
        </p>
      </footer>
    </div>
  );
};

export default PaymentForm;