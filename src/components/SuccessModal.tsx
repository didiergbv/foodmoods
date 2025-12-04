"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  lang: "fr" | "en";
}

const messages = {
  fr: {
    title: "Message envoyé !",
    message: "Merci ! Votre message a bien été envoyé. Nous reviendrons vers vous très rapidement.",
    close: "Fermer",
  },
  en: {
    title: "Message sent!",
    message: "Thank you! Your message has been sent. We will get back to you shortly.",
    close: "Close",
  },
};

export default function SuccessModal({ open, onClose, lang }: SuccessModalProps) {
  const content = messages[lang] || messages.fr;

  // Auto-close after 5 seconds
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md mx-4 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
      >
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-foreground"
            aria-label={content.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Success icon with animation */}
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 animate-in zoom-in duration-500">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary animate-in zoom-in duration-700" />
              </div>
            </div>

            {/* Title */}
            <h2
              id="success-modal-title"
              className="text-2xl font-bold text-foreground mb-4"
            >
              {content.title}
            </h2>

            {/* Message */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {content.message}
            </p>

            {/* Progress bar for auto-close */}
            <div className="w-full h-1 bg-border rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-primary rounded-full animate-shrink-width"
                style={{
                  animation: "shrink-width 5s linear forwards",
                }}
              />
            </div>

            {/* Close button */}
            <Button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              {content.close}
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shrink-width {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}





