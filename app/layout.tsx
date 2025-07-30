import './globals.css';
import Header from '@/components/layout/Header';
import { AuthProvider } from '@/contexts/AuthContext';
import type { Metadata } from 'next';
import { Inter, Poppins, Fira_Code } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Team7 - Technical Club',
  description: 'Premium technical club for developers, innovators, and tech enthusiasts',
  keywords: 'technical club, programming, development, technology, innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-inter bg-background text-foreground antialiased`}>
        <AuthProvider>
          <Header />
        {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}