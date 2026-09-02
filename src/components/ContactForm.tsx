"use client";

import { useState, type FormEvent } from "react";

const companySizeOptions = ["Under 10", "10 to 50", "50 to 200", "Over 200"];
const aiUsageOptions = [
  "Not yet",
  "A few people, here and there",
  "Regularly, across the team",
  "We have tried and it has not stuck",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-border bg-surface px-8 py-10 text-lg text-text-secondary">
        Thank you. We will be in touch within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Field label="Your name" name="name" type="text" required />
      <Field label="Work email" name="email" type="email" required />
      <Field label="Company name" name="company" type="text" required />
      <Field
        label="What does your company do?"
        name="companyDescription"
        type="text"
        required
        helperText="A sentence is plenty. We want to understand the work your business actually does."
      />
      <SelectField
        label="How many people work there?"
        name="companySize"
        options={companySizeOptions}
        required
      />
      <SelectField
        label="How much is your team using AI today?"
        name="aiUsage"
        options={aiUsageOptions}
        required
      />
      <TextAreaField label="Anything else you want us to know?" name="notes" />

      {status === "error" && (
        <p className="text-sm text-accent">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center bg-accent px-7 py-3.5 text-base text-surface transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  helperText,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  helperText?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base text-text">{label}</span>
      {helperText && (
        <span className="text-sm text-text-muted">{helperText}</span>
      )}
      <input
        type={type}
        name={name}
        required={required}
        className="border border-border bg-surface px-4 py-3 text-base text-text outline-none focus:border-accent"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base text-text">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="border border-border bg-surface px-4 py-3 text-base text-text outline-none focus:border-accent"
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base text-text">{label}</span>
      <textarea
        name={name}
        rows={4}
        className="border border-border bg-surface px-4 py-3 text-base text-text outline-none focus:border-accent"
      />
    </label>
  );
}
