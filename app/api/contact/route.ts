import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+[1-9]\d{1,3}[\s\d]{6,18}$/.test(phone.trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const requiredFields = [
      "fullName",
      "companyName",
      "businessEmail",
      "phone",
      "companyWebsite",
      "country",
      "industry",
      "serviceNeeded",
      "budget",
      "projectDetails",
    ];

    for (const field of requiredFields) {
      if (!body[field] || !String(body[field]).trim()) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!isValidEmail(body.businessEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid phone number. Use country code format, for example +39 334 207 0234",
        },
        { status: 400 }
      );
    }

    const telegramText = `
🔥 New DevSales Web Lead

👤 Name: ${body.fullName}
🏢 Company: ${body.companyName}
🌍 Country: ${body.country}

📧 Email: ${body.businessEmail}
📱 Phone: ${body.phone}
🌐 Website: ${body.companyWebsite}

🏭 Industry: ${body.industry}
⚙️ Service Needed: ${body.serviceNeeded}
💰 Budget: ${body.budget}

👥 Company Size: ${body.companySize || "Not provided"}
⏳ Timeline: ${body.timeline || "Not provided"}

📝 Project Details:
${body.projectDetails}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramText,
        }),
      }
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { success: false, error: "Telegram delivery failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, error: "Contact submission failed" },
      { status: 500 }
    );
  }
}