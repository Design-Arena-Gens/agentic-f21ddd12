const capabilities = [
  {
    title: "Menu intelligence",
    description:
      "Surface menu favorites, discover new items, compare nutrition facts, and tailor picks to your cravings in seconds.",
    highlights: ["Ask in plain English", "Match by flavor, mood, or dietary goals", "Detailed nutrition callouts"]
  },
  {
    title: "Deal hunter",
    description:
      "Stay on top of app exclusives, national promotions, and loyalty bonuses you can unlock right now.",
    highlights: ["Automatic promo matching", "App + kiosk friendly", "Tap-to-add suggestions"]
  },
  {
    title: "Moments-to-meals planning",
    description:
      "Get curated meal plans for breakfast runs, family nights, sweet treat cravings, or post-game celebrations.",
    highlights: ["Smart bundle builder", "Swap any item instantly", "Calorie and price transparency"]
  },
  {
    title: "Crew-style hospitality",
    description:
      "McAssist speaks in the iconic crew member tone, knows menu trivia, and routes you to the right McDelivery partners.",
    highlights: ["Friendly, on-brand tone", "Trusted brand FAQ", "Available 24/7"]
  }
];

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-red">Capabilities</p>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            What McAssist delivers for every guest moment
          </h2>
        </div>
        <p className="max-w-xl text-sm text-neutral-600">
          McAssist is trained on iconic menu classics, seasonal drops, nutrition data, and guest insights to
          act like a personalized crew companion across web, kiosks, and mobile.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg shadow-red/5 transition hover:-translate-y-1 hover:border-red hover:shadow-red/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red/0 via-transparent to-golden/10 opacity-0 transition group-hover:opacity-100" />
            <div className="relative space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">{capability.title}</h3>
              <p className="text-sm text-neutral-600">{capability.description}</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                {capability.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
