"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Award, Code, Coffee } from 'lucide-react';

// Hardcoded team members for showcase
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
/* 
  {
    id: 1,
    name: "Alex Chen",
    role: "Lead Full-Stack Developer",
    bio: "Passionate about creating scalable web applications and mentoring junior developers. 5+ years in React ecosystem.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    achievements: 127,
    projects: 23,
    gradient: "from-blue-500 to-cyan-500",
    social: {
      github: "alexchen",
      linkedin: "alex-chen-dev",
      twitter: "alexcodes"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "AI/ML Engineer",
    bio: "Building the future with artificial intelligence. Specializing in computer vision and natural language processing.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e775?w=300&h=300&fit=crop&crop=face",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
    achievements: 89,
    projects: 18,
    gradient: "from-purple-500 to-pink-500",
    social: {
      github: "priyasharma",
      linkedin: "priya-sharma-ai",
      twitter: "priyaml"
    }
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "DevOps Architect",
    bio: "Cloud-native enthusiast who loves automating everything. Building robust infrastructure for modern applications.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    skills: ["Kubernetes", "Docker", "Terraform", "AWS"],
    achievements: 156,
    projects: 31,
    gradient: "from-green-500 to-emerald-500",
    social: {
      github: "mjohnson",
      linkedin: "marcus-johnson-devops",
      twitter: "cloudmarcus"
    }
  },
  {
    id: 4,
    name: "Sarah Kim",
    role: "UI/UX Designer",
    bio: "Crafting beautiful and intuitive user experiences. Bridging the gap between design and development.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    skills: ["Figma", "React", "Design Systems", "Prototyping"],
    achievements: 94,
    projects: 42,
    gradient: "from-orange-500 to-red-500",
    social: {
      github: "sarahkim",
      linkedin: "sarah-kim-design",
      twitter: "sarahdesigns"
    }
  },
  {
    id: 5,
    name: "David Rodriguez",
    role: "Blockchain Developer",
    bio: "Decentralizing the world one smart contract at a time. Expert in DeFi protocols and Web3 technologies.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    skills: ["Solidity", "Web3.js", "Ethereum", "DeFi"],
    achievements: 73,
    projects: 15,
    gradient: "from-indigo-500 to-purple-500",
    social: {
      github: "davidrodriguez",
      linkedin: "david-rodriguez-blockchain",
      twitter: "web3david"
    }
  },
  {
    id: 6,
    name: "Emma Thompson",
    role: "Data Scientist",
    bio: "Turning data into actionable insights. Passionate about machine learning and statistical analysis.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    skills: ["Python", "R", "SQL", "Machine Learning"],
    achievements: 112,
    projects: 26,
    gradient: "from-teal-500 to-blue-500",
    social: {
      github: "emmathompson",
      linkedin: "emma-thompson-data",
      twitter: "emmadata"
    }
  }
];

*/

export default function TeamShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-purple-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Code Symbols */}
        {['{ }', '< />', '[]', '()', '&&', '||'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-white/5 text-4xl font-mono animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
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
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Talented individuals working together to build the future of technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Member Name & Role */}
              <div className="relative mb-6">
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500`} />
                {member.avatar && (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full mx-auto border-4 border-white/20 transform group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-orange-400">
                      <Award className="w-4 h-4" />
                      <span className="font-bold">{member.achievements}</span>
                    </div>
                    <div className="text-xs text-gray-400">Achievements</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-blue-400">
                      <Code className="w-4 h-4" />
                      <span className="font-bold">{member.projects}</span>
                    </div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 rounded-full hover:bg-white/10">
                    <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                  </Button>
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 rounded-full hover:bg-white/10">
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors" />
                  </Button>
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 rounded-full hover:bg-white/10">
                    <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors" />
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="mb-6">
            <Coffee className="w-16 h-16 mx-auto text-orange-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Amazing Team?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're always looking for passionate developers, designers, and innovators 
              to join our community and build the future together.
            </p>
          </div>
          <a href="https://forms.gle/D48UnxdF2vBzVxb3A" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Join Team7 Today
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
