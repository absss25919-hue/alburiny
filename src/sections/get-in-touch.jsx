import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

// Robust RFC-5322-inspired email regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Allows digits, spaces, +, -, (, ) — standard phone formats
const PHONE_REGEX = /^[0-9+\-\s().]{7,20}$/;

// Only numeric digits allowed while typing
const PHONE_INPUT_REGEX = /^[0-9+\-\s().]*$/;

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function GetInTouch() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "server_error" | "validation_error"

  // ─── Validators ──────────────────────────────────────────────────────────────

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Full name must be at least 2 characters." : "";
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!EMAIL_REGEX.test(value.trim())) return "Please enter a valid email address (e.g. name@example.com).";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required.";
        if (!PHONE_REGEX.test(value.trim())) return "Please enter a valid phone number (digits and + – ( ) allowed).";
        return "";
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters." : "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const next = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };
    setErrors(next);
    return Object.values(next).every((e) => e === "");
  };

  // ─── Handlers ────────────────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Block non-numeric input for phone field
    if (name === "phone" && value !== "" && !PHONE_INPUT_REGEX.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on edit; re-validate once user leaves the field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateAll()) {
      setSubmitStatus("validation_error");
      return;
    }

    setLoading(true);

    try {
      // Save to Supabase
      const { error } = await supabase.from("inquiries").insert([
        {
          full_name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          company: formData.company.trim() || null,
          message: formData.message.trim(),
        },
      ]);

      if (error) throw error;

      // Send email via Resend
      try {
        const emailResponse = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            company: formData.company.trim() || "Not provided",
            message: formData.message.trim(),
          }),
        });

        if (!emailResponse.ok) {
          console.warn("Email sending failed, but inquiry was saved");
        }
      } catch (emailError) {
        console.warn("Email service error, but inquiry was saved:", emailError);
      }

      setSubmitStatus("success");
      setFormData(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
    } catch (err) {
      console.error("Supabase insert error:", err);

      // Distinguish network/server issues from other errors
      const isNetworkError =
        err?.message?.toLowerCase().includes("failed to fetch") ||
        err?.message?.toLowerCase().includes("networkerror") ||
        err?.message?.toLowerCase().includes("network request failed") ||
        err?.code === "PGRST" ||
        !navigator.onLine;

      setSubmitStatus(isNetworkError ? "server_error" : "db_error");
    } finally {
      setLoading(false);
    }
  };

  // ─── Status Messages ──────────────────────────────────────────────────────────

  const statusMessage = {
    success: { text: "✅ Thank you! We'll be in touch with you shortly.", color: "text-green-200" },
    validation_error: { text: "⚠️ Please fix the errors above before submitting.", color: "text-yellow-200" },
    server_error: { text: "🔌 We couldn't reach our server. Please check your connection and try again.", color: "text-red-200" },
    db_error: { text: "❌ Something went wrong on our end. Please try again or contact us directly.", color: "text-red-200" },
  }[submitStatus] ?? null;

  // ─── Render ───────────────────────────────────────────────────────────────────

  return (
    <section
      id="contact"
      className="py-24 px-4 text-white"
      style={{
        background: "linear-gradient(-45deg, #ff3b30, #ff6b00, #ff9500, #ffcc00)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">Contact Us</h2>
          <div
            className="mx-auto mt-4 h-1 rounded-full"
            style={{
              width: "140px",
              background: "linear-gradient(90deg, #ff3b30, #ff9500, #ffcc00)",
              boxShadow: "0 0 20px rgba(255, 149, 0, 0.8)",
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ── FORM ─────────────────────────────────────────────────────── */}
          <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl border border-white/30 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Get A Quote</h3>

            <div className="space-y-6">
              {/* Full Name */}
              <Field label="Full Name" required error={errors.name}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  className={inputClass(errors.name)}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" required error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  placeholder="Enter your email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  className={inputClass(errors.email)}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" required error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                  placeholder="e.g. +971 50 000 0000"
                  inputMode="numeric"
                  maxLength={20}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  className={inputClass(errors.phone)}
                />
              </Field>

              {/* Company (optional) */}
              <Field label="Company Name">
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  placeholder="Enter your company name"
                  className={inputClass("")}
                />
              </Field>

              {/* Message */}
              <Field label="Message" required error={errors.message}>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your requirements..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  className={`${inputClass(errors.message)} resize-none`}
                />
              </Field>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                aria-busy={loading}
                className="w-full mt-6 bg-white text-red-600 font-extrabold py-4 rounded-full text-lg transition hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Inquiry"}
              </button>

              {/* Status feedback */}
              {statusMessage && (
                <p
                  role={submitStatus === "success" ? "status" : "alert"}
                  className={`font-semibold text-center ${statusMessage.color}`}
                >
                  {statusMessage.text}
                </p>
              )}
            </div>
          </div>

          {/* ── INFO ─────────────────────────────────────────────────────── */}
          <div className="space-y-8">
            <InfoBox title="📍 Al Ain Branch">
              <div className="mb-4">
                <h4 className="font-bold text-lg mb-2">Address</h4>
                <p className="leading-relaxed">
                  AL BURINY SECURITY SYSTEMS AND SAFETY<br />
                  Al Ain Industrial Area Saniyya<br />
                  Al Ain, Abu Dhabi<br />
                  United Arab Emirates (UAE)
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Contact Details</h4>
                <p className="leading-relaxed">
                  <strong>Phone:</strong> <a href="tel:+971508812712" className="underline">+971 50 881 2712</a><br />
                  <strong>Phone:</strong> <a href="tel:+971562882240" className="underline">+971 56 288 2240</a><br />
                  <strong>Email:</strong> <a href="mailto:info@alburiny.ae" className="underline">info@alburiny.ae</a>
                </p>
              </div>
            </InfoBox>

            <InfoBox title="📍 Abu Dhabi Branch">
              <div className="mb-4">
                <h4 className="font-bold text-lg mb-2">Address</h4>
                <p className="leading-relaxed">
                  AL BURINY SECURITY SYSTEMS AND SAFETY<br />
                  Mussafah M-40 Industrial Area<br />
                  Musaffah, Abu Dhabi<br />
                  United Arab Emirates (UAE)
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Contact Details</h4>
                <p className="leading-relaxed">
                  <strong>Phone:</strong> <a href="tel:+971562882239" className="underline">+971 56 288 2239</a><br />
                  <strong>Phone:</strong> <a href="tel:+971508810354" className="underline">+971 50 881 0354</a><br />
                  <strong>Email:</strong> <a href="mailto:info@alburiny.ae" className="underline">info@alburiny.ae</a>
                </p>
              </div>
            </InfoBox>

            <InfoBox title="💼 Our Clients">
              Building contractors, facility managers, commercial businesses,
              government entities, and industrial facilities across the UAE.
            </InfoBox>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function inputClass(error) {
  return `w-full p-4 rounded-xl bg-white/20 border placeholder-white/70 focus:outline-none transition ${
    error ? "border-red-400 focus:border-red-300" : "border-white/30 focus:border-white"
  }`;
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-red-300 text-sm font-semibold mt-2">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}

function InfoBox({ title, children }) {
  return (
    <div className="bg-white/15 backdrop-blur-xl p-8 rounded-2xl border-l-4 border-white shadow-xl hover:translate-x-2 transition">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}