import React, { useState } from 'react';
import { Sparkles, Download, Play, ArrowRight, Film, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const [movieIdea, setMovieIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const sampleIdeas = [
    "Cyberpunk detective in Neo-Tokyo",
    "Time-traveling chef saves the universe",
    "AI robots discover emotions",
    "Underwater city rebellion",
    "Space pirates vs corporate empire"
  ];

  const handleGenerate = () => {
    if (!movieIdea.trim() || isGenerating) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent({
        title: `${movieIdea.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')}: The Beginning`,
        poster: '/api/placeholder/300/450',
        genre: 'Sci-Fi Thriller',
        duration: '2:15',
        budget: '$2.8M',
        description: `A gripping tale of ${movieIdea} that challenges the boundaries of reality and technology.`,
        cast: ['AI-Generated Trump', 'AI-Generated CZ', 'AI-Generated Freeman'],
        scenes: 24,
        dialogueLines: 1847
      });
      setIsGenerating(false);
    }, 3000);
  };

  const handleSampleClick = (idea) => {
    setMovieIdea(idea);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-gold neon-text">Create Your First</span>
            <br />
            <span className="text-gradient-neon">AI Film</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your creative vision into a professional film in minutes. Our AI agents handle everything from script to screen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/30 glow-gold">
              <div className="flex items-center mb-6">
                <Wand2 className="text-yellow-400 mr-3" size={32} />
                <h3 className="text-3xl font-bold text-white">Describe Your Vision</h3>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">
                  What's your movie idea?
                </label>
                <textarea
                  value={movieIdea}
                  onChange={(e) => setMovieIdea(e.target.value)}
                  placeholder="e.g., Cyberpunk detective in Neo-Tokyo discovers a conspiracy involving AI consciousness..."
                  className="w-full h-32 p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none"
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-400 mt-2">
                  {movieIdea.length}/500 characters
                </div>
              </div>

              {/* Sample Ideas */}
              <div className="mb-6">
                <div className="text-white font-semibold mb-3">Or try these ideas:</div>
                <div className="flex flex-wrap gap-2">
                  {sampleIdeas.map((idea, index) => (
                    <button
                      key={index}
                      onClick={() => handleSampleClick(idea)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors"
                    >
                      {idea}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={!movieIdea.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin w-6 h-6 border-2 border-black border-t-transparent rounded-full mr-3"></div>
                    Generating Your Film...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={24} />
                    Generate Film
                    <ArrowRight className="ml-2" size={24} />
                  </>
                )}
              </button>

              {isGenerating && (
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-cyan-400">
                    <div className="animate-pulse w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Analyzing your concept...
                  </div>
                  <div className="flex items-center text-purple-400">
                    <div className="animate-pulse w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Generating script structure...
                  </div>
                  <div className="flex items-center text-green-400">
                    <div className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Creating character profiles...
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <div className="animate-pulse w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Designing poster artwork...
                  </div>
                </div>
              )}
            </div>

            {/* Features List */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-2xl border border-purple-400/30 glow-purple">
              <h4 className="text-xl font-bold text-purple-400 mb-4">What You Get:</h4>
              <div className="space-y-3">
                {[
                  'Complete script with Hero\'s Journey structure',
                  'AI-generated poster and promotional materials',
                  'Character casting with deepfake previews',
                  'Scene-by-scene storyboard',
                  'Dialogue with voice synthesis',
                  'Blockchain-verified ownership NFT'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-white">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link 
                  to="/pricing" 
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-8">
            {generatedContent ? (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-400/30 glow-teal iris-wipe">
                <div className="flex items-center mb-6">
                  <Film className="text-cyan-400 mr-3" size={32} />
                  <h3 className="text-3xl font-bold text-white">Your Film is Ready!</h3>
                </div>

                {/* Movie Poster */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border-2 border-cyan-400/30">
                      <div className="text-center text-white">
                        <Film size={48} className="mx-auto mb-2 text-cyan-400" />
                        <div className="text-sm">AI-Generated Poster</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">{generatedContent.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-cyan-600 text-white rounded text-sm">{generatedContent.genre}</span>
                      <span className="px-2 py-1 bg-purple-600 text-white rounded text-sm">{generatedContent.duration}</span>
                      <span className="px-2 py-1 bg-green-600 text-white rounded text-sm">{generatedContent.budget}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{generatedContent.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Scenes Generated:</span>
                        <span className="text-white">{generatedContent.scenes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dialogue Lines:</span>
                        <span className="text-white">{generatedContent.dialogueLines}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">AI Cast:</span>
                        <span className="text-white">{generatedContent.cast.length} actors</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <Play className="mr-2" size={20} />
                    Watch 30s Preview
                  </button>
                  
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <Download className="mr-2" size={20} />
                    Download Script
                  </button>
                </div>

                {/* NFT Minting */}
                <div className="mt-6 p-4 bg-black/50 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">Mint as NFT</div>
                      <div className="text-gray-400 text-sm">Own your creation on the blockchain</div>
                    </div>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105">
                      Mint Now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-600 opacity-50">
                <div className="text-center">
                  <Film className="text-gray-500 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Your Film Will Appear Here</h3>
                  <p className="text-gray-600">Enter your movie idea and click generate to see the magic happen</p>
                </div>
              </div>
            )}

            {/* Success Stories */}
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 p-6 rounded-2xl border border-green-400/30">
              <h4 className="text-xl font-bold text-green-400 mb-4">Recent Creations</h4>
              <div className="space-y-3">
                {[
                  { title: 'Quantum Heist', creator: 'CryptoDirector', views: '2.3M' },
                  { title: 'AI Uprising', creator: 'TechFilmmaker', views: '1.8M' },
                  { title: 'Blockchain Wars', creator: 'DefiProducer', views: '3.1M' }
                ].map((film, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-semibold">{film.title}</div>
                      <div className="text-green-300 text-sm">by {film.creator}</div>
                    </div>
                    <div className="text-green-400 text-sm">{film.views} views</div>
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

export default CallToAction;
