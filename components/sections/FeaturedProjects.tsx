"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, Users, Calendar } from 'lucide-react';

// Hardcoded demo projects for showcase
const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description: "Revolutionary AI tool that helps developers write cleaner, more efficient code with intelligent suggestions and automated refactoring.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    stars: 2847,
    contributors: 12,
    status: "🚀 Production",
    gradient: "from-blue-500 to-cyan-500",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Blockchain Explorer Pro",
    description: "Advanced blockchain analytics platform with real-time transaction monitoring, smart contract analysis, and DeFi insights.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    tech: ["Solidity", "Web3.js", "Next.js", "GraphQL"],
    stars: 1923,
    contributors: 8,
    status: "⭐ Featured",
    gradient: "from-purple-500 to-pink-500",
    category: "Blockchain"
  },
  {
    id: 3,
    title: "Cloud-Native DevOps Suite",
    description: "Complete DevOps automation platform with CI/CD pipelines, container orchestration, and intelligent monitoring.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop",
    tech: ["Kubernetes", "Docker", "Go", "Terraform"],
    stars: 3156,
    contributors: 15,
    status: "🔥 Trending",
    gradient: "from-green-500 to-emerald-500",
    category: "DevOps"
  },
  {
    id: 4,
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing and understanding deep learning models with real-time training metrics and layer analysis.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    tech: ["PyTorch", "D3.js", "Python", "WebGL"],
    stars: 1654,
    contributors: 6,
    status: "🧠 Innovation",
    gradient: "from-orange-500 to-red-500",
    category: "Data Science"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge projects that push the boundaries of technology and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-sm font-medium text-green-400">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-white/20 rounded-full text-sm font-medium text-white hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span>{project.contributors}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a href="/projects">
          <Button
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span className="flex items-center">
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
