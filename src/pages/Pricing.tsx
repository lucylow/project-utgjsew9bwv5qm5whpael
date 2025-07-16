import React from 'react';
import Navigation from '../components/Navigation';
import PricingPlans from '../components/PricingPlans';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <PricingPlans />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;