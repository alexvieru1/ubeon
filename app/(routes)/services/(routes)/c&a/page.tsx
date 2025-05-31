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
              Your C&amp;A
            </CardTitle>
            <CardDescription className="p-4 text-xl">
              Consultant &amp; Advisor
            </CardDescription>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg"
                    src="/images/blue.png"
                    alt="Your C&A"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Managementul și administrarea unei afaceri presupun alocarea
                    de resurse importante de timp către activități care nu au
                    directă legătură cu activitatea și afacerea ta. Este vorba
                    de cele mai multe ori de obligațiile legale ce trebuie
                    asumate de fiecare antreprenor pentru gestionarea propriei
                    afaceri.
                  </p>
                  <p className="mt-4">
                    Da, suntem și noi de acord că perspectiva birocratică care
                    impune aceste activități auxiliare are efecte directe asupra
                    productivității, randamentului, atenției la detalii,
                    atenției față de client, asupra profitului, etc., mai ales
                    în cazul unor afaceri mici care nu beneficiază de
                    organigramă extinsă, care să permită angajarea directă de
                    oameni dedicați acestor aspecte administrative.
                  </p>
                  <p className="mt-4">
                    De aceea, Ubeon, folosindu-se de experiența sa de peste 20
                    de ani și de strânsele relații cu specialiști și experți, te
                    ajută să susții aceste nevoi într-o manieră în care punem în
                    prim-plan înțelegerea necesităților și salvarea timpului
                    necesar proceselor de business direct. Pentru toate
                    perspectivele birocratice ale afacerii tale, Ubeon este
                    capabil să iți ofere susținere dedicată, consultanță directă
                    și servicii concrete cu care să poți răspunde obligațiilor
                    de natură legala specifice afacerii tale.
                  </p>
                  <p className="mt-4">
                    <em>Your C&A</em> poate fi un expert specialist în
                    Legislație, Contabilitate, Relații de muncă,
                    Sustenabilitate, Integrare, Mediu, Accesare fonduri,
                    Sănătate și securitate în muncă, Situații de urgență,
                    Medicina muncii, Asigurări, Siguranță alimentară,
                    Monitorizare procese interne, Responsabilitate socială,
                    Etică, Dezvoltare, Creditare, Audit, Imobiliare, Evaluare,
                    etc. Daca specialistul de care ai nevoie nu este în această
                    listă vom face tot ce putem ca să îl găsim pentru tine.
                  </p>
                  <p className="mt-4">
                    <em>Your C&A</em> de la Ubeon va fi întotdeauna parte din soluție.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4 gap-4">
              <Link href="/contact">
                <Button className="bg-blue-500 text-white">Contact us</Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="blank">
                <Button className="bg-blue-500 text-white">
                  Get Fast Access
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
