"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    setLoading(true);
    try {
      await login(regNo, password);
      toast.success('Logged in');
      router.push('/');
    } catch (err: any) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-team7-darkBg pt-20 px-4">
      <div className="w-full max-w-md bg-white/5 rounded-lg p-8 glass-effect border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <Input placeholder="Registration Number" value={regNo} onChange={(e)=>setRegNo(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Button disabled={loading} onClick={submit} className="w-full team7-gradient hover:opacity-90">
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </div>
      </div>
    </div>
  );
}
