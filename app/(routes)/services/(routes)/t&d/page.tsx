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
      </div>
      <Footer />
    </div>
  );
};

export default page;
