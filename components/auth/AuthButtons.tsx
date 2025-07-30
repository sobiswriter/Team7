"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Settings, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AuthButtonsProps {
  className?: string;
  mobile?: boolean;
  onMobileClose?: () => void;
}

export default function AuthButtons({ className = "", mobile = false, onMobileClose }: AuthButtonsProps) {
  const { user, loading, logout } = useAuth();

  // Debug logging
  console.log('AuthButtons render - user:', user, 'loading:', loading);

  if (loading) {
    return mobile ? null : <div className="text-gray-400 text-sm">Loading...</div>;
  }

  if (!user) {
    // Not logged in - show Join Team7 and Login
    return (
      <div className={className}>
        <Button
          asChild
          variant="outline"
          size="sm"
          className={`border-team7-blue text-team7-blue hover:bg-team7-blue hover:text-white transition-all duration-300 ${mobile ? 'w-full' : ''}`}
          onClick={onMobileClose}
        >
          <Link href="/join">Join Team7</Link>
        </Button>
        <Button 
          asChild 
          size="sm" 
          className={`team7-gradient hover:opacity-90 ${mobile ? 'w-full' : ''}`}
          onClick={onMobileClose}
        >
          <Link href="/login">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Link>
        </Button>
      </div>
    );
  }

  // Logged in - show Dashboard (for admins) and Logout
  return (
    <div className={className}>
      {user.role === 'admin' && (
        <Button 
          asChild 
          size="sm" 
          className={`team7-gradient hover:opacity-90 ${mobile ? 'w-full' : ''}`}
          onClick={onMobileClose}
        >
          <Link href="/dashboard">
            <Settings className="w-4 h-4 mr-2" />
            Dashboard
          </Link>
        </Button>
      )}
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          logout();
          if (onMobileClose) onMobileClose();
        }}
        className={`border-red-500 text-red-400 hover:bg-red-500 hover:text-white ${mobile ? 'w-full' : ''}`}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}
