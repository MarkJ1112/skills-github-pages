export default function SignUpPage() {
  return (
    <section className="mx-auto max-w-md">
      <h1 className="text-2xl font-semibold">Create your account</h1>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-300">Username</label>
          <input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="flexqueen" />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Password</label>
          <input type="password" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <button className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium hover:bg-indigo-500" type="submit">Create account</button>
      </form>
      <p className="mt-4 text-sm text-gray-400">Already have an account? <a className="text-indigo-400 hover:underline" href="/auth/signin">Sign in</a></p>
    </section>
  );
}