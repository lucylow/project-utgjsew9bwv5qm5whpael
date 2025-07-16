import React, { useState } from 'react';
import { X, CreditCard, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CheckoutModalProps {
  plan: {
    id: string;
    name: string;
    price: number;
    period: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onComplete: (success: boolean) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, isOpen, onClose, onComplete }) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData({ ...formData, [name]: formatted.substring(0, 19) });
      return;
    }
    
    // Format expiry date with slash
    if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length > 2) {
        formatted = `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
      }
      setFormData({ ...formData, [name]: formatted.substring(0, 5) });
      return;
    }
    
    // Limit CVV to 3-4 digits
    if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: cleaned.substring(0, 4) });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.cardName.trim()) {
      toast({ title: "Error", description: "Please enter the cardholder name", variant: "destructive" });
      return;
    }
    
    if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      toast({ title: "Error", description: "Please enter a valid card number", variant: "destructive" });
      return;
    }
    
    if (formData.expiryDate.length < 5) {
      toast({ title: "Error", description: "Please enter a valid expiry date (MM/YY)", variant: "destructive" });
      return;
    }
    
    if (formData.cvv.length < 3) {
      toast({ title: "Error", description: "Please enter a valid CVV", variant: "destructive" });
      return;
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      
      // Wait a moment to show success state before closing
      setTimeout(() => {
        onComplete(true);
      }, 1500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 w-full max-w-md iris-wipe overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          disabled={isProcessing}
        >
          <X size={24} />
        </button>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-2xl font-bold text-white">Checkout</h3>
          <p className="text-gray-400">Complete your subscription to {plan.name}</p>
        </div>
        
        {paymentComplete ? (
          // Success state
          <div className="p-8 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="text-green-500" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Payment Successful!</h4>
            <p className="text-gray-400 text-center mb-4">
              Your subscription to the {plan.name} plan is now active.
            </p>
            <p className="text-yellow-400 font-semibold">
              Start creating amazing films now!
            </p>
          </div>
        ) : (
          // Payment form
          <form onSubmit={handleSubmit} className="p-6">
            {/* Plan summary */}
            <div className="bg-black/30 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">{plan.name}</span>
                <span className="text-white font-bold">${plan.price}/{plan.period}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Billed {plan.period}ly</span>
                <span className="text-yellow-400">Save 20% with annual billing</span>
              </div>
            </div>
            
            {/* Payment details */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                  disabled={isProcessing}
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="4242 4242 4242 4242"
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                    disabled={isProcessing}
                  />
                  <CreditCard className="absolute right-3 top-2.5 text-gray-500" size={20} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                    disabled={isProcessing}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                    disabled={isProcessing}
                  />
                </div>
              </div>
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 mt-8 flex items-center justify-center"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Processing...
                </>
              ) : (
                <>Pay ${plan.price}</>
              )}
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-400">
              By subscribing, you agree to our Terms of Service and Privacy Policy
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;