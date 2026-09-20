import React, { useState } from "react";
import { Star, X, CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

// =========================================================================
// 🚀 PRODUCTION BLUEPRINT EXAMPLE CONFIG
// In a true SaaS environment, this object will be fetched from your database
// API endpoint based on the client's unique API token/ID script embedding.
// =========================================================================
const DEFAULT_SAAS_CONFIG = {
  brandName: "Feedback",
  logoUrl: "https://raw.githubusercontent.com/iz0nen/AstroVisionInstallationsWebsite/main/public/assets/astro-vision-header-logo.png", // Replace with actual hosted client graphic
  primaryColor: "#2563eb",                 // Branding emphasis color
  secondaryColor: "#60a5fa",               // Text link anchor color
  promptText: "How would you rate your recent commercial installation experience with our crew?",
  googleReviewUrl: "https://g.page/r/CeilsGq7gXtVECE/review",
  emailJsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailJsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailJsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function ReviewCaptureWidget({ config = DEFAULT_SAAS_CONFIG }) {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState("form"); 
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }
    
    setIsSending(true);

    const templateParams = {
      rating: rating,
      comment: feedbackText,
      client_name: config.brandName // Keep track of which client sent it in EmailJS
    };

    emailjs
      .send(
        config.emailJsServiceId, 
        config.emailJsTemplateId, 
        templateParams, 
        config.emailJsPublicKey
      )
      .then(() => {
        setIsSending(false);
        setStep("complete");
      })
      .catch((error) => {
        console.error("Failed to transmit form payload:", error);
        setIsSending(false);
        setStep("complete");
      });
  };

  if (!isOpen) return null;

  // Fully dynamic white-label styling architecture
  const theme = {
    overlay: {
      position: "fixed",
      bottom: "16px",
      right: "16px",
      width: "260px",
      backgroundColor: "#0d0f12",
      border: `2px solid ${config.primaryColor}`, // Dynamic accent border
      borderRadius: "10px",
      boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.7)",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "#f3f4f6",
      zIndex: 99999,
      overflow: "hidden"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 14px",
      borderBottom: "1px solid #1e293b",
      backgroundColor: "#111418"
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    logo: {
      width: "75px",
      height: "50px",
      objectFit: "contain",
      borderRadius: "4px"
    },
    title: { fontSize: "13px", fontWeight: "600", margin: 0, letterSpacing: "0.3px" },
    closeBtn: { background: "none", border: "none", color: "#9ca3af", cursor: "pointer", padding: "2px" },
    body: { padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" },
    text: { fontSize: "13px", color: "#9ca3af", lineHeight: "1.4", marginBottom: "12px" },
    starsRow: { display: "flex", gap: "6px", margin: "4px 0 12px 0" },
    actionBtn: {
      width: "100%",
      backgroundColor: config.primaryColor, // Dynamic core action color
      color: "#ffffff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 14px",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px"
    },
    secondaryLink: {
      fontSize: "12px",
      color: config.secondaryColor, // Dynamic textual link color
      textDecoration: "underline",
      marginTop: "12px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: 0
    },
    textArea: {
      width: "100%",
      height: "70px",
      backgroundColor: "#111418",
      border: "1px solid #334155",
      borderRadius: "6px",
      color: "#f3f4f6",
      padding: "8px",
      fontSize: "12px",
      resize: "none",
      marginBottom: "10px",
      outline: "none"
    }
  };

  return (
    <div style={theme.overlay}>
      <div style={theme.header}>
        <div style={theme.headerLeft}>
          {config.logoUrl && (
            <img 
              src={config.logoUrl} 
              alt="" 
              style={theme.logo} 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <h4 style={theme.title}>{config.brandName}</h4>
        </div>
        <button onClick={() => setIsOpen(false)} style={theme.closeBtn}>
          <X size={16} />
        </button>
      </div>

      {step === "form" && (
        <div style={theme.body}>
          <p style={theme.text}>{config.promptText}</p>
          
          <div style={theme.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={26}
                style={{ cursor: "pointer" }}
                fill={star <= (hoverRating || rating) ? "#eab308" : "none"}
                color={star <= (hoverRating || rating) ? "#eab308" : "#475569"}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <form onSubmit={handleFeedbackSubmit} style={{ width: "100%" }}>
            <textarea
              style={theme.textArea}
              placeholder="Tell us about your experience..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              required
            />
            <button type="submit" style={theme.actionBtn} disabled={isSending}>
              {isSending ? "Sending..." : "Submit Feedback"} <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {step === "complete" && (
        <div style={theme.body}>
          <CheckCircle size={32} color="#22c55e" style={{ marginBottom: "10px" }} />
          
          {rating >= 4 ? (
            <>
              <p style={theme.text}>
                Thank you for the fantastic feedback! Would you mind sharing your experience on Google to help us grow?
              </p>
              <a 
                href={config.googleReviewUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...theme.actionBtn, textDecoration: "none" }}
                onClick={() => setIsOpen(false)}
              >
                Leave Google Review <Star size={14} fill="white" />
              </a>
            </>
          ) : (
            <>
              <p style={{ ...theme.text, marginBottom: "8px" }}>
                Thank you. We have received your notes privately and our management team will review them immediately to make things right.
              </p>
              <a 
                href={config.googleReviewUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={theme.secondaryLink}
                onClick={() => setIsOpen(false)}
              >
                Continue to Google Business Profile
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
