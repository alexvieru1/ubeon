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
      description:
        '"Pentru noi UBEON reprezinta un partener de mare valoare. Discret, prompt si profesionist, amabil si deferent. O afacere construita cu mare atentie si grija fata de clienti. Intr-o permanenta cautare de solutii, intr-o permanenta autodepasire profesionala si personala, profesionistii UBEON stiu sa munceasca si sa construiasca o echipa, astfel incat sa avem certitudinea celor mai bune solutii si servicii oferite. Suntem la un apel distanta nu este doar un slogan, este chiar esenta si definitia profesionistilor UBEON!"',
      author: "Iulia Crull - Administrator",
    },
    {
      title: "Federatia Patronilor Bihor",
      src: "/images/federatia.png",
      description:
        '"UBEON a respectat in totalitate termenele de livrare, procesul de facturare s-a realizat conform cerintelor noastre...UBEON a aratat in permanenta ca trateaza clientii cu profesionalism si este competent sa participe la licitatiile publice, fiind un partener de incredere."',
      author: "Ioan Lucian - Presedinte",
    },
    {
      title: "RoMarketing",
      src: "/images/romarketing.png",
      description:
        '....Chiar daca selectia a fost facuta pe baza criteriului "pretul cel mai mic", am fost multumiti de alegerea facuta. Echipa UBEON a raspuns promt la toate solicitarile noastre si s-a dovedit un partener de incredere. Recomandam tuturor companiilor sa ia in considerare cu seriozitate oferta UBEON.',
      author: "Anamaria Goina - Responsabil Proiect",
    },
    {
      title: "Star Sting",
      src: "/images/star-sting.png",
      description:
        '"Aparitia UBEON a fost pentru noi surprinzatoare. UBEON este partenerul de care aveam nevoie si care in timp a dovedit implicare si atentie la nevoile partenerului. Echipa de acolo este consecventa ideii de a aduce solutii inovatoare in deplin acord cu interesele partenerilor sai. Recomand cu sinceritate sa incepeti o colaborare cu echipa UBEON si sa va convingeti ca putem construi parteneriate de incredere pe baza castigului real si substantial al tuturor."',
      author: "Bogdan Negera - Managing Partner",
    },
    {
      title: "Asociatia Planul B",
      src: "/images/planulb.png",
      description:
        '"In anul 2016 UBEON se afla in cautarea unui partener pentru sustinerea proiectelor sale de responsabilitate sociala, iar nou infiintata noastra asociatie cauta solutii organizatorice si logistice la inceput de drum. Agelerea de a deveni parteneri sustenabili pe un astfel de palier social a fost una naturala. De la primele intalniri am descoperit un adevarat partener. Coordonatele au fost usor de armonizat si am pus bazele unui parteneriat durabil care inseamna sustinere si sprijin logistic pentru programele noastre, precum si implicare in organizarea evenimentelor si actiunilor noastre sociale."',
      author: "Lucian Constantin - Presedinte",
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
                  <div className="flex justify-evenly flex-col lg:flex-row gap-3">
                    <Image
                      className="rounded-lg"
                      src={partner.src}
                      width={300}
                      height={100}
                      alt={partner.title}
                    />
                    <p className="max-w-[650px]">{partner.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end p-4">
                  <p className="text-sm font-semibold italic text-gray-600">{partner.author}</p>
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
