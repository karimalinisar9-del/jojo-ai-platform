# JoJo AI Platform

Production-grade AI Recruiting Intelligence Platform for talent acquisition teams.

## Overview

JoJo AI Platform is an enterprise-ready recruiting intelligence system that combines:
- **AI-Powered Matching**: Intelligent algorithms to match candidates with job requirements
- **Real-time Analytics**: Track recruitment metrics and KPIs
- **Secure Collaboration**: Enterprise authentication and permission management
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Clerk Auth

## Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **pnpm**: v9.0.0 or higher
- **Clerk Account**: Sign up at https://dashboard.clerk.com

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karimalinisar9-del/jojo-ai-platform.git
   cd jojo-ai-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Clerk keys:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```
   
   Open http://localhost:3000 in your browser

## Deployment

### Environment Variables

Required for production:

| Variable | Required | Example | Where Used |
|----------|----------|---------|------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | `pk_live_...` | Frontend |
| `CLERK_SECRET_KEY` | Yes | `sk_live_...` | Backend |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | No | `/sign-in` | Routing |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | No | `/sign-up` | Routing |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | No | `/dashboard` | Redirect |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | No | `/onboarding` | Redirect |

### Local Production Build

```bash
# Install dependencies
pnpm install

# Build all apps
pnpm build

# Start production server
pnpm start

# Verify at http://localhost:3000
```

### Vercel Deployment (Recommended)

1. Push to GitHub
2. Connect repo at https://vercel.com/new
3. Set **Root Directory**: `./apps/web`
4. Add environment variables
5. Deploy and update Clerk allowed origins

### Generic Node Host

1. Install Node.js v18+ and pnpm
2. Clone repo and run `pnpm install`
3. Create `.env.production.local` with Clerk keys
4. Run `pnpm build` in `apps/web/`
5. Setup PM2 + Nginx reverse proxy
6. Configure SSL with Let's Encrypt

### Post-Deploy Checklist

- [ ] Homepage loads
- [ ] Sign-in/sign-up works
- [ ] Protected routes redirect properly
- [ ] No console errors
- [ ] Clerk allowed origins updated

### Clerk Configuration

- **Allowed Origins**: Production URL (e.g., `https://your-domain.com`)
- **After Sign-In**: `/dashboard`
- **After Sign-Up**: `/onboarding`
- **After Sign-Out**: `/`

## Development

```bash
pnpm dev        # Start dev servers
pnpm build      # Production build
pnpm type-check # Type validation
pnpm lint       # Code linting
pnpm test       # Run tests
```

## Project Structure

```
jojo-ai-platform/
├── apps/web/                  # Next.js application
│   ├── src/app/              # App Router pages
│   ├── middleware.ts         # Route protection
│   └── next.config.ts        # Configuration
├── packages/types/           # Shared types
├── packages/ui/              # Shared components
├── pnpm-workspace.yaml       # Monorepo config
└── README.md
```

## Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## License

MIT

---

**Status**: Production-Ready | **Node**: 18.17.0+ | **Next.js**: 15.0.0
