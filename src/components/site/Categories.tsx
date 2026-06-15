import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";

export function Categories() {
  return (
    <section id="categories" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Catalogue
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Explore <span className="text-gradient-gold">Product Categories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Nine specialty lines — every piece printed, engraved and packed in‑house.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((it, i) => (
            <motion.div
              key={it.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                to="/products/$slug"
                params={{ slug: it.slug }}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.13_80/0.3)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-5 pt-16">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{it.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-primary">
                    From Rs. {it.priceFrom.toLocaleString()} {it.unit}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
