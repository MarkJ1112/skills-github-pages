import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-gray-950/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">FlexFit</Link>
        <nav className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/challenges" className="hover:text-white">Challenges</Link>
          <Link href="/ranking" className="hover:text-white">Ranking</Link>
          <Link href="/auth/signin" className="rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/20">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}