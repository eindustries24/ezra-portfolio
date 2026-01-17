export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary-content text-base-content p-4 mt-10">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Ezra
          Industries
        </p>
      </aside>
    </footer>
  );
}
