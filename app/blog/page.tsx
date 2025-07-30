"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Calendar, User, Clock, ArrowRight, Star, BookOpen } from 'lucide-react';

// Hardcoded blog posts as requested
const blogPosts = [
  {
    id: 1,
    title: "The Rise of Quantum Machine Learning: Bridging Two Revolutionary Technologies",
    excerpt: "Exploring how quantum computing is transforming machine learning algorithms and opening new possibilities for AI development in the post-2025 era.",
    content: "Quantum machine learning represents the convergence of two of the most groundbreaking technologies of our time. As we progress through 2025, the integration of quantum computing with AI is creating unprecedented opportunities...",
    author: "Dr. Priya Sharma",
    date: "2025-04-15",
    tags: ["Quantum Computing", "Machine Learning", "AI", "Future Tech"],
    read_time: 8,
    featured: true
  },
  {
    id: 2,
    title: "Neuromorphic Computing: The Brain-Inspired Future of AI Hardware",
    excerpt: "How neuromorphic chips are revolutionizing AI processing by mimicking the human brain's neural structure and energy efficiency.",
    content: "Neuromorphic computing represents a paradigm shift in AI hardware design. By emulating the brain's neural networks at the hardware level, these chips promise to deliver unprecedented efficiency...",
    author: "Alex Chen",
    date: "2025-05-22",
    tags: ["Neuromorphic Computing", "AI Hardware", "Neural Networks", "Innovation"],
    read_time: 6,
    featured: false
  },
  {
    id: 3,
    title: "Blockchain-Powered AI: Decentralized Intelligence Networks",
    excerpt: "Investigating how blockchain technology is enabling decentralized AI networks and creating new models for collaborative machine learning.",
    content: "The intersection of blockchain and AI is creating new paradigms for decentralized intelligence. By leveraging distributed ledger technology, we can build AI systems that are more transparent...",
    author: "Sarah Johnson",
    date: "2025-06-08",
    tags: ["Blockchain", "Decentralized AI", "Web3", "Distributed Computing"],
    read_time: 10,
    featured: true
  },
  {
    id: 4,
    title: "Edge AI Revolution: Bringing Intelligence to IoT Devices",
    excerpt: "Examining the transformation of IoT through edge computing and how AI at the edge is creating smarter, more responsive connected devices.",
    content: "Edge AI is revolutionizing the Internet of Things by bringing artificial intelligence processing directly to connected devices. This shift from cloud-based to edge-based AI processing...",
    author: "Michael Rodriguez",
    date: "2025-07-14",
    tags: ["Edge Computing", "IoT", "AI", "Smart Devices"],
    read_time: 7,
    featured: false
  },
  {
    id: 5,
    title: "Synthetic Biology Meets AI: Programming Life with Machine Learning",
    excerpt: "Exploring the fascinating intersection of synthetic biology and artificial intelligence in creating programmable biological systems.",
    content: "The convergence of synthetic biology and AI is opening unprecedented possibilities in biotechnology. Machine learning algorithms are now being used to design and optimize biological systems...",
    author: "Dr. Emily Watson",
    date: "2025-08-03",
    tags: ["Synthetic Biology", "Biotechnology", "AI", "Life Sciences"],
    read_time: 9,
    featured: true
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  // Filter posts based on search and tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-team7-darkBg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="bg-gradient-to-r from-team7-blue to-team7-magenta bg-clip-text text-transparent">
              Team7 Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and thoughts from our community on technology, innovation, and the future.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white"
            >
              <option value="">All Categories</option>
              {allTags.map(tag => (
                <option key={tag} value={tag} className="bg-team7-darkBg text-white">
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-poppins font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Posts
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map(post => (
                <Card key={post.id} className="glass-effect border-white/10 hover:border-team7-blue/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-team7-blue text-white text-sm">
                          {getInitials(post.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="text-white font-medium">
                          {post.author}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                          <Clock className="w-3 h-3 ml-2" />
                          <span>{post.read_time} min read</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-team7-blue transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-team7-blue/20 text-team7-blue hover:bg-team7-blue/30 cursor-pointer"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-team7-blue hover:text-white hover:bg-team7-blue p-0">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-6">
          <h2 className="text-2xl font-poppins font-bold text-white mb-6">All Articles</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map(post => (
            <Card key={post.id} className="glass-effect border-white/10 hover:border-team7-blue/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-team7-blue text-white text-xs">
                      {getInitials(post.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-gray-400">
                    <p className="text-white text-sm">
                      {post.author}
                    </p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg text-white group-hover:text-team7-blue transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 3).map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-team7-blue/30 text-team7-blue hover:bg-team7-blue/20 cursor-pointer"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.read_time} min read
                  </span>
                  <Button size="sm" variant="ghost" className="text-team7-blue hover:text-white hover:bg-team7-blue p-2">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No articles found</div>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}