"use client";

import { useState, type FormEvent } from "react";

const services = [
  { id: "counselling", label: "Pastoral Counselling", description: "One-on-one spiritual guidance and support" },
  { id: "marriage", label: "Marriage Counselling", description: "Pre-marital and marriage support" },
  { id: "grief", label: "Grief & Bereavement Support", description: "Walking with you through loss" },
  { id: "prayer", label: "Personal Prayer", description: "Dedicated prayer with a ministry leader" },
  { id: "baptism", label: "Baptism", description: "Ready to take the next step in your faith" },
  { id: "dedication", label: "Child Dedication", description: "Dedicate your child before the Lord" },
  { id: "space-rental", label: "Space Rental", description: "Rent our facilities for your event" },
  { id: "funeral", label: "Funeral / Memorial Service", description: "Honouring your loved one" },
  { id: "wedding", label: "Wedding Ceremony", description: "Celebrate your union at Kingsway" },
  { id: "hospital", label: "Hospital / Home Visit", description: "We come to you when you can\u2019t come to us" },
  { id: "other", label: "Other", description: "Something else we can help with" },
];

export default function ServiceRequestForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    const serviceLabels = selected.map(
      (id) => services.find((s) => s.id === id)?.label ?? id,
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          services: serviceLabels,
          details,
          formType: "service-request",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to send request.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7 text-gold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy">
          Request Received
        </h3>
        <p className="mt-2 text-sm text-subtext">
          Thank you, {name}. Someone from our team will reach out to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => toggle(service.id)}
            className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
              selected.includes(service.id)
                ? "border-gold bg-gold/5 shadow-sm"
                : "border-silver/40 bg-white hover:border-gold/50"
            }`}
          >
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                selected.includes(service.id)
                  ? "border-gold bg-gold text-white"
                  : "border-silver/60"
              }`}
            >
              {selected.includes(service.id) && (
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">{service.label}</p>
              <p className="mt-0.5 text-xs text-subtext">{service.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="service-name" className="block text-sm font-medium text-navy">
                Name
              </label>
              <input
                id="service-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-silver/60 bg-white px-4 py-3 text-sm text-darktext outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="service-email" className="block text-sm font-medium text-navy">
                Email
              </label>
              <input
                id="service-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-silver/60 bg-white px-4 py-3 text-sm text-darktext outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service-details" className="block text-sm font-medium text-navy">
              Additional Details <span className="text-subtext font-normal">(optional)</span>
            </label>
            <textarea
              id="service-details"
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mt-1.5 w-full resize-none rounded-lg border border-silver/60 bg-white px-4 py-3 text-sm text-darktext outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              placeholder="Anything else you'd like us to know?"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg disabled:opacity-50"
          >
            {sending ? "Sending..." : "Submit Request"}
          </button>
        </div>
      )}
    </form>
  );
}
