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
    {
      title: "Your C&A",
      want: "C&A",
      description: "Consultant & Advisor",
      src: "/images/blue.png",
      textColor: "text-blue-500",
      btnColor: "bg-blue-500",
      href: "/services/c&a",
      details: [
        "Adica acum dupa 20 de ani ce sa facem cu tot ce am acumulat ? Toata experinta si expertiza noastra poate si trebuie sa fie transferata acolo unde trebuie. ",
        "Asadar Your C&A iti va oferi  timpul sau si tot ce cunoaste in sfera sa de expertiza, pentru ca tu sa te bucuri cu adevarat de un consultant si advisor de incredere. ",
        "Domenii precum legislatie, contabilitate, relatii de munca, siguranta alimentara, sustenabilitate, integrare, accesare fonduri si granturi, sanatate si Securitate in Munca, Situatii de Urgenta, Medicina Muncii, Asigurari, sunt  acele puncte fierbiti ale afacerii tale. De unele  esti constient, unele iti sunt impuse , da stim si mai stim ca fara ele afacerea ta nu poate merge bine. ",
        "De la Ubeon poti sa iti ei acum Your C&A. Acesta va fi cu tine permanent si daca nu stie ceva sigur cunoaste pe cineva care stie.  ",
        "Your C&A este de acum aliatul tau de incredere ! Call! Check! Book Your C&A",
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center p-4">
        <div className="max-w-4xl w-full">
          <Card className="mt-8">
            <CardTitle className="p-4 text-3xl text-red-500">
              Your EPO
            </CardTitle>
            <CardDescription className="p-4 text-xl">
              Event Planner & Organizer
            </CardDescription>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg"
                    src="/images/red.png"
                    alt="Your EPO"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Suntem dedicați fiecărui eveniment pe care îl organizăm sau
                    planificăm. Vei avea un agent dedicat care va fi cu tine pas
                    cu pas și care va face din eveniment nu doar o reușita ci o
                    amintire memorabilă. Luăm de la bun început în cosiderare
                    toate aspectele legate de evenimentul tău si nu lăsam nimic
                    la voia întâmplării.
                  </p>
                  <p className="mt-4">
                    The Wow Element... nu trebuie sa ai un buget înainte de a
                    avea un prim contact cu Your EPO de la Ubeon. Vino cu
                    evenimentul tău si de buget ne ocupăm împreună. Toate
                    dorințele legate de evenimentul tău vor avea soluție.
                  </p>
                  <p className="mt-4">Evenimentul tău este :</p>
                  <p className="mt-4">
                    Conferința, Congres, Competiție sportivă, Petrecere Privată,
                    Petrecere pentru copii, Petercere pentru adulți, Majorat,
                    Căsătorie Civila, Căsătorie Religioasă, Aniversare,
                    Celebrare a unei realizari, Petrecere Corporativă, Petrecere
                    de Firmă, Lansare de Produs, Lansare de Carte, Concert,
                    Spectacol, Gală, Prezentare de Modă, Organizare Platou de
                    Filmare în afara studiourilor, Indoor sau Outdoor, Sărbatori
                    Populare sau Tradiționale Locale, Zilele Urbei, Zilele
                    Comunei, Târg, Festival?
                  </p>
                  <p className="mt-4">
                    Pentru oricare din aceasta lista avem un EPO pregătit. Tipul
                    evenimentului tău nu se regăseste în această enumerare?
                    Acceptăm provocarea. Sună acum și spune-ne despre ce este
                    vorba și cu siguranță așteptările tale vor fi depășite.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4 gap-4">
              <Link href="/contact">
                <Button className="bg-red-500 text-white">Contact us</Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="blank">
                <Button className="bg-red-500 text-white">
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
                  More about your {service.title}
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
                  More about {service.title}
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
