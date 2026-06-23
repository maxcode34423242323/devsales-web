export default function SmsPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8">SMS Policy</h1>

      <p className="mb-6">
        This SMS Policy explains how DEVILSALES DI COMERZAN MAXIM uses SMS
        communications for customers and website visitors.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Business Information</h2>

      <p className="mb-6">
        DEVILSALES DI COMERZAN MAXIM
        <br />
        VAT: IT03128770355
        <br />
        Via Colombana 18A
        <br />
        42022 Boretto (RE)
        <br />
        Italy
        <br />
        Email: info@devilsales.dev
        <br />
        Phone: +39 334 207 0234
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">SMS Program Disclosure</h2>

      <p className="mb-6">
        By submitting your phone number through our website, you agree to
        receive SMS messages from DevilSales Web regarding services,
        promotions, appointment reminders, updates and customer support.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>Message frequency may vary.</li>
        <li>Message and data rates may apply.</li>
        <li>Reply STOP to unsubscribe.</li>
        <li>Reply HELP for assistance.</li>
        <li>Consent is not a condition of purchase.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Opt-Out</h2>

      <p className="mb-6">
        You may opt out of receiving SMS messages at any time by replying STOP
        to any SMS message received from us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Help</h2>

      <p className="mb-6">
        For assistance, reply HELP or contact us at info@devilsales.dev.
      </p>
    </main>
  );
}