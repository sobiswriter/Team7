"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Github, ExternalLink, Calendar, User, Star } from 'lucide-react';

// Team7 projects showcase
const teamProjects = [
  {
    id: 1,
    title: "AI Course Recommendation System",
    description: "Machine learning powered platform to recommend personalized courses based on user preferences and career goals.",
    tech_stack: ["Python", "FastAPI", "TensorFlow", "React", "PostgreSQL"],
    status: "completed",
    github_url: "https://github.com/shreyanshtripathi-01",
    demo_url: "https://www.linkedin.com/feed/update/urn:li:activity:7319968999859982336/",
    created_at: "2024-03-15",
    author: "Souradip Biswas"
  },
  {
    id: 2,
    title: "Team7 Club Website",
    description: "Modern, responsive website for Team7 technical club with member management and event showcase.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    status: "in_progress",
    github_url: "https://github.com/shreyanshtripathi-01",
    demo_url: null,
    created_at: "2024-12-01",
    author: "Shreyansh Tripathi"
  },
  {
    id: 3,
    title: "Smart Campus Navigator",
    description: "Mobile app to help students navigate campus using AR and real-time indoor positioning.",
    tech_stack: ["React Native", "Expo", "TypeScript", "Node.js"],
    status: "completed",
    github_url: "https://github.com/shreyanshtripathi-01",
    demo_url: null,
    created_at: "2024-08-20",
    author: "Anubhav Kumar"
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform using blockchain technology for college elections.",
    tech_stack: ["Solidity", "Web3.js", "React", "Node.js"],
    status: "in_progress",
    github_url: "https://github.com/shreyanshtripathi-01",
    demo_url: null,
    created_at: "2024-10-05",
    author: "Rishabh Mishra"
  },
  {
    id: 5,
    title: "Event Management Dashboard",
    description: "Comprehensive dashboard for managing technical events, registrations, and participant tracking.",
    tech_stack: ["React", "Node.js", "MongoDB", "Express"],
    status: "completed",
    github_url: "https://github.com/shreyanshtripathi-01",
    demo_url: null,
    created_at: "2024-06-12",
    author: "Manshi Yadav"
  }
];

const techColors: { [key: string]: string } = {
  'Next.js': 'bg-black text-white',
  'React': 'bg-blue-500 text-white',
  'TypeScript': 'bg-blue-600 text-white',
  'JavaScript': 'bg-yellow-500 text-black',
  'Python': 'bg-green-600 text-white',
  'Node.js': 'bg-green-500 text-white',
  'Tailwind CSS': 'bg-cyan-500 text-white',
  'Supabase': 'bg-emerald-600 text-white',
  'Firebase': 'bg-orange-500 text-white',
  'React Native': 'bg-purple-600 text-white',
  'TensorFlow': 'bg-orange-600 text-white',
  'FastAPI': 'bg-teal-600 text-white',
  'Expo': 'bg-indigo-600 text-white',
};

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(teamProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filterProjects();
  }, [searchTerm, selectedTech, selectedStatus]);

  const filterProjects = () => {
    let filtered = teamProjects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTech) {
      filtered = filtered.filter(project =>
        project.tech_stack.includes(selectedTech)
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    setFilteredProjects(filtered);
  };

  const getAllTechnologies = () => {
    const allTech = teamProjects.flatMap((project: any) => project.tech_stack);
    return Array.from(new Set(allTech)).sort();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'archived': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-team7-darkBg pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-team7-darkBg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="bg-gradient-to-r from-team7-blue to-team7-magenta bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the innovative projects built by our talented community members
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
            >
              <option value="">All Technologies</option>
              {getAllTechnologies().map(tech => (
                <option key={tech} value={tech} className="bg-gray-800">{tech}</option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
            >
              <option value="">All Status</option>
              <option value="active" className="bg-gray-800">Active</option>
              <option value="completed" className="bg-gray-800">Completed</option>
              <option value="archived" className="bg-gray-800">Archived</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-effect border-white/10 hover:border-team7-blue/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white group-hover:text-team7-blue transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${techColors[tech] || 'bg-gray-600 text-white'} text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack.length > 4 && (
                    <Badge variant="secondary" className="bg-gray-600 text-white text-xs">
                      +{project.tech_stack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{project.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(project.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.github_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo_url && (
                    <Button
                      size="sm"
                      className="flex-1 team7-gradient hover:opacity-90"
                      asChild
                    >
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No projects found</div>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}