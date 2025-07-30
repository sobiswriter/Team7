"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  reg_no: string;
  first_name: string;
  last_name: string;
  role: string; // 'admin' | 'member' | etc.
  token: string;
}

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (regNo: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    console.log('AuthProvider mounted');
    const stored = typeof window !== 'undefined' ? localStorage.getItem('team7_user') : null;
    if (stored) {
      console.log('Found stored user');
      setUser(JSON.parse(stored));
    }
    // no loading flag needed
  }, []);

  const demoUsers: Array<{reg_no:string;password:string;role:string}> = [
    { reg_no: 'admin123', password: 'adminpass', role: 'admin' },
    { reg_no: 'candidate1', password: 'testpass', role: 'member' },
  ];

  const login = async (regNo: string, password: string) => {
    console.log('login called', regNo);
    const match = demoUsers.find(u => u.reg_no === regNo && u.password === password);
    if (!match) {
      toast.error('Invalid credentials (demo mode)');
      throw new Error('Invalid credentials');
    }
    const data: User = {
      id: match.reg_no,
      reg_no: match.reg_no,
      first_name: match.reg_no,
      last_name: '',
      role: match.role,
      token: 'demo-token',
    };
    setUser(data);
    localStorage.setItem('team7_user', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('team7_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
