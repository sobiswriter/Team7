"use client";

import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-team7-darkBg pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Coming Soon Section */}
        <div className="text-center">
          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-8 animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-team7-blue via-purple-500 to-team7-magenta bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          
          {/* Coming Soon Message */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon!</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We're working hard to showcase our amazing team achievements, awards, and recognitions. 
              This section will feature member accomplishments, competition wins, and milestone celebrations.
            </p>
          </div>
          
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}