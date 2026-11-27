
"use client";

import Link from "next/link";
import { useState } from "react";

const ranks = [
  "Warrior",
  "Elite",
  "Master",
  "Grandmaster",
  "Epic",
  "Legend",
  "Mythic",
  "Mythical Honor",
  "Mythical Glory",
  "Mythical Immortal",
];

export default function RankOrderPage() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [currentRank, setCurrentRank] = useState("");
  const [targetRank, setTargetRank] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !userId.trim() ||
      !serverId.trim() ||
      !currentRank ||
      !targetRank
    ) {
      alert("Isi semua data terlebih dahulu!");
      return;
    }

    if (currentRank === targetRank) {
      alert("Rank tujuan harus berbeda dari rank saat ini.");
      return;
    }

    alert(
      `Pesanan Joki Rank
User ID: ${userId}
Server ID: ${serverId}
Rank Saat Ini: ${currentRank}
Target Rank: ${targetRank}
Catatan: ${note || "-"}

Ini masih demo, belum dikirim ke server.`
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0D] text-white">
      <nav className="border-b border-white/10 bg-[#111116] px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/home" className="text-2xl font-black text-blue-500">
            MAHESGAMING
          </Link>

          <Link
            href="/home"
            className="text-sm text-gray-300 hover:text-blue-400"
          >
            Kembali ke beranda
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="font-semibold tracking-widest text-blue-400">
          ORDER SERVICE
        </p>

        <h1 className="mt-2 text-3xl font-black md:text-4xl">
          Joki Rank MLBB
        </h1>

        <p className="mt-3 text-gray-400">
          Isi data akun dan tentukan target rank kamu.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-[#18181F] p-6 md:p-8"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold">
              User ID
            </label>
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Masukkan User ID"
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Server ID
            </label>
            <input
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              placeholder="Masukkan Server ID"
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Rank Saat Ini
            </label>
            <select
              value={currentRank}
              onChange={(e) => setCurrentRank(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Pilih rank saat ini</option>
              {ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Target Rank
            </label>
            <select
              value={targetRank}
              onChange={(e) => setTargetRank(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Pilih target rank</option>
              {ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Catatan Tambahan
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: Utamakan bermain solo rank"
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-700"
          >
            Buat Pesanan
          </button>
        </form>
      </section>
    </main>
  );
}
