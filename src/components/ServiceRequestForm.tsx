"use client";

import { useState, useRef, type FormEvent } from "react";

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

// Services that have a downloadable application form. Add new services here as
// their forms become available \u2014 the download + upload block appears automatically.
const SERVICE_FORMS: Record<string, { url: string; label: string }> = {
  wedding: { url: "/forms/wedding-application-form.pdf", label: "Wedding Application Form" },
};

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // 4MB (Vercel serverless body limit)
const ALLOWED_UPLOAD_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

export default function ServiceRequestForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const formLoadedAt = useRef(Date.now());

  // Selected services that have a downloadable form (drives the download/upload block).
  const formsForSelected = selected
    .map((id) => ({ id, form: SERVICE_FORMS[id] }))
    .filter((s): s is { id: string; form: { url: string; label: string } } => Boolean(s.form));

  function handleFileChange(e: FormEvent<HTMLInputElement>) {
    const picked = e.currentTarget.files?.[0] ?? null;
    setFileError("");
    if (!picked) {
      setFile(null);
      return;
    }
    if (picked.size > MAX_UPLOAD_BYTES) {
      setFile(null);
      setFileError("That file is over 4MB. Please upload a smaller file (PDF works best).");
      return;
    }
    if (!ALLOWED_UPLOAD_TYPES.includes(picked.type)) {
      setFile(null);
      setFileError("Please upload a PDF, Word document, or image.");
      return;
    }
    setFile(picked);
  }

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (formsForSelected.length > 0 && !file) {
      setError("Please upload your completed application form before submitting.");
      return;
    }

    setSending(true);

    const serviceLabels = selected.map(
      (id) => services.find((s) => s.id === id)?.label ?? id,
    );

    try {
      // Sent as multipart/form-data so an optional completed form can ride along
      // as a file. The API branches on content-type and stays JSON-compatible for
      // the plain "Send Us a Message" form.
      const payload = new FormData();
      payload.append("name", name);
      payload.append("email", email);
      payload.append("services", JSON.stringify(serviceLabels));
      payload.append("details", details);
      payload.append("formType", "service-request");
      payload.append("website", honeypot);
      payload.append("_ts", String(formLoadedAt.current));
      if (file) {
        payload.append("attachment", file, file.name);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
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
          {formsForSelected.length > 0 && (
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <p className="text-sm font-semibold text-navy">
                Application {formsForSelected.length > 1 ? "forms" : "form"}
              </p>
              <p className="mt-1 text-xs text-subtext">
                Download the {formsForSelected.length > 1 ? "forms" : "form"} below, fill it
                out, and upload it here so our team has everything they need to help you.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {formsForSelected.map(({ id, form }) => (
                  <a
                    key={id}
                    href={form.url}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold/5"
                  >
                    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download {form.label}
                  </a>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="service-upload" className="block text-sm font-medium text-navy">
                  Upload completed form <span className="font-normal text-gold">(required)</span>
                </label>
                <input
                  id="service-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="mt-1.5 block w-full text-sm text-subtext file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-gold file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-navy hover:file:bg-gold-dark"
                />
                {file && !fileError && (
                  <p className="mt-2 text-xs text-navy">
                    Attached: <span className="font-medium">{file.name}</span>
                  </p>
                )}
                {fileError && <p className="mt-2 text-xs text-red-600">{fileError}</p>}
                <p className="mt-2 text-xs text-subtext">
                  PDF, Word, or image, up to 4MB. Download the form above, fill it out, and upload it to submit your request.
                </p>
              </div>
            </div>
          )}

          {/* Honeypot - hidden from real users, bots auto-fill it */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
            <label htmlFor="service-website">Website</label>
            <input
              id="service-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
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
