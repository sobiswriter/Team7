"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import { useAuth } from '@/contexts/AuthContext';
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

export default function NewAchievement() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [member, setMember] = useState('');
  const [description, setDescription] = useState('');
  const [proof, setProof] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!loading && (!user || user.role !== 'admin')) {
    router.push('/');
    return null;
  }
  if (loading) return null;

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
    if (!title || !year || !member || !description) {
      toast.error('Please fill all required fields');
      return;
    }
    setSubmitting(true);
    saveItem('achievements', {
      id: uuid(),
      created_at: Date.now(),
      title,
      year,
      member,
      description,
      proof,
    });
    toast.success('Achievement added');
    router.push('/dashboard/achievements');
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Achievement</h1>
      <div className="space-y-4">
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <div className="flex gap-4">
          <Input placeholder="Year" className="w-1/2" value={year} onChange={e => setYear(e.target.value)} />
          <Input placeholder="Member Name" className="w-1/2" value={member} onChange={e => setMember(e.target.value)} />
        </div>
        <Textarea rows={6} placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <Input type="file" accept=".doc,.docx" onChange={handleDocx} />
        <Input placeholder="Proof URL (optional)" value={proof} onChange={e => setProof(e.target.value)} />
        <Button disabled={submitting} onClick={submit} className="team7-gradient w-full">
          {submitting ? 'Saving...' : 'Save Achievement'}
        </Button>
      </div>
    </div>
  );
}
