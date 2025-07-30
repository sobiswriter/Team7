"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getItems, deleteItem } from '@/lib/demoStore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, Trash2, Medal } from 'lucide-react';

interface AchievementItem {
  id: string;
  created_at: number;
  title: string;
  year: string;
  member: string;
  description: string;
  proof: string;
}

export default function AchievementsList() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== 'admin') {
        router.push('/');
      } else {
        setAchievements(getItems<AchievementItem>('achievements'));
      }
    }
  }, [loading, user, router]);

  const remove = (id: string) => {
    deleteItem('achievements', id);
    setAchievements(getItems<AchievementItem>('achievements'));
  };

  if (loading || !user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Achievements</h1>
        <Button onClick={() => router.push('/dashboard/achievements/new')} className="team7-gradient">
          <Plus className="w-4 h-4 mr-2" /> Add Achievement
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map(a => (
          <Card key={a.id} className="glass-effect relative">
            <CardHeader>
              <CardTitle>{a.title}</CardTitle>
              <div className="flex items-center text-sm gap-2 mt-1 text-gray-300">
                <Medal className="w-4 h-4" /> {a.year} · {a.member}
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: a.description }} />
              {a.proof && (
                <a href={a.proof} target="_blank" rel="noopener" className="text-team7-blue underline text-sm mt-2 inline-block">Proof</a>
              )}
            </CardContent>
            <Button size="icon" variant="ghost" className="absolute top-2 right-2 text-red-400 hover:text-red-600" onClick={() => remove(a.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
