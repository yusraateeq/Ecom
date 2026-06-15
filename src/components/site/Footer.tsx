import { Gift, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg btn-gold">
            <Gift className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold">
            Gif<span className="text-gradient-gold">to</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gifto Studio. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
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
    </footer>
  );
}
