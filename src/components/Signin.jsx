
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demonstration only.
    // Connect this form to your authentication backend.
    alert("Sign-in form submitted. Authentication is not connected yet.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f9f7] px-5 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 sm:p-9">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-[#105638]"
        >
          <House size={28} />
          <span className="font-serif text-2xl font-bold">Nyumba</span>
        </Link>

        <h1 className="mb-2 text-3xl font-semibold text-gray-900">
          Welcome back
        </h1>

        <p className="mb-7 text-sm text-gray-500">
          Sign in to continue to your Nyumba account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="signin-email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>

            <input
              id="signin-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#105638]"
            />
          </div>

          <div>
            <label
              htmlFor="signin-password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="signin-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#105638]"
            />
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#105638] font-semibold text-white transition-colors hover:bg-[#0b422b]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          New to Nyumba?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#105638] hover:underline"
          >
            Create an account
          </Link>
        </p>

        <Link
          to="/"
          className="mt-6 block text-center text-sm text-gray-500 hover:text-[#105638]"
        >
          ← Back to homepage
        </Link>
      </div>
    </main>
  );
};

export default SignIn;
