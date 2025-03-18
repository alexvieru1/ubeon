"use client"
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
      description: "Event Planner & Organizer",
      src: "/images/red.png",
      textColor: "text-red-500",
      btnColor: "bg-red-500",
      href: "/servicii/epo",
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
      href: "/servicii/t&d",
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
      href: "/servicii/c&a",
      details: [
        "Adica acum dupa 20 de ani ce sa facem cu tot ce am acumulat ? Toata experinta si expertiza noastra poate si trebuie sa fie transferata acolo unde trebuie. ",
        "Asadar Your C&A iti va oferi  timpul sau si tot ce cunoaste in sfera sa de expertiza, pentru ca tu sa te bucuri cu adevarat de un consultant si advisor de incredere. ",
        "Domenii precum legislatie, contabilitate, relatii de munca, siguranta alimentara, sustenabilitate, integrare, accesare fonduri si granturi, sanatate si Securitate in Munca, Situatii de Urgenta, Medicina Muncii, Asigurari, sunt  acele puncte fierbiti ale afacerii tale. De unele  esti constient, unele iti sunt impuse , da stim si mai stim ca fara ele afacerea ta nu poate merge bine. ",
        "De la Ubeon poti sa iti ei acum Your C&A. Acesta va fi cu tine permanent si daca nu stie ceva sigur cunoaste pe cineva care stie.  ",
        "Your C&A este de acum aliatul tau de incredere ! Call! Check! Book Your C&A",
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
                    More about {srv.want}
                  </Button>
                  <Button className={srv.btnColor} onClick={handleFastAccessClick}>Get Fast Access</Button>
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
