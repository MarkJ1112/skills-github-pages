export default function ChallengesPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Challenges</h1>
      <p className="mt-3 text-gray-300">Weekly competitions. Enter with a post and climb the leaderboard.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h2 className="font-medium">Challenge #{i}</h2>
            <p className="mt-1 text-sm text-gray-400">Starts soon. Ends in 7 days.</p>
            <a className="mt-3 inline-block rounded-md bg-indigo-600 px-3 py-1.5 text-sm hover:bg-indigo-500" href={`/challenges/${i}`}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
}