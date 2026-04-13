import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vloggle services.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none text-[var(--color-muted)] space-y-6 text-sm leading-relaxed">
          <p>
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal information you provide directly, such as
            your name, email address, and company name when you book a call or
            contact us through our website.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information to provide and improve our services,
            communicate with you about your projects, and send relevant updates
            about Vloggle.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            3. Data Sharing
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share information with trusted service providers who
            assist in operating our business, subject to confidentiality
            agreements.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            4. Cookies
          </h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You
            can control cookie preferences through your browser settings.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            5. Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            6. Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal data at any time by contacting us.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            8. Contact
          </h2>
          <p>
            For privacy-related questions, please contact us through our
            website.
          </p>
        </div>
      </div>
    </section>
  );
}
