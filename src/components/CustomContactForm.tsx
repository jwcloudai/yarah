import { useState } from "react";

export function CustomContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Create form data matching JotForm's expected format
      const formSubmitData = new FormData();
      formSubmitData.append("q3_name[first]", formData.firstName);
      formSubmitData.append("q3_name[last]", formData.lastName);
      formSubmitData.append("q4_email", formData.email);

      // Submit directly to JotForm's submit endpoint
      const response = await fetch(
        `https://submit.jotform.com/submit/${import.meta.env.VITE_JOTFORM_FORM_ID}`,
        {
          method: "POST",
          body: formSubmitData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");
      setStatus("success");
      
      // Reset form
      setFormData({ firstName: "", lastName: "", email: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span
              className="h-px w-16 md:w-24"
              style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            <span
              className="text-xs md:text-sm tracking-[0.4em] uppercase font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Get In Touch
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            <span
              className="h-px w-16 md:w-24"
              style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
            />
          </div>

          <h2
            className="font-display text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Contact <span style={{ color: "var(--crimson)" }}>Yarah Life</span>
          </h2>
          
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--charcoal)", opacity: 0.85 }}
          >
            Have questions about our Kingdom curriculum? Want to support the mission? 
            We'd love to hear from you.
          </p>
        </div>

        {/* Custom form */}
        <div
          className="rounded-2xl p-8 md:p-10 shadow-lg"
          style={{
            background: "white",
            border: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name field */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--navy)" }}
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                  background: "var(--canvas)",
                }}
                placeholder="Your first name"
                disabled={status === "submitting"}
              />
            </div>

            {/* Last Name field */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--navy)" }}
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                  background: "var(--canvas)",
                }}
                placeholder="Your last name"
                disabled={status === "submitting"}
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--navy)" }}
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: "color-mix(in oklab, var(--navy) 20%, transparent)",
                  background: "var(--canvas)",
                }}
                placeholder="your.email@example.com"
                disabled={status === "submitting"}
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div
                className="p-4 rounded-lg text-center"
                style={{ background: "color-mix(in oklab, var(--emerald) 10%, transparent)", color: "var(--emerald)" }}
              >
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div
                className="p-4 rounded-lg text-center"
                style={{ background: "color-mix(in oklab, var(--crimson) 10%, transparent)", color: "var(--crimson)" }}
              >
                ✗ {errorMessage || "Failed to send message. Please try again."}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded-full font-semibold text-base tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              style={{
                background: status === "submitting" 
                  ? "color-mix(in oklab, var(--gold) 50%, transparent)"
                  : "linear-gradient(135deg, var(--gold) 0%, #ffd35c 100%)",
                color: "var(--charcoal)",
                boxShadow: "0 8px 24px -8px rgba(253,184,19,0.55)",
              }}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Alternative contact info */}
        <div className="mt-12 text-center">
          <p
            className="text-sm"
            style={{ color: "var(--charcoal)", opacity: 0.75 }}
          >
            Or email us directly at{" "}
            <a
              href="mailto:info@yarahlife.com"
              className="font-semibold hover:underline"
              style={{ color: "var(--crimson)" }}
            >
              info@yarahlife.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
