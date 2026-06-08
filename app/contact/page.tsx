"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type FormData = {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  companyWebsite: string;
  country: string;
  industry: string;
  serviceNeeded: string;
  budget: string;
  projectDetails: string;
  companySize: string;
  timeline: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    companyWebsite: "",
    country: "",
    industry: "",
    serviceNeeded: "",
    budget: "",
    projectDetails: "",
    companySize: "",
    timeline: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess(false);
    setServerError("");
  }

  function validateForm() {
    const newErrors: Partial<FormData> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.companyName.trim())
      newErrors.companyName = "Company name is required.";

    if (!form.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      newErrors.businessEmail = "Enter a valid business email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number with country code is required.";
    } else if (!/^\+[1-9]\d{1,3}[\s\d]{6,18}$/.test(form.phone.trim())) {
      newErrors.phone =
        "Enter a valid phone number with country code. Example: +39 334 207 0234";
    }

    if (!form.companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required.";
    } else if (!/^https?:\/\/.+\..+/.test(form.companyWebsite.trim())) {
      newErrors.companyWebsite =
        "Enter a valid website URL. Example: https://company.com";
    }

    if (!form.country.trim()) newErrors.country = "Company country is required.";
    if (!form.industry) newErrors.industry = "Please select an industry.";
    if (!form.serviceNeeded)
      newErrors.serviceNeeded = "Please select a service.";
    if (!form.budget) newErrors.budget = "Please select a project budget.";

    if (!form.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required.";
    } else if (form.projectDetails.trim().length < 30) {
      newErrors.projectDetails =
        "Please write at least 30 characters about your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setServerError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);

      setForm({
        fullName: "",
        companyName: "",
        businessEmail: "",
        phone: "",
        companyWebsite: "",
        country: "",
        industry: "",
        serviceNeeded: "",
        budget: "",
        projectDetails: "",
        companySize: "",
        timeline: "",
      });
    } catch {
      setServerError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-4 text-black outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-4 focus:ring-zinc-100";

  const labelClass = "text-sm font-medium text-zinc-700";
  const errorClass = "mt-2 text-sm text-red-500";

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-32 pt-48">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-purple-200 opacity-40 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Start A Project
            </p>

            <h1 className="max-w-3xl text-6xl font-bold leading-tight tracking-tight text-black md:text-7xl">
              Let&apos;s Build Something That Moves Revenue.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-600">
              Tell us about your company, your current digital infrastructure
              and what you want to improve. We&apos;ll review the details and
              respond with the next best step.
            </p>

            <div className="mt-12 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Minimum Engagement
              </p>

              <p className="mt-4 text-4xl font-bold text-black">€5,000+</p>

              <p className="mt-4 leading-7 text-zinc-600">
                We work with ambitious companies that need premium websites,
                e-commerce systems, mobile applications and long-term digital
                infrastructure.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-2xl backdrop-blur"
          >
            <div className="grid gap-6">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.fullName && (
                  <p className={errorClass}>{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Company Name *</label>
                <input
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={inputClass}
                />
                {errors.companyName && (
                  <p className={errorClass}>{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Business Email *</label>
                <input
                  name="businessEmail"
                  type="email"
                  value={form.businessEmail}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
                {errors.businessEmail && (
                  <p className={errorClass}>{errors.businessEmail}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>
                  Phone Number With Country Code *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+39 334 207 0234"
                  className={inputClass}
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>

              <div>
                <label className={labelClass}>Company Website *</label>
                <input
                  name="companyWebsite"
                  type="text"
                  value={form.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://company.com"
                  className={inputClass}
                />
                {errors.companyWebsite && (
                  <p className={errorClass}>{errors.companyWebsite}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Company Country *</label>
                <input
                  name="country"
                  type="text"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Germany, UAE, United Kingdom..."
                  className={inputClass}
                />
                {errors.country && (
                  <p className={errorClass}>{errors.country}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Industry *</label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select industry</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Legal">Legal</option>
                  <option value="Luxury Brands">Luxury Brands</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Technology">Technology</option>
                  <option value="Other">Other</option>
                </select>
                {errors.industry && (
                  <p className={errorClass}>{errors.industry}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Service Needed *</label>
                <select
                  name="serviceNeeded"
                  value={form.serviceNeeded}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select service</option>
                  <option value="Custom Website Development">
                    Custom Website Development
                  </option>
                  <option value="E-Commerce Development">
                    E-Commerce Development
                  </option>
                  <option value="UI/UX Redesign">UI/UX Redesign</option>
                  <option value="iOS Application">iOS Application</option>
                  <option value="Android Application">
                    Android Application
                  </option>
                  <option value="Full Digital Transformation">
                    Full Digital Transformation
                  </option>
                  <option value="Ongoing Maintenance & Support">
                    Ongoing Maintenance & Support
                  </option>
                </select>
                {errors.serviceNeeded && (
                  <p className={errorClass}>{errors.serviceNeeded}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Project Budget *</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select budget</option>
                  <option value="€5,000 - €10,000">€5,000 - €10,000</option>
                  <option value="€10,000 - €25,000">€10,000 - €25,000</option>
                  <option value="€25,000 - €50,000">€25,000 - €50,000</option>
                  <option value="€50,000+">€50,000+</option>
                </select>
                {errors.budget && (
                  <p className={errorClass}>{errors.budget}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Company Size</label>
                <select
                  name="companySize"
                  value={form.companySize}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select company size</option>
                  <option value="1-10 Employees">1-10 Employees</option>
                  <option value="11-50 Employees">11-50 Employees</option>
                  <option value="51-200 Employees">51-200 Employees</option>
                  <option value="200+ Employees">200+ Employees</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Preferred Launch Timeline
                </label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Just Exploring">Just Exploring</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Project Details *</label>
                <textarea
                  name="projectDetails"
                  rows={6}
                  value={form.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us what you want to build or improve."
                  className={inputClass}
                />
                {errors.projectDetails && (
                  <p className={errorClass}>{errors.projectDetails}</p>
                )}
              </div>

              {serverError && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                  {serverError}
                </div>
              )}

              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  Your request has been sent successfully. We will review your
                  project and contact you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Project Request"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}