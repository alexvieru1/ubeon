import Navbar from "@/components/navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "EPO",
      src: "/images/red.png",
      btnColor: "bg-red-500",
      href: "https://wa.me/40722567212",
      redirect: "/services/epo",
    },
    {
      id: 2,
      title: "T&D",
      src: "/images/orange.png",
      btnColor: "bg-orange-500",
      href: "https://wa.me/40722567212",
      redirect: "/services/t&d",
    },
    {
      id: 3,
      title: "C&A",
      src: "/images/blue.png",
      btnColor: "bg-blue-500",
      href: "https://wa.me/40722567212",
      redirect: "/services/c&a",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center">
        <Card className="mt-8 w-[90%] xl:w-[60%]">
          <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e]">
            A Bit About Us{" "}
          </CardTitle>
          <CardContent className="">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="max-w-[650px]">
                  <p>
                    Suntem de 20 de ani pe piata de servicii B2B si B2C in
                    Romania si niciodata mai aproape de ceea ce suntem astazi.
                  </p>
                  <p className="mt-2">
                    De-a lungul celor două decenii de activitate, am reușit să
                    construim relații durabile și să realizăm parteneriate de
                    succes, bazate pe încredere și colaborare. Suntem
                    recunoscuți pentru abordarea noastră proactivă și pentru
                    capacitatea de a transforma provocările în oportunități.
                  </p>
                  <p className="mt-2">
                    Fondata in 2006 Ubeon a evoluat constant, iar Astazi suntem
                    <strong>
                      {" "}
                      Experinta, Cunoastere, Dorinta, Echilibru si Lucrul Bine
                      Facut.
                    </strong>
                  </p>
                  <p className="mt-2">
                    Experienta a adus cu sine noutatea si indarjirea,
                    Cunoasterea a aratat drumul, Dorinta a pastrat deschisa
                    calea, Echilibrul ne-a ajutat sa nu renuntam, iar Lucrul
                    bine facut a fost motivatia cea mai puternica pentru a
                    continua.
                  </p>
                  <p className="mt-2">
                    Acestea, împreună cu <strong>Integritatea</strong> sunt
                    valorile pe care le punem in fata celor care ne sunt clienți
                    și aceasta este promisiunea pe care o facem celor care vor
                    sa ne încredințeze proiectele lor.
                  </p>
                </div>
                <AspectRatio ratio={4 / 1.5}>
                  <Image
                    className="rounded-lg"
                    src="/images/1.png"
                    width={500}
                    height={500}
                    alt="img"
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-col md:flex-row gap-3 mt-56 md:mt-0">
                <AspectRatio ratio={4 / 1.5}>
                  <Image
                    className="rounded-lg"
                    src="/images/1.png"
                    width={500}
                    height={500}
                    alt="img"
                  />
                </AspectRatio>
                <div className="max-w-[650px] mt-44 md:mt-0">
                  <p className="mt-2">
                    Misiunea noastră este să oferim soluții personalizate,
                    eficiente si adaptate nevoilor specifice ale fiecărui client
                    sub deviza:{" "}
                    <strong>
                      Pentru Orice Nevoi, Înainte de Oricine suna-ne pe noi!
                    </strong>
                  </p>
                  <p className="mt-2">
                    Tot ce stim si tot ce facem am pus in trei cutii de valori
                    pe care le-am incredintat celor care vor fi pentru tine:
                  </p>
                  <ul>
                    <li>
                      <strong>• Expertul in Organizarea</strong> oricarui tip de
                      eveniment privat sau corparativ. Meet
                      <strong> Your EPO</strong>
                    </li>
                    <li>
                      <strong>
                        • Expertul in Educatie, Training si Dezvolatare
                      </strong>
                      , pregatit sa iti ofere cunostinte, metode si tehnici de
                      lucru adaptate fie pentru nevoile persoanale fie ale
                      companiei. Meet<strong> Your T&D</strong>
                    </li>
                    <li>
                      <strong>• Expertul Consultant</strong> care preia
                      intrebarile si nelamuririle tale transformandu-le in
                      Evaluari, Expertize, Planuri de Actiune, Planuri de
                      Management, Studii de Fezabilitate, Sondaje si altele
                      atunci cand sunt necesare. Meet <strong>Your C&A</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-center">
                Suntem cei mai buni sau facem echipa cu cei mai buni, avand
                construita o retea de parteneri cu care putem ajunge oriunde
                este nevoie. Am invatat in cei 20 de ani de existenta ca numai
                asa putem livra dincolo de asteptarile clientilor si
                partenerilor nostri.
              </p>
            </div>
          </CardContent>
          {/* <CardFooter className="flex justify-center">
            <Link href="services">
              <Button className="bg-[#8cc63e]">More about</Button>
            </Link>
          </CardFooter> */}
        </Card>
        <div className="flex flex-col md:flex-row w-full px-4 xl:w-[60%] gap-4">
          <Card className="mt-8 w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl text-center xl:text-2xl text-[#8cc63e]">
              Excellent services{" "}
            </CardTitle>
            <CardContent className="md:py-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="my-2 flex justify-center items-center"
                >
                  <Link href="/services">
                    <Image
                      src={service.src}
                      width={100}
                      height={20}
                      alt={service.title}
                    />
                    <div className="flex ml-10">
                      <p className="font-mono">Your </p>
                      <Badge
                        className={`${service.btnColor} hover:bg-gray-500`}
                      >
                        {service.title}
                      </Badge>
                    </div>
                  </Link>
                  <Link href={service.href} target="blank">
                    <Button
                      className={`${service.btnColor} ml-6 hover:bg-gray-500`}
                    >
                      Get fast access
                    </Button>
                  </Link>
                </div>
              ))}
            </CardContent>
            {/* <CardFooter className="flex justify-start">
              <Link href="servicii">
                <Button className="bg-[#8cc63e]">Detalii</Button>
              </Link>
            </CardFooter> */}
          </Card>
          <Card className="mt-8 w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e] text-center">
              Contact us
            </CardTitle>
            <CardContent className="md:py-4">
              <div className="flex flex-row my-3 justify-center items-center">
                <MapPinIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">Sector 4, Bucuresti</p>
              </div>
              <div className="flex flex-row my-3 justify-center items-center">
                <PhoneCallIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">+40 21 330 30 12</p>
              </div>
              <div className="flex flex-row my-3 justify-center items-center">
                <PhoneCallIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2"> +40 7272 UBEON</p>
              </div>
              <div className="flex flex-row my-3 justify-center items-center">
                <MailIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">contact@ubeon.ro</p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* <p className="my-4 px-4 xl:max-w-[60%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
          voluptates nesciunt ullam, natus voluptatum obcaecati optio. Fugiat
          modi tempore nostrum odit commodi numquam qui repudiandae possimus, in
          iure consectetur cumque. Officia, accusantium ipsum. Ipsa iste sint
          nobis quam et sapiente? Asperiores totam commodi sapiente itaque
          corrupti ducimus doloribus, ex vitae fugiat laborum, accusantium
          voluptatibus unde voluptas quam saepe tempore. Natus! Maiores animi id
          hic iure consectetur, quis, voluptates modi omnis laboriosam est ipsa
          cupiditate laborum dolor sunt quam placeat obcaecati architecto
          deleniti at nemo perspiciatis qui quidem cum voluptatum. Facilis? Quae
          ad ipsum, atque dolore voluptate, ullam, provident fuga consectetur
          non et velit similique! Accusantium hic ipsam sapiente laboriosam, ab
          esse corporis repellendus, sunt ut, id modi magni aliquam corrupti!
        </p> */}
        <div className="my-4 px-4 flex justify-center text-center text-3xl font-semibold">
          <p className="text-[#8cc63e]">
            ubeon este mereu solutia, nu problema!
          </p>
        </div>
        <Card className="mt-8 w-[90%] xl:w-[60%]">
          <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e]">
            Parteneri
          </CardTitle>
          <CardContent className="md:py-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae accusamus ea, dolores obcaecati facere dolorum ipsa a.
              Quod, labore voluptates consectetur vel cupiditate delectus. Vel
              iure beatae neque veniam accusamus. Necessitatibus quam voluptas
              esse dolorum magni! Quaerat quidem deleniti molestias officia
              beatae quisquam earum placeat facilis. Consequuntur perferendis
              vel totam. Nostrum ratione vel quia voluptate quos debitis error,
              quas corrupti! Iusto consequatur ut voluptates error quibusdam
              dolor temporibus magnam voluptatum explicabo quas nihil hic,
              praesentium aliquid eos sequi earum impedit repellat? Iusto
              ducimus voluptatem officiis quaerat, itaque est magnam temporibus.
              Deleniti similique voluptatem modi, eaque in cupiditate, quidem
              necessitatibus eligendi perferendis nostrum eos! Nulla et, animi
              perspiciatis consequuntur, eum fugiat impedit possimus a non modi
              facilis quibusdam nihil placeat ipsum. Tenetur, dicta magnam
              voluptates voluptatum dolore mollitia perferendis alias, amet
              cumque voluptatem labore porro blanditiis, vel atque temporibus
              sequi illum nobis voluptate provident excepturi nihil tempore ut
              sint autem! Libero?
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href="despre-noi">
              <Button className="bg-[#8cc63e]">All partners</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
