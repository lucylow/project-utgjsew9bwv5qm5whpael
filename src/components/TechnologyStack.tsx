import React from 'react';
import { Cpu, Database, Shield, Mic, Code, Zap } from 'lucide-react';

const TechnologyStack = () => {
  const technologies = [
    {
      name: 'OpenAI',
      description: 'GPT-4 for script generation and dialogue creation',
      icon: Cpu,
      color: 'from-green-400 to-green-600',
      category: 'AI/ML'
    },
    {
      name: 'Stable Diffusion',
      description: 'Image generation for storyboards and visual assets',
      icon: Database,
      color: 'from-blue-400 to-blue-600',
      category: 'AI/ML'
    },
    {
      name: 'Binance Chain',
      description: 'Smart contracts for royalty distribution and NFTs',
      icon: Shield,
      color: 'from-yellow-400 to-yellow-600',
      category: 'Blockchain'
    },
    {
      name: 'ElevenLabs',
      description: 'AI voice synthesis for character dialogue',
      icon: Mic,
      color: 'from-purple-400 to-purple-600',
      category: 'AI/ML'
    },
    {
      name: 'CopilotKit',
      description: 'AI-powered development and automation tools',
      icon: Code,
      color: 'from-cyan-400 to-cyan-600',
      category: 'Development'
    },
    {
      name: 'React + TypeScript',
      description: 'Modern web framework for the user interface',
      icon: Zap,
      color: 'from-pink-400 to-pink-600',
      category: 'Frontend'
    }
  ];

  const categories = ['AI/ML', 'Blockchain', 'Development', 'Frontend'];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-neon neon-text">Technology</span>
            <span className="text-white"> Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by cutting-edge AI, blockchain technology, and modern development frameworks to deliver professional-quality film production.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105 pulse-circuit"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                     style={{
                       background: `linear-gradient(135deg, ${tech.color.split(' ')[1]}, ${tech.color.split(' ')[3]})`
                     }}
                ></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${tech.color} rounded-lg mr-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                      <span className="text-sm text-gray-400">{tech.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{tech.description}</p>
                  
                  {/* Tech Badge */}
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${tech.color} text-white text-xs font-bold rounded-full`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/30 glow-gold">
          <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">System Architecture</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={category} className="text-center">
                <div className="bg-black/50 p-6 rounded-xl border border-gray-600 mb-4">
                  <h4 className="text-lg font-bold text-white mb-4">{category}</h4>
                  <div className="space-y-2">
                    {technologies
                      .filter(tech => tech.category === category)
                      .map((tech, techIndex) => (
                        <div key={techIndex} className="text-sm text-gray-400">
                          {tech.name}
                        </div>
                      ))}
                  </div>
                </div>
                
                {index < categories.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-cyan-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Data Flow */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-white mb-6">Data Flow</h4>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full">Script Input</span>
              <span className="text-gray-400">→</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">AI Processing</span>
              <span className="text-gray-400">→</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full">Content Generation</span>
              <span className="text-gray-400">→</span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full">Blockchain Storage</span>
              <span className="text-gray-400">→</span>
              <span className="bg-pink-600 text-white px-3 py-1 rounded-full">Distribution</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-900 to-emerald-900 p-6 rounded-xl border border-green-400/30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-green-300 text-sm">Uptime</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 p-6 rounded-xl border border-blue-400/30 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">&lt;2s</div>
            <div className="text-blue-300 text-sm">Response Time</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-xl border border-purple-400/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
            <div className="text-purple-300 text-sm">Faster Production</div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-900 to-orange-900 p-6 rounded-xl border border-yellow-400/30 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">90%</div>
            <div className="text-yellow-300 text-sm">Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;