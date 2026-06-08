import { useEffect, useRef } from "react";

interface JotFormEmbedProps {
  formId?: string;
  className?: string;
}

export function JotFormEmbed({ 
  formId = import.meta.env.VITE_JOTFORM_FORM_ID,
  className = ""
}: JotFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formId) return;

    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.async = true;

    // Append script to the container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup: remove the script and any form elements
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [formId]);

  if (!formId) {
    return (
      <div className="p-8 text-center text-red-600">
        JotForm configuration missing. Please set VITE_JOTFORM_FORM_ID.
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={className}
      id={`jotform-container-${formId}`}
    />
  );
}
