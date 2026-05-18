'use client';

import type { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

export function AppClerkProvider({ children }: PropsWithChildren) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    return <>{children}</>;
  }

  return <ClerkProvider publishableKey={publishableKey}>{children}</ClerkProvider>;
}
