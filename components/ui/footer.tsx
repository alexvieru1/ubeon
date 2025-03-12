"use client";
import Link from "next/link";
import {
  MailIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "lucide-react";
import { RotateWords } from "./rotate-words";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-16">
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
              <RotateWords text="" words={["you be on", "ubeon"]}/>
            </Link>
            {/* <p className="mt-4 text-sm">
              © {new Date().getFullYear()} ubeon. All rights reserved.
            </p> */}
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
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Despre noi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicii"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Servicii
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parteneri"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Parteneri
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proiecte"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Proiecte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
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
                  <MapPinIcon className="w-4 h-4 text-[#8cc63e] dark:text-green-400" />
                  <span>Sector 4, București</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCallIcon className="w-4 h-4 text-[#8cc63e] dark:text-green-400" />
                  <span>021.330.30.12</span>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4 text-[#8cc63e] dark:text-green-400" />
                  <span>contact@ubeon.ro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-xs">
          <p>© {new Date().getFullYear()} ubeon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
