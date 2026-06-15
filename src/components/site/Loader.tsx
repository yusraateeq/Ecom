import { useEffect, useState } from "react";
import { Gift } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const start = () => {
      setFade(true);
      setTimeout(() => setShow(false), 500);
    };
    if (document.readyState === "complete") {
      const t = setTimeout(start, 600);
      return () => clearTimeout(t);
    }
    const onLoad = () => setTimeout(start, 400);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!show) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid h-20 w-20 place-items-center">
          <span className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
          <span className="grid h-12 w-12 place-items-center rounded-xl btn-gold animate-pulse">
            <Gift className="h-6 w-6" />
          </span>
        </div>
        <div className="font-display text-lg font-semibold tracking-wide">
          Gif<span className="text-gradient-gold">to</span>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
