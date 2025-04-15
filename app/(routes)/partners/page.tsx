import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const page = () => {
  const partners = [
    {
      title: "Med Impact",
      src: "/images/medimpact.png",
      imgWidth: 110,
      imgHeight: 80,
      description: `"Pentru noi UBEON reprezintă un partener de mare valoare. Discret, prompt și profesionist, amabil și deferent. O afacere construită cu mare atenție și grijă față de clienți. Într-o permanentă căutare de soluții, într-o permanentă autodepășire profesională și personală, profesioniștii UBEON știu să muncească și să construiască o echipă, astfel încât să avem certitudinea celor mai bune soluții și servicii oferite. 'Suntem la un apel distanță' nu este doar un slogan, este chiar esența și definiția profesioniștilor UBEON!"`,
      author: "Iulia Crull - Administrator",
    },
    {
      title: "Federația Patronilor Bihor",
      src: "/images/federatia.png",
      imgWidth: 252,
      imgHeight: 242,
      description: `"UBEON a respectat în totalitate termenele de livrare, procesul de facturare s-a realizat conform cerințelor noastre...UBEON a arătat în permanență că tratează clienții cu profesionalism și este competent să participe la licitațiile publice, fiind un partener de încredere."`,
      author: "Ioan Lucian - Președinte",
    },
    {
      title: "RoMarketing",
      src: "/images/romarketing.png",
      imgWidth: 250,
      imgHeight: 50,
      description: `"Chiar dacă selecția a fost făcută pe baza criteriului 'prețul cel mai mic', am fost mulțumiți de alegerea făcută. Echipa UBEON a răspuns prompt la toate solicitările noastre și s-a dovedit un partener de încredere. Recomandăm tuturor companiilor să ia în considerare cu seriozitate oferta UBEON."`,
      author: "Anamaria Goina - Responsabil Proiect",
    },
    {
      title: "Star Sting",
      src: "/images/star-sting.png",
      imgWidth: 307,
      imgHeight: 84,
      description: `"Apariția UBEON a fost pentru noi surprinzătoare. UBEON este partenerul de care aveam nevoie și care în timp a dovedit implicare și atenție la nevoile partenerului. Echipa de acolo este consecventă ideii de a aduce soluții inovatoare în deplin acord cu interesele partenerilor săi. Recomand cu sinceritate să începeți o colaborare cu echipa UBEON și să vă convingeți că putem construi parteneriate de încredere pe baza câștigului real și substanțial al tuturor."`,
      author: "Bogdan Negera - Managing Partner",
    },
    {
      title: "Asociația Planul B",
      src: "/images/planulb.png",
      imgWidth: 400,
      imgHeight: 159,
      description: `"În anul 2016 UBEON se afla în căutarea unui partener pentru susținerea proiectelor sale de responsabilitate socială, iar nou înființata noastră asociație căuta soluții organizatorice și logistice la început de drum. Alegerea de a deveni parteneri sustenabili pe un astfel de palier social a fost una naturală. De la primele întâlniri am descoperit un adevărat partener. Coordonatele au fost ușor de armonizat și am pus bazele unui parteneriat durabil care înseamnă susținere și sprijin logistic pentru programele noastre, precum și implicare în organizarea evenimentelor și acțiunilor noastre sociale."`,
      author: "Lucian Constantin - Președinte",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold p-6 text-center">Parteneri</h1>
        <div className="flex flex-col gap-4 p-4 w-full items-center">
          {partners.map((partner, index) => (
            <div key={index} className="w-full flex justify-center">
              <Card className="mt-8 w-[90%] xl:w-[60%]">
                <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e]">
                  {partner.title}
                </CardTitle>
                <CardContent className="p-4">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="min-w-[150px] flex justify-center">
                      <Image
                        src={partner.src}
                        alt={partner.title}
                        width={partner.imgWidth}
                        height={partner.imgHeight}
                        className="object-contain"
                        style={{ width: partner.imgWidth, height: partner.imgHeight }}
                      />
                    </div>
                    <p className="text-justify italic text-gray-800 max-w-2xl">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end p-4">
                  <p className="text-sm font-semibold italic text-gray-600">
                    {partner.author}
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
