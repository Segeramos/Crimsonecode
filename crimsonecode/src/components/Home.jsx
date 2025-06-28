// src/components/Home.jsx
import { about, social } from "../data";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-700 text-orange-100 font-['Karla']">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between flex-1 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        {/* Left */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 mt-10 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            <span className="text-orange-100 font-extrabold">A Digital Marketer And </span>
            <span className="text-orange-100 font-extrabold">Web Developer</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 text-center lg:text-left">
            {about.tagline}
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6 sm:mt-8 w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-auto rounded-lg px-4 py-3 bg-orange-100 text-black focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-red-800 hover:bg-red-700 text-orange-100 rounded-lg px-4 py-3 font-semibold">
              Connect with me
            </button>
          </div>
          <div className="flex justify-center lg:justify-start space-x-6 mt-8">
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

        {/* Right */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={about.profile}
            alt="Profile"
            className="rounded-2xl shadow-lg w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
