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
import { MailIcon, MapPinIcon, PhoneCallIcon, PrinterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center">
        <Card className="mt-8 w-[90%] xl:w-[60%]">
          <CardTitle className="p-4 text-xl xl:text-2xl text-green-600">
            Despre noi
          </CardTitle>
          <CardDescription className="p-4">
            O scurta descriere despre istoria noastra
          </CardDescription>
          <CardContent className="md:py-4">
            <div className="flex flex-col md:flex-row gap-3">
              <p className="max-w-[650px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae accusamus ea, dolores obcaecati facere dolorum ipsa
                a. Quod, labore voluptates consectetur vel cupiditate delectus.
                Vel iure beatae neque veniam accusamus. Necessitatibus quam
                voluptas esse dolorum magni! Quaerat quidem deleniti molestias
                officia beatae quisquam earum placeat facilis. Consequuntur
                perferendis vel totam. Nostrum ratione vel quia voluptate quos
                debitis error, quas corrupti! Iusto consequatur ut voluptates
                error quibusdam dolor temporibus magnam voluptatum explicabo
                quas nihil hic, praesentium aliquid eos sequi earum impedit
                repellat? Iusto ducimus voluptatem officiis quaerat, itaque est
                magnam temporibus. Deleniti similique voluptatem modi, eaque in
                cupiditate, quidem necessitatibus eligendi perferendis nostrum
                eos! Nulla et, animi perspiciatis consequuntur, eum fugiat
                impedit possimus a non modi facilis quibusdam nihil placeat
                ipsum. Tenetur, dicta magnam voluptates voluptatum dolore
                mollitia perferendis alias, amet cumque voluptatem labore porro
                blanditiis, vel atque temporibus sequi illum nobis voluptate
                provident excepturi nihil tempore ut sint autem! Libero?
              </p>
              <Image
                className="rounded-lg"
                src="/images/1.png"
                width={500}
                height={500}
                alt="img"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="despre-noi">
              <Button className="bg-green-600">Mai multe</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="flex flex-col md:flex-row w-full px-4 xl:w-[60%] gap-4">
          <Card className="mt-8 w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl xl:text-2xl text-green-600">
              Servicii
            </CardTitle>
            <CardDescription className="px-4">
              Serviciile oferite de noi
            </CardDescription>
            <CardContent className="md:py-4">
              <p className="max-w-[400px]">your EPO</p>
              <p className="max-w-[400px]">your T&D</p>
              <p className="max-w-[400px]">your Consultant & Advisor</p>
            </CardContent>
            <CardFooter className="flex justify-start">
              <Link href="servicii">
                <Button className="bg-green-600">Detalii</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mt-8 w-full xl:w-[60%]">
            <CardTitle className="p-4 text-xl xl:text-2xl text-green-600">
              Contact
            </CardTitle>
            <CardContent className="md:py-4">
              <div className="flex flex-row my-3">
                <MapPinIcon className="w-6 h-6 text-green-600" />
                <p className="ml-2">Sector 4, Bucuresti</p>
              </div>
              <div className="flex flex-row my-3">
                <PhoneCallIcon className="w-6 h-6 text-green-600" />
                <p className="ml-2">021.330.30.12</p>
              </div>
              <div className="flex flex-row my-3">
                <PrinterIcon className="w-6 h-6 text-green-600" />
                <p className="ml-2"> 021.331.05.44</p>
              </div>
              <div className="flex flex-row my-3">
                <MailIcon className="w-6 h-6 text-green-600" />
                <p className="ml-2">info@ubeon.ro</p>
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
          <CardTitle className="p-4 text-xl xl:text-2xl text-green-600">
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
              <Button className="bg-green-600">Toti partenerii</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
