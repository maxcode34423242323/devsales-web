import { NextResponse } from "next/server";

type ContactRequestBody = {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  phone?: string;
  country?: string;
  industry?: string;
  serviceNeeded?: string;
  budget?: string;
  projectDetails?: string;
  companySize?: string;
  timeline?: string;
  smsConsent?: boolean;
};

const CONTACT_EMAIL = "info@devilsales.dev";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+1[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone.trim());
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequestBody;
    const requiredFields: Array<keyof ContactRequestBody> = [
      "fullName", "companyName", "businessEmail", "phone", "country",
      "industry", "serviceNeeded", "budget", "projectDetails",
    ];

    for (const field of requiredFields) {
      if (!body[field] || !String(body[field]).trim()) {
        return NextResponse.json({ success: false, error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    if (!isValidEmail(String(body.businessEmail))) {
      return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
    }

    if (!isValidPhone(String(body.phone))) {
      return NextResponse.json({ success: false, error: "Invalid US phone number. Include +1, for example +1 315 547 8952." }, { status: 400 });
    }

    if (body.smsConsent !== true) {
      return NextResponse.json({ success: false, error: "SMS consent is required before submitting this form." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");
      return NextResponse.json({ success: false, error: "Server configuration error." }, { status: 500 });
    }

    const rows = [
      ["Name", body.fullName], ["Company", body.companyName], ["Country", body.country],
      ["Email", body.businessEmail], ["Phone", body.phone], ["Industry", body.industry],
      ["Service", body.serviceNeeded], ["Budget", body.budget],
      ["Company size", body.companySize || "Not provided"],
      ["Timeline", body.timeline || "Not provided"], ["SMS consent", "YES"],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#171126">
        <div style="background:#160045;color:#fff;padding:28px 32px;border-radius:16px 16px 0 0">
          <div style="font-size:12px;letter-spacing:2px;color:#b995ff">DEVILSALES WEB</div>
          <h1 style="margin:10px 0 0;font-size:28px">New project request</h1>
        </div>
        <div style="border:1px solid #e7e1f2;border-top:0;padding:26px 32px;border-radius:0 0 16px 16px">
          <table style="width:100%;border-collapse:collapse">
            ${rows.map(([label, value]) => `<tr><td style="padding:10px 12px 10px 0;color:#746b83;border-bottom:1px solid #eee8f5;width:145px">${escapeHtml(label)}</td><td style="padding:10px 0;border-bottom:1px solid #eee8f5;font-weight:600">${escapeHtml(value)}</td></tr>`).join("")}
          </table>
          <h2 style="margin:28px 0 10px;font-size:18px">Project details</h2>
          <div style="white-space:pre-wrap;line-height:1.6;background:#f7f3ff;padding:18px;border-radius:10px">${escapeHtml(body.projectDetails)}</div>
        </div>
      </div>`;

    const text = [`New DevilSales Web project request`, ...rows.map(([label, value]) => `${label}: ${value}`), "", "Project details:", body.projectDetails].join("\n");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "DevilSales Web <leads@devilsales.dev>",
        to: [CONTACT_EMAIL],
        reply_to: body.businessEmail,
        subject: `New project request — ${body.companyName}`,
        html,
        text,
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      console.error("Email delivery failed:", await emailResponse.text());
      return NextResponse.json({ success: false, error: "Email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, error: "Contact submission failed." }, { status: 500 });
  }
}
