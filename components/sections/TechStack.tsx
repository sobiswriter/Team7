"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Zap, Globe, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';

// Hardcoded tech stack for showcase
const techCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: Globe,
    description: "Modern user interfaces and experiences",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Three.js", level: 75, color: "bg-green-500" }
    ]
  },
  {
    id: 2,
    title: "Backend",
    icon: Database,
    description: "Scalable server-side architecture",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", level: 93, color: "bg-green-600" },
      { name: "Python", level: 89, color: "bg-yellow-500" },
      { name: "Go", level: 82, color: "bg-blue-400" },
      { name: "PostgreSQL", level: 87, color: "bg-blue-700" },
      { name: "Redis", level: 85, color: "bg-red-500" }
    ]
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment solutions",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "AWS", level: 91, color: "bg-orange-500" },
      { name: "Docker", level: 88, color: "bg-blue-600" },
      { name: "Kubernetes", level: 84, color: "bg-blue-700" },
      { name: "Terraform", level: 80, color: "bg-purple-600" },
      { name: "GitHub Actions", level: 86, color: "bg-gray-800" }
    ]
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Intelligent systems and automation",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "TensorFlow", level: 87, color: "bg-orange-600" },
      { name: "PyTorch", level: 85, color: "bg-red-600" },
      { name: "OpenAI API", level: 89, color: "bg-green-600" },
      { name: "Hugging Face", level: 82, color: "bg-yellow-500" },
      { name: "LangChain", level: 78, color: "bg-blue-500" }
    ]
  },
  {
    id: 5,
    title: "Mobile",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-indigo-500 to-purple-500",
    technologies: [
      { name: "React Native", level: 86, color: "bg-blue-500" },
      { name: "Flutter", level: 83, color: "bg-blue-400" },
      { name: "Swift", level: 79, color: "bg-orange-500" },
      { name: "Kotlin", level: 81, color: "bg-purple-600" },
      { name: "Expo", level: 88, color: "bg-gray-800" }
    ]
  },
  {
    id: 6,
    title: "Blockchain & Web3",
    icon: Shield,
    description: "Decentralized applications and smart contracts",
    color: "from-teal-500 to-blue-500",
    technologies: [
      { name: "Solidity", level: 84, color: "bg-gray-600" },
      { name: "Web3.js", level: 87, color: "bg-orange-500" },
      { name: "Ethereum", level: 82, color: "bg-blue-600" },
      { name: "IPFS", level: 76, color: "bg-teal-500" },
      { name: "Hardhat", level: 80, color: "bg-yellow-600" }
    ]
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(techCategories[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Tech Symbols Animation */}
        {['⚡', '🚀', '💎', '🔥', '✨', '🌟'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float opacity-20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Cutting-edge technologies powering our innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Tech Categories Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory.id === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`group relative p-6 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in ${
                  isActive 
                    ? 'bg-white/10 border-white/30' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-r ${category.color} ${isActive ? 'animate-pulse' : ''}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Active Indicator */}
                {isActive && (
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`} />
                )}
                
                {/* Hover Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
              </button>
            );
          })}
        </div>

        {/* Active Category Technologies */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className={`bg-gradient-to-r ${activeCategory.color} bg-clip-text text-transparent`}>
                {activeCategory.title}
              </span>
            </h3>
            <p className="text-gray-300">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {activeCategory.technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 ${tech.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {tech.name.charAt(0)}
                  </div>
                  
                  <h4 className="text-white font-semibold mb-3">
                    {tech.name}
                  </h4>
                  
                  {/* Skill Level Progress */}
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className={`${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400">
                      {tech.level}% Proficiency
                    </span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute -inset-0.5 ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <Zap className="w-16 h-16 mx-auto text-yellow-400 mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of developers and start building with cutting-edge technologies. 
              Let's create the future together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/D48UnxdF2vBzVxb3A" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Code className="mr-2 w-5 h-5" />
                Start Building
              </Button>
              </a>
              <a href="https://forms.gle/D48UnxdF2vBzVxb3A" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 border-2 border-purple-500/50 text-white hover:bg-purple-500/20 backdrop-blur-sm bg-white/5 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Documentation
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
