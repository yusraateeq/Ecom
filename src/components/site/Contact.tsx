import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { waLink } from "./WhatsAppButton";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `New inquiry\n\nName: ${r.data.name}\nEmail: ${r.data.email}\nPhone: ${r.data.phone}\n\n${r.data.message}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let's create something <span className="text-gradient-gold">memorable</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Send a request and our team will respond within a few hours — or message us directly on WhatsApp for an instant quote.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { Icon: Phone, label: "+92 300 1234567", href: "tel:+923001234567" },
                { Icon: Mail, label: "hello@gifto.studio", href: "mailto:hello@gifto.studio" },
                { Icon: MapPin, label: "Karachi, Pakistan", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 text-foreground/90 hover:text-primary">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card">
                    <c.Icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="font-medium">{c.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <div className="mt-5">
              <Field label="Phone / WhatsApp" name="phone" error={errors.phone} />
            </div>
            <div className="mt-5">
              <label className="mb-1.5 block text-sm font-medium">Tell us about your project</label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Quantities, branding, deadline…"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full btn-gold btn-gold-hover px-6 py-3 text-sm font-semibold sm:w-auto"
            >
              Send via WhatsApp <Send className="h-4 w-4" />
            </button>

            {sent && (
              <p className="mt-4 text-sm text-primary">Opening WhatsApp with your message…</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", error,
}: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={200}
        className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
