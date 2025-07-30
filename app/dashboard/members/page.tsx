"use client";
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function AdminMembersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const admins = [
    {
      reg_no: 'admin123',
      name: 'Admin User',
    },
    // Add more demo admins here if desired
  ];

  if (!loading && (!user || user.role !== 'admin')) {
    router.push('/');
    return null;
  }
  if (loading) return null;

  return (
    <div className="min-h-screen pt-24 px-4 bg-team7-darkBg text-white">
      <h1 className="text-2xl font-bold mb-6">Admin Users</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {admins.map(a => (
          <Card key={a.reg_no} className="glass-effect">
            <CardHeader className="flex items-center space-x-4">
              <div className="w-10 h-10 team7-gradient rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <CardTitle>{a.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Reg No: {a.reg_no}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
