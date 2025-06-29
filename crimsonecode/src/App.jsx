// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-black to-gray-700 text-orange-100 font-['Karla']">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Navbar */}
          <nav className="relative flex justify-between items-center py-6">
            <span className="text-3xl font-bold tracking-widest ml-25">Portfolio</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm mr-25">
              <Link to="/" className="hover:text-red-800">Home</Link>
              <Link to="/about" className="hover:text-red-800">About</Link>
              <Link to="/projects" className="hover:text-red-800">MyWork</Link>
              <Link to="/services" className="hover:text-red-800">Services</Link>
              <Link to="/contact" className="hover:text-red-800">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Dropdown */}
            <div
              className={`absolute top-full left-0 w-full backdrop-blur-md bg-white/0 px-6 py-6 flex flex-col items-center space-y-6 md:hidden z-50 shadow-2xl transform transition-all duration-500 ease-in-out ${
                menuOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-8 scale-90 pointer-events-none"
              }`}
            >
              <Link to="/" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/projects" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>MyWork</Link>
              <Link to="/services" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link to="/contact" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </nav>

          {/* Page Content */}
          <main className="pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
