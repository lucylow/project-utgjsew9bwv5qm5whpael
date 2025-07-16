import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Agents', href: '/#agents' },
    { name: 'Demo', href: '/#demo' },
    { name: 'DAO', href: '/#dao' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/#faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gradient-gold neon-text">
                SONOVATE
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:glow-gold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;