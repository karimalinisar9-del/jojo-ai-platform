import type { Metadata } from 'next';
import { AppClerkProvider } from '@/components/clerk-provider';
import { Providers } from '@/components/providers';
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
    <AppClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </AppClerkProvider>
  );
}
