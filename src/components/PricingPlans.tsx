import React, { useState } from 'react';
import { Check, X, CreditCard, Sparkles, Film, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import CheckoutModal from './CheckoutModal';

const PricingPlans = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { toast } = useToast();

  const plans = [
    {
      id: 'indie',
      name: 'Indie Filmmaker',
      price: 49,
      period: 'month',
      description: 'Perfect for solo creators and indie filmmakers',
      features: [
        '3 AI-generated films per month',
        'Access to 3 AI agents',
        'Basic deepfake options',
        '720p resolution export',
        '30-day content storage',
        'Community support',
      ],
      notIncluded: [
        'Advanced scene customization',
        'NFT minting capabilities',
        'Royalty management',
      ],
      color: 'from-cyan-400 to-cyan-600',
      popular: false,
    },
    {
      id: 'studio',
      name: 'Studio Pro',
      price: 199,
      period: 'month',
      description: 'For professional creators and small studios',
      features: [
        'Unlimited AI-generated films',
        'Access to all 5 AI agents',
        'Advanced deepfake customization',
        '4K resolution export',
        'Unlimited content storage',
        'Priority support',
        'NFT minting (5 per month)',
        'Basic royalty management',
        'Custom character library',
      ],
      notIncluded: [],
      color: 'from-yellow-400 to-yellow-600',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Hollywood Enterprise',
      price: 999,
      period: 'month',
      description: 'For production companies and studios',
      features: [
        'Unlimited AI-generated content',
        'Custom AI agent development',
        'White-label solution',
        '8K resolution export',
        'Dedicated account manager',
        'API access',
        'Unlimited NFT minting',
        'Advanced royalty distribution',
        'Custom blockchain integration',
      ],
      notIncluded: [],
      color: 'from-purple-400 to-purple-600',
      popular: false,
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutComplete = (success) => {
    setIsCheckoutOpen(false);
    if (success) {
      toast({
        title: "Payment Successful!",
        description: `You now have access to the ${selectedPlan.name} plan.`,
        variant: "default",
      });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-gold neon-text">Pricing</span>
            <span className="text-white"> Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan to bring your cinematic visions to life with our AI-powered film production studio.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-yellow-400 transform scale-105 md:scale-110 shadow-xl shadow-yellow-400/20' : 'border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-yellow-400 text-black py-1 px-4 rounded-bl-lg font-bold text-sm flex items-center">
                    <Star className="w-4 h-4 mr-1" fill="black" /> MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6 h-12">{plan.description}</p>
                
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-${plan.color.split('-')[1]}/20 mb-6`}
                >
                  Get Started
                </button>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-300 font-semibold">Includes:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="text-sm text-gray-400 font-semibold mt-4">Not included:</p>
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <X className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-purple-400/30 glow-purple">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Need a custom solution?</h3>
              <p className="text-gray-300">Contact our team for custom pricing and features tailored to your studio's needs.</p>
            </div>
            <button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={handleCheckoutComplete}
        />
      )}
    </section>
  );
};

export default PricingPlans;