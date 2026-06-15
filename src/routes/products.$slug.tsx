import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Send } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton, waLink } from "@/components/site/WhatsAppButton";
import { findProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = findProduct(params.slug);
    const title = p ? `${p.name} — Gifto` : "Product — Gifto";
    const desc = p?.longDesc ?? "Customized gifts and printing.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-4xl font-bold">Product not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-full btn-gold px-5 py-2.5 text-sm font-semibold">
          Back home
        </Link>
      </div>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const quoteMsg = `Hi! I'd like a quote for "${product.name}". Please share details and bulk pricing.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to catalogue
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img
                  src={product.img}
                  alt={product.name}
                  width={1200}
                  height={900}
                  decoding="async"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore – React 19 supports fetchpriority
                  fetchpriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2">
                {product.tags.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium capitalize text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-muted-foreground">{product.longDesc}</p>

              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Starting From
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-gradient-gold">
                  Rs. {product.priceFrom.toLocaleString()}
                  <span className="ml-2 text-sm font-medium text-muted-foreground">
                    – Rs. {product.priceTo.toLocaleString()} {product.unit}
                  </span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Final pricing depends on quantity, material and customization complexity.
                </p>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink(quoteMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full btn-gold btn-gold-hover px-6 py-3 text-sm font-semibold"
                >
                  Request Quote <Send className="h-4 w-4" />
                </a>
                <a
                  href={waLink(quoteMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              You may also <span className="text-gradient-gold">like</span>
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/products/$slug"
                  params={{ slug: r.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold">{r.name}</h3>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
