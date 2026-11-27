
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      alert("Silakan isi email dan password!");
      return;
    }

    alert("Login demo berhasil!");
    router.push("/home");
  }

  return (
    <main className="min-h-screen bg-[#0A0A0D] flex items-center justify-center px-5 text-white">
      <div className="w-full max-w-md bg-[#18181B] border border-white/10 rounded-3xl p-8">

        <Link href="/home" className="text-blue-400 text-sm">
           Kembali ke beranda
        </Link>

        <div className="text-center mt-8 mb-8">
          <h1 className="text-3xl font-black">
            MAHES<span className="text-blue-400">GAMING</span>
          </h1>

          <h2 className="text-2xl font-bold mt-6">
            Welcome Back!
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Login untuk melanjutkan transaksi kamu.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="w-full bg-[#0A0A0D] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full bg-[#0A0A0D] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#258FEA] hover:bg-blue-600 py-3 rounded-xl font-bold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-7">
          Belum ingin login?{" "}
          <Link href="/home" className="text-blue-400">
            Kembali ke beranda
          </Link>
        </p>
      </div>
    </main>
  );
}
