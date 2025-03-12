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
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center">
        <Card className="mt-8 w-[90%] xl:w-[60%]">
          <CardTitle className="p-4 text-xl xl:text-2xl text-green-500">
            Hai sa ne cunoastem mai bine
          </CardTitle>
          <CardDescription className="p-4">
            Suntem aici pentru tine
          </CardDescription>
          <CardContent className="md:py-4">
            <div className="flex flex-col lg:flex-row gap-3">
              <div>
                <p className="max-w-[650px]">
                  Suntem de 20 de ani pe piata de servicii B2B si B2C in Romania
                  si niciodata mai aproape de ceea ce suntem astazi.
                </p>
                <p className="max-w-[650px] mt-4">
                  De-a lungul celor două decenii de activitate, am reușit să
                  construim relații durabile și să realizăm parteneriate de
                  succes, bazate pe încredere și colaborare. Suntem recunoscuți
                  pentru abordarea noastră proactivă și pentru capacitatea de a
                  transforma provocările în oportunități.
                </p>
                <p className="max-w-[650px] mt-4">
                  Fondata in 2006 Ubeon a evoluat constant, iar Astazi suntem
                </p>
                <p className="max-w-[650px] text-center">
                  <strong>
                    Experinta, Cunoastere, Dorinta, Echilibru si Lucrul Bine
                    Facut
                  </strong>
                </p>
                <p className="max-w-[650px] mt-4">
                  Experienta a adus cu sine noutatea si indarjirea, Cunoasterea
                  a aratat drumul, Dorinta a pastrat deschisa calea, Echilibrul
                  ne-a ajutat sa nu renuntam, iar Lucrul bine facut a fost
                  motivatia cea mai puternica pentru a continua.
                </p>
                <p className="max-w-[650px] mt-8">
                  Acestea sunt si valorile pe care le punem in fata celor care
                  ne sunt clienti si aceasta este promisiunea pe care o facem
                  celor care vor sa ne incredinteze proiectele lor. Misiunea
                  noastră este să oferim soluții personalizate și eficiente,
                  adaptate nevoilor specifice ale fiecărui client sub deviza{" "}
                </p>
                <p className="max-w-[650px] text-center">
                  <strong>
                    Pentru Orice Nevoi, Înainte de Oricine suna-ne pe noi!
                  </strong>
                </p>
                <p className="max-w-[650px] mt-4">
                  Acceseaza unul dintre centrele noastre de excelenta si
                  descopera cum poti sa faci din Your EPO, Your T&D si Your C&A
                  partenerul de succes care ai nevoie.
                </p>
              </div>
              <Image
                className="rounded-lg"
                src="/images/logo.jpg"
                width={500}
                height={500}
                alt="img"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <div className="mb-4">
              <Link href="/servicii">
                <Button className="bg-500">Servicii</Button>
              </Link>
            </div>
            <div className="flex flex-row gap-6">
              <Link href="/servicii/epo">
                <Button className="bg-red-600">EPO</Button>
              </Link>{" "}
              <Link href="/servicii/t&d">
                <Button className="bg-orange-600">T&D</Button>
              </Link>{" "}
              <Link href="/servicii/c&a">
                <Button className="bg-blue-500">C&A</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default page;
