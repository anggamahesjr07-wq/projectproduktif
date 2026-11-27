
"use client";

import { useState } from "react";
import Link from "next/link";

const diamondPackages = [
  { amount: 86, price: 20000 },
  { amount: 172, price: 40000 },
  { amount: 257, price: 60000 },
  { amount: 344, price: 80000 },
  { amount: 514, price: 120000 },
  { amount: 706, price: 160000 },
];

const paymentMethods = ["QRIS", "DANA", "GoPay", "OVO"];

export default function OrderDiamondPage() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(86);
  const [payment, setPayment] = useState("QRIS");

  const selectedDiamond = diamondPackages.find(
    (item) => item.amount === selectedPackage
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleOrder = () => {
    if (!userId || !serverId) {
      alert("Silakan isi User ID dan Server ID terlebih dahulu!");
      return;
    }

    if (!selectedDiamond) {
      alert("Silakan pilih paket diamond!");
      return;
    }

    alert(
      `Pesanan berhasil dibuat!\n\n` +
      `Layanan: Top Up Diamond MLBB\n` +
      `User ID: ${userId}\n` +
      `Server ID: ${serverId}\n` +
      `Diamond: ${selectedDiamond.amount}\n` +
      `Total: ${formatPrice(selectedDiamond.price)}\n` +
      `Pembayaran: ${payment}\n\n` +
      `Ini masih merupakan simulasi pemesanan.`
    );
  };

  return (
    <main className="min-h-screen bg-[#0A0A0D] text-white">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-[#101015]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/home" className="text-2xl font-black">
            MAHES<span className="text-blue-500">GAMING</span>
          </Link>

          <Link
            href="/home"
            className="text-sm font-semibold text-gray-300 transition hover:text-blue-400"
          >
            Kembali ke beranda
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-blue-500">
            MLBB Service
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            Order Diamond
          </h1>

          <p className="mt-3 text-gray-400">
            Isi data akun dan pilih paket diamond yang kamu inginkan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* FORM ORDER */}
          <div className="rounded-2xl border border-white/10 bg-[#18181F] p-6">
            <h2 className="mb-6 text-xl font-bold">
              Data Pemesanan
            </h2>

            {/* USER ID */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                User ID
              </label>

              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Masukkan User ID"
                className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* SERVER ID */}
            <div className="mb-7">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Server ID
              </label>

              <input
                type="text"
                value={serverId}
                onChange={(e) => setServerId(e.target.value)}
                placeholder="Masukkan Server ID"
                className="w-full rounded-xl border border-white/10 bg-[#0D0D12] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* PAKET DIAMOND */}
            <h2 className="mb-4 text-lg font-bold">
              Pilih Paket Diamond
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {diamondPackages.map((item) => (
                <button
                  key={item.amount}
                  type="button"
                  onClick={() => setSelectedPackage(item.amount)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selectedPackage === item.amount
                      ? "border-blue-500 bg-blue-600/20"
                      : "border-white/10 bg-[#0D0D12] hover:border-blue-500/50"
                  }`}
                >
                  <p className="text-lg font-bold">
                    {item.amount} 💎
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    {formatPrice(item.price)}
                  </p>

                  {selectedPackage === item.amount && (
                    <p className="mt-2 text-xs font-bold text-blue-400">
                       Dipilih
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* PAYMENT AND SUMMARY */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#18181F] p-6">
              <h2 className="mb-5 text-xl font-bold">
                Metode Pembayaran
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPayment(method)}
                    className={`rounded-xl border p-4 font-semibold transition ${
                      payment === method
                        ? "border-blue-500 bg-blue-600/20 text-blue-400"
                        : "border-white/10 bg-[#0D0D12] text-gray-300 hover:border-blue-500/50"
                    }`}
                  >
                    {method}

                    {payment === method && (
                      <span className="ml-2"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SUMMARY */}
            <div className="rounded-2xl border border-white/10 bg-[#18181F] p-6">
              <h2 className="mb-5 text-xl font-bold">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Layanan</span>
                  <span className="font-semibold">
                    Top Up Diamond
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">User ID</span>
                  <span className="font-semibold">
                    {userId || "-"}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Server ID</span>
                  <span className="font-semibold">
                    {serverId || "-"}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Paket</span>
                  <span className="font-semibold">
                    {selectedPackage} Diamond
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Pembayaran</span>
                  <span className="font-semibold">{payment}</span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between gap-3">
                    <span className="font-bold">Total Harga</span>
                    <span className="text-lg font-black text-blue-400">
                      {selectedDiamond
                        ? formatPrice(selectedDiamond.price)
                        : "-"}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleOrder}
                className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Buat Pesanan Sekarang
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Pastikan User ID dan Server ID sudah benar sebelum
                membuat pesanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#101015] px-6 py-7 text-center">
        <p className="font-black">
          MAHES<span className="text-blue-500">GAMING</span>
        </p>

        <p className="mt-2 text-xs text-gray-500">
          © 2026 MAHESGAMING. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
