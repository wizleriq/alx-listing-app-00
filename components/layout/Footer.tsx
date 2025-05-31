import React from 'react';

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">

        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">StayEasy</h3>
          <p>Making your stay comfortable and easy, wherever you go.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Accommodations</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
          <p>Email: support@stayeasy.com</p>
          <p>Phone: +234 800 123 4567</p>
          <p>Address: 123 StayEasy Lane, Lagos, Nigeria</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} StayEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
