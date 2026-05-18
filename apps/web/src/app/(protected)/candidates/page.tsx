'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function CandidatesPage() {
const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-primary">JoJo AI Platform</h1>
              <div className="flex gap-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Dashboard
                </Link>
                <Link href="/candidates" className="text-primary font-semibold">
                  Candidates
                </Link>
                <Link href="/jobs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Jobs
                </Link>
              </div>
            </div>
            {hasClerk ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-700">Guest</div>
            )}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">Candidates</h2>
          <p className="text-gray-600">
            No candidates yet. The candidate management features are coming soon with AI-powered matching and insights.
          </p>
        </div>
      </main>
    </div>
  );
}
