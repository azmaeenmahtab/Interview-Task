import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h1 className="text-white text-lg font-semibold"> COACH PRO</h1>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/features" className="hover:text-white">Features</a></li>
            <li><a href="/tracks" className="hover:text-white">Learning Tracks</a></li>
            <li><a href="/updates" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/success-stories" className="hover:text-white">Testimonials</a></li>
            <li className="flex items-center space-x-2">
              <a href="/careers" className="hover:text-white">Careers</a>
              <span className="px-2 py-0.5 rounded-full bg-green-900 text-green-400 text-xs border border-green-700">Hiring</span>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CoachMaster. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
