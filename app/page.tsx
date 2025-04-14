/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "EPO",
      src: "/images/red.png",
      btnColor: "bg-red-500",
      href: "https://wa.me/40722567212",
      redirect: "/services/epo",
    },
    {
      id: 2,
      title: "T&D",
      src: "/images/orange.png",
      btnColor: "bg-orange-500",
      href: "https://wa.me/40722567212",
      redirect: "/services/t&d",
    },
    {
      id: 3,
      title: "C&A",
      src: "/images/blue.png",
      btnColor: "bg-blue-500",
      href: "https://wa.me/40722567212",
      redirect: "/services/c&a",
    },
  ];

  // Array of images for each carousel
  const carouselImages = [
    ["/images/1.png", "/images/1.png", "/images/1.png"],
    ["/images/1.png", "/images/1.png", "/images/1.png"],
    ["/images/1.png", "/images/1.png", "/images/1.png"],
  ];

  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const intervals = carouselImages.map((images, carouselIndex) =>
      setInterval(() => {
        setCurrentIndexes((prev) => {
          const newIndexes = [...prev];
          newIndexes[carouselIndex] =
            (newIndexes[carouselIndex] + 1) % images.length;
          return newIndexes;
        });
      }, 3000 + carouselIndex * 500) // optional: different timing for variety
    );

    return () => intervals.forEach(clearInterval);
  }, [carouselImages.length]);

  return (
    <div>
      <Navbar />

      {/* Image carousels */}
      <div className="pt-24 w-full flex justify-center">
        {/* Desktop: 3 carousels */}
        <div className="hidden md:flex gap-6">
          {carouselImages.map((images, index) => (
            <div key={index} className="relative w-[300px] h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndexes[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    className="rounded-lg object-cover"
                    src={images[currentIndexes[index]]}
                    fill
                    alt={`Carousel ${index + 1}`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile: Single carousel */}
        <div className="flex md:hidden relative w-[90%] h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndexes[0]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                className="rounded-lg object-cover"
                src={carouselImages[0][currentIndexes[0]]}
                fill
                alt="Mobile Carousel"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center mt-8">
        {/* About Us Card */}
        <Card className="w-[90%] xl:w-[60%]">
          <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e] text-start">
            A bit about us
          </CardTitle>
          <CardContent className="text-start">
            <div className="flex flex-col gap-6">
              <div>
                <p>
                  Suntem de 20 de ani pe piața de servicii B2B și B2C din
                  România și niciodată mai aproape de ceea ce suntem astăzi.
                </p>
                <p className="mt-2">
                  De-a lungul celor două decenii de activitate, am reușit să
                  construim relații durabile și să realizăm parteneriate de
                  succes, bazate pe încredere și colaborare. Suntem recunoscuți
                  pentru abordarea noastră proactivă și pentru capacitatea de a
                  transforma provocările în oportunități.
                </p>
                <p className="mt-2">
                  Fondată în 2006, Ubeon a evoluat constant, iar astăzi suntem
                  <strong>
                    {" "}
                    Experiență, Cunoaștere, Dorință, Echilibru și Lucrul Bine
                    Făcut.
                  </strong>
                </p>
                <p className="mt-2">
                  Experiența a adus cu sine noutatea și îndârjirea, Cunoașterea
                  a arătat drumul, Dorința a păstrat deschisă calea, Echilibrul
                  ne-a ajutat să nu renunțăm, iar Lucrul bine făcut a fost
                  motivația cea mai puternică pentru a continua.
                </p>
                <p className="mt-2">
                  Acestea, împreună cu <strong>Integritatea</strong>, sunt
                  valorile pe care le punem în fața celor care ne sunt clienți
                  și reprezintă promisiunea pe care o facem celor care vor să ne
                  încredințeze proiectele lor.
                </p>
              </div>
              <div>
                <p className="mt-2">
                  Misiunea noastră este să oferim soluții personalizate,
                  eficiente și adaptate nevoilor specifice ale fiecărui client,
                  sub deviza: <br />
                  <strong>
                    Pentru orice nevoie, înainte de oricine, sună-ne pe noi!
                  </strong>
                </p>
                <p className="mt-2">
                  Tot ce știm și tot ce facem am pus în trei cutii de valori, pe
                  care le-am încredințat celor care vor fi pentru tine:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <strong>Expertul în organizarea</strong> oricărui tip de
                    eveniment privat sau corporativ. Meet
                    <strong> Your EPO</strong>
                  </li>
                  <li>
                    <strong>
                      Expertul în educație, training și dezvoltare
                    </strong>
                    , pregătit să îți ofere cunoștințe, metode și tehnici de
                    lucru adaptate fie pentru nevoile personale, fie ale
                    companiei. Meet <strong>Your T&D</strong>
                  </li>
                  <li>
                    <strong>Expertul consultant</strong> care preia întrebările
                    și nelămuririle tale, transformându-le în evaluări,
                    expertize, planuri de acțiune, planuri de management, studii
                    de fezabilitate, sondaje și altele, atunci când sunt
                    necesare. Meet <strong>Your C&A</strong>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                Suntem cei mai buni sau facem echipă cu cei mai buni, având
                construită o rețea de parteneri cu care putem ajunge oriunde
                este nevoie. Am învățat, în cei 20 de ani de existență, că numai
                așa putem livra dincolo de așteptările clienților și
                partenerilor noștri.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Services & Contact Cards */}
        <div className="flex flex-col md:flex-row w-full px-4 xl:w-[60%] gap-4 mt-8">
          <Card className="w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl text-center xl:text-2xl text-[#8cc63e]">
              Excellent services
            </CardTitle>
            <CardContent className="md:py-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="my-2 flex justify-center items-center"
                >
                  <Link href="/services">
                    <Image
                      src={service.src}
                      width={100}
                      height={20}
                      alt={service.title}
                    />
                    <div className="flex ml-10">
                      <p className="font-mono">Your </p>
                      <Badge
                        className={`${service.btnColor} hover:bg-gray-500`}
                      >
                        {service.title}
                      </Badge>
                    </div>
                  </Link>
                  <Link href={service.href} target="_blank">
                    <Button
                      className={`${service.btnColor} ml-6 hover:bg-gray-500`}
                    >
                      Get fast access
                    </Button>
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e] text-center">
              Contact us
            </CardTitle>
            <CardContent className="md:py-4">
              <div className="flex flex-row my-3 justify-center items-center">
                <MapPinIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">Sector 4, București</p>
              </div>
              <div className="flex flex-row my-3 justify-center items-center">
                <PhoneCallIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">+40 21 330 30 12</p>
              </div>
              <div className="flex flex-row my-3 justify-center items-center">
                <PhoneCallIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">+40 7272 UBEON</p>
              </div>
              <div className="flex flex-row my-3 justify-center items-center">
                <MailIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">contact@ubeon.ro</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
