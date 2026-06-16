import { useState } from "react";
import { Gift,  Send, ArrowRight, Sparkles } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-border bg-secondary/30">
      {/* gold ribbon accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg btn-gold">
                <Gift className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">
                Gif<span className="text-gradient-gold">to</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Thoughtfully curated gifts, wrapped with care and sent wherever they need to go.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Gift Boxes
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Corporate Gifting
                </a>
              </li>
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
              Studio
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Gifting ideas and early access to new collections, once in a while.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md btn-gold transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            © {new Date().getFullYear()} Gifto Studio. Crafted with care.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}