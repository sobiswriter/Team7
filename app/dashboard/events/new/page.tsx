"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import { saveItem } from '@/lib/demoStore';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { loadMammoth } from '@/lib/mammothLoader';

const parseDocx = async (file: File): Promise<string> => {
  const mammoth = await loadMammoth();
  const ab = await file.arrayBuffer();
  const { value } = await mammoth.convertToHtml({ arrayBuffer: ab });
  return value;
};

export default function NewEvent() {
  
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  

  const handleDocx = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const html = await parseDocx(file);
      setDescription(html);
      toast.success('DOCX imported');
    } catch {
      toast.error('Failed to parse DOCX');
    }
  };

  const submit = () => {
    if (!title || !date || !venue || !description) {
      toast.error('Fill all fields');
      return;
    }
    setSubmitting(true);
    saveItem('events', {
      id: uuid(),
      created_at: Date.now(),
      title,
      date,
      venue,
      description,
    });
    toast.success('Event added');
    router.push('/dashboard/events');
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Event</h1>
      <div className="space-y-4">
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <div className="flex gap-4">
          <Input type="date" className="w-1/2" value={date} onChange={e => setDate(e.target.value)} />
          <Input placeholder="Venue" className="w-1/2" value={venue} onChange={e => setVenue(e.target.value)} />
        </div>
        <Textarea rows={6} placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <Input type="file" accept=".doc,.docx" onChange={handleDocx} />
        <Button disabled={submitting} onClick={submit} className="team7-gradient w-full">
          {submitting ? 'Saving...' : 'Save Event'}
        </Button>
      </div>
    </div>
  );
}
