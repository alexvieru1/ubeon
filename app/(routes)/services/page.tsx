"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const services = [
    {
      title: "Your EPO",
      want: "EPO",
      description: "Your Event Planer & Organizer",
      src: "/images/red.png",
      textColor: "text-red-500",
      btnColor: "bg-red-500",
      href: "/services/epo",
      details: [
        <>
          <em>Your EPO</em> va fi partenerul tău de maximă încredere în
          Planificarea și Organizarea unui Eveniment. Dacă 20 de ani de
          experiență nu sunt suficienți pentru a dovedi că știm ce facem, atunci
          acceptăm provocarea lansată de evenimentul tău.
        </>,
        <>
          Suntem aici pentru evenimente corporate, dar și evenimente personale.
          Dacă ai spus un eveniment, atunci obligatoriu trebuie să îți iei{" "}
          <em>Your EPO</em> de la Ubeon, care va face din ideea ta de eveniment
          amintirea care nu se va șterge niciodată din memorie.{" "}
          <em>Your EPO</em> planifică și organizează cu dorința că TOTUL TREBUIE
          SA FIE MEMORABIL. Indiferent că vorbim despre conferințe, gale,
          prezentări, lansări, vernisaje, expoziții sau altele, TU te vei bucura
          de eveniment la fel ca toți participanții. Efortul organizării este
          preluat de <em>Your EPO</em>.
        </>,
        <>
          <strong>
            The wow element! Your EPO works within any budget. Call! Check! Book
            Your EPO!{" "}
          </strong>
        </>,
      ],
    },
    {
      title: "Your T&D",
      want: "T&D",
      description: "Your Training & Development",
      src: "/images/orange.png",
      textColor: "text-orange-500",
      btnColor: "bg-orange-500",
      href: "/services/t&d",
      details: [
        <>
          Da. Trainingul și Dezvoltarea sunt astăzi mai importante ca niciodată
          într-o echipă.
        </>,
        <>
          Provocările tehnologice actuale ne arată că fară o abordare corectă la
          acest capitol, riscurile de insucces sunt ridicate.
        </>,
        <>
          <em>Your T&D</em> îți va susține nevoile de pregătire și dezvoltare
          ale personalului prin intermediul unor programe valoroase și cu efecte
          de schimbare în bine garantate.
        </>,
        <>
          Metode simple, ușoare și mai ales rapide sunt ceea ce{" "}
          <em>Your T&D</em> va elabora și implementa pentru compania ta.
        </>,
        <>
          Uită de sesiunile lungi și plictisitoare de training! Acum facem ce
          trebuie acolo unde trebuie! Rapid și cu Impact!
        </>,
        <>
          <strong>
            Your T&D is here and Your People will do better for you! Call!
            Check! Book Your T&D!
          </strong>
        </>,
      ],
    },
    {
      title: "Your C&A",
      want: "C&A",
      description: "Your Consultant & Advisor",
      src: "/images/blue.png",
      textColor: "text-blue-500",
      btnColor: "bg-blue-500",
      href: "/services/c&a",
      details: [
        <>
          Toată experința și expertiza noastră acumulată in peste 20 de ani
          poate și trebuie să fie transferată acolo unde este nevoie.
        </>,
        <>
          Așadar, <em>Your C&A</em> îți va oferi timpul său și tot ce cunoaște
          în sfera sa de expertiză, pentru ca tu să te bucuri cu adevărat de un
          consultant și îndrumător de încredere.
        </>,
        <>
          Domenii precum: Legislație, Contabilitate, Relații de muncă, Siguranță
          alimentară, Sustenabilitate, Integrare, Accesare fonduri și granturi,
          Sănatate și securitate în muncă, Situații de urgența, Medicina muncii,
          Asigurări sunt acele puncte fierbinți ale afacerii tale. De unele ești
          conștient, altele îți sunt impuse. Da, știm și mai știm că fară ele
          afacerea ta nu poate merge bine.
        </>,
        <>
          De la Ubeon poți sa iți iei acum <em>Your C&A</em>. Acesta va fi cu tine
          permanent și dacă nu știe ceva, sigur cunoaște pe cineva care știe.
        </>,
        <><strong>Your C&A is now your trustful aliate! Call! Check! Book Your C&A!</strong></>,
      ],
    },
  ];
  const handleFastAccessClick = () => {
    window.open("https://wa.me/40722567212", "_blank");
  };
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col items-center overflow-hidden w-full">
        {/* Grid container that stretches items vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 w-full max-w-[90%] items-stretch">
          {services.map((srv, index) => (
            <Link key={index} href={srv.href}>
              <Card className="flex flex-col h-full">
                {/* Card Header */}
                <CardTitle
                  className={`p-4 text-xl xl:text-2xl ${srv.textColor}`}
                >
                  {srv.title}
                </CardTitle>
                <CardDescription className="p-4">
                  {srv.description}
                </CardDescription>
                {/* Main Content (grows to fill available space) */}
                <CardContent className="flex-1 flex flex-col gap-3 p-4">
                  <Image
                    className="rounded-lg"
                    src={srv.src}
                    width={500}
                    height={100}
                    alt="img"
                  />
                  {srv.details.map((detail, i) => (
                    <p key={i} className="max-w-[650px]">
                      {detail}
                    </p>
                  ))}
                </CardContent>
                {/* Footer pinned at the bottom */}
                <CardFooter className="p-4 flex gap-3 justify-center">
                  <Button className={srv.btnColor}>
                    More about Your {srv.want}
                  </Button>
                  <Button
                    className={srv.btnColor}
                    onClick={handleFastAccessClick}
                  >
                    Get Fast Access
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
