import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 text-primary">Abdullah Nadeem</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Professional Freelancer specializing in Web Development and Digital Marketing
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="text-sm sm:text-base">Website Development</li>
              <li className="text-sm sm:text-base">Full Stack Solutions</li>
              <li className="text-sm sm:text-base">SEO & Marketing</li>
              <li className="text-sm sm:text-base">Google Ads</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="mailto:abdullahnadeem2580@gmail.com"
                className="w-9 h-9 sm:w-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-nadeem-319560285"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/ab9898998989898"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Abdullah Nadeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;