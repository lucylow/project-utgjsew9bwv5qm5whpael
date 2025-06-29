import React from 'react';
import { ExternalLink, Twitter, Github, MessageCircle, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-gradient-gold neon-text mb-4">
              SONOVATE
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Powered by SONOVATE AI Studios. Democratizing film production through artificial intelligence and blockchain technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* ... keep existing code (Quick Links and Resources sections) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#agents" className="text-gray-400 hover:text-yellow-400 transition-colors">AI Agents</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-yellow-400 transition-colors">Live Demo</a></li>
              <li><a href="#dao" className="text-gray-400 hover:text-yellow-400 transition-colors">DAO Voting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* ... keep existing code (Stats Section, BSC Scan Widget, Bottom Bar, and Powered By sections) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">1,427</div>
            <div className="text-gray-400 text-sm">Films Created</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">$47.2M</div>
            <div className="text-gray-400 text-sm">Total Value Distributed</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">12,847</div>
            <div className="text-gray-400 text-sm">DAO Members</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900 to-orange-900 p-6 rounded-2xl border border-yellow-500/30 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-2">Live Blockchain Activity</h4>
              <p className="text-yellow-200 text-sm">Real-time minting and transactions on Binance Smart Chain</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="text-center">
                <div className="text-lg font-bold text-white">247</div>
                <div className="text-yellow-300 text-xs">NFTs Minted Today</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-white">1.2k</div>
                <div className="text-yellow-300 text-xs">Active Wallets</div>
              </div>
              
              <a 
                href="#" 
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors flex items-center"
              >
                View on BSCScan
                <ExternalLink className="ml-1" size={16} />
              </a>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="text-yellow-300 text-sm font-semibold">Recent Transactions:</div>
            {[
              { hash: '0x742d35...C532925', type: 'NFT Mint', time: '2 min ago' },
              { hash: '0x8f3a21...B847392', type: 'Royalty Payout', time: '5 min ago' },
              { hash: '0x1c9e45...D293847', type: 'DAO Vote', time: '8 min ago' }
            ].map((tx, index) => (
              <div key={index} className="flex justify-between items-center text-xs">
                <span className="text-yellow-200 font-mono">{tx.hash}</span>
                <span className="text-yellow-300">{tx.type}</span>
                <span className="text-yellow-400">{tx.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SONOVATE AI Studios. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-sm">
            Powered by cutting-edge AI and blockchain technology
          </div>
          <div className="flex justify-center items-center mt-2 space-x-4 text-xs text-gray-600">
            <span>OpenAI GPT-4</span>
            <span>•</span>
            <span>Stable Diffusion</span>
            <span>•</span>
            <span>Binance Smart Chain</span>
            <span>•</span>
            <span>ElevenLabs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;