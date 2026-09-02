import { NextResponse } from "next/server";
import { Resend } from "resend";

const requiredFields = [
  "name",
  "email",
  "company",
  "companyDescription",
  "companySize",
  "aiUsage",
] as const;

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  for (const field of requiredFields) {
    if (!data[field] || typeof data[field] !== "string") {
      return NextResponse.json(
        { error: "Missing required field." },
        { status: 400 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL.",
    );
    return NextResponse.json(
      { error: "Contact form is not set up yet." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Ark Team Website <onboarding@resend.dev>",
    to: to.split(",").map((address) => address.trim()),
    replyTo: data.email,
    subject: `New contact form submission: ${data.company}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `What they do: ${data.companyDescription}`,
      `Company size: ${data.companySize}`,
      `AI usage today: ${data.aiUsage}`,
      `Notes: ${data.notes || "(none)"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Could not send message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
