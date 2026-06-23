import Script from "next/script";

export default function SmsOptinPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          DevilSales Web SMS Program
        </h1>

        <h2 className="text-2xl font-semibold mb-4">Business Information</h2>

        <p className="mb-8 text-gray-300">
          DEVILSALES DI COMERZAN MAXIM
          <br />
          VAT: IT03128770355
          <br />
          Via Colombana 18A, 42022 Boretto (RE), Italy
          <br />
          Email: info@devilsales.dev
          <br />
          Phone: +39 334 207 0234
        </p>

        <h2 className="text-2xl font-semibold mb-4">About Us</h2>

        <p className="mb-8 text-gray-300">
          DevilSales Web is a premium web development agency specializing in
          custom websites, e-commerce platforms, mobile applications, AI
          automation, CRM integration and software development.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          SMS Program Disclosure
        </h2>

        <p className="mb-4 text-gray-300">
          By submitting your phone number through this website, you agree to
          receive SMS messages from DevilSales Web regarding services,
          promotions, appointment reminders, updates and customer support.
        </p>

        <ul className="list-disc ml-6 mb-8 text-gray-300">
          <li>Message frequency may vary.</li>
          <li>Message and data rates may apply.</li>
          <li>Reply STOP to unsubscribe.</li>
          <li>Reply HELP for assistance.</li>
          <li>Consent is not a condition of purchase.</li>
        </ul>

        <div className="mb-10 space-x-4 underline">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/sms-policy">SMS Policy</a>
        </div>

        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a391ff0ab6f01632695974c"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </div>
    </main>
  );
}