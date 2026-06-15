import { motion } from "framer-motion";
import mug from "@/assets/g-mug.jpg";
import bottle from "@/assets/g-bottle.jpg";
import keychain from "@/assets/g-keychain.jpg";
import pen from "@/assets/g-pen.jpg";
import award from "@/assets/g-award.jpg";
import tshirt from "@/assets/g-tshirt.jpg";
import mobile from "@/assets/g-mobile.jpg";
import corporate from "@/assets/g-corporate.jpg";
import laser from "@/assets/g-laser.jpg";

const items = [
  { img: mug, name: "Customized Mugs", desc: "Ceramic, magic & enamel" },
  { img: bottle, name: "Water Bottles", desc: "Steel, sipper & sport" },
  { img: keychain, name: "Keychains", desc: "Metal, acrylic & wood" },
  { img: pen, name: "Pens", desc: "Engraved & branded" },
  { img: award, name: "Award Shields", desc: "Crystal, wood & acrylic" },
  { img: tshirt, name: "T-Shirts", desc: "DTF, sublimation & embroidery" },
  { img: mobile, name: "Mobile Covers", desc: "Hard & silicone prints" },
  { img: corporate, name: "Corporate Gifts", desc: "Curated gift sets" },
  { img: laser, name: "Laser Engraving", desc: "Wood, metal & leather" },
];

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
          {items.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.13_80/0.3)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-5 pt-16">
                <h3 className="font-display text-xl font-semibold">{it.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
