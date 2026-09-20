import React, { useState } from "react";
import { Star, X, CheckCircle, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ReviewCaptureWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState("rating"); 
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSending, setIsSending] = useState(false);

  // =========================================================
  // 🔑 STEP 2 EMAIL INTEGRATION KEYS
  // Replace these text strings with your actual keys from your EmailJS portal dashboard!
  // =========================================================
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";

  // Your real, verified Google Place ID review link
  const GOOGLE_REVIEW_URL = "https://google.com";

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    if (selectedRating >= 3) {
      setStep("positiveRedirect");
    } else {
      setStep("internalFeedback");
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      rating: rating,
      comment: feedbackText,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
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

  // Downsized, space-saving UI structural styling map
  const theme = {
    overlay: {
      position: "fixed",
      bottom: "16px",
      right: "16px",
      width: "300px",
      backgroundColor: "#0d0f12",
      border: "2px solid #2563eb",
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
      padding: "12px 14px",
      borderBottom: "1px solid #1e293b",
      backgroundColor: "#111418"
    },
    title: { fontSize: "13px", fontWeight: "600", margin: 0, letterSpacing: "0.3px" },
    closeBtn: { background: "none", border: "none", color: "#9ca3af", cursor: "pointer", padding: "2px" },
    body: { padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" },
    text: { fontSize: "13px", color: "#9ca3af", lineHeight: "1.4", marginBottom: "12px" },
    starsRow: { display: "flex", gap: "6px", margin: "4px 0" },
    actionBtn: {
      width: "100%",
      backgroundColor: "#2563eb",
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
        <h4 style={theme.title}>AstroVision Feedback</h4>
        <button onClick={() => setIsOpen(false)} style={theme.closeBtn}>
          <X size={16} />
        </button>
      </div>

      {step === "rating" && (
        <div style={theme.body}>
          <p style={theme.text}>How would you rate your recent commercial installation experience with our crew?</p>
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
                onClick={() => handleStarClick(star)}
              />
            ))}
          </div>
        </div>
      )}

      {step === "positiveRedirect" && (
        <div style={theme.body}>
          <CheckCircle size={32} color="#22c55e" style={{ marginBottom: "10px" }} />
          <p style={theme.text}>Awesome to hear! Would you mind sharing your experience on Google to help our business grow?</p>
          <a 
            href={GOOGLE_REVIEW_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ ...theme.actionBtn, textDecoration: "none" }}
            onClick={() => setIsOpen(false)}
          >
            Leave Google Review <Star size={14} fill="white" />
          </a>
        </div>
      )}

      {step === "internalFeedback" && (
        <div style={theme.body}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "10px" }}>
            <MessageSquare size={36} color="#eab308" />
            <span style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", color: "#0d0f12", fontWeight: "bold", fontSize: "14px" }}>!</span>
          </div>
          <p style={theme.text}>We want to ensure absolute satisfaction. Please let us know how we can improve our service:</p>
          <form onSubmit={handleFeedbackSubmit} style={{ width: "100%" }}>
            <textarea
              style={theme.textArea}
              placeholder="Type your feedback here..."
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
          <p style={{ ...theme.text, marginBottom: 0 }}>Thank you for your valuable feedback! We have received your notes privately.</p>
        </div>
      )}
    </div>
  );
}
