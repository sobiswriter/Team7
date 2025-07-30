"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getItems, deleteItem } from '@/lib/demoStore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, Trash2, Calendar, MapPin } from 'lucide-react';

interface EventItem {
  id: string;
  created_at: number;
  title: string;
  date: string; // ISO
  venue: string;
  description: string;
}

export default function EventsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== 'admin') {
        router.push('/');
      } else {
        setEvents(getItems<EventItem>('events'));
      }
    }
  }, [loading, user, router]);

  const remove = (id: string) => {
    deleteItem('events', id);
    setEvents(getItems<EventItem>('events'));
  };

  if (loading || !user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Events</h1>
        <Button onClick={() => router.push('/dashboard/events/new')} className="team7-gradient">
          <Plus className="w-4 h-4 mr-2" /> Add Event
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(ev => (
          <Card key={ev.id} className="glass-effect relative">
            <CardHeader>
              <CardTitle>{ev.title}</CardTitle>
              <div className="flex items-center text-sm text-gray-300 gap-2 mt-1">
                <Calendar className="w-4 h-4" /> {new Date(ev.date).toLocaleDateString()}
                <MapPin className="w-4 h-4 ml-4" /> {ev.venue}
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: ev.description }} />
            </CardContent>
            <Button size="icon" variant="ghost" className="absolute top-2 right-2 text-red-400 hover:text-red-600" onClick={() => remove(ev.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
