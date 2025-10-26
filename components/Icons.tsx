import React from 'react';

// From UserInfo.tsx
export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.28-1.1-.68-1.62-1.03-.39 1.2-.27 2.47-.02 3.72s.6 2.51 1.42 3.58c.85 1.08 2.05 1.84 3.48 2.32v4.03c-1.61-.28-3.2-.7-4.66-1.46-.35-.18-.72-.34-1.06-.55-.26 1.57-.49 3.15-.71 4.72h-4.03c.19-1.31.42-2.61.62-3.92.23-1.5.23-3.01.23-4.53 0-2.52-.42-5.01-1.18-7.37-.55-1.73-.86-3.52-.86-5.32 0-.42.02-.83.04-1.25H12.525z"/>
  </svg>
);

// From CoinPackageCard.tsx
export const CoinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.344 7.23a.75.75 0 00-1.06 1.06l4.25 4.25a.75.75 0 001.06-1.06l-4.25-4.25z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.53 15.03a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 011.06-1.06l4.25 4.25a.75.75 0 010 1.06z" clipRule="evenodd" />
  </svg>
);

// From RechargeSection.tsx
export const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

// From InviteBanner.tsx
export const InviteIcon = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center ${props.className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 12a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  </div>
);

// From AddToHomeScreenBanner.tsx
export const AddToHomeScreenIcon = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ${props.className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  </div>
);

// From PaymentFooter.tsx
export const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
  </svg>
);

// From PaymentFooter.tsx
export const PaymentIcons = () => (
    <div className="flex items-center space-x-2">
      <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6"/>
      <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="h-6"/>
      <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" className="h-6"/>
      <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="h-6"/>
    </div>
);

// For PaymentForm.tsx
export const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

// For PaymentForm.tsx Loading State
export const SpinnerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    {...props}
    className={`animate-spin ${props.className || ''}`}
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);