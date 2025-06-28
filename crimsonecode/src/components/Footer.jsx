// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black mt-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-orange-100">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 text-xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 text-xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
