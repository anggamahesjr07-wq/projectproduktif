
"use client";

import Link from "next/link";
import { useState } from "react";

const durations = [
  { label: "1 Match", value: "1 match" },
  { label: "2 Match", value: "2 match" },
  { label: "3 Match", value: "3 match" },
  { label: "4 Match", value: "4 match" },
  { label: "5 Match", value: "5 match" },
];

const roles = [
  "Bebas",
  "Gold Lane",
  "EXP Lane",
  "Mid Lane",
  "Jungler",
  "Roamer",
];

export default function VipOrderPage() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [duration, setDuration] = useState("1 match");
  const [role, setRole] = useState("Bebas");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!userId.trim() || !serverId.trim()) {
      alert("Isi data terlebih dahulu!");
      return;
    }

    alert(
      `Pesanan VIP Mabar
User ID: ${userId}
Server ID: ${serverId}
Durasi: ${duration}
Role: ${role}
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
          VIP Mabar MLBB
        </h1>

        <p className="mt-3 text-gray-400">
          Pilih jumlah match dan role untuk sesi mabar kamu.
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
              Durasi Mabar
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            >
              {durations.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Role yang Diinginkan
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 outline-none focus:border-blue-500"
            >
              {roles.map((item) => (
                <option key={item} value={item}>
                  {item}
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
              placeholder="Contoh: Ingin mabar mode ranked"
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
