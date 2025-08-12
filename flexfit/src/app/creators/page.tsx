export default function CreatorsPage() {
  const creators = [
    { id: '1', name: 'Ava Strong', price: 9.99 },
    { id: '2', name: 'Max Power', price: 7.99 },
    { id: '3', name: 'Kai Swift', price: 5.99 },
  ];
  return (
    <section>
      <h1 className="text-2xl font-semibold">Creators</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((c) => (
          <a key={c.id} href={`/creator/${c.id}`} className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10">
            <div className="h-32 w-full rounded-md bg-gradient-to-br from-indigo-600/40 to-fuchsia-600/40" />
            <div className="mt-3 flex items-center justify-between">
              <h2 className="font-medium">{c.name}</h2>
              <span className="text-sm text-gray-300">${c.price}/mo</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}