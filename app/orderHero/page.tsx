
"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroOrderPage() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [hero, setHero] = useState("");
  const [currentMmr, setCurrentMmr] = useState("");
  const [targetMmr, setTargetMmr] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !userId.trim() ||
      !serverId.trim() ||
      !hero.trim() ||
      !currentMmr.trim() ||
      !targetMmr.trim()
    ) {
      alert("Isi semua data terlebih dahulu!");
      return;
    }

    if (
      !/^[0-9]+$/.test(currentMmr) ||
      !/^[0-9]+$/.test(targetMmr)
    ) {
      alert("MMR hanya boleh diisi dengan angka.");
      return;
    }

    if (Number(targetMmr) <= Number(currentMmr)) {
      alert("Target MMR harus lebih tinggi dari MMR saat ini.");
      return;
    }

    alert(
      `Pesanan Joki MMR Hero
User ID: ${userId}
Server ID: ${serverId}
Hero: ${hero}
MMR Saat Ini: ${currentMmr}
Target MMR: ${targetMmr}
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
          Joki MMR Hero MLBB
        </h1>

        <p className="mt-3 text-gray-400">
          Tentukan hero dan target MMR yang ingin kamu capai.
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
              Nama Hero
            </label>
            <input
              value={hero}
              onChange={(e) => setHero(e.target.value)}
              placeholder="Contoh: Fanny, Ling, Gusion"
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              MMR Saat Ini
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={currentMmr}
              onChange={(e) => setCurrentMmr(e.target.value)}
              placeholder="Masukkan MMR saat ini"
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Target MMR
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={targetMmr}
              onChange={(e) => setTargetMmr(e.target.value)}
              placeholder="Masukkan target MMR"
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Catatan Tambahan
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Catatan untuk pesanan kamu"
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
