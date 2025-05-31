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
            <CardTitle className="p-4 text-3xl text-orange-500">
              Your&nbsp;T&amp;D
            </CardTitle>
            <CardDescription className="px-4 text-xl">
              Training&nbsp;&amp;&nbsp;Development
            </CardDescription>

            <CardContent className="p-4">
              {/* ─── Header images (logo + hero) ───────────────────── */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* logo */}
                <div className="relative w-full sm:w-1/2 h-48">
                  <Image
                    src="/images/orange.png"
                    fill
                    alt="Your T&D logo"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                {/* hero photo — change the file if you have a better one */}
                <div className="relative w-full sm:w-1/2 h-48">
                  <Image
                    src="/images/t&d-more.jpg"
                    fill
                    alt="Training session"
                    className="object-cover rounded-lg"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* ─── Body copy ─────────────────────────────────────── */}
              <div className="mt-6 space-y-4 text-lg">
                <p>
                  Aducem trainingul profesionist și programele de dezvoltare
                  personală acolo unde ai nevoie de ele.
                </p>

                <p>
                  Fie că este vorba de un training specific sau general, îți
                  oferim soluții moderne și tehnici super prietenoase, astfel
                  încât abilitățile și competențele vizate să fie transferate
                  efectiv și utilizate imediat de către absolvenții programelor
                  de pregătire profesională și dezvoltare personală.
                </p>

                <p>
                  Monitorizarea rezultatelor post-training? Desigur, rămâne în
                  grija noastră și poate face obiectul unei discuții cu&nbsp;
                  <em>Your&nbsp;C&amp;A</em> de la Ubeon.
                </p>

                <p>
                  Susținem peste 100 de cursuri acreditate sau neacreditate – de
                  calificare, de specializare ori de perfecționare – din care
                  poți alege. La nevoie creăm și/sau acredităm cursul&nbsp;101
                  pentru a susține nevoia ta sau a companiei.
                </p>

                <p>
                  Putem fi oriunde, ca rezultat al parteneriatelor noastre cu
                  peste&nbsp;50 de furnizori de formare din întreaga țară și
                  Republica Moldova.
                </p>

                <p>
                  Enumerăm aici o parte din cele 100 de cursuri pe care le putem
                  susține: Formator, Referent&nbsp;Resurse&nbsp;Umane,
                  Specialist în Activitatea de Coaching, Consilier
                  pentru&nbsp;Dezvoltare&nbsp;Personală, Administrator Pensiune
                  Turistică, Antreprenoriat, Antreprenoriat&nbsp;Social,
                  Competențe Digitale, Manager Societate Comercială,
                  Manager&nbsp;Resurse Umane, Manager de Produs, Manager de
                  Inovare, Organizator&nbsp;Evenimente, Bucătar, Cofetar,
                  Barman, Lucrător Comercial, Cameristă, Ofițer Prelucrare Date
                  cu Caracter Personal, Șef&nbsp;Bucătar, Șef&nbsp;de&nbsp;Sală,
                  Șef&nbsp;de&nbsp;Restaurant, Specialist&nbsp;HACCP.
                </p>

                <p>
                  La&nbsp;cerere putem susține orice&nbsp;
                  <em>Refresh&nbsp;Training</em> în domeniul tău de activitate,
                  workshop-uri tematice pentru dezvoltare personală sau
                  activități de tip&nbsp;Team&nbsp;Building.
                </p>

                <p>
                  Vei avea la dispoziție un super specialist în&nbsp;Training și
                  Dezvoltare, <em>Your&nbsp;T&amp;D</em> de la Ubeon! Împreună
                  cu acesta se vor stabili toate detaliile pentru cursul sau
                  trainingul de care ai nevoie.
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center gap-4 p-4">
              <Link href="/contact">
                <Button className="bg-orange-500 text-white">
                  Contact&nbsp;us
                </Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="_blank">
                <Button className="bg-orange-500 text-white">
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
