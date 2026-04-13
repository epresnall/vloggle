import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Vloggle services.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
          Terms &amp; Conditions
        </h1>

        <div className="prose prose-gray max-w-none text-[var(--color-muted)] space-y-6 text-sm leading-relaxed">
          <p>
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using the Vloggle website and services, you agree to
            be bound by these Terms &amp; Conditions. If you do not agree, please
            do not use our services.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            2. Services
          </h2>
          <p>
            Vloggle provides done-for-you video content creation services for
            SaaS businesses. Service details, deliverables, and timelines are
            agreed upon during the onboarding process.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            3. Intellectual Property
          </h2>
          <p>
            All content, designs, and materials produced by Vloggle remain the
            intellectual property of The Global Experience Co. until full payment
            is received. Upon payment, clients receive a license to use
            delivered videos for their own marketing and distribution purposes.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            4. Payment
          </h2>
          <p>
            Payment terms are outlined in individual service agreements. Late
            payments may result in suspension of services.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            5. Limitation of Liability
          </h2>
          <p>
            Vloggle shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these terms at any time. Continued
            use of our services constitutes acceptance of any changes.
          </p>

          <h2 className="text-lg font-bold text-[var(--color-dark)]">
            7. Contact
          </h2>
          <p>
            For questions about these terms, please contact us through our
            website.
          </p>
        </div>
      </div>
    </section>
  );
}
