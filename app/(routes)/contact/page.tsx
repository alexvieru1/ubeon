"use client";
import { DraftForm } from "@/components/draft-form";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import { IconDeviceLandlinePhone, IconDeviceMobile, IconMail } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center p-4">
        <p className="text-3xl font-bold mt-8">Pentru orice nevoi,</p>
        <p className="text-3xl font-bold ">Inainte de oricine,</p>
        <p className="text-3xl font-bold mb-8">Suna-ne pe noi!</p>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-[85%]">
            <Image src='/images/ubeon-logo-2.jpg' width={324} height={267} alt="sigla"/>
            <div className="flex flex-col mt-6 md:mt-0 md:mr-40">
              <p className="text-xl">
                <Link href="tel:+40213303012" className="text-[#8cc63e] flex gap-2">
                  <IconDeviceLandlinePhone />
                  +40 21 330 30 12
                </Link>
              </p>
              <p className="text-xl">
                <Link href="tel:+40727282366" className="text-[#8cc63e] flex gap-2">
                <IconDeviceMobile />
                +40 7272 UBEON
                </Link>
              </p>
              <p className="text-xl mb-8">
                <Link href="mailto:contact@ubeon.ro" className="text-[#8cc63e] flex gap-2">
                <IconMail/>
                  contact@ubeon.ro
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[90%] flex flex-col justify-center items-center md:flex-row gap-2">
            <DraftForm />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8061.234801940229!2d26.113670249061556!3d44.41106776482455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1741253412245!5m2!1sen!2sro"
              className="rounded-lg w-[350px] lg:w-[600px] h-[380px]"
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
