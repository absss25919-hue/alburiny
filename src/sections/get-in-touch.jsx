import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [emailError, setEmailError] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email in real-time
    if (name === "email") {
      if (value.trim() === "") {
        setEmailError("");
      } else if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("error");
      return;
    }

    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus("success");
      setEmailError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error("Supabase insert error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 text-white"
      style={{
        background:
          "linear-gradient(-45deg, #ff3b30, #ff6b00, #ff9500, #ffcc00)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            Contact Us
          </h2>

          {/* Gradient underline */}
          <div
            className="mx-auto mt-4 h-1 rounded-full"
            style={{
              width: "140px",
              background:
                "linear-gradient(90deg, #ff3b30, #ff9500, #ffcc00)",
              boxShadow: "0 0 20px rgba(255, 149, 0, 0.8)",
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl border border-white/30 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Get A Quote</h3>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-xl bg-white/20 border placeholder-white/70 focus:outline-none transition ${
                    emailError
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/30 focus:border-white"
                  }`}
                  placeholder="Enter your email"
                />
                {emailError && (
                  <p className="text-red-300 text-sm font-semibold mt-2">
                    ⚠️ {emailError}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Company Name</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 resize-none focus:outline-none focus:border-white"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-6 bg-white text-red-600 font-extrabold py-4 rounded-full text-lg transition hover:bg-yellow-400 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-green-200 font-semibold text-center">
                  Thank you! We will contact you shortly.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-200 font-semibold text-center">
                  Please fill all required fields.
                </p>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-8">
            {/* Al Ain Branch */}
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
                  <strong>Phone:</strong> +971 50 881 2712<br />
                  <strong>Phone:</strong> +971 56 288 2240<br />
                  <strong>Email:</strong> info@alburiny.ae
                </p>
              </div>
            </InfoBox>

            {/* Abu Dhabi Branch */}
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
                  <strong>Phone:</strong> +971 56 288 2239<br />
                  <strong>Phone:</strong> +971 50 881 0354<br />
                  <strong>Email:</strong> info@alburiny.ae
                </p>
              </div>
            </InfoBox>

            {/* Our Clients */}
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

function InfoBox({ title, children }) {
  return (
    <div className="bg-white/15 backdrop-blur-xl p-8 rounded-2xl border-l-4 border-white shadow-xl hover:translate-x-2 transition">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}