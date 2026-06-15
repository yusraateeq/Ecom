import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { products, tagList } from "@/lib/products";

export function Gallery() {
  const [tag, setTag] = useState<string>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => {
      const tagOk = tag === "all" || p.tags.includes(tag);
      const qOk =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.desc.toLowerCase().includes(term) ||
        p.tags.some((t) => t.includes(term));
      return tagOk && qOk;
    });
  }, [tag, q]);

  return (
    <section id="gallery" className="relative bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            A Glimpse of Our <span className="text-gradient-gold">Craft</span>
          </h2>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, e.g. mug, awards…"
              className="w-full rounded-full border border-border bg-background/60 py-2.5 pl-10 pr-10 text-sm outline-none transition-colors focus:border-primary"
              aria-label="Search gallery"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-secondary"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:overflow-visible">
            {["all", ...tagList].map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-semibold capitalize transition-all ${
                  tag === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-background/40 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              No matches for <span className="text-foreground">"{q}"</span>. Try another keyword.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((g) => (
                <motion.a
                  layout
                  key={g.slug}
                  href={`/products/${g.slug}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative block aspect-square overflow-hidden rounded-xl border border-border"
                >
                  <img
                    src={g.img}
                    alt={g.name}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={600}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-display text-sm font-semibold">{g.name}</p>
                    <p className="text-[11px] text-primary">View details →</p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
