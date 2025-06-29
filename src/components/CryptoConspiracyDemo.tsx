import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, DollarSign, Users } from 'lucide-react';

const CryptoConspiracyDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    { title: 'Prison Break', duration: '2:30', description: 'CZ escapes from federal prison using blockchain technology' },
    { title: 'The Conspiracy', duration: '3:15', description: 'Trump and CZ uncover the truth about centralized finance' },
    { title: 'Freeman\'s Wisdom', duration: '1:45', description: 'Morgan Freeman narrates the blockchain revolution' },
    { title: 'Final Confrontation', duration: '4:20', description: 'The ultimate showdown between old and new finance' }
  ];

  const royaltyData = [
    { name: 'CZ Wallet', percentage: 15, color: 'bg-yellow-400' },
    { name: 'Trump Productions', percentage: 25, color: 'bg-cyan-400' },
    { name: 'Freeman Estate', percentage: 20, color: 'bg-purple-400' },
    { name: 'SONOVATE DAO', percentage: 30, color: 'bg-green-400' },
    { name: 'Community Pool', percentage: 10, color: 'bg-pink-400' }
  ];

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-neon neon-text">"CRYPTO CONSPIRACY"</span>
            <br />
            <span className="text-white">Live Demo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch our AI agents create a full-length feature film in real-time, complete with deepfake performances and blockchain integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video Player Mockup */}
          <div className="space-y-6">
            <div className="relative bg-black rounded-2xl overflow-hidden border-2 border-yellow-500/30 glow-gold">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {isPlaying ? <Pause size={32} className="text-black" /> : <Play size={32} className="text-black" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{scenes[currentScene].title}</h3>
                  <p className="text-gray-400">{scenes[currentScene].description}</p>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="p-4 bg-black/80">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setCurrentScene(Math.max(0, currentScene - 1))}
                      className="text-gray-400 hover:text-white"
                    >
                      <SkipBack size={20} />
                    </button>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                    >
                      {isPlaying ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-black" />}
                    </button>
                    <button 
                      onClick={() => setCurrentScene(Math.min(scenes.length - 1, currentScene + 1))}
                      className="text-gray-400 hover:text-white"
                    >
                      <SkipForward size={20} />
                    </button>
                  </div>
                  <div className="text-white font-mono">{scenes[currentScene].duration}</div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>

            {/* Scene Selector */}
            <div className="grid grid-cols-2 gap-4">
              {scenes.map((scene, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScene(index)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    currentScene === index 
                      ? 'border-yellow-400 bg-yellow-400/10' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="font-semibold text-white">{scene.title}</div>
                  <div className="text-sm text-gray-400">{scene.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Royalty Distribution */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-cyan-400/30 glow-teal">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <DollarSign className="mr-2" />
                Live Royalty Distribution
              </h3>
              
              {/* Pie Chart Visualization */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {royaltyData.map((item, index) => {
                    const startAngle = royaltyData.slice(0, index).reduce((sum, d) => sum + (d.percentage * 3.6), 0);
                    const endAngle = startAngle + (item.percentage * 3.6);
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                    const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                    const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                    const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                    
                    return (
                      <path
                        key={index}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        className={`${item.color.replace('bg-', 'fill-')} opacity-80 hover:opacity-100 transition-opacity`}
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Distributed</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                {royaltyData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 ${item.color} rounded-full mr-3`}></div>
                      <span className="text-white">{item.name}</span>
                    </div>
                    <span className="text-gray-400">{item.percentage}%</span>
                  </div>
                ))}
              </div>

              {/* Blockchain Transaction */}
              <div className="mt-6 p-4 bg-black/50 rounded-lg">
                <div className="text-sm text-gray-400 mb-2">Latest Transaction:</div>
                <div className="font-mono text-xs text-cyan-400 break-all">
                  0x742d35Cc6634C0532925a3b8D4C9db...
                </div>
                <div className="text-sm text-green-400 mt-1">✓ Confirmed on BSC</div>
              </div>
            </div>

            {/* Hero's Journey Wheel */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-2xl border border-purple-400/30 glow-purple">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Hero's Journey Structure</h3>
              
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 border-4 border-purple-400 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-pink-400 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">12 Steps</div>
                    <div className="text-sm text-gray-300">Complete</div>
                  </div>
                </div>
                
                {/* Journey steps */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-90px)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoConspiracyDemo;