import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AgentShowcase from '../components/AgentShowcase';
import CryptoConspiracyDemo from '../components/CryptoConspiracyDemo';
import DAOGreenlighting from '../components/DAOGreenlighting';
import TechnologyStack from '../components/TechnologyStack';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AgentShowcase />
      <CryptoConspiracyDemo />
      <DAOGreenlighting />
      <TechnologyStack />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;