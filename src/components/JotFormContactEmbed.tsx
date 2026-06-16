import { useState, type FormEvent } from "react";

export function JotFormContactEmbed() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("https://submit.jotform.com/submit/261582875886073", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      {status === "success" ? (
        <div
          className="p-8 rounded-2xl text-center"
          style={{
            background: "color-mix(in oklab, var(--gold) 12%, transparent)",
            border: "2px solid var(--gold)",
          }}
        >
          <div className="text-4xl mb-3" style={{ color: "var(--gold)" }}>✓</div>
          <div className="text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>
            Message sent successfully!
          </div>
          <p className="text-base mb-4" style={{ color: "var(--charcoal)" }}>
            We'll respond within 2–3 business days.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm font-semibold hover:underline"
            style={{ color: "var(--navy)" }}
          >
            ← Send another message
          </button>
        </div>
      ) : (
        <>
          <style dangerouslySetInnerHTML={{
            __html: `
          /* Override JotForm styles to match your design */
          .jotform-form {
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .form-all {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .form-header-group {
            display: none !important;
          }
          .form-line {
            margin-bottom: 24px !important;
          }
          .form-label {
            font-size: 14px !important;
            font-weight: 600 !important;
            color: var(--navy) !important;
            margin-bottom: 8px !important;
          }
          .form-textbox, .form-textarea {
            width: 100% !important;
            padding: 12px 16px !important;
            border: 1px solid color-mix(in oklab, var(--navy) 18%, transparent) !important;
            border-radius: 12px !important;
            background: var(--canvas) !important;
            font-size: 15px !important;
            color: var(--charcoal) !important;
          }
          .form-textbox:focus, .form-textarea:focus {
            outline: none !important;
            ring: 2px !important;
            border-color: var(--navy) !important;
          }
          .form-address-table {
            width: 100% !important;
          }
          .form-address-line-wrapper {
            margin-bottom: 16px !important;
          }
          .form-address-line {
            display: inline-block !important;
            width: 100% !important;
          }
          .form-address-city-line, .form-address-state-line {
            width: 48% !important;
            display: inline-block !important;
            margin-right: 2% !important;
          }
          .form-sub-label {
            font-size: 12px !important;
            color: color-mix(in oklab, var(--charcoal) 70%, transparent) !important;
            margin-top: 4px !important;
          }
          .form-submit-button {
            width: 100% !important;
            padding: 16px !important;
            background: var(--navy) !important;
            color: white !important;
            border: none !important;
            border-radius: 9999px !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.15em !important;
            cursor: pointer !important;
            transition: all 0.2s !important;
            box-shadow: 0 8px 24px -8px rgba(15,23,55,0.55) !important;
          }
          .form-submit-button:hover {
            transform: scale(1.02) !important;
          }
          .form-buttons-wrapper {
            margin-top: 32px !important;
          }
          .error-message {
            padding: 16px;
            border-radius: 12px;
            background: color-mix(in oklab, var(--crimson) 10%, transparent);
            color: var(--crimson);
            text-align: center;
            margin-bottom: 16px;
          }
        `
      }} />
      
      <form
        className="jotform-form"
        action="https://submit.jotform.com/submit/261582875886073"
        method="post"
        name="form_261582875886073"
        id="261582875886073"
        acceptCharset="utf-8"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="formID" value="261582875886073" />
        
        <div role="main" className="form-all">
          <ul className="form-section page-section" role="presentation">
            {/* Name */}
            <li className="form-line" data-type="control_fullname" id="id_3">
              <label className="form-label form-label-top form-label-auto" id="label_3" htmlFor="first_3">
                Name
              </label>
              <div id="cid_3" className="form-input-wide" data-layout="full">
                <div aria-labelledby="label_3" role="group" data-wrapper-react="true">
                  <span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="first">
                    <input
                      type="text"
                      id="first_3"
                      name="q3_name[first]"
                      className="form-textbox"
                      autoComplete="given-name"
                      size={10}
                      data-component="first"
                      aria-labelledby="sublabel_3_first"
                      placeholder="First Name"
                    />
                    <label className="form-sub-label" htmlFor="first_3" id="sublabel_3_first">
                      First Name
                    </label>
                  </span>
                  <span className="form-sub-label-container" style={{ verticalAlign: 'top' }} data-input-type="last">
                    <input
                      type="text"
                      id="last_3"
                      name="q3_name[last]"
                      className="form-textbox"
                      autoComplete="family-name"
                      size={15}
                      data-component="last"
                      aria-labelledby="sublabel_3_last"
                      placeholder="Last Name"
                    />
                    <label className="form-sub-label" htmlFor="last_3" id="sublabel_3_last">
                      Last Name
                    </label>
                  </span>
                </div>
              </div>
            </li>

            {/* Email */}
            <li className="form-line" data-type="control_email" id="id_4">
              <label className="form-label form-label-top form-label-auto" id="label_4" htmlFor="input_4">
                Email
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="half">
                <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                  <input
                    type="email"
                    id="input_4"
                    name="q4_email"
                    className="form-textbox validate[Email]"
                    autoComplete="email"
                    data-component="email"
                    aria-labelledby="label_4 sublabel_input_4"
                    placeholder="you@email.com"
                    required
                  />
                  <label className="form-sub-label" htmlFor="input_4" id="sublabel_input_4">
                    example@example.com
                  </label>
                </span>
              </div>
            </li>

            {/* Phone */}
            <li className="form-line" data-type="control_phone" id="id_5">
              <label className="form-label form-label-top form-label-auto" id="label_5" htmlFor="input_5_full">
                Phone Number
              </label>
              <div id="cid_5" className="form-input-wide" data-layout="half">
                <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                  <input
                    type="tel"
                    id="input_5_full"
                    name="q5_phoneNumber[full]"
                    className="form-textbox"
                    autoComplete="tel-national"
                    placeholder="(000) 000-0000"
                    data-component="phone"
                    aria-labelledby="label_5"
                  />
                  <label className="form-sub-label" htmlFor="input_5_full" id="sublabel_5_masked">
                    Please enter a valid phone number.
                  </label>
                </span>
              </div>
            </li>

            {/* Address */}
            <li className="form-line" data-type="control_address" id="id_8">
              <label className="form-label form-label-top form-label-auto" id="label_8" htmlFor="input_8_addr_line1">
                Address
              </label>
              <div id="cid_8" className="form-input-wide" data-layout="full">
                <div role="group" aria-labelledby="label_8" className="form-address-table">
                  <div className="form-address-line-wrapper">
                    <span className="form-address-line">
                      <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                        <input
                          type="text"
                          id="input_8_addr_line1"
                          name="q8_address[addr_line1]"
                          className="form-textbox form-address-line"
                          autoComplete="address-line1"
                          data-component="address_line_1"
                          aria-labelledby="sublabel_8_addr_line1"
                          placeholder="Street Address"
                        />
                        <label className="form-sub-label" htmlFor="input_8_addr_line1" id="sublabel_8_addr_line1">
                          Street Address
                        </label>
                      </span>
                    </span>
                  </div>

                  <div className="form-address-line-wrapper">
                    <span className="form-address-line form-address-city-line">
                      <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                        <input
                          type="text"
                          id="input_8_city"
                          name="q8_address[city]"
                          className="form-textbox form-address-city"
                          autoComplete="address-level2"
                          data-component="city"
                          aria-labelledby="sublabel_8_city"
                          placeholder="City"
                        />
                        <label className="form-sub-label" htmlFor="input_8_city" id="sublabel_8_city">
                          City
                        </label>
                      </span>
                    </span>
                    <span className="form-address-line form-address-state-line">
                      <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                        <input
                          type="text"
                          id="input_8_state"
                          name="q8_address[state]"
                          className="form-textbox form-address-state"
                          autoComplete="address-level1"
                          data-component="state"
                          aria-labelledby="sublabel_8_state"
                          placeholder="State"
                        />
                        <label className="form-sub-label" htmlFor="input_8_state" id="sublabel_8_state">
                          State / Province
                        </label>
                      </span>
                    </span>
                  </div>

                  <div className="form-address-line-wrapper">
                    <span className="form-address-line">
                      <span className="form-sub-label-container" style={{ verticalAlign: 'top' }}>
                        <input
                          type="text"
                          id="input_8_postal"
                          name="q8_address[postal]"
                          className="form-textbox form-address-postal"
                          autoComplete="postal-code"
                          data-component="zip"
                          aria-labelledby="sublabel_8_postal"
                          placeholder="Postal Code"
                        />
                        <label className="form-sub-label" htmlFor="input_8_postal" id="sublabel_8_postal">
                          Postal / Zip Code
                        </label>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </li>

            {/* Message */}
            <li className="form-line" data-type="control_textarea" id="id_9">
              <label className="form-label form-label-top form-label-auto" id="label_9" htmlFor="input_9">
                Your Message
              </label>
              <div id="cid_9" className="form-input-wide" data-layout="full">
                <textarea
                  id="input_9"
                  className="form-textarea"
                  name="q9_typeA"
                  style={{ width: '100%', height: '163px' }}
                  data-component="textarea"
                  aria-labelledby="label_9"
                  placeholder="Share your prayer request, question, or message here..."
                />
              </div>
            </li>

            {/* Error message */}
            {status === "error" && (
              <li className="form-line">
                <div className="error-message">
                  {errorMessage}
                </div>
              </li>
            )}

            {/* Submit Button */}
            <li className="form-line" data-type="control_button" id="id_2">
              <div id="cid_2" className="form-input-wide" data-layout="full">
                <div className="form-buttons-wrapper">
                  <button
                    id="input_2"
                    type="submit"
                    className="form-submit-button submit-button"
                    data-component="button"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : (
                      <>
                        <span>✦</span> Send My Message →
                      </>
                    )}
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        <input type="hidden" name="simple_spc" value="261582875886073-261582875886073" />
      </form>
        </>
      )}
    </>
  );
}
