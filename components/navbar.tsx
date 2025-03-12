"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";
import { RotateWords } from "./ui/rotate-words";

const navLinks = [
  { name: "Acasa", path: "/" },
  { name: "Despre noi", path: "/despre-noi" },
  { name: "Servicii", path: "/servicii" },
  { name: "Parteneri", path: "/parteneri" },
  { name: "Proiecte", path: "/proiecte" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const words = ["you be on", "ubeon"];

  return (
    <nav className="bg-white dark:bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:justify-center h-16 items-center">
          {/* Logo / Brand Name with flip effect */}
          <div className="flex-shrink-0 w-[220px] lg:mr-4">
            <Link
              href="/"
              title="you be on"
              aria-label="you be on"
              className="text-3xl font-sans font-semibold"
            >
              <RotateWords text="" words={words}/>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="cursor-pointer">
                <Link
                  href={link.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#8cc63e] transition duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          {/* Mode Toggle on larger screens */}
          {/* <div className="hidden lg:block">
            <ModeToggle />
          </div> */}
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            {/* <div >
                <ModeToggle />
            </div> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="cursor-pointer">
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
