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
            <span className="text-3xl font-bold tracking-widest">Portfolio</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm">
              <Link to="/" className="hover:text-red-800">HOME</Link>
              <Link to="/about" className="hover:text-red-800">ABOUT</Link>
              <Link to="/projects" className="hover:text-red-800">WORK</Link>
              <Link to="/services" className="hover:text-red-800">SERVICE</Link>
              <Link to="/contact" className="hover:text-red-800">CONTACT</Link>
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
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-black px-6 py-4 flex flex-col space-y-4 md:hidden z-50 shadow-lg">
                <Link to="/" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>HOME</Link>
                <Link to="/about" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                <Link to="/projects" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>WORK</Link>
                <Link to="/services" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>SERVICE</Link>
                <Link to="/contact" className="hover:text-red-800" onClick={() => setMenuOpen(false)}>CONTACT</Link>
              </div>
            )}
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
