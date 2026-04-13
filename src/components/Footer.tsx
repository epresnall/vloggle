import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Vloggle-Icon-p-500.png"
              alt="Vloggle"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <div>
              <span className="text-lg font-bold">Vloggle</span>
              <p className="text-xs text-gray-400">
                A Global Experience Co.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-[var(--color-purple)] transition-colors">
              Home
            </Link>
            <a
              href="https://calendly.com/tvec/the-spokesman-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-purple)] transition-colors"
            >
              Book a Call
            </a>
            <Link href="/terms" className="hover:text-[var(--color-purple)] transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[var(--color-purple)] transition-colors">
              Privacy
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          Copyright &copy; {new Date().getFullYear()} The Global Experience Co.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
