import React, { useState } from 'react';
import type { CoinPackage, CardDetails } from './types';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import RechargeSection from './components/RechargeSection';
import InviteBanner from './components/InviteBanner';
import AddToHomeScreenBanner from './components/AddToHomeScreenBanner';
import PaymentFooter from './components/PaymentFooter';
import PaymentForm from './components/PaymentForm';
import CustomAmountForm from './components/CustomAmountForm';

const COIN_PACKAGES: CoinPackage[] = [
  { id: 1, coins: 30, price: 0.31 },
  { id: 2, coins: 350, price: 3.65 },
  { id: 3, coins: 700, price: 7.25 },
  { id: 4, coins: 1400, price: 14.49 },
  { id: 5, coins: 3500, price: 36.20 },
  { id: 6, coins: 'Custom', price: 0, isCustom: true },
];

const App: React.FC = () => {
  const [view, setView] = useState<'main' | 'payment' | 'customAmount'>('main');
  const [selectedPackageId, setSelectedPackageId] = useState<number>(COIN_PACKAGES[0].id);
  const [savedCard, setSavedCard] = useState<CardDetails | null>(null);
  const [customPackage, setCustomPackage] = useState<CoinPackage | null>(null);

  const selectedPackageFromList = COIN_PACKAGES.find(p => p.id === selectedPackageId) || COIN_PACKAGES[0];
  const packageForPayment = customPackage || selectedPackageFromList;

  const handleGoToPayment = () => {
    if (selectedPackageFromList.isCustom) {
      setView('customAmount');
    } else {
      setCustomPackage(null);
      setView('payment');
    }
  };

  const handleGoBack = () => {
    setView('main');
    setCustomPackage(null);
  };

  const handlePaymentSuccess = (cardDetails: CardDetails) => {
    setSavedCard(cardDetails);
  };

  const handleCustomAmountContinue = (amount: number) => {
    const price = parseFloat((amount * 0.0104).toFixed(2));
    setCustomPackage({
      id: Date.now(),
      coins: amount,
      price: price,
      isCustom: true,
    });
    setView('payment');
  };
  
  const renderContent = () => {
    switch (view) {
      case 'payment':
        return (
          <PaymentForm 
            selectedPackage={packageForPayment}
            onBack={handleGoBack}
            onPaymentSuccess={handlePaymentSuccess}
            savedCard={savedCard}
          />
        );
      case 'customAmount':
        return (
          <CustomAmountForm 
            onBack={handleGoBack}
            onContinue={handleCustomAmountContinue}
          />
        );
      case 'main':
      default:
        return (
          <>
            <Header />
            <main className="p-4 pb-48">
              <UserInfo />
              <RechargeSection 
                packages={COIN_PACKAGES}
                selectedPackageId={selectedPackageId}
                onSelectPackage={setSelectedPackageId}
              />
              <div className="space-y-4 mt-6">
                <InviteBanner />
                <AddToHomeScreenBanner />
              </div>
            </main>
            <PaymentFooter 
              selectedPackage={selectedPackageFromList} 
              onBuyClick={handleGoToPayment}
            />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;