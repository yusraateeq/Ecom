import { motion } from "framer-motion";
import { Award, Truck, Palette, Shield } from "lucide-react";

const features = [
  { Icon: Palette, title: "Custom Designs", desc: "Free design support from our in-house creative team." },
  { Icon: Award, title: "Premium Quality", desc: "Top-grade materials and precision printing on every order." },
  { Icon: Truck, title: "Nationwide Delivery", desc: "Fast, tracked shipping across the country." },
  { Icon: Shield, title: "Satisfaction Promise", desc: "Approve a proof before we go to production." },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Gifto</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Crafted with <span className="text-gradient-gold">precision</span>, delivered with care.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl btn-gold">
                <f.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
