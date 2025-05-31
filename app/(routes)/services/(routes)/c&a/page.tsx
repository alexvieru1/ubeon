"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  const services = [
    {
      title: "Your EPO",
      want: "EPO",
      description: "Event Planner & Organizer",
      src: "/images/red.png",
      textColor: "text-red-500",
      btnColor: "bg-red-500",
      href: "/services/epo",
      details: [
        "Your EPO va fi partenerul tau de maxima incredere in Panificarea si Organizarea unui Eveniment. Daca  20 de ani de experinta nu sunt suficienti pentru a face dovada ca stim ce facem atunci acceptam provicarea lansata de evenimentul tau. ",
        "Suntem aici pentru evenimente corporate dar si evenimente personale.  Daca ai spus un eveniment atunci obligatoriu trebuie sa iti iei  Your EPO de  la Ubeon  care va face din ideea ta de eveniment , amintirea care nu se va sterge niciodata din memorie. Your EPO  planifica si organizeaza cu dorinta ca TOTUL TREBUIE SA FIE MEMORABIL.  Indiferent ca vorbim despre  conferinte, gale, prezentari, lansari, vernisaje, expozitii, sau altele, TU te vei bucura de eveniment  la fel ca toti participantii. Efortul  organizarii este preluat de Your  EPO .  ",
        "The wow element !  Your EPO works within any budget.  Call! Check! Book  Your EPO! ",
      ],
    },
    {
      title: "Your T&D",
      want: "T&D",
      description: "Training & Development",
      src: "/images/orange.png",
      textColor: "text-orange-500",
      btnColor: "bg-orange-500",
      href: "/services/t&d",
      details: [
        "Da. Trainingul si Dezvoltarea nu au fost niciodata mai importante  intro echipa , asa cum sunt astazi. ",
        "Provocarile tehnologice actuale ne arata ca fara o abordare corecta  la acest capitol, riscurile de insucces sunt ridicate. ",
        "Your T&D iti va sustine nevoile de pregatire si dezvoltare ale personalului prin intermediul unor programe  valoroase si cu efecte de schimbare in bine garantate. ",
        "Metode simple, usoare si mai ales rapide sunt ceea ce your T&D va elabora si implementa pentru compania ta. Uita de sesiunile lungi si plictisitoare de training. Acum facem ce trebuie acolo unde trebuie. Rapid si cu impact. ",
        "Your T&D  te sustine iar Your People will do  better for you! Call! Check! Book Your EPO ",
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center p-4">
        <div className="max-w-4xl w-full">
          <Card className="mt-8">
            <CardTitle className="p-4 text-3xl text-blue-500">
              Your&nbsp;C&amp;A
            </CardTitle>
            <CardDescription className="px-4 text-xl">
              Consultant&nbsp;&amp;&nbsp;Advisor
            </CardDescription>

            <CardContent className="p-4">
              {/* ─── Header images (logo + hero) ───────────────────── */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* logo */}
                <div className="relative w-full sm:w-1/2 h-48">
                  <Image
                    src="/images/blue.png"
                    fill
                    alt="Your C&A logo"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                {/* hero photo — change the file if you have a better one */}
                <div className="relative w-full sm:w-1/2 h-48">
                  <Image
                    src="/images/c&a-more.jpg"
                    fill
                    alt="Business consulting"
                    className="object-cover rounded-lg"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* ─── Body copy ─────────────────────────────────────── */}
              <div className="mt-6 space-y-4 text-lg">
                <p>
                  Managementul și administrarea unei afaceri presupun alocarea
                  de resurse importante de timp către activități care nu au
                  legătură directă cu obiectul tău principal. Cel mai des vorbim
                  despre obligații legale pe care fiecare antreprenor trebuie să
                  le gestioneze.
                </p>

                <p>
                  Da, suntem și noi de acord că perspectiva birocratică impusă
                  de aceste activități auxiliare impactează productivitatea,
                  randamentul, atenția la detalii și, implicit, profitul – cu
                  atât mai mult în cazul micilor afaceri care nu au o
                  organigramă extinsă.
                </p>

                <p>
                  De aceea, Ubeon, cu peste&nbsp;20 de ani de experiență și o
                  rețea puternică de specialiști, te ajută să acoperi aceste
                  nevoi punând pe primul loc înțelegerea necesităților și
                  economisirea timpului dedicat
                  proceselor&nbsp;de&nbsp;business. Pentru orice cerință
                  birocratică, Ubeon îți oferă consultanță directă și servicii
                  concrete.
                </p>

                <p>
                  <em>Your&nbsp;C&amp;A</em> poate fi expert în: Legislație,
                  Contabilitate, Relații de&nbsp;muncă, Sustenabilitate,
                  Integrare, Mediu, Accesare fonduri, Sănătate
                  și&nbsp;securitate în muncă, Situații de&nbsp;urgență,
                  Medicina muncii, Asigurări, Siguranță alimentară, Monitorizare
                  procese interne, Responsabilitate socială, Etică, Dezvoltare,
                  Creditare, Audit, Imobiliare, Evaluare, etc. Dacă specialistul
                  de care ai nevoie nu este în listă, îl găsim noi.
                </p>

                <p>
                  <em>Your&nbsp;C&amp;A</em> de la Ubeon va fi întotdeauna parte
                  din soluție.
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center gap-4 p-4">
              <Link href="/contact">
                <Button className="bg-blue-500 text-white">
                  Contact&nbsp;us
                </Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="_blank">
                <Button className="bg-blue-500 text-white">
                  Get&nbsp;Fast&nbsp;Access
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center gap-10 max-w-4xl w-full mt-10">
          {services.map((service, index) => (
            <div key={index}>
              <Link href={service.href}>
                <Button className={`${service.btnColor} hover:bg-gray-500`}>
                  More about {service.title}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-evenly max-w-4xl w-full mt-10">
          {services.map((service, index) => (
            <div key={index}>
              <Link href={service.href}>
                <Button className={`${service.btnColor} hover:bg-gray-500`}>
                  More about your {service.title}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
