export default function SmsOptInPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6">
          SMS Updates & Special Offers
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Subscribe to receive updates, special offers, service announcements
          and promotional messages from DevilSales Web.
        </p>

        <div
          id="leadconnector-widget"
          className="flex justify-center"
        ></div>

        <div className="mt-12 text-sm text-gray-400">
          By subscribing, you agree to receive SMS messages from DevilSales Web.
          Message frequency may vary. Message and data rates may apply.
          Reply STOP to unsubscribe and HELP for assistance.
        </div>
      </div>
    </main>
  );
}