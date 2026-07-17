"use client";

import Link from "next/link";
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
  smsConsent: boolean;
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
    smsConsent: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const target = event.target;
    const name = target.name as keyof FormData;

    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess(false);
    setServerError("");
  }

  function validateForm() {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!form.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      newErrors.businessEmail = "Enter a valid business email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number with country code is required.";
    } else if (!/^\+[1-9]\d{1,3}[\s\d]{6,18}$/.test(form.phone.trim())) {
      newErrors.phone =
        "Enter a valid US phone number. Example: 315-547-8952";
    }

    if (!form.companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required.";
    } else if (!/^https?:\/\/.+\..+/.test(form.companyWebsite.trim())) {
      newErrors.companyWebsite =
        "Enter a valid website URL. Example: https://company.com";
    }

    if (!form.country.trim()) {
      newErrors.country = "Company country is required.";
    }

    if (!form.industry) {
      newErrors.industry = "Please select an industry.";
    }

    if (!form.serviceNeeded) {
      newErrors.serviceNeeded = "Please select a service.";
    }

    if (!form.budget) {
      newErrors.budget = "Please select a project budget.";
    }

    if (!form.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required.";
    } else if (form.projectDetails.trim().length < 30) {
      newErrors.projectDetails =
        "Please write at least 30 characters about your project.";
    }

    if (!form.smsConsent) {
      newErrors.smsConsent =
        "You must provide consent to receive SMS messages.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        setServerError(
          data.error || "Something went wrong. Please try again."
        );
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
        smsConsent: false,
      });
    } catch {
      setServerError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-3 w-full rounded-[7px] border border-white/15 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#8d4cff] focus:ring-2 focus:ring-[#6100ff]/25";

  const labelClass = "text-sm font-normal text-white/70";
  const errorClass = "mt-2 text-sm text-red-500";

  return (
    <main className="inner-page">
      <Navbar />

      <section className="relative overflow-hidden px-5 pb-32 pt-40 md:px-10 md:pt-48">

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker mb-6">
              Start A Project
            </p>

            <h1 className="max-w-3xl text-6xl font-light leading-[.95] text-white md:text-[60px]">
              Let&apos;s build the website your business deserves.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-[25.2px] text-white/60">
              Tell us about your company, your current digital infrastructure
              and what you want to improve. We&apos;ll review the details and
              respond with the next best step.
            </p>

            <div className="mt-12 rounded-[10px] border border-white/12 bg-[#160045] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Minimum Engagement
              </p>

              <p className="mt-4 text-4xl font-light text-white">$10,000+</p>

              <p className="mt-4 leading-7 text-white/55">
                We work with ambitious companies that need premium websites,
                custom websites, redesigns and conversion-focused digital
                infrastructure.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] border border-white/12 bg-[#160045] p-6 shadow-[18px_18px_0_#6100ff] md:p-10"
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
                  placeholder="315-547-8952"
                  className={inputClass}
                />
                {errors.phone && (
                  <p className={errorClass}>{errors.phone}</p>
                )}
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
                  <option value="Contractors & Home Services">Contractors &amp; Home Services</option>
                  <option value="Professional Services">Professional Services</option>
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
                  <option value="Website Strategy & Design">Website Strategy &amp; Design</option>
                  <option value="Website Redesign">Website Redesign</option>
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
                  <option value="$10,000 - $25,000">
                    $10,000 - $25,000
                  </option>
                  <option value="$25,000 - $50,000">
                    $25,000 - $50,000
                  </option>
                  <option value="$50,000+">$50,000+</option>
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

              <div className={`consent-card ${form.smsConsent ? "checked" : ""}`}>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    name="smsConsent"
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={handleChange}
                    className="consent-checkbox"
                  />

                  <span className="text-sm leading-6 text-white/65">
                    By checking this box and submitting this form, I agree to
                    receive SMS messages from DEVILSALES regarding my inquiry,
                    quotations, appointment scheduling, project updates,
                    customer support and service-related notifications. Message
                    frequency varies. Message and data rates may apply. Reply{" "}
                    <strong>STOP</strong> to unsubscribe and{" "}
                    <strong>HELP</strong> for assistance. Consent is not a
                    condition of purchase. See our{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="font-medium underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/sms-policy"
                      target="_blank"
                      className="font-medium underline underline-offset-2"
                    >
                      SMS Terms &amp; Conditions
                    </Link>
                    .
                  </span>
                </label>

                {errors.smsConsent && (
                  <p className={errorClass}>{errors.smsConsent}</p>
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
                disabled={loading || !form.smsConsent}
                className="rounded-full bg-[#6100ff] px-8 py-5 font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-[#6100ff] disabled:cursor-not-allowed disabled:opacity-40"
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
