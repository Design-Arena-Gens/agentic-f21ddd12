import { CapabilityGrid } from "@/components/CapabilityGrid";
import { ChatWindow } from "@/components/ChatWindow";
import { Hero } from "@/components/Hero";
import { MenuSpotlight } from "@/components/MenuSpotlight";

export default function Home() {
  return (
    <main className="bg-grid">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12">
        <Hero />

        <section
          id="chat"
          className="grid gap-8 rounded-4xl border border-neutral-200 bg-white/80 p-8 shadow-2xl shadow-red/10 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-red">Live demo</p>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Chat with McAssist and explore the McDonald&apos;s menu like a pro
            </h2>
            <p className="text-sm text-neutral-600">
              Ask about nutrition, discover pairings, surface app deals, and get curated meal planning that
              feels like talking to your favorite crew member. Every response is grounded in McDonald&apos;s
              product knowledge.
            </p>
            <div className="hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600 md:block">
              <p className="font-semibold text-neutral-800">Try asking:</p>
              <ul className="mt-2 space-y-1">
                <li>• “Build me a late-night order under 1200 calories.”</li>
                <li>• “Compare Big Mac vs Quarter Pounder nutrition.”</li>
                <li>• “What&apos;s a sweet treat combo for two?”</li>
              </ul>
            </div>
          </div>
          <div className="h-[520px]">
            <ChatWindow />
          </div>
        </section>

        <CapabilityGrid />
        <MenuSpotlight />

        <section className="rounded-4xl border border-red/20 bg-gradient-to-br from-red/80 via-red to-golden/80 p-8 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Launch-ready</p>
              <h2 className="text-4xl font-bold leading-tight">Roll McAssist into your guest journey</h2>
              <p className="text-sm text-white/80">
                Deploy on web, mobile, kiosk, or voice endpoints. Plug in real-time inventory, connect to the
                McDonald&apos;s app API, and enrich brand loyalty flows with an always-on assistant that
                keeps your guests smiling.
              </p>
            </div>
            <div className="space-y-3 rounded-3xl bg-white/10 p-6 text-sm text-white/80">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Integration ready</p>
                <p className="font-semibold text-white">Open APIs (menu, inventory, loyalty)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Rollout</p>
                <p className="font-semibold text-white">Pilot in 4 weeks · Full deployment in 90 days</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Experience</p>
                <p className="font-semibold text-white">
                  Optimized for curbside, drive-thru prompts, kiosks, and in-app messaging
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-center text-xs text-neutral-500">
          Built by McAssist Labs · Inspired by the Golden Arches · © {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
