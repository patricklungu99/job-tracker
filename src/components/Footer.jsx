import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="footer-container mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Company Info */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">JobTracker</h3>
            <p className="text-gray-400">
              Connecting job seekers with opportunities. Join us today and start your career journey.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-amber-400">Home</a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-amber-400">Dashboard</a>
              </li>
              <li>
                <a href="/job-search" className="hover:text-amber-400">Job Search</a>
              </li>
              <li>
                <a href="/applications" className="hover:text-amber-400">My Applications</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Links */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-amber-400">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-amber-400">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-amber-400">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-amber-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Enigmatic Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
