import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { JotFormContactEmbed } from "./JotFormContactEmbed";

export function ContactPage() {

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

              <JotFormContactEmbed />

              <p
                className="text-xs text-center mt-6"
                style={{ color: "color-mix(in oklab, var(--charcoal) 65%, transparent)" }}
              >
                Your details are kept private. We do not share your information with third parties.
              </p>
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
        </section>
      );
    }
