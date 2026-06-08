import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pb-32 pt-48">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>

        <div className="mt-12 space-y-8 text-zinc-400 leading-8">
          <p>
            DevSales Web respects your privacy and is committed to protecting
            your personal information.
          </p>

          <p>
            Information submitted through our forms may include your name,
            company, email address, phone number, website and project details.
          </p>

          <p>
            This information is used solely to evaluate project requests,
            provide quotations, communicate with potential clients and improve
            our services.
          </p>

          <p>
            We do not sell, rent or distribute your personal information to
            third parties.
          </p>

          <p>
            By using this website, you consent to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <p>
            For privacy-related enquiries contact:
            <br />
            info@devsales.dev
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}