"use client";

import React from 'react';

import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Users, Zap, Terminal, Github, ExternalLink } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Innovative Projects',
    description: 'Building cutting-edge solutions with modern technologies',
  },
  {
    icon: Users,
    title: 'Collaborative Community',
    description: 'Connect with like-minded developers and tech enthusiasts',
  },
  {
    icon: Zap,
    title: 'Skill Development',
    description: 'Level up your technical skills through hands-on experience',
  },
];

const stats = [
  { label: 'Active Members', value: '15+' },
  { label: 'Projects Completed', value: '5+' },
  { label: 'Tech Events', value: '4+' },
  { label: 'Years Active', value: '2+' },
];

export default function Hero() {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-team7-darkBg via-slate-900 to-team7-darkBg">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>
        
        {/* Multiple floating orbs with different animations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-team7-blue to-cyan-500 rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-team7-magenta to-pink-500 rounded-full blur-3xl animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-team7-green to-emerald-500 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional smaller orbs for depth */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated lines/particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-team7-blue/30 to-transparent animate-pulse"></div>
          <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-team7-magenta/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Terminal Style Welcome */}
          <div className="inline-block mb-8 p-4 glass-effect rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">team7@terminal:~$</span>
            </div>
            <p className="terminal-text text-sm md:text-base">
              <span className="text-team7-blue">echo</span> "Welcome to the future of tech innovation"
            </p>
          </div>

          {/* Main Heading with Enhanced Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-6 leading-tight">
            <span className="block mb-4 relative">
              <span className="bg-gradient-to-r from-white via-team7-blue to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Team7
              </span>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-team7-blue to-cyan-400 blur-2xl opacity-20 animate-pulse"></div>
            </span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-team7-magenta via-purple-400 to-team7-green bg-clip-text text-transparent animate-gradient-x">
                Innovation
              </span>
              <span className="text-white ml-4 relative">
                Hub
                {/* Sparkle effect */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </span>
              {/* Glowing effect behind Innovation */}
              <div className="absolute inset-0 bg-gradient-to-r from-team7-magenta to-team7-green blur-2xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Where innovation meets collaboration. Join a community of passionate developers 
            building the future through cutting-edge projects and shared knowledge.
          </p>

          {/* Enhanced Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-team7-blue to-team7-magenta rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300 animate-pulse"></div>
                <a href="https://forms.gle/D48UnxdF2vBzVxb3A" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-team7-blue to-team7-magenta hover:from-team7-magenta hover:to-team7-blue text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-team7-blue/50 group"
                >
                  <div className="flex items-center">
                    <span className="mr-2">🚀</span>
                    Join Team7
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>
              </a>
              </div>
            )}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-team7-green to-team7-blue rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <a 
                href="https://github.com/sobiswriter" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="relative border-2 border-team7-blue text-team7-blue hover:bg-team7-blue hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-team7-blue/30 group backdrop-blur-sm"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Explore Projects
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-team7-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </a>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group relative">
                {/* Background glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-team7-blue/20 to-team7-magenta/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-team7-blue/50 hover:scale-110 hover:shadow-2xl hover:shadow-team7-blue/30">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-team7-blue transition-colors duration-300 relative">
                    {stat.value}
                    {/* Number animation effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-team7-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                  <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-team7-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-team7-magenta rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title} 
                  className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 team7-gradient rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-team7-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-team7-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}