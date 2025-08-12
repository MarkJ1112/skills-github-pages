import './globals.css';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'FlexFit',
  description: 'Creators flex. Fans subscribe. Challenges compete.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-950 text-white">
      <body className="min-h-full antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}