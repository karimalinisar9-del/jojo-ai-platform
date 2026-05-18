import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'JOJO - AI Recruiting Intelligence Platform',
  description: 'Intelligently discover, analyze, and apply to jobs across multiple sources with AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
