import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Section */}
        <div className="md:col-span-1 md:row-span-3">
          <h3 className="text-xl font-semibold mb-2">About The Movie Hub</h3>
          <p className="text-gray-300 mb-4">
            The Movie Hub web app is created by Udit Sahani, providing comprehensive movie information to cinephiles worldwide.
            Connect with Udit Sahani on{' '}
            <a href="https://linkedin.com/in/uditsahani/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              LinkedIn
            </a>.
          </p>
        </div>

        {/* Second Section */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <Link to="/disclaimer" className="text-blue-500"  rel="noopener noreferrer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-blue-500" rel="noopener noreferrer">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="https://github.com/uditrsahani/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com/uditsahani" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/uditrsahani" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
