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
              Your T&amp;D
            </CardTitle>
            <CardDescription className="p-4 text-xl">
              Training &amp; Development
            </CardDescription>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg"
                    src="/images/orange.png"
                    alt="Your T&D"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Aducem trainingul profesionist și programele de dezvoltare
                    personală acolo unde ai nevoie de ele.
                  </p>
                  <p className="mt-4">
                    Fie că este vorba de un training specific sau general îți
                    oferim soluții moderne si tehnici super prietenoase astfel
                    încât abilitățile și competențele vizate să fie transferate
                    efectiv și utilizate imediat de către absolvenții
                    programelor de pregătire profesională și dezvoltare
                    personală.
                  </p>
                  <p className="mt-4">
                    Monitorizarea rezultatelor post training? Desigur, rămâne în
                    grija noastră și poate face obiectul unei discuții cu Your
                    C&A de la Ubeon.
                  </p>
                  <p className="mt-4">
                    Susținem peste 100 de cursuri acrediate sau neacreditate de
                    calificare, specializare sau perfecționare din care poti
                    alege, iar la nevoie creăm și /sau acredităm cursul 101
                    pentru a putea susține nevoia ta sau a companiei.
                  </p>
                  <p className="mt-4">
                    Putem fi oriunde, ca rezultat al parteneriatelor noastre cu
                    peste 50 de furnizori de formare din întreaga țară și
                    Republica Moldova.
                  </p>
                  <p className="mt-4">
                    Enumeram aici o parte din cele 100 de cursuri pe care le
                    putem susține;
                  </p>
                  <p className="mt-4">
                    Formator, Referent Resurse Umane, Specialist în Activitatea
                    de Coaching, Consilier pentru Dezvoltare Personală,
                    Administrator Pensiune Turistică, Antreprenoriat,
                    Antreprenoriat Social, Competențe Digitale, Manager
                    Societate Comercială, Manager Resurse Umane, Manager de
                    Produs, Manager de Inovare, Organizator Evenimente, Bucătar,
                    Cofetar, Barman, Lucrător Comercial, Cameristă, Ofițer
                    Prelucrare Date cu Caracter Personal, Șef Bucătar, Șef de
                    Sala, Șef de Restaurant.
                  </p>
                  <p className="mt-4">
                    La cerere putem susține orice Refresh Training în domeniu
                    tău de activitate, Workshop-uri tematice pentru dezvoltare
                    personala sau activități de tip Team Building.
                  </p>
                  <p className="mt-4">
                    Vei avea un super specialist T&D la dispoziție. Your T&D de
                    la Ubeon. Împreună cu acesta se vor stabili toate detaliile
                    pentru cursul sau trainingul de care ai nevoie.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4 gap-4">
              <Link href="/contact">
                <Button className="bg-orange-500 text-white">Contact us</Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="blank">
                <Button className="bg-orange-500 text-white">
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
