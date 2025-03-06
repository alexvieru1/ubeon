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
          <CardTitle className="p-4 text-xl xl:text-2xl text-green-600">
            Hai sa ne cunoastem mai bine
          </CardTitle>
          <CardDescription className="p-4">
            Suntem aici pentru tine
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
                src="/images/logo.jpg"
                width={500}
                height={500}
                alt="img"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="tel:+40213303012">
              <Button className="bg-green-600">Hai sa vorbim</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default page;
