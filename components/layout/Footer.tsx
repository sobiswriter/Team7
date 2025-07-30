import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Terminal, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/members' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
  ],
  community: [
    { name: 'Join Team7', href: '/join' },
    { name: 'Member Directory', href: '/members' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
  ],
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/team7' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/team7club' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/team7' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@team7.dev' },
];

export default function Footer() {
  return (
    <footer className="bg-team7-darkBg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 team7-gradient rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-poppins font-bold bg-gradient-to-r from-team7-blue to-team7-magenta bg-clip-text text-transparent">
                Team7
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Team7. All rights reserved. Built with ❤️ by Shreyansh.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-team7-blue transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}