import Navbar from "@/components/navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
      redirect: "/servicii/epo",
    },
    {
      id: 2,
      title: "T&D",
      src: "/images/orange.png",
      btnColor: "bg-orange-500",
      href: "https://wa.me/40722567212",
      redirect: "/servicii/t&d",
    },
    {
      id: 3,
      title: "C&A",
      src: "/images/blue.png",
      btnColor: "bg-blue-500",
      href: "https://wa.me/40722567212",
      redirect: "/servicii/c&a",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center">
        <Card className="mt-8 w-[90%] xl:w-[60%]">
          <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e]">
            Despre noi
          </CardTitle>
          <CardDescription className="p-4">
            O scurta descriere despre istoria noastra
          </CardDescription>
          <CardContent className="">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="max-w-[650px]">
                  <p>
                    <strong>UBEON</strong> este o companie românească cu o
                    experiență de peste 20 de ani pe piața de servicii B2B și
                    B2C, dedicată excelenței și inovării. Fondată în 2005, UBEON
                    a evoluat constant, devenind un partener de încredere pentru
                    clienți din diverse industrii.
                  </p>
                  <p className="mt-2">
                    Misiunea noastră este să oferim soluții personalizate și
                    eficiente, adaptate nevoilor specifice ale fiecărui client.
                    Ne mândrim cu echipa noastră de experți, care combină
                    know-how-ul tehnic cu pasiunea pentru ceea ce facem,
                    asigurând succesul proiectelor implementate.
                  </p>
                  <p className="mt-2">Valori fundamentale:</p>
                  <ul>
                    <li>
                      • <strong>Integritate</strong>: Respectăm promisiunile și
                      ne angajăm să menținem cele mai înalte standarde etice în
                      toate relațiile noastre.
                    </li>
                    <li>
                      • <strong>Inovație</strong>: Ne aflăm într-o continuă
                      căutare de noi soluții și tehnologii care să aducă valoare
                      adăugată clienților noștri.
                    </li>
                    <li>
                      • <strong>Excelență</strong>: Ne străduim să depășim
                      așteptările, oferind servicii de cea mai înaltă calitate.
                    </li>
                  </ul>
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
                    Serviciile noastre acoperă o gamă largă de domenii, de la
                    consultanță strategică și managementul proiectelor, până la
                    marketing digital și dezvoltare de software. Avem
                    capacitatea de a gestiona proiecte complexe și de a oferi
                    soluții integrate care să contribuie la creșterea și
                    dezvoltarea afacerilor clienților noștri.
                  </p>
                  <p className="mt-2">
                    De-a lungul celor două decenii de activitate, am reușit să
                    construim relații durabile și să realizăm parteneriate de
                    succes, bazate pe încredere și colaborare. Suntem
                    recunoscuți pentru abordarea noastră proactivă și pentru
                    capacitatea de a transforma provocările în oportunități.
                  </p>
                </div>
              </div>
              <p className="text-center">
                <strong>UBEON</strong> – Excelență în servicii, pasiune pentru
                performanță.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="despre-noi">
              <Button className="bg-[#8cc63e]">Mai multe</Button>
            </Link>
          </CardFooter>
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
                  <Link href="/servicii">
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
          <p>ubeon este mereu solutia, nu problema!</p>
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
