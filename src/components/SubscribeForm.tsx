"use client";

import { useState, type FormEvent } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-gold">
        You&rsquo;re subscribed! We&rsquo;ll keep you in the loop.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full min-w-0 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
