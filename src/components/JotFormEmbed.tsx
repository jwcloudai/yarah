import { useEffect } from "react";

interface JotFormEmbedProps {
  formId?: string;
  title?: string;
  height?: string;
  className?: string;
}

export function JotFormEmbed({ 
  formId = import.meta.env.VITE_JOTFORM_FORM_ID,
  title = "Contact Form",
  height = "600px",
  className = ""
}: JotFormEmbedProps) {
  
  useEffect(() => {
    // Load JotForm iframe resizer script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!formId) {
    return (
      <div className="p-8 text-center text-red-600">
        JotForm configuration missing. Please set VITE_JOTFORM_FORM_ID.
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        id={`JotFormIFrame-${formId}`}
        title={title}
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src={`https://form.jotform.com/${formId}`}
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height,
          border: "none",
        }}
        scrolling="no"
      />
    </div>
  );
}
