import { menu, specials } from "@/lib/menu";

const spotlightItems = menu
  .filter((item) => ["Burgers", "Chicken & Fish", "Desserts", "Breakfast"].includes(item.category))
  .slice(0, 8);

export function MenuSpotlight() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-red">Menu spotlight</p>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Trending cravings McAssist can riff on
          </h2>
        </div>
        <div className="rounded-3xl border border-red bg-red/10 px-4 py-3 text-sm text-red">
          <p className="font-semibold">Today&apos;s popular app deal</p>
          <p className="text-neutral-700">
            {specials[0].title}: {specials[0].details}
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {spotlightItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-red hover:shadow-red/10"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-red/10 px-3 py-1 text-xs font-semibold text-red">
                {item.category}
              </span>
              <span className="text-xs font-semibold text-neutral-500">{item.calories} cal</span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
            <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{item.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-neutral-900">${item.price.toFixed(2)}</span>
              <span className="text-xs uppercase tracking-wide text-neutral-400">
                {item.tags?.slice(0, 2).join(" • ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
