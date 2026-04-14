"use client";

import Image from "next/image";
import { useState } from "react";

const BOOKING_URL = "https://cal.com/videorep/vloggle-discovery-call";

/* ── Client logos matching exact Webflow order ── */
const clientLogos = [
  { src: "/images/unilever.png", alt: "Unilever" },
  { src: "/images/ahrefs.png", alt: "Ahrefs" },
  { src: "/images/svacademy.png", alt: "SV Academy" },
  { src: "/images/syzzle.png", alt: "Syzzle" },
  { src: "/images/chipper.png", alt: "Chipper" },
  { src: "/images/Website-Logo-04.png", alt: "Partner" },
  { src: "/images/Website-Logo-05.png", alt: "Partner" },
  { src: "/images/Website-Logo-03.png", alt: "Partner" },
  { src: "/images/Website-Logo-01.png", alt: "Partner" },
  { src: "/images/1581637866285.jpeg", alt: "Partner" },
  { src: "/images/Website-Logo-06.png", alt: "Partner" },
  { src: "/images/Website-Logo-07.png", alt: "Partner" },
  { src: "/images/download.png", alt: "Partner" },
  { src: "/images/Website-Logo_4.png", alt: "Partner" },
  { src: "/images/HMP-Global-Horiz-Logo_4C.png", alt: "HMP Global" },
  { src: "/images/favicon-180.png", alt: "Partner" },
  { src: "/images/Modeus-logo.png", alt: "Modeus" },
  { src: "/images/Website-Logo.png", alt: "Partner" },
  { src: "/images/Website-Logo_2.png", alt: "Partner" },
  { src: "/images/Website-Logo_6.png", alt: "Partner" },
  { src: "/images/Website-Logo_3.png", alt: "Partner" },
  { src: "/images/Website-Logo_1.png", alt: "Partner" },
  { src: "/images/Website-Logo_8.png", alt: "Partner" },
  { src: "/images/Website-Logo_7.png", alt: "Partner" },
  { src: "/images/Website-Logo_5.png", alt: "Partner" },
  { src: "/images/Website-Logo_16.png", alt: "Partner" },
  { src: "/images/Website-Logo_9.png", alt: "Partner" },
  { src: "/images/Pocket_FM_Logo.jpeg", alt: "Pocket FM" },
  { src: "/images/Website-Logo_12.png", alt: "Partner" },
  { src: "/images/Website-Logo_10.png", alt: "Partner" },
  { src: "/images/Website-Logo_17.png", alt: "Partner" },
  { src: "/images/Website-Logo_14.png", alt: "Partner" },
  { src: "/images/Logos-02.png", alt: "Partner" },
  { src: "/images/Logos-01.png", alt: "Partner" },
  { src: "/images/Website-Logo_11.png", alt: "Partner" },
  { src: "/images/ONGO-clean-logo-1.png", alt: "ONGO" },
  { src: "/images/Website-Logo_15.png", alt: "Partner" },
  { src: "/images/Website-Logo_13.png", alt: "Partner" },
];

/* ── Testimonials data ── */
const testimonials = [
  {
    logo: "/images/unilever-2-logo-svg-vector.svg",
    logoClass: "max-w-[200px]",
    quote:
      '"It was exactly what we were looking for. Very professional, very easy to work with, and very quick on the turn around time... much quicker than expected."',
    name: "Harshita Pulla",
    title: "UNILEVER | Global Assistant Strategy & Insights Manager, Procurement",
    avatar: "/images/1543661326200.jpeg",
  },
  {
    logo: "/images/avvio-solar-logo.png",
    logoClass: "max-w-[200px]",
    quote:
      '"Eric and his team have far exceeded my expectations for our vlogs. They have been able to take my simple ideas and turn them into powerful scripts and videos to communicate exactly what I was looking for. The videos have helped build our online brand significantly.',
    name: "Alex Lunen",
    title: "AVVIO SOLAR | President of Marketing",
    avatar: "/images/1665007800486.jpeg",
  },
  {
    logo: "/images/kms-lighthouse-1200px-logo.png",
    logoClass: "max-w-[200px]",
    quote:
      '"Eric was able to create excellent video content for us with little effort on our part; he took the initiative to learn about our company on his own and researched relevant content to create the appropriate content (which he did really well).',
    name: "Daniel Ben Shitrit",
    title: "KMS LIGHTHOUSE | Chief Digital Marketing Officer",
    avatar: "/images/1574375741369.jpeg",
  },
  {
    logo: "/images/logo_dark_1024x500.png",
    logoClass: "max-w-[220px]",
    quote:
      '"If I was to start creating videos for our channel all over again, Eric and his team would be the first ones I would go to on to this... It\'s been more of a partnership than actual business."',
    name: "Heigo Protten",
    title: "ONLINE ONLY | Strategic Partnership Manager",
    avatar: "/images/1572342660678.jpeg",
  },
];

/* ── Sample videos ── */
const sampleVideos = [
  { id: "d9sW5mhh12g", title: "" },
  { id: "RZipohdSPjw", title: "LoneFir Creative" },
  { id: "4jUjs1Byhtw", title: "Highgear" },
  { id: "CY6tsXszNko", title: "Timeskipper" },
  { id: "cQZhNvkj43k", title: "Marketplays" },
  { id: "dBHZFYAmovk", title: "Mashvisor" },
];

/* ── FAQ data ── */
const faqs = [
  {
    q: "Who is Vloggle for?",
    a: "Vloggle is made especially for any tech/online businesses that have the following attributes:\n\n- You have at least 5-10 high performing blogs\n- Your high performing blogs do not have video\n- You have attempted video marketing in the past or are currently achieving results with it\n- You have knowledge in SEO and its long term benefits\n- You may/may not have a Youtube channel - if so, it has below 10,000 subscribers\n- You are seeking a long term video partner and have a trial runway of at least 3-6 months\n- You have no fast deadline expectations for quality video content\n- You understand that the results will not happen overnight",
  },
  {
    q: "Who is Vloggle NOT for?",
    a: "Vloggle is probably not for your business if you have any of the following attributes:\n\n- You do have any high performing blogs\n- You have not tried any video marketing before\n- You don't have any knowledge in SEO\n- You are not seeking a long term video partner\n- You have fast deadline expectations for quality video content\n- You expect quick results",
  },
  {
    q: "What are the turnaround times?",
    a: "With each blog you submit, we estimate between 1-2 weeks turnaround time to produce all videos, with the secret hope that we will surprise you with an early arrival. This includes the script written and approved by you, as well as filming and editing.\n\nIf you happen to send multiple blogs at once, you can expect all of them in the same timeframe.",
  },
  {
    q: "When we purchase a pack, does it expire?",
    a: "The Vloggle's that you purchase in a pack do not expire. You can redeem them at any point. On average, we typically get requests for 2-3 Vloggle's per month for those who are scaling comfortably.",
  },
  {
    q: "What is needed from us, as a customer?",
    a: "We only need the link to your published blog (and if possible, any other resources to help - the more, the merrier). Then, we only ask for collaboration/approval on the scripts and edits.\n\nTypically, once the first vlog is created, that collaboration becomes minimal since we have found our groove and it becomes rinse and repeat with valuable content.",
  },
  {
    q: "What sort of results can we expect from Vloggle?",
    a: "Since your blogs have already performed well, the content is already helpful and valuable. Therefore, you can expect that high engagement will take place right after posting.\n\nIt needs to be said though that you can expect little results in the short term related to sales. Video marketing via Youtube (and even multi-channel marketing) takes time, but the payoff is well worth it. Some businesses can expect those sales results in 1 month, while others might take 1 year.\n\nHowever, each business can expect an increase in brand awareness, online engagement, customer education, and quality leads.",
  },
  {
    q: "What are the benefits of Vloggle?",
    a: "LEAD GENERATION\n- 78% of marketers say video has directly helped to increase sales. (Wyzowl)\n- 93% of brands got a new customer because of a video on social media. (Animoto)\n\nSEARCHABILITY\n- SEO optimized keywords and scripts allow your videos to be seen by those actively searching for your knowledge on Youtube AND Google.\n\nAWARENESS\n- On Youtube, your brand has immense exposure to a global audience.\n\nRELATABILITY\n- A closer, more personal connection is established with a brand they trust.\n\nCONSISTENCY\n- When people get good content that solves their problems, they stay longer and come back.\n\nLONGEVITY\n- Your content never dies, it is always used for marketing/sales.",
  },
  {
    q: "What is Multi-Channel Video Marketing",
    a: "To strategically plan, reuse, and repurpose your video content to distribute across multiple channels. The videos all use similar visuals, tone, and messaging in order to appeal to multiple demographics at once across multiple platforms.",
  },
  {
    q: "Why are the videos delivered on Youtube?",
    a: "Not only is your audience on YouTube, but as the internet's second largest search engine, YouTube can help improve your SEO and overall brand presence. YouTube allows marketers to present unique content that's easy for viewers to consume and share.",
  },
  {
    q: "Can you create the blog for us as well?",
    a: "Yes we can. Feel free to book a call to discuss that different process.",
  },
  {
    q: "Can you do any other videos?",
    a: "Absolutely. We have a full end-to-end digital video content partner.\n\nIf your business needs other types of digital videos such as Explainers, Tutorials, Social Media Ads, Support Videos, E-Learning Courses, or more, just book a call to discuss.",
  },
  {
    q: "Do you offer any discounts?",
    a: "Yes we do (good on you for deep diving into this site) - At the moment, we are offering 50% off of our packs for the first 5 clients only. Book a call to learn more.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{q}</h4>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className="accordion-body"
        style={{ maxHeight: isOpen ? "600px" : "0px" }}
      >
        <div className="accordion-body-inner">
          <p style={{ whiteSpace: "pre-line" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* ════════════════════════════════════════════
          SECTION 1: HERO (dark grid with video embed)
         ════════════════════════════════════════════ */}
      <div className="section-spacing" style={{ marginTop: 0, marginBottom: 0 }}>
        <div className="container-vloggle">
          <div className="grid-halves gap-9">
            {/* Left column */}
            <div>
              <h6 className="text-[var(--color-primary)] text-base font-bold mb-2">
                Engaging, Entertaining, &amp; SEO-Optimised
              </h6>
              <h1 className="heading-sm">
                Turn Your Blogs <br />Into Scroll-<br />Stopping Vlogs!
              </h1>
              <p className="text-large">
                We help tech businesses to grow, educate, and inspire new audiences
                by creating 10 searchable brand videos from just 1 blog article,
                all featuring a human brand representative.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book A Call
                </a>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/play-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="font-semibold text-[var(--color-charcoal)]">
                    Watch the Video
                  </span>
                </div>
              </div>
            </div>

            {/* Right column — YouTube embed */}
            <div>
              <div className="youtube-embed">
                <iframe
                  src="https://www.youtube.com/embed/ZPrETBJbumM?rel=0&controls=1&autoplay=0&mute=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="What is Vloggle?!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 2: TRUST BAR — Client logos
         ════════════════════════════════════════════ */}
      <div className="py-16">
        <div className="container-vloggle">
          <h2 className="text-center text-[var(--color-charcoal)] text-2xl font-bold mb-10">
            Trusted by Over 200+ Partners Worldwide
          </h2>
          <div className="logo-grid">
            {clientLogos.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={50}
                className="logo-image object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 3: Funnel infographic
         ════════════════════════════════════════════ */}
      <section className="py-8">
        <div className="container-940">
          <Image
            src="/images/Funnel-and-Chart-01.png"
            alt="Vloggle funnel — 1 blog becomes 10 videos"
            width={2000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4: "What" — Value prop 1
          A video service exclusively for SaaS businesses.
         ════════════════════════════════════════════ */}
      <div id="What" className="section-spacing">
        <div className="container-vloggle">
          <div className="grid-halves">
            <div style={{ maxWidth: 480 }}>
              <Image
                src="/images/video.svg"
                alt=""
                width={55}
                height={55}
                className="icon-large"
              />
              <h2 className="heading-xl">
                A video service exclusively for SaaS businesses.
              </h2>
              <p className="text-large">
                Vloggle is a completely &quot;Done-For-You&quot; video content creation
                service for online SaaS businesses who understand the power of
                searchable, written content.
              </p>
            </div>
            <Image
              src="/images/pexels-canva-studio-3153198.jpg"
              alt="Team collaborating on video"
              width={800}
              height={600}
              className="rounded-img"
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 5: Value prop 2 (reversed)
          Consistently grow and engage your audiences.
         ════════════════════════════════════════════ */}
      <div className="section-spacing">
        <div className="container-vloggle">
          <div className="grid-halves">
            <Image
              src="/images/pexels-ketut-subiyanto-4350210.jpg"
              alt="Person watching video content"
              width={800}
              height={600}
              className="rounded-img order-2 lg:order-1"
            />
            <div style={{ maxWidth: 480, marginLeft: "auto" }} className="order-1 lg:order-2">
              <Image
                src="/images/series.svg"
                alt=""
                width={55}
                height={55}
                className="icon-large"
              />
              <h2 className="heading-xl">
                Consistently grow and engage your audiences.
              </h2>
              <p className="text-large">
                Vloggle provides only the most authentic video presenters and
                brand representatives so that your online audiences can personally
                relate to the valuable content with each new video.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 6: Value prop 3
          Let your business be fully seen, not just read.
         ════════════════════════════════════════════ */}
      <div className="section-spacing">
        <div className="container-vloggle">
          <div className="grid-halves">
            <div style={{ maxWidth: 480 }}>
              <Image
                src="/images/categories.svg"
                alt=""
                width={55}
                height={55}
                className="icon-large"
              />
              <h2 className="heading-xl">
                Let your business be fully seen, not just read.
              </h2>
              <p className="text-large">
                Vloggle creates only customised video content that is in line with
                your brand&apos;s identity, with a unique, digital presence.
              </p>
            </div>
            <Image
              src="/images/pexels-andrea-piacquadio-840996.jpg"
              alt="Professional presenting on camera"
              width={800}
              height={600}
              className="rounded-img"
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 7: "How" — Multi-Channel Marketing
         ════════════════════════════════════════════ */}
      <section id="How" className="section-spacing" style={{ marginTop: 0, marginBottom: 0 }}>
        <div className="container-vloggle text-center" style={{ marginTop: 60 }}>
          <h1 className="heading-xl mb-6">
            Multi-Channel Marketing<br />Made <em>Super</em> Easy
          </h1>
          <h3 className="subhead text-center text-[22px] leading-[120%]">
            With Vloggle, you get 10 videos for each 1 blog article you submit:<br />
            1 YouTube Video + 3 Shorter Subtopics, with each one exported<br />
            in every ratio (Landscape, Vertical, &amp; Square)<br />
            so that you can promote your new blog/vlog everywhere
          </h3>
        </div>

        {/* Featured video card */}
        <div className="container-vloggle mt-12">
          <div className="card-wrapper-bg">
            <div className="grid-halves" style={{ gridColumnGap: 0 }}>
              <div className="relative">
                <div className="youtube-embed">
                  <iframe
                    src="https://www.youtube.com/embed/LAIQ-kBPBVI?rel=0&controls=1&autoplay=0&mute=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="How To Turn Your Blogs Into Lead Generating Videos!"
                  />
                </div>
              </div>
              <div className="card-body-large">
                <h3>How To Turn Your Blogs Into Lead Generating Videos!</h3>
                <p>
                  Are you ready to take your content marketing to the next level?
                  <br /><br />
                  In this comprehensive video, we&apos;ll guide you through the process
                  of turning your blogs into captivating videos that generate leads
                  and boost conversions.
                  <br /><br />
                  Get ready to witness the true potential of video content!
                </p>
                <div className="text-sm text-[var(--color-muted)] ml-1.5">Time: 11:09</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 8: "Why Vloggle?"
         ════════════════════════════════════════════ */}
      <div id="Why" className="section-spacing" style={{ marginTop: 120 }}>
        <div className="container-vloggle">
          <div className="grid-halves">
            <div style={{ maxWidth: 480 }}>
              <h1 className="heading-xl">Why Vloggle?</h1>
              <h3 className="subhead">
                With more than 25+ years of experience working both in front and
                behind the camera, Vloggle&apos;s CEO/Founder has worked alongside
                more than 500+ global brand partners and marketers.
              </h3>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book A Call
              </a>
            </div>
            <div className="relative">
              <Image
                src="/images/Vloggle-Why-Vloggle-Thumbnail.jpg"
                alt="Why Vloggle thumbnail"
                width={800}
                height={600}
                className="rounded-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 9: TESTIMONIALS
         ════════════════════════════════════════════ */}
      <div
        id="Testimonials"
        className="bg-[var(--color-card-bg)] rounded-[10px]"
        style={{ paddingTop: 100, paddingBottom: 60, marginBottom: 0 }}
      >
        <div className="container-vloggle">
          <div className="text-center mb-12">
            <h2 className="text-[var(--color-charcoal)]">Don&apos;t take our word for it.</h2>
            <h3 className="subhead">Hear what our customers have to say.</h3>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="testimonial-slider-content">
              <Image
                src={testimonials[currentSlide].logo}
                alt={testimonials[currentSlide].name}
                width={200}
                height={60}
                className={`${testimonials[currentSlide].logoClass} h-auto mx-auto mb-6`}
              />
              <h3 className="testimonial-slider-quote">
                {testimonials[currentSlide].quote}
              </h3>
              <div className="text-[var(--color-charcoal)] mb-6">
                <span className="text-[var(--color-charcoal)]">
                  <strong>{testimonials[currentSlide].name}</strong>
                </span>{" "}
                - {testimonials[currentSlide].title}
              </div>
              <Image
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].name}
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-[10px] object-cover mx-auto"
              />
            </div>

            {/* Slider arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % testimonials.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentSlide
                      ? "bg-[var(--color-charcoal)]"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 10: SAMPLES — Video gallery
         ════════════════════════════════════════════ */}
      <div id="Samples" className="py-20">
        <div className="container-vloggle">
          <h2 className="text-center text-[var(--color-charcoal)] text-[50px] font-extrabold leading-[58px] tracking-[-0.03em] mb-10">
            Vloggle Samples
          </h2>
          <div className="samples-grid">
            {sampleVideos.map((video) => (
              <div key={video.id} className="youtube-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=1&autoplay=0&mute=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={video.title || "Vloggle sample"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 11: PRICING
         ════════════════════════════════════════════ */}
      <div id="Pricing">
        <h1 className="heading-lg text-center mb-0 pb-5">
          Simple Pricing Packs,<br />Redeem Anytime.
        </h1>
        <h3 className="subhead text-center text-[22px] leading-[120%] mb-10">
          Our complete &quot;Done-For-You&quot; service is $2550 per 1 blog article<br />
          which includes 1 YouTube Video + 3 Social Media Subtopics,<br />
          all exported for every social channel.
        </h3>

        <div className="container-vloggle" style={{ marginTop: 40 }}>
          <div className="grid-pricing">
            {/* Pack 1 — Standard */}
            <div className="card-webflow">
              <div>
                <div className="mb-9">
                  <div className="tagline">Standard</div>
                  <h2>1 Pack</h2>
                  <div>
                    Perfect for starting out with Vloggle &amp; video marketing on
                    website or social media.
                  </div>
                </div>
                <ul className="list-none p-0 mb-9">
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3 text-[var(--color-charcoal)] font-extrabold">
                        10 Videos Delivered
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3">Dedicated Presenter</div>
                    </div>
                  </li>
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3">On-Brand Assets</div>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book A Call
              </a>
            </div>

            {/* Pack 2 — 5 Pack (featured, orange bg) */}
            <div className="card-primary-1">
              <div>
                <div className="mb-9">
                  <div className="tagline" style={{ color: "white" }}>10% Discount</div>
                  <h2 className="text-white">5 Pack</h2>
                  <div>
                    Perfect for scaling quickly with multi-channel marketing
                    everywhere.
                  </div>
                </div>
                <ul className="list-none p-0 mb-9">
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3 text-[var(--color-charcoal)] font-extrabold">
                        50 Videos Delivered
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3">Dedicated Presenter</div>
                    </div>
                  </li>
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3">On-Brand Assets</div>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Book A Call
              </a>
            </div>

            {/* Pack 3 — 10 Pack (charcoal bg) */}
            <div className="card-primary-2">
              <div>
                <div className="mb-9">
                  <div className="tagline" style={{ color: "white" }}>20% Discount</div>
                  <h2 className="text-white">10 Pack</h2>
                  <div>
                    Perfect for dominating the market/industry with a consistent
                    Youtube channel.
                  </div>
                </div>
                <ul className="list-none p-0 mb-9">
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3 text-white font-extrabold">
                        100 Videos Delivered
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3 text-white">Dedicated Presenter</div>
                    </div>
                  </li>
                  <li>
                    <div className="list-row-border">
                      <div className="icon-bg-small">
                        <Image src="/images/check.svg" alt="" width={12} height={12} />
                      </div>
                      <div className="ml-3">On-Brand Assets</div>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 12: FAQs (orange background)
         ════════════════════════════════════════════ */}
      <div
        id="FAQs"
        className="bg-[var(--color-primary)] mt-16"
        style={{ padding: "120px 0" }}
      >
        <div className="container-vloggle">
          <div className="grid-halves" style={{ alignItems: "start" }}>
            {/* Left side */}
            <div>
              <h2 className="text-white text-[44px] leading-[48px]">People often ask:</h2>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book A Call
              </a>
            </div>

            {/* Right side — accordion */}
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 13: Final CTA — "Channel your videos."
         ════════════════════════════════════════════ */}
      <div className="section-spacing" style={{ marginBottom: 0 }}>
        <div className="container-vloggle">
          <div className="card-wrapper-bg">
            <div className="card-body-large">
              <div className="grid-halves" style={{ alignItems: "start" }}>
                <div style={{ maxWidth: 480 }}>
                  <div className="tagline">A brand new video marketing Service</div>
                  <h2 className="heading-xl">Channel your videos.</h2>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Book A Call
                  </a>
                </div>
                <div>
                  <div className="mb-6">
                    <h5 className="mb-1.5">Scale Your Searchability</h5>
                    <div>
                      Double-down on your SEO by adding video: the way 72% of
                      customers prefer learning about a product or service.
                    </div>
                  </div>
                  <div className="mb-6">
                    <h5 className="mb-1.5">Dominate Your Competitors</h5>
                    <div>
                      Become THE go-to brand in your market for value and stand
                      out from the noise.
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1.5">All-Inclusive Experience</h5>
                    <div>
                      Just send us your blog, we&apos;ll do the rest: Script-writing,
                      Presenting, &amp; Editing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
