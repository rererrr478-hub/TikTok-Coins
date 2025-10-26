
import React from 'react';
import type { CoinPackage } from '../types';
import { InfoIcon } from './Icons';
import CoinPackageCard from './CoinPackageCard';

interface RechargeSectionProps {
  packages: CoinPackage[];
  selectedPackageId: number;
  onSelectPackage: (id: number) => void;
}

const RechargeSection: React.FC<RechargeSectionProps> = ({ packages, selectedPackageId, onSelectPackage }) => {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900">Recharge</h2>
      <div className="flex items-center text-sm text-gray-500 mt-1 mb-4">
        <span>Save around 25% with a lower third-party service fee.</span>
        <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {packages.map((pkg) => (
          <CoinPackageCard 
            key={pkg.id}
            packageInfo={pkg}
            isSelected={selectedPackageId === pkg.id}
            onSelect={onSelectPackage}
          />
        ))}
      </div>
    </section>
  );
};

export default RechargeSection;
