"use client";
import Link from "next/link";
import { RotateWords } from "./rotate-words";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconDeviceLandlinePhone,
  IconDeviceMobile,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

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
              <RotateWords text="" words={["you be on", "ubeon"]} />
            </Link>
            {/* <p className="mt-4 text-sm">
              © {new Date().getFullYear()} ubeon. All rights reserved.
            </p> */}
          </div>
          {/* Navigation & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div className="md:ml-14">
              <h4 className="font-medium mb-2">Content</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Partners
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/projects"
                    className="hover:text-[#8cc63e] dark:hover:text-green-400 transition duration-300"
                  >
                    Projects
                  </Link>
                </li> */}
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
              <h4 className="font-medium mb-2">Contact us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <IconMapPin className="w-5 h-5 text-[#8cc63e] dark:text-green-400" />
                  <span>Sector 4, București</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconDeviceLandlinePhone
                    stroke={2}
                    className="w-5 h-5 text-[#8cc63e] dark:text-green-400"
                  />
                  <span>+40 21 330 30 12</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconDeviceMobile
                    stroke={2}
                    className="w-5 h-5 text-[#8cc63e] dark:text-green-400"
                  />
                  <span> +40 7272 UBEON</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconMail className="w-5 h-5 text-[#8cc63e] dark:text-green-400" />
                  <span>contact@ubeon.ro</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Socials</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <IconBrandInstagram className="w-5 h-5 text-[#8cc63e] dark:text-green-400" />
                  <span>ubeon</span>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100069772204107"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <IconBrandFacebook className="w-5 h-5 text-[#8cc63e] dark:text-green-400" />
                    <span>ubeon</span>
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <IconBrandX className="w-5 h-5 text-[#8cc63e] dark:text-green-400" />
                  <span>ubeon</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconBrandLinkedin className="w-5 h-5 text-[#8cc63e] dark:text-green-400" />
                  <span>ubeon</span>
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
