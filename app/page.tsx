import Navbar from "@/components/navbar";
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
          <CardContent className="md:py-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3">
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
                <Image
                  className="rounded-lg"
                  src="/images/1.png"
                  width={500}
                  height={500}
                  alt="img"
                />
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
            <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e]">
              Servicii
            </CardTitle>
            <CardDescription className="px-4">
              Serviciile oferite de noi
            </CardDescription>
            <CardContent className="md:py-4">
              <div className="flex items-center max-w-[400px] mt-2">
                <div className="flex flex-row items-center">
                  <p className="font-semibold">Your</p>{" "}
                  <Badge className="rounded-full bg-red-600 ml-2">EPO</Badge>
                </div>
                <Link href="tel:+40213303012">
                  <Button
                    className="ml-32 lg:ml-60 hover:bg-red-600 hover:text-white"
                    variant="outline"
                  >
                    Get fast access
                  </Button>
                </Link>
              </div>
              <div className="flex items-center max-w-[400px] mt-2">
                <div className="flex flex-row items-center">
                  <p className="font-semibold">Your</p>{" "}
                  <Badge className="rounded-full bg-orange-600 ml-2">T&D</Badge>
                </div>
                <Link href="tel:+40213303012">
                  <Button
                    className="ml-32 lg:ml-60 hover:bg-orange-600 hover:text-white"
                    variant="outline"
                  >
                    Get fast access
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-between max-w-[400px] mt-2">
                <div className="flex flex-row items-center">
                  <p className="font-semibold">Your</p>{" "}
                  <Badge className="rounded-full bg-blue-500 ml-2">C&A</Badge>
                </div>
                <Link href="tel:+40213303012">
                  <Button
                    className="ml-32 lg:ml-60 hover:bg-blue-500 hover:text-white"
                    variant="outline"
                  >
                    Get fast access
                  </Button>
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex justify-start">
              <Link href="servicii">
                <Button className="bg-[#8cc63e]">Detalii</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mt-8 w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl xl:text-2xl text-[#8cc63e]">
              Contact
            </CardTitle>
            <CardContent className="md:py-4">
              <div className="flex flex-row my-3">
                <MapPinIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">Sector 4, Bucuresti</p>
              </div>
              <div className="flex flex-row my-3">
                <PhoneCallIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">021.330.30.12</p>
              </div>
              <div className="flex flex-row my-3">
                <MailIcon className="w-6 h-6 text-[#8cc63e]" />
                <p className="ml-2">contact@ubeon.ro</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="my-4 px-4 xl:max-w-[60%]">
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
        </p>
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
              <Button className="bg-[#8cc63e]">Toti partenerii</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
