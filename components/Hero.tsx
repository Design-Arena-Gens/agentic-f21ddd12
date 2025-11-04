import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-4xl border border-neutral-200 bg-white px-8 py-12 shadow-2xl shadow-red/10">
      <div className="absolute inset-0 bg-gradient-to-r from-red/10 via-transparent to-[#ffc72c]/20" />
      <div className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1 text-sm font-semibold text-red">
              <span className="inline-flex h-2 w-2 rounded-full bg-red" /> Powered by McDonald&apos;s knowledge
            </p>
            <h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
              Meet McAssist — an AI agent built for every McDonald&apos;s craving
            </h1>
            <p className="text-lg text-neutral-600">
              Discover menu pairings, plan family nights, uncover app deals, compare nutrition, and chat
              with a crew member that never clocks out.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#chat"
                className="inline-flex items-center justify-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red/30 transition hover:bg-[#b71f15]"
              >
                Chat with McAssist
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-red hover:text-red"
              >
                Explore capabilities
              </Link>
            </div>
          </div>
          <div className="relative hidden h-72 w-full max-w-sm rounded-3xl bg-gradient-to-br from-golden to-red/80 p-1 shadow-2xl shadow-red/20 md:block">
            <div className="h-full rounded-3xl bg-white/90 p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-500">AI Simulation</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-2xl bg-neutral-100 p-4">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500">Guest</p>
                  <p className="mt-1 font-semibold text-neutral-800">What&apos;s a fun combo for movie night?</p>
                </div>
                <div className="rounded-2xl bg-red/10 p-4">
                  <p className="text-[11px] uppercase tracking-wider text-red">McAssist</p>
                  <p className="mt-1 text-neutral-700">
                    Try pairing a 10-piece McNuggets box with large fries, sweet & sour sauce, and split an
                    OREO McFlurry for dessert. Ready in under 10 minutes.
                  </p>
                </div>
                <div className="rounded-2xl bg-neutral-100 p-4">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500">Guest</p>
                  <p className="mt-1 font-semibold text-neutral-800">Love it! Any deals?</p>
                </div>
                <div className="rounded-2xl bg-red/10 p-4">
                  <p className="text-[11px] uppercase tracking-wider text-red">McAssist</p>
                  <p className="mt-1 text-neutral-700">
                    Check the app for the “2 for $6 Mix & Match” — add a Quarter Pounder for later and save.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
