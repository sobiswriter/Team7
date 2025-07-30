"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { apiFetch } from '@/lib/api';
import { toast } from 'sonner';

export default function JoinPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    regNo: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    residency: 'hosteler',
    hostel: 'BH1',
    place: 'Jalandhar',
    course: '',
    courseCode: '',
    branch: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      toast.success('Registration successful. Please login.');
      router.push('/login');
    } catch (err: any) {
      toast.error(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-team7-darkBg pt-20 px-4">
      <div className="w-full max-w-md bg-white/5 rounded-lg p-8 glass-effect border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Join Team7</h1>
        <div className="space-y-4">
          <Input name="regNo" placeholder="Registration Number" value={form.regNo} onChange={handleChange} />
          <div className="flex gap-4">
            <Input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <Input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
          </div>
          <div className="flex gap-4">
            <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
          </div>
          <div className="flex gap-4">
            <select name="residency" className="w-1/2 bg-transparent border border-white/20 rounded-md px-3 py-2 text-white" value={form.residency} onChange={handleChange}>
              <option value="hosteler">Hosteler</option>
              <option value="day-scholar">Day Scholar</option>
            </select>
            {form.residency === 'hosteler' ? (
              <select name="hostel" className="w-1/2 bg-transparent border border-white/20 rounded-md px-3 py-2 text-white" value={form.hostel} onChange={handleChange}>
                {['BH1','BH2','BH3','BH4','BH5','BH6','GH1','GH2','GH3','GH4','GH5','GH6'].map(h => (<option key={h} value={h}>{h}</option>))}
              </select>
            ) : (
              <select name="place" className="w-1/2 bg-transparent border border-white/20 rounded-md px-3 py-2 text-white" value={form.place} onChange={handleChange}>
                {['Jalandhar','Phagwara','Law Gate'].map(p => (<option key={p} value={p}>{p}</option>))}
              </select>
            )}
          </div>
          <Input name="course" placeholder="Course (e.g. B.Tech)" value={form.course} onChange={handleChange} />
          <div className="flex gap-4">
            <Input name="courseCode" placeholder="Course Code" value={form.courseCode} onChange={handleChange} />
            <Input name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} />
          </div>
          <Button disabled={loading} onClick={submit} className="w-full team7-gradient hover:opacity-90">
            {loading ? 'Registering...' : 'Join'}
          </Button>
        </div>
      </div>
    </div>
  );
}
