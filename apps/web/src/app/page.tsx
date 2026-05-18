import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">JOJO AI Platform</h1>
      <p className="mt-4 text-gray-600">Recruiting intelligence workspace.</p>
      <div className="mt-8">
        <Link href="/candidates" className="text-primary">
          View candidates
        </Link>
      </div>
    </main>
  );
}
