export default function HomePage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold tracking-tight">FlexFit</h1>
      <p className="mt-4 text-lg text-gray-300">
        Bodies, content, and competition. Creators earn 96%. Fans get premium access. Challenges every week.
      </p>
      <div className="mt-8 flex gap-4">
        <a className="rounded-md bg-white/10 px-5 py-3 hover:bg-white/20" href="/creators">Explore creators</a>
        <a className="rounded-md bg-indigo-600 px-5 py-3 hover:bg-indigo-500" href="/auth/signup">Become a creator</a>
      </div>
    </section>
  );
}