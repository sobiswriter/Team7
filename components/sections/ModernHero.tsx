"use client";

import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Terminal, Github, ExternalLink, Play } from 'lucide-react';

export default function ModernHero() {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    return undefined;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0">
        {/* Dynamic gradient based on mouse position */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          
          {/* Glassmorphism Terminal */}
          <div className="inline-block mb-8 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl animate-fade-in">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <span className="text-gray-400 text-sm font-mono">team7@innovation:~$</span>
            </div>
            <div className="font-mono text-left">
              <span className="text-emerald-400">npx</span>
              <span className="text-white"> create-innovation</span>
              <span className="text-blue-400"> --template</span>
              <span className="text-purple-400"> team7</span>
              <div className="mt-2 text-gray-300">
                ✨ Initializing next-gen development experience...
              </div>
            </div>
          </div>

          {/* Hero Title with Advanced Gradients */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 animate-fade-in relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 inline-block">
                Team7
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            </h1>
            <div className="text-3xl md:text-5xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Technical Club
              </span>
              <Sparkles className="inline-block w-8 h-8 ml-4 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Subtitle with Typewriter Effect */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10" style={{ animationDelay: '0.3s' }}>
            🚀 Where <span className="text-blue-400 font-semibold">innovation</span> meets <span className="text-purple-400 font-semibold">collaboration</span>. 
            Build the future with cutting-edge projects, advanced tech stacks, and a passionate community of developers.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            
              <Button
                asChild
                size="lg"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                <a href="https://forms.gle/D48UnxdF2vBzVxb3A" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    <Sparkles className="mr-2 w-5 h-5" />
                    Join Team7
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </Button>
            
            <a href="https://github.com/sobiswriter" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-purple-500/50 text-white hover:bg-purple-500/20 backdrop-blur-sm bg-white/5 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Github className="mr-2 w-5 h-5" />
              Explore Projects
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </a>

            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-full transform hover:scale-105 transition-all duration-300 group"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            {[
              { label: 'Active Innovators', value: '500+', color: 'from-blue-400 to-cyan-400' },
              { label: 'Projects Shipped', value: '150+', color: 'from-purple-400 to-pink-400' },
              { label: 'Tech Events', value: '75+', color: 'from-green-400 to-emerald-400' },
              { label: 'Years Strong', value: '5+', color: 'from-orange-400 to-red-400' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
