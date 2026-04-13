import Image from "next/image";

const CALENDLY = "https://cal.com/videorep/vloggle-discovery-call";

const logos = [
  { src: "/images/unilever.png", alt: "Unilever" },
  { src: "/images/ahrefs.png", alt: "Ahrefs" },
  { src: "/images/svacademy.png", alt: "SV Academy" },
  { src: "/images/chipper.png", alt: "Chipper" },
  { src: "/images/kms-lighthouse-1200px-logo-p-500.png", alt: "KMS Lighthouse" },
  { src: "/images/HMP-Global-Horiz-Logo_4C-p-500.png", alt: "HMP Global" },
  { src: "/images/Modeus-logo-p-500.png", alt: "Modeus" },
  { src: "/images/ONGO-clean-logo-1-p-500.png", alt: "ONGO" },
  { src: "/images/syzzle.png", alt: "Syzzle" },
  { src: "/images/avvio-solar-logo.png", alt: "Avvio Solar" },
  { src: "/images/logo_dark_1024x500-p-500.png", alt: "Partner" },
  { src: "/images/Pocket_FM_Logo-p-500.jpeg", alt: "Pocket FM" },
];

export default function Home() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="relative bg-[var(--color-dark)] text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Turn Your Blogs Into{" "}
              <span className="text-[var(--color-yellow)]">
                Scroll-Stopping Vlogs!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              We help tech businesses to grow, educate, and inspire new audiences
              by creating 10 searchable brand videos from just 1 blog article,
              all featuring a human brand representative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow text-base"
              >
                Book A Call
              </a>
              <a href="#samples" className="btn-outline text-base !border-white !text-white hover:!bg-white hover:!text-[var(--color-dark)]">
                Watch the Video
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Vloggle-Main-p-800.png"
              alt="Vloggle video production"
              width={560}
              height={400}
              className="rounded-2xl shadow-2xl w-full max-w-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* ──────── TRUST BAR ──────── */}
      <section className="bg-[var(--color-bg-alt)] py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-8">
            Trusted by Over 200+ Partners Worldwide
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ──────── WHAT — VALUE PROPS ──────── */}
      <section id="what" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            What Is <span className="text-[var(--color-purple)]">Vloggle</span>?
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            A completely done-for-you video content creation service built
            exclusively for SaaS businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--color-purple-light)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[var(--color-purple)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">
                A video service exclusively for SaaS businesses.
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Vloggle is a completely &lsquo;Done-For-You&rsquo; video content
                creation service for online SaaS businesses who understand the
                power of searchable, written content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--color-purple-light)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[var(--color-purple)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Consistently grow and engage your audiences.
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Vloggle provides only the most authentic video presenters and
                brand representatives so that your online audiences can
                personally relate to the valuable content with each new video.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card text-center">
              <div className="w-14 h-14 bg-[var(--color-purple-light)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[var(--color-purple)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">
                Let your business be fully seen, not just read.
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Vloggle creates only customised video content that is in line
                with your brand&rsquo;s identity, with a unique, digital
                presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── HOW — MULTI-CHANNEL ──────── */}
      <section id="how" className="py-20 md:py-28 bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              How Does It{" "}
              <span className="text-[var(--color-purple)]">Work</span>?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-6">
              With Vloggle, you get{" "}
              <strong className="text-[var(--color-dark)]">
                10 videos for each 1 blog article
              </strong>{" "}
              you submit:
            </p>
            <ul className="space-y-4 text-[var(--color-dark)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 bg-[var(--color-purple)] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span><strong>1 YouTube Video</strong> — the full-length feature</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 bg-[var(--color-purple)] text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span><strong>3 Shorter Subtopics</strong> — bite-sized clips from the main video</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 bg-[var(--color-yellow)] text-[var(--color-dark)] rounded-full flex items-center justify-center text-xs font-bold">&times;</span>
                <span>Each exported in <strong>every ratio</strong> — Landscape, Vertical, &amp; Square</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              That&rsquo;s 10 unique, platform-ready videos from a single blog
              post.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Funnel-and-Chart-01-p-800.png"
              alt="Vloggle video funnel — 1 blog becomes 10 videos"
              width={560}
              height={400}
              className="rounded-2xl shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* ──────── WHY — ABOUT ──────── */}
      <section id="why" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Why <span className="text-[var(--color-purple)]">Vloggle</span>?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              With more than 25+ years of experience working both in front and
              behind the camera, Vloggle&rsquo;s CEO/Founder has worked
              alongside more than 500+ global brand partners and marketers.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We combine proven on-camera talent with AI-assisted editing to
              deliver authentic, human-led videos at scale — so your brand is
              seen, not just read.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/DSC05345-p-800.jpg"
              alt="Vloggle founder on camera"
              width={560}
              height={400}
              className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ──────── TESTIMONIALS ──────── */}
      <section id="testimonials" className="py-20 md:py-28 bg-[var(--color-dark)] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            What Our Partners Say
          </h2>
          <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-8 text-gray-200">
            &ldquo;It was exactly what we were looking for. Very professional,
            very easy to work with, and very quick on the turn around time...
            much quicker than expected.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/unilever-2-logo-svg-vector.svg"
              alt="Unilever logo"
              width={100}
              height={32}
              className="h-6 w-auto invert"
            />
            <div className="text-left">
              <p className="font-bold text-sm">Harshita Pulla</p>
              <p className="text-xs text-gray-400">UNILEVER</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── SAMPLES ──────── */}
      <section id="samples" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Sample <span className="text-[var(--color-purple)]">Videos</span>
          </h2>
          <p className="text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            See what Vloggle delivers — real videos, real brands.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Vloggle-2---Full-Thumbnail-p-800.png"
                alt="Vloggle sample video thumbnail"
                width={640}
                height={360}
                className="w-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Vloggle-Why-Vloggle-Thumbnail-p-800.jpg"
                alt="Why Vloggle sample thumbnail"
                width={640}
                height={360}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── PRICING ──────── */}
      <section id="pricing" className="py-20 md:py-28 bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Simple, Transparent{" "}
            <span className="text-[var(--color-purple)]">Pricing</span>
          </h2>
          <p className="text-[var(--color-muted)] mb-12 max-w-xl mx-auto">
            Every plan includes a dedicated human presenter, professional
            editing, and multi-format delivery.
          </p>
          <div className="card max-w-md mx-auto !py-12">
            <p className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-2 font-semibold">
              Starting From
            </p>
            <p className="text-5xl font-extrabold text-[var(--color-purple)] mb-4">
              Let&rsquo;s Talk
            </p>
            <p className="text-sm text-[var(--color-muted)] mb-8">
              Custom packages based on volume, turnaround, and content scope.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book A Call
            </a>
          </div>
        </div>
      </section>

      {/* ──────── FAQ ──────── */}
      <section id="faq" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Frequently Asked{" "}
            <span className="text-[var(--color-purple)]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What type of businesses is Vloggle for?",
                a: "Vloggle is built specifically for SaaS and tech companies that already produce blog content and want to expand into video without the overhead of an in-house production team.",
              },
              {
                q: "How does the 1-to-10 video process work?",
                a: "You submit a single blog article. We produce 1 full YouTube video plus 3 shorter subtopic clips, and export each in landscape, vertical, and square — giving you 10 platform-ready videos.",
              },
              {
                q: "Who appears in the videos?",
                a: "A professional, vetted human brand representative presents your content on camera. No AI avatars, no stock footage — real people delivering your message.",
              },
              {
                q: "How long does delivery take?",
                a: "Typical turnaround is 5–7 business days from the time we receive your blog article and brand assets.",
              },
              {
                q: "Can I request revisions?",
                a: "Absolutely. We offer unlimited revisions until you're satisfied with the final product.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group card !p-0 overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between font-semibold text-[var(--color-dark)] hover:text-[var(--color-purple)] transition-colors">
                  {item.q}
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-[var(--color-muted)] transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── FINAL CTA ──────── */}
      <section className="py-20 md:py-28 bg-[var(--color-purple)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Turn Your Blogs Into Vlogs?
          </h2>
          <p className="text-lg text-purple-200 mb-8">
            Book a free strategy call and see how Vloggle can multiply your
            content reach.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow text-base"
          >
            Book A Call
          </a>
        </div>
      </section>
    </>
  );
}
