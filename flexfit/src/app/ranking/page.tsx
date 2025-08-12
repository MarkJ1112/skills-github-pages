export default function RankingPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Leaderboard</h1>
      <p className="mt-3 text-gray-300">Top creators by score.</p>
      <ol className="mt-6 space-y-2">
        {[
          { name: 'Ava Strong', score: 1234 },
          { name: 'Max Power', score: 1190 },
          { name: 'Kai Swift', score: 980 },
        ].map((c, idx) => (
          <li key={c.name} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
            <span className="font-medium">#{idx + 1} {c.name}</span>
            <span className="text-sm text-gray-300">{c.score.toLocaleString()} pts</span>
          </li>
        ))}
      </ol>
    </section>
  );
}