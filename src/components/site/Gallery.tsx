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

const gallery = [
  { src: award, span: "row-span-2" },
  { src: mug, span: "" },
  { src: bottle, span: "" },
  { src: corporate, span: "col-span-2" },
  { src: pen, span: "" },
  { src: keychain, span: "" },
  { src: tshirt, span: "row-span-2" },
  { src: mobile, span: "" },
  { src: laser, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            A Glimpse of Our <span className="text-gradient-gold">Craft</span>
          </h2>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-xl border border-border ${g.span}`}
            >
              <img
                src={g.src}
                alt="Gallery item"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
