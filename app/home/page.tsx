
"use client";

import Link from "next/link";




const services = [
  {
    title: "Joki Rank MLBB",
    description:
      "Tingkatkan rank Mobile Legends bersama joki berpengalaman.",
    image: "/image/JokiRank.jpg",
    href: "/orderRank",
    label: "Pesan Joki Rank",
  },
  {
    title: "Top Up Diamond MLBB",
    description:
      "Top up diamond Mobile Legends dengan mudah, aman, dan cepat.",
    image: "/image/wdp.jpg",
    href: "/orderDiamond",
    label: "Top Up Sekarang",
  },
  {
    title: "Joki MMR Hero MLBB",
    description:
      "Tingkatkan MMR hero favoritmu hingga target yang diinginkan.",
    image: "/image/JokiHero.jpg",
    href: "/orderHero",
    label: "Pesan Joki MMR",
  },
  {
    title: "VIP Mabar MLBB",
    description:
      "Nikmati pengalaman bermain bersama player pilihan.",
    image: "/image/JokiVip.jpg",
    href: "/orderVip",
    label: "Pesan VIP Mabar",
  },
];




export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0D] text-white">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-[#101015]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/home" className="text-2xl font-black tracking-wider">
            MAHES<span className="text-blue-500">GAMING</span>
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link href="/home" className="transition hover:text-blue-400">
              Beranda
            </Link>
            <a href="#services" className="transition hover:text-blue-400">
              Services
            </a>
            <Link href="/login" className="transition hover:text-blue-400">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* BANNER */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/image/banner.png"
            alt="Mobile Legends Banner"
            className="block h-auto max-h-[420px] w-full object-cover"
          />
        </div>
      </section>

        {/* SERVICES */}
<section
  id="services"
  className="mx-auto max-w-7xl scroll-mt-10 px-6 pb-24 pt-8"
>
  <div className="mb-10 text-left">
    <p className="text-sm font-bold uppercase tracking-[4px] text-blue-500">
      Our Services
    </p>

    <h2 className="mt-3 text-3xl font-black">
      Pilih Layanan Kami
    </h2>

    <p className="mt-3 text-gray-400">
      Temukan layanan Mobile Legends sesuai kebutuhanmu.
    </p>
  </div>

  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((service) => (
      <div
        key={service.href}
        className="group relative flex min-h-[450px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#18181F] shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 z-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/70 to-black/10" />

        <div className="relative z-10 p-6">
          <h3 className="text-xl font-extrabold text-white">
            {service.title}
          </h3>

          <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-300">
            {service.description}
          </p>

          <Link
            href={service.href}
            className="mt-5 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
          >
            {service.label} 
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#101015] px-6 py-8 text-center">
        <h3 className="text-lg font-black tracking-wider">
          MAHES<span className="text-blue-500">GAMING</span>
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Mobile Legends Top Up & Services
        </p>

        <p className="mt-4 text-xs text-gray-600">
          © 2026 MAHES GAMING. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
