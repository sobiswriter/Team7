"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Github, Linkedin, Globe, Calendar, MapPin, Award } from 'lucide-react';

// Hardcoded team members matching homepage
const teamMembers = [
  { id: 1, name: "Raj Kumar Pandey", role: "Founder and CEO", avatar: "", bio: "", skills: [], achievements: 8, projects: 15, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 2, name: "Anubhav Kumar", role: "Co-CEO and COO", avatar: "", bio: "", skills: [], achievements: 6, projects: 12, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 3, name: "Souradip Biswas", role: "AI/ML Head", avatar: "", bio: "", skills: [], achievements: 3, projects: 6, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 4, name: "Shreyansh Tripathi", role: "Full Stack Developer", avatar: "", bio: "", skills: [], achievements: 5, projects: 3, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 5, name: "Rishabh Mishra", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 1, projects: 5, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 6, name: "Vasu", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 2, projects: 1, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 7, name: "Ankush Kumar Giri", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 3, projects: 8, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 8, name: "Shital Singh", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 2, projects: 4, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 9, name: "Manshi Yadav", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 5, projects: 6, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 10, name: "Pranjal Sinha", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 1, projects: 3, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 11, name: "Nandini Sharma", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 2, projects: 5, gradient: "from-purple-500 to-pink-500", social: {} },
  { id: 12, name: "Paras Bajaj", role: "Core Member", avatar: "", bio: "", skills: [], achievements: 3, projects: 7, gradient: "from-purple-500 to-pink-500", social: {} },
];

export default function MembersPage() {
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filterMembers();
  }, [searchTerm, selectedRole]);

  const filterMembers = () => {
    let filtered = teamMembers;

    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.bio?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRole) {
      filtered = filtered.filter(member => member.role === selectedRole);
    }

    setFilteredMembers(filtered);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'moderator': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'member': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-team7-darkBg pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-700 rounded-lg"></div>
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
              Our Members
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make Team7 an amazing community
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search members by name, skills, or bio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
            >
              <option value="">All Roles</option>
              <option value="admin" className="bg-gray-800">Admin</option>
              <option value="moderator" className="bg-gray-800">Moderator</option>
              <option value="member" className="bg-gray-800">Member</option>
            </select>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="glass-effect border-white/10 hover:border-team7-blue/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-team7-blue/30 group-hover:ring-team7-blue/60 transition-all duration-300">
                  <AvatarImage src={member.avatar || ''} alt={member.name || ''} />
                  <AvatarFallback className="bg-team7-blue text-white text-lg">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-white group-hover:text-team7-blue transition-colors duration-300">
                  {member.name}
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 border text-xs">
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Bio */}
                {member.bio && (
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                )}

                {/* Skills */}
                {member.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-white/10 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                          +{member.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-orange-400" />
                    <span>{member.achievements}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{member.projects} projects</span>
                  </div>
                </div>

                {/* Social Links Placeholder */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    disabled
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    disabled
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    disabled
                  >
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No members found</div>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}