import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Quick ScaleUp News
            </h3>
            <p className="text-sm leading-relaxed">
              Quick ScaleUp News is a trusted digital news platform delivering
              the latest updates on Health, Business, Technology, Politics and
              World affairs. We focus on accurate, fast and reliable news to
              keep you informed every day.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <span>quickscaleupnews@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                <span>+91 9128472136</span>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 py-6 text-center text-sm">
          © 2025{" "}
          <span className="font-semibold text-white">
            Quick ScaleUp News
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
