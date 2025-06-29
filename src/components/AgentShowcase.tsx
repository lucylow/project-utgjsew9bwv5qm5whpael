import React, { useState } from 'react';
import { Scroll, MessageSquare, Clapperboard, User, Link, Sparkles, Sliders } from 'lucide-react';

const AgentShowcase = () => {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [emotionLevel, setEmotionLevel] = useState(50);
  const [selectedGenre, setSelectedGenre] = useState('political thriller');

  const agents = [
    {
      id: 0,
      title: 'Scriptwriting Agent',
      icon: Scroll,
      feature: "Generates Hero's Journey structure from single prompt",
      description: "Automatically generate detailed story prompts and scripts, reducing the time and effort required for writers to develop original content.",
      interactive: "Type genre  See beat sheet",
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 1,
      title: 'Dialogue Agent',
      icon: MessageSquare,
      feature: "Character-specific dialogue with personality matrix",
      description: "Create character-specific dialogue that matches personality profiles and speaking patterns.",
      interactive: "Select character  Generate dialogue",
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      id: 2,
      title: 'Scene Creation Agent',
      icon: Clapperboard,
      feature: "Generates storyboards with shot compositions",
      description: "Automatically create visual storyboards and shot compositions from script descriptions.",
      interactive: "Drag to rearrange scenes",
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 3,
      title: 'Deepfake Casting Agent',
      icon: User,
      feature: "Emotion-controlled actor performances",
      description: "Generate realistic deepfake performances with precise emotion control and facial expressions.",
      interactive: "Emotion slider controls performance",
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 4,
      title: 'Blockchain DRM Agent',
      icon: Link,
      feature: "Automatic royalty distribution via smart contracts",
      description: "Manage rights, royalties, and distribution through blockchain technology and smart contracts.",
      interactive: "Live transaction visualizer",
      color: 'from-green-400 to-green-600'
    }
  ];

  const genres = ['political thriller', 'sci-fi adventure', 'romantic comedy', 'horror mystery'];
  const characters = ['Trump', 'CZ', 'Freeman'];

  const beatSheets = {
    'political thriller': [
      'Ordinary World: Politician in comfortable position',
      'Call to Adventure: Corruption scandal emerges',
      'Refusal: Denial and cover-up attempts',
      'Meeting Mentor: Whistleblower appears',
      'Crossing Threshold: Investigation begins',
      'Tests & Allies: Building evidence, finding supporters',
      'Approach: Preparing for confrontation',
      'Ordeal: Public hearing/trial',
      'Reward: Truth revealed',
      'Road Back: Consequences unfold',
      'Resurrection: Final choice between power and justice',
      'Return: New order established'
    ]
  };

  return (
    <section id="agents" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-gold neon-text">5 AI Agents</span>
            <br />
            <span className="text-white">Automating Film Production</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each agent specializes in a critical aspect of filmmaking, working together to create professional-quality content.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.id}
                className={`group relative p-6 bg-gradient-to-br ${agent.color} rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 pulse-circuit ${
                  selectedAgent === index ? 'ring-4 ring-yellow-400' : ''
                }`}
                onClick={() => setSelectedAgent(index)}
              >
                <div className="absolute inset-0 bg-black/80 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/10 rounded-lg mr-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{agent.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{agent.feature}</p>
                  
                  <div className="text-sm text-yellow-400 mb-4">
                    Interactive: {agent.interactive}
                  </div>
                  
                  <p className="text-gray-400 text-sm">{agent.description}</p>
                  
                  {/* Interactive Elements */}
                  {selectedAgent === index && (
                    <div className="mt-4 p-4 bg-black/50 rounded-lg iris-wipe">
                      {index === 0 && (
                        <div>
                          <select 
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            className="w-full p-2 bg-gray-800 text-white rounded mb-4"
                          >
                            {genres.map(genre => (
                              <option key={genre} value={genre}>{genre}</option>
                            ))}
                          </select>
                          <div className="text-xs text-gray-300">
                            Beat Sheet Preview: {beatSheets[selectedGenre]?.[0]}...
                          </div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div>
                          <div className="flex gap-2 mb-2">
                            {characters.map(char => (
                              <button key={char} className="px-3 py-1 bg-cyan-600 text-white rounded text-sm">
                                {char}
                              </button>
                            ))}
                          </div>
                          <div className="text-xs text-gray-300">
                            Trump: "This is a witch hunt!" <br />
                            CZ: "Decentralized solutions are the future."
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs">Angry</span>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={emotionLevel}
                              onChange={(e) => setEmotionLevel(Number(e.target.value))}
                              className="flex-1"
                            />
                            <span className="text-xs">Calm</span>
                          </div>
                          <div className="text-xs text-gray-300">
                            Emotion Level: {emotionLevel}% - Face expression updates in real-time
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo Showcase */}
        <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            Live Agent Interaction Demo
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hero's Journey Visualizer</h4>
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 border-4 border-yellow-400 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-cyan-400 rounded-full"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Sparkles className="text-white" size={32} />
                </div>
                {/* Journey steps around the circle */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-120px)`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Scene Timeline</h4>
              <div className="space-y-2">
                {['Opening', 'Inciting Incident', 'Plot Point 1', 'Midpoint', 'Plot Point 2', 'Climax'].map((scene, i) => (
                  <div key={i} className="flex items-center p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-white">{scene}</span>
                    <div className="ml-auto text-gray-400 text-sm">{i + 1}:00</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;
