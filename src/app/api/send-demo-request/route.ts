import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email content by language
const emailContent = {
  fr: {
    subject: "Demande de démonstration — Bien reçu !",
    greeting: "Bonjour",
    thankYou: "Merci pour votre demande !",
    followUp: "Nous reviendrons vers vous très rapidement.",
    signature: "L'équipe Foodmoods",
    internalSubject: "Nouvelle demande de démonstration",
  },
  en: {
    subject: "Demo Request — Received!",
    greeting: "Hello",
    thankYou: "Thank you for your request!",
    followUp: "We will get back to you shortly.",
    signature: "The Foodmoods Team",
    internalSubject: "New Demo Request",
  },
};

interface DemoRequestBody {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message?: string;
  lang: "fr" | "en";
}

export async function POST(request: NextRequest) {
  try {
    const body: DemoRequestBody = await request.json();
    const { name, email, phone, company, message, lang } = body;

    console.log("Received demo request:", { name, email, company, lang });

    // Validate required fields
    if (!name || !email || !company) {
      console.log("Validation failed: Missing required fields");
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Validation failed: Invalid email format");
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Get content based on language
    const content = emailContent[lang] || emailContent.fr;

    // 1. Send internal notification email to contact@foodmoods.fr
    const internalEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0ea5e9;">${content.internalSubject}</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
          <p><strong>Commerce:</strong> ${company}</p>
          ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ""}
          <p><strong>Langue:</strong> ${lang.toUpperCase()}</p>
        </div>
        <p style="color: #64748b; font-size: 12px;">
          Cette demande a été soumise via le formulaire de contact sur foodmoods.fr
        </p>
      </div>
    `;

    console.log("Sending internal email to contact@foodmoods.fr...");
    const internalResult = await resend.emails.send({
      from: "Foodmoods Notifications <onboarding@resend.dev>",
      to: ["contact@foodmoods.fr", "didier.gribeauval1@gmail.com"],
      subject: `${content.internalSubject} - ${company}`,
      html: internalEmailHtml,
      replyTo: email,
    });
    console.log("Internal email result:", JSON.stringify(internalResult, null, 2));
    
    // Check for errors in the response
    if (internalResult.error) {
      console.error("Internal email error:", internalResult.error);
    }

    // 2. Send confirmation email to the client
    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0;">Foodmoods</h1>
        </div>
        <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="font-size: 18px; color: #1e293b;">
            ${content.greeting} ${name},
          </p>
          <p style="font-size: 16px; color: #475569; line-height: 1.6;">
            ${content.thankYou}<br/>
            ${content.followUp}
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0;">
              ${content.signature}<br/>
              <a href="https://foodmoods.fr" style="color: #0ea5e9; text-decoration: none;">https://foodmoods.fr</a>
            </p>
          </div>
        </div>
      </div>
    `;

    console.log("Sending confirmation email to:", email);
    const confirmationResult = await resend.emails.send({
      from: "Foodmoods <noreply@foodmoods.fr>",
      to: email,
      subject: content.subject,
      html: confirmationEmailHtml,
    });
    console.log("Confirmation email result:", confirmationResult);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending demo request:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: "Failed to send email", details: errorMessage },
      { status: 500 }
    );
  }
}

