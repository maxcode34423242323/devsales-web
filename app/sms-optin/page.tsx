import Script from "next/script";

export default function SmsOptInPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            SMS Updates & Special Offers
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Subscribe to receive updates, promotional offers, special discounts
            and important notifications from DevilSales Web.
          </p>

          <p className="text-sm text-gray-500">
            By submitting your phone number, you agree to receive SMS messages
            from DevilSales Web. Message frequency may vary. Reply STOP to
            unsubscribe.
          </p>
        </div>
      </main>

      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a391ff0ab6f01632695974c"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  );
}