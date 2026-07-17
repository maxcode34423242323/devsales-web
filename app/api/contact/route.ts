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

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+[1-9]\d{1,3}[\s\d]{6,18}$/.test(phone.trim());
}

function escapeTelegramText(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequestBody;

    const requiredFields: Array<keyof ContactRequestBody> = [
      "fullName",
      "companyName",
      "businessEmail",
      "phone",
      "country",
      "industry",
      "serviceNeeded",
      "budget",
      "projectDetails",
    ];

    for (const field of requiredFields) {
      const value = body[field];

      if (!value || !String(value).trim()) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required field: ${field}`,
          },
          { status: 400 }
        );
      }
    }

    if (!isValidEmail(String(body.businessEmail))) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email address.",
        },
        { status: 400 }
      );
    }

    if (!isValidPhone(String(body.phone))) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid phone number. Use a valid US format, for example 315-547-8952.",
        },
        { status: 400 }
      );
    }

    if (body.smsConsent !== true) {
      return NextResponse.json(
        {
          success: false,
          error:
            "SMS consent is required before submitting this form.",
        },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    const telegramText = `
🔥 <b>New DevSales Web Lead</b>

👤 <b>Name:</b> ${escapeTelegramText(body.fullName)}
🏢 <b>Company:</b> ${escapeTelegramText(body.companyName)}
🌍 <b>Country:</b> ${escapeTelegramText(body.country)}

📧 <b>Email:</b> ${escapeTelegramText(body.businessEmail)}
📱 <b>Phone:</b> ${escapeTelegramText(body.phone)}
🏭 <b>Industry:</b> ${escapeTelegramText(body.industry)}
⚙️ <b>Service Needed:</b> ${escapeTelegramText(body.serviceNeeded)}
💰 <b>Budget:</b> ${escapeTelegramText(body.budget)}

👥 <b>Company Size:</b> ${escapeTelegramText(
      body.companySize || "Not provided"
    )}
⏳ <b>Timeline:</b> ${escapeTelegramText(
      body.timeline || "Not provided"
    )}

📲 <b>SMS Consent:</b> YES

📝 <b>Project Details:</b>
${escapeTelegramText(body.projectDetails)}
`.trim();

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        cache: "no-store",
      }
    );

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();

      console.error("Telegram delivery failed:", telegramError);

      return NextResponse.json(
        {
          success: false,
          error: "Telegram delivery failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Contact submission failed.",
      },
      { status: 500 }
    );
  }
}
