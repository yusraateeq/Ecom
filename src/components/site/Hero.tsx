import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { waLink } from "./WhatsAppButton";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Premium Customization Studio
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Gifts that{" "}
            <span className="text-gradient-gold">tell your story</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Custom printing, laser engraving and corporate giveaways crafted with precision.
            From a single mug to a thousand-piece campaign — we deliver brand-perfect gifts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full btn-gold btn-gold-hover px-6 py-3 text-sm font-semibold"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-border pt-6">
            {[
              { n: "5K+", l: "Orders Delivered" },
              { n: "300+", l: "Happy Brands" },
              { n: "48h", l: "Avg. Turnaround" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-gradient-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={hero}
              alt="Custom printed mug, bottle, keychain, pen and award"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
