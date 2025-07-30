"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getItems, deleteItem } from '@/lib/demoStore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  created_at: number;
  title: string;
  description: string;
  github: string;
}

export default function ProjectsList() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== 'admin') {
        router.push('/');
      } else {
        setProjects(getItems<ProjectItem>('projects'));
      }
    }
  }, [loading, user, router]);

  const remove = (id: string) => {
    deleteItem('projects', id);
    setProjects(getItems<ProjectItem>('projects'));
  };

  if (loading || !user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button onClick={() => router.push('/dashboard/projects/new')} className="team7-gradient">
          <Plus className="w-4 h-4 mr-2" /> Add Project
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <Card key={p.id} className="glass-effect relative">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: p.description }} />
              <a href={p.github} target="_blank" rel="noopener" className="text-team7-blue underline">GitHub</a>
            </CardContent>
            <Button size="icon" variant="ghost" className="absolute top-2 right-2 text-red-400 hover:text-red-600" onClick={() => remove(p.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
