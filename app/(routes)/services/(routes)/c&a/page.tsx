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
                    Managementul și administrarea unei afaceri presupune
                    alocarea de resurse importante de timp către activități care
                    nu au directă legătură cu activitatea și afacerea ta. Este
                    vorba de cele mai multe ori de obligațiile legale ce trebuie
                    asumate de fiecare antreprenor pentru gestionarea propriei
                    afaceri.
                  </p>
                  <p className="mt-4">
                    Da, suntem și noi de acord că perspectiva birocratică care
                    impune aceste activități auxiliare au efecte directe asupra
                    productivității, randamentului, atenției la detalii,
                    atenției față de client, profitului, etc., mai ales în cazul
                    unor afaceri mici care nu beneficiază de un aparat sau
                    organigramă extinse care să permită angajarea directă de
                    oameni dedicați acestor aspecte administrative.
                  </p>
                  <p className="mt-4">
                    De aceea, Ubeon, folosindu-se de experiența sa de peste 20
                    de ani și de strânsele relații cu specialiști și experți, te
                    ajută să susții aceste nevoi într-o manieră în care punen în
                    prim-plan înțelegerea necesităților și salvarea timpului
                    necesar proceselor de business direct. Pentru toate
                    perspectivele birocratice ale afacerii tale Ubeon este
                    capabil să iți ofere susținere dedicată, consultanță directă
                    și servicii concrete cu care să poți răspunde obligațiilor
                    de natură legislativă specifice afacerii tale.
                  </p>
                  <p className="mt-4">
                    Your C & A poate fi un expert specialist în Legislație,
                    Contabilitate, Relații de Muncă, Sustenabilitate, Integrare,
                    Mediu, Accesare Fonduri, Sănătate și Securitate în Muncă,
                    Situații de Urgență, Medicina Muncii, Asigurări, Siguranță
                    Alimentară, Monitorizare Procese Interne, Responsabilitate
                    Sociala, Etică, Dezvoltare, Creditare, Audit, Imobiliare,
                    Evaluare. Daca specialistul de care ai nevoie nu este in
                    aceasta lista vom face tot ce putem ca să îl găsim pentru
                    tine.
                  </p>
                  <p className="mt-4">
                    Your C & A de la Ubeon va fi întotdeauna parte din soluție,
                    nu din problemă.
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
