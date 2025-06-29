import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-yellow-400">
              SONOVATE
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-yellow-400">Home</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400">About</a>
              <a href="#demo" className="text-gray-300 hover:text-yellow-400">Demo</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              AI Film
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Production
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Create blockbuster films in minutes with AI agents
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
              Start Creating
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              5 AI Agents Working Together
            </h2>
            <p className="text-xl text-gray-400">
              Automated film production from script to screen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Script Writer', desc: 'Generates compelling storylines and dialogue' },
              { title: 'Director', desc: 'Creates shot compositions and scene direction' },
              { title: 'Casting Agent', desc: 'AI deepfake performances with any actor' },
              { title: 'Editor', desc: 'Assembles scenes with perfect timing' },
              { title: 'Distributor', desc: 'Blockchain-based royalty management' }
            ].map((agent, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{agent.title}</h3>
                <p className="text-gray-300">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400">
              Watch our AI create a film in real-time
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-black text-2xl">▶</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Demo Video</h3>
                <p className="text-gray-400">AI Film Creation Process</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1,427</div>
                <div className="text-gray-400">Films Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5 min</div>
                <div className="text-gray-400">Average Creation Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">$47M</div>
                <div className="text-gray-400">Total Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">SONOVATE</h3>
            <p className="text-gray-400 mb-6">
              Democratizing film production with AI
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">Discord</a>
            </div>
            <div className="mt-8 text-gray-500 text-sm">
              © 2024 SONOVATE AI Studios. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;