import React, { useState, useEffect } from 'react';
import { Vote, CheckCircle, XCircle, Coins, ExternalLink, Users, TrendingUp } from 'lucide-react';

const DAOGreenlighting = () => {
  const [votes, setVotes] = useState({ yes: 847, no: 153 });
  const [userVote, setUserVote] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  const totalVotes = votes.yes + votes.no;
  const yesPercentage = (votes.yes / totalVotes) * 100;

  const handleVote = (voteType) => {
    if (userVote || isVoting) return;
    
    setIsVoting(true);
    setTimeout(() => {
      setUserVote(voteType);
      setVotes(prev => ({
        ...prev,
        [voteType]: prev[voteType] + 1
      }));
      setIsVoting(false);
    }, 1500);
  };

  const projects = [
    {
      title: "Crypto Conspiracy 2: The Return",
      description: "CZ breaks out of prison again, this time with quantum computing",
      funding: "2.5M USDC",
      votes: { yes: 1247, no: 89 },
      status: "Funded"
    },
    {
      title: "DeFi Detective",
      description: "A noir thriller about tracking stolen cryptocurrency",
      funding: "1.8M USDC",
      votes: { yes: 892, no: 234 },
      status: "Voting"
    },
    {
      title: "The Blockchain Heist",
      description: "Ocean's Eleven meets cryptocurrency in this action thriller",
      funding: "3.2M USDC",
      votes: { yes: 567, no: 445 },
      status: "Voting"
    }
  ];

  return (
    <section id="dao" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-gold neon-text">DAO</span>
            <span className="text-white"> Greenlighting</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Community-driven film funding through decentralized governance. Vote on projects, earn rewards, and own a piece of cinematic history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Voting Panel */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/30 glow-gold">
              <div className="flex items-center mb-6">
                <Vote className="text-yellow-400 mr-3" size={32} />
                <h3 className="text-3xl font-bold text-white">Fund This Film?</h3>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Crypto Conspiracy: The Sequel</h4>
                <p className="text-gray-400 mb-4">
                  CZ and Trump team up again to expose the truth about CBDCs and fight for financial freedom.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Requested: 2.5M USDC</span>
                  <span className="mx-2">•</span>
                  <span>Duration: 120 minutes</span>
                  <span className="mx-2">•</span>
                  <span>Genre: Thriller</span>
                </div>
              </div>

              {/* Voting Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-semibold">Community Vote</span>
                  <span className="text-gray-400">{totalVotes} votes</span>
                </div>
                
                <div className="relative w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${yesPercentage}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                    {yesPercentage.toFixed(1)}% YES
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-green-400">YES: {votes.yes}</span>
                  <span className="text-red-400">NO: {votes.no}</span>
                </div>
              </div>

              {/* Voting Buttons */}
              {!userVote && (
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => handleVote('yes')}
                    disabled={isVoting}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isVoting ? (
                      <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <>
                        <CheckCircle className="mr-2" size={24} />
                        Fund Project
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => handleVote('no')}
                    disabled={isVoting}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isVoting ? (
                      <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <>
                        <XCircle className="mr-2" size={24} />
                        Reject
                      </>
                    )}
                  </button>
                </div>
              )}

              {userVote && (
                <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="mr-2" size={20} />
                    <span>Vote recorded: {userVote.toUpperCase()}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Transaction confirmed on Binance Smart Chain
                  </div>
                </div>
              )}

              {/* NFT Minting */}
              <div className="border-t border-gray-700 pt-6">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Coins className="mr-2" size={24} />
                  Mint as NFT Collection
                </button>
                <div className="flex items-center justify-center mt-2 text-sm text-gray-400">
                  <ExternalLink size={16} className="mr-1" />
                  <span>View on BSCScan</span>
                </div>
              </div>
            </div>

            {/* Blockchain Verification */}
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 p-6 rounded-2xl border border-cyan-400/30 glow-teal">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Blockchain Verification</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Smart Contract:</span>
                  <span className="text-cyan-400 font-mono text-sm">0x742d35...C532925</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Network:</span>
                  <span className="text-yellow-400">Binance Smart Chain</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Gas Fee:</span>
                  <span className="text-green-400">0.001 BNB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Confirmation:</span>
                  <span className="text-green-400">✓ 12 blocks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Pipeline */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-purple-400/30 glow-purple">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                <TrendingUp className="mr-2" />
                Project Pipeline
              </h3>

              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-black/50 p-4 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{project.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        project.status === 'Funded' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-yellow-600 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 font-bold">{project.funding}</span>
                      <div className="text-sm text-gray-500">
                        {project.votes.yes} YES / {project.votes.no} NO
                      </div>
                    </div>
                    
                    <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ 
                          width: `${(project.votes.yes / (project.votes.yes + project.votes.no)) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DAO Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-yellow-900 to-orange-900 p-6 rounded-xl border border-yellow-400/30">
                <div className="text-center">
                  <Users className="text-yellow-400 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-white">12,847</div>
                  <div className="text-yellow-400 text-sm">DAO Members</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-900 to-emerald-900 p-6 rounded-xl border border-green-400/30">
                <div className="text-center">
                  <Coins className="text-green-400 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-white">$47.2M</div>
                  <div className="text-green-400 text-sm">Total Funded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAOGreenlighting;