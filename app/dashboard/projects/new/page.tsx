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

// Dynamic import of mammoth only when browser side
const parseDocx = async (file: File): Promise<string> => {
  const mammoth = await loadMammoth();
  const arrayBuffer = await file.arrayBuffer();
  const { value } = await mammoth.convertToHtml({ arrayBuffer });
  return value;
};

export default function NewProject() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [docFile, setDocFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!loading && (!user || user.role !== 'admin')) {
    router.push('/');
    return null;
  }
  if (loading) return null;

  const handleDocxUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDocFile(file);
    try {
      const html = await parseDocx(file);
      setDescription(html);
      toast.success('DOCX content imported');
    } catch (err) {
      toast.error('Failed to parse DOCX');
    }
  };

  const submit = async () => {
    if (!title || (!description && !docFile) || !github) {
      toast.error('Please fill all fields');
      return;
    }
    setSubmitting(true);
    const newProject = {
      id: uuid(),
      created_at: Date.now(),
      title,
      description,
      github,
    };
    saveItem('projects', newProject);
    toast.success('Project added');
    router.push('/dashboard/projects');
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <div className="space-y-4">
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Textarea placeholder="Description (HTML allowed)" rows={6} value={description} onChange={e => setDescription(e.target.value)} />
        <div className="flex flex-col gap-2">
          <label className="text-sm">Or upload DOCX to fill description:</label>
          <Input type="file" accept=".doc,.docx" onChange={handleDocxUpload} />
        </div>
        <Input placeholder="GitHub URL" value={github} onChange={e => setGithub(e.target.value)} />
        <Button disabled={submitting} onClick={submit} className="team7-gradient w-full">
          {submitting ? 'Saving...' : 'Save Project'}
        </Button>
      </div>
    </div>
  );
}
