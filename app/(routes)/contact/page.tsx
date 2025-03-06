"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold my-8">Contact</h1>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center">
            <p className="text-xl">
              Suna-ne:{" "}
              <a href="tel:+40213303012" className="text-green-600">
                +40 213303012
              </a>
            </p>
            <p className="text-xl">
              Email:{" "}
              <a href="mailto:info@ubeon.ro" className="text-green-600">
                info@ubeon.ro
              </a>
            </p>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8061.234801940229!2d26.113670249061556!3d44.41106776482455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1741253412245!5m2!1sen!2sro"
              className="rounded-lg"
              width="800"
              height="600"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
