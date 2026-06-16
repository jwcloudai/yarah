import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

type EnquiryType = "General";

export function ContactPage() {
  const [formData, setFormData] = useState({
    enquiryType: "General" as EnquiryType,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Submit to JotForm
      const jotformData = new FormData();
      jotformData.append("q3_name[first]", formData.firstName);
      jotformData.append("q3_name[last]", formData.lastName);
      jotformData.append("q4_email", formData.email);
      // Add more fields as needed based on your JotForm setup

      const response = await fetch(
        `https://submit.jotform.com/submit/${import.meta.env.VITE_JOTFORM_FORM_ID}`,
        {
          method: "POST",
          body: jotformData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({
        enquiryType: "General",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        country: "",
        message: "",
        hearAbout: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="py-12 md:py-20"
      style={{ background: "linear-gradient(to bottom, var(--canvas), color-mix(in oklab, var(--navy) 3%, var(--canvas)))" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Form header */}
        <div className="text-center mb-12">
              <div
                className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold mb-4"
                style={{
                  background: "color-mix(in oklab, var(--navy) 8%, transparent)",
                  color: "var(--navy)",
                }}
              >
                The Joseph Ministries · Yarah Life
              </div>
              <h1
                className="font-display text-4xl md:text-5xl font-bold mb-5"
                style={{ color: "var(--navy)" }}
              >
                Contact Us
              </h1>
              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: "color-mix(in oklab, var(--charcoal) 85%, transparent)" }}
              >
                Have a question, prayer request, or want to know more?{" "}
                <span style={{ color: "var(--charcoal)", fontWeight: 500 }}>
                  Every enquiry is read and responded to personally.
                </span>
              </p>
            </div>

            {/* Form */}
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: "white",
                border: "1px solid color-mix(in oklab, var(--navy) 12%, transparent)",
                boxShadow: "0 10px 40px -15px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--navy)" }}
              >
                Send Us a Message
              </h3>
              <p
                className="text-base mb-8"
                style={{ color: "color-mix(in oklab, var(--charcoal) 75%, transparent)" }}
              >
                Prayer requests · Course enquiries · Partnership · General
              </p>

              {status === "success" ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        First Name <span style={{ color: "var(--crimson)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="First name"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                          background: "var(--canvas)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Last Name <span style={{ color: "var(--crimson)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="Last name"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                          background: "var(--canvas)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Email <span style={{ color: "var(--crimson)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                          background: "var(--canvas)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Phone (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        placeholder="+61 Number"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                          background: "var(--canvas)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="street"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "var(--navy)" }}
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      placeholder="Street address"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                      style={{
                        borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                        background: "var(--canvas)",
                      }}
                    />
                  </div>

                  {/* City & State */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        City / Suburb
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        placeholder="City"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                          background: "var(--canvas)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        placeholder="State"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                          background: "var(--canvas)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "var(--navy)" }}
                    >
                      Country <span style={{ color: "var(--crimson)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      placeholder="Select your country"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
                      style={{
                        borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                        background: "var(--canvas)",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "var(--navy)" }}
                    >
                      Prayer Request / Enquiry <span style={{ color: "var(--crimson)" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      rows={6}
                      placeholder="Share your prayer request, question, or message here. Every word is read and prayed over personally..."
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all disabled:opacity-50 resize-none"
                      style={{
                        borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                        background: "var(--canvas)",
                      }}
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div
                      className="p-4 rounded-lg text-center text-sm"
                      style={{
                        background: "color-mix(in oklab, var(--crimson) 10%, transparent)",
                        color: "var(--crimson)",
                      }}
                    >
                      {errorMessage || "Failed to send message. Please try again."}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-full font-bold text-sm tracking-[0.15em] uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] flex items-center justify-center gap-2"
                    style={{
                      background: "var(--navy)",
                      color: "white",
                      boxShadow: "0 8px 24px -8px rgba(15,23,55,0.55)",
                    }}
                  >
                    {status === "submitting" ? "Sending..." : (
                      <>
                        <span>✦</span> Send My Message →
                      </>
                    )}
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "color-mix(in oklab, var(--charcoal) 65%, transparent)" }}
                  >
                    Your details are kept private. We do not share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Bottom contact card - Enhanced with detailed info */}
            <div
              className="mt-10 rounded-3xl p-8 md:p-10"
              style={{
                background: "var(--navy)",
                color: "var(--canvas)",
                boxShadow: "0 10px 40px -15px rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="text-center mb-8 pb-6 border-b"
                style={{ borderColor: "color-mix(in oklab, var(--canvas) 15%, transparent)" }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold mb-4"
                  style={{
                    background: "color-mix(in oklab, var(--gold) 15%, transparent)",
                    color: "var(--gold)",
                  }}
                >
                  Find Us
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold mb-2">
                  The Joseph Ministries
                </div>
                <div className="text-base italic" style={{ color: "var(--gold)" }}>
                  Yarah Life · יָרַד
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "color-mix(in oklab, var(--gold) 15%, transparent)",
                    }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase font-bold mb-2"
                      style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
                    >
                      Address
                    </div>
                    <div className="text-base leading-relaxed">
                      18 Agapanthus Avenue
                      <br />
                      Kellyville, NSW
                      <br />
                      Sydney, Australia
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "color-mix(in oklab, var(--gold) 15%, transparent)",
                    }}
                  >
                    <Phone className="h-5 w-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase font-bold mb-2"
                      style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
                    >
                      WhatsApp Only
                    </div>
                    <a
                      href="tel:+61404767488"
                      className="text-base font-semibold hover:underline block mb-1"
                      style={{ color: "var(--gold)" }}
                    >
                      +61 404 767 488
                    </a>
                    <div
                      className="text-xs"
                      style={{ color: "color-mix(in oklab, var(--canvas) 60%, transparent)" }}
                    >
                      Texts only — no voice calls
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "color-mix(in oklab, var(--gold) 15%, transparent)",
                    }}
                  >
                    <Mail className="h-5 w-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase font-bold mb-2"
                      style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:info@yarahlife.com"
                      className="text-base hover:underline transition-colors"
                      style={{ color: "var(--gold)" }}
                    >
                      info@yarahlife.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "color-mix(in oklab, var(--gold) 15%, transparent)",
                    }}
                  >
                    <Clock className="h-5 w-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase font-bold mb-2"
                      style={{ color: "color-mix(in oklab, var(--canvas) 50%, transparent)" }}
                    >
                      Response Time
                    </div>
                    <div className="text-base leading-relaxed">
                      2–3 business days
                      <br />
                      <span className="text-sm" style={{ color: "color-mix(in oklab, var(--canvas) 65%, transparent)" }}>
                        Prayer requests prayed over personally
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scripture quote */}
              <div
                className="pt-6 border-t text-center text-sm italic leading-relaxed"
                style={{
                  borderColor: "color-mix(in oklab, var(--canvas) 15%, transparent)",
                  color: "color-mix(in oklab, var(--canvas) 70%, transparent)",
                }}
              >
                <span style={{ color: "var(--gold)" }}>"</span>The people who know their God shall be strong and carry out great exploits.<span style={{ color: "var(--gold)" }}>"</span>
                <div className="text-xs mt-2" style={{ color: "color-mix(in oklab, var(--canvas) 55%, transparent)" }}>
                  — Daniel 11:32
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
