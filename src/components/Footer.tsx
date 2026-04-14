export default function Footer() {
  return (
    <footer className="footer-section">
      <h3 className="text-[var(--color-charcoal)] text-center mb-2 text-lg leading-5">
        A Global Experience Co.
      </h3>
      <h3 className="text-[var(--color-charcoal)] text-center text-[10px] leading-[15px] font-semibold">
        Copyright &copy; {new Date().getFullYear()} The Global Experience Co. All Rights Reserved.
      </h3>
    </footer>
  );
}
