import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentActor, setCurrentActor] = useState(0);
  const actors = ['Trump', 'CZ', 'Freeman'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActor((prev) => (prev + 1) % actors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Film Reel Animation */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
        <div className="film-reel w-full h-full border-4 border-yellow-500 rounded-full relative">
          <div className="absolute inset-4 border-2 border-yellow-400 rounded-full">
            <div className="absolute inset-2 bg-yellow-500 rounded-full flex items-center justify-center">
              <Play className="text-black" size={20} />
            </div>
          </div>
          {/* Film holes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-yellow-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-20px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Deepfake Transition Display */}
        <div className="mb-8">
          <div className="inline-block p-4 bg-black/50 rounded-lg border border-yellow-500/30 glow-gold">
            <div className="text-sm text-yellow-400 mb-2">AI Deepfake Demo:</div>
            <div className="text-2xl font-bold text-white transition-all duration-1000">
              {actors[currentActor]} → AI Performance
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-gradient-gold neon-text">
            Democratizing
          </span>
          <br />
          <span className="text-gradient-neon">
            Hollywood
          </span>
          <br />
          <span className="text-white">
            with AI Agents
          </span>
        </h1>

        {/* Subheading with typewriter effect */}
        <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          <span className="typewriter">
            Create blockbuster films in minutes, not months
          </span>
        </div>

        {/* Value Proposition */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Where Algorithms Direct A-List Talent. 5 specialized AI agents working in concert to automate film production.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 glow-gold">
            Start Your Film Journey
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black glow-teal">
            Watch Demo
            <Play className="inline-block ml-2 group-hover:scale-110 transition-transform" size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">1,427</div>
            <div className="text-gray-400">Films Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">5</div>
            <div className="text-gray-400">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">∞</div>
            <div className="text-gray-400">Creative Possibilities</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;