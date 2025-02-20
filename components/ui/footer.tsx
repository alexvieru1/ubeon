"use client";
import Link from "next/link";
import {
  MailIcon,
  MapPinIcon,
  PhoneCallIcon,
  PrinterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Brand & Copyright */}
          <div className="mb-8 md:mb-0">
            <Link
              href="/"
              title="you be on"
              aria-label="you be on"
              className="text-3xl font-sans font-semibold"
            >
              <span className="text-green-600">u</span>
              <span className="text-gray-600">be</span>
              <span className="text-green-600">on</span>
            </Link>
            <p className="mt-4 text-sm">
              © {new Date().getFullYear()} ubeon. All rights reserved.
            </p>
          </div>
          {/* Navigation & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div>
              <h4 className="font-medium mb-2">Navigare</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/despre"
                    className="hover:text-green-600 transition duration-300"
                  >
                    Despre noi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicii"
                    className="hover:text-green-600 transition duration-300"
                  >
                    Servicii
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parteneri"
                    className="hover:text-green-600 transition duration-300"
                  >
                    Parteneri
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proiecte"
                    className="hover:text-green-600 transition duration-300"
                  >
                    Proiecte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-green-600 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="font-medium mb-2">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-green-600" />
                  <span>Sector 4, București</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCallIcon className="w-4 h-4 text-green-600" />
                  <span>021.330.30.12</span>
                </li>
                <li className="flex items-center gap-2">
                  <PrinterIcon className="w-4 h-4 text-green-600" />
                  <span>021.331.05.44</span>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4 text-green-600" />
                  <span>info@ubeon.ro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-xs">
          <p>© {new Date().getFullYear()} ubeon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
