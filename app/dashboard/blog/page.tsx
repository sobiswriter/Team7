"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getItems, deleteItem } from '@/lib/demoStore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, Trash2, Tag } from 'lucide-react';

interface BlogItem {
  id: string;
  created_at: number;
  title: string;
  tags: string[];
  body: string;
}

export default function BlogList() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogItem[]>([]);

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== 'admin') {
        router.push('/');
      } else {
        setPosts(getItems<BlogItem>('blog'));
      }
    }
  }, [loading, user, router]);

  const remove = (id: string) => {
    deleteItem('blog', id);
    setPosts(getItems<BlogItem>('blog'));
  };

  if (loading || !user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Button onClick={() => router.push('/dashboard/blog/new')} className="team7-gradient">
          <Plus className="w-4 h-4 mr-2" /> Add Post
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <Card key={p.id} className="glass-effect relative">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.tags.map(t => (
                  <span key={t} className="bg-team7-blue/20 text-team7-blue text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {t}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: p.body }} />
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
