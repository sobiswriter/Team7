"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Folder, Users, Calendar, BookOpen, Trophy } from 'lucide-react';

const stats = [
  { label: 'Projects', value: '45', icon: Folder, href: '/dashboard/projects' },
  { label: 'Admins', value: '3', icon: Users, href: '/dashboard/members' },
  { label: 'Events', value: '30', icon: Calendar, href: '/dashboard/events' },
  { label: 'Blog Posts', value: '25', icon: BookOpen, href: '/dashboard/blog' },
  { label: 'Achievements', value: '60', icon: Trophy, href: '/dashboard/achievements' },
];

export default function AdminDashboard() {
  
  const router = useRouter();

  

  

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(({ label, value, icon: Icon, href }) => (
          <Card key={label} className="glass-effect cursor-pointer hover:bg-white/10" onClick={() => router.push(href)}>
            <CardHeader className="flex items-center space-x-4">
              <div className="w-10 h-10 team7-gradient rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-white">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-team7-blue">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
