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

export default function NewBlogPost() {
  
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);

  

  const handleDocx = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const html = await parseDocx(file);
      setBody(html);
      toast.success('DOCX imported');
    } catch {
      toast.error('Failed to parse DOCX');
    }
  };

  const submit = () => {
    if (!title || !body) {
      toast.error('Title and body required');
      return;
    }
    setSubmitting(true);
    saveItem('blog', {
      id: uuid(),
      created_at: Date.now(),
      title,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      body,
    });
    toast.success('Post added');
    router.push('/dashboard/blog');
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Blog Post</h1>
      <div className="space-y-4">
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Input placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} />
        <Textarea rows={8} placeholder="Body (HTML allowed)" value={body} onChange={e => setBody(e.target.value)} />
        <Input type="file" accept=".doc,.docx" onChange={handleDocx} />
        <Button disabled={submitting} onClick={submit} className="team7-gradient w-full">
          {submitting ? 'Saving...' : 'Save Post'}
        </Button>
      </div>
    </div>
  );
}
