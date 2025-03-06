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
  const services = [
    {
      title: "Your EPO",
      want: "EPO",
      description: "Event Planner & Organizer",
      src: "/images/red.png",
      textColor: "text-red-500",
      btnColor: "bg-red-500",
      details:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, eaque! Illo architecto dolore laborum iure placeat eligendi magnam id. Placeat, sed exercitationem esse assumenda consectetur molestias suscipit dolorem modi natus!",
    },
    {
      title: "Your T&D",
      want: "T&D",
      description: "Training & Development",
      src: "/images/orange.png",
      textColor: "text-orange-500",
      btnColor: "bg-orange-500",
      details:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, eaque! Illo architecto dolore laborum iure placeat eligendi magnam id. Placeat, sed exercitationem esse assumenda consectetur molestias suscipit dolorem modi natus!",
    },
    {
      title: "Your C&A",
      want: "C&A",
      description: "Consultant & Advisor",
      src: "/images/yellow.png",
      textColor: "text-yellow-500",
      btnColor: "bg-yellow-500",
      details:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, eaque! Illo architecto dolore laborum iure placeat eligendi magnam id. Placeat, sed exercitationem esse assumenda consectetur molestias suscipit dolorem modi natus!",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col justify-center items-center overflow-hidden">
        <p className="text-3xl p-6 font-semibold text-center">
          Mai jos regasesti lista de servicii oferite
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-4 p-4 justify-center items-center">
          {services.map((srv, index) => (
            <div key={index} className="flex justify-center w-full">
              <Card className="mt-8 w-[90%] xl:w-[80%]">
                <CardTitle
                  className={`p-4 text-xl xl:text-2xl ${srv.textColor}`}
                >
                  {srv.title}
                </CardTitle>
                <CardDescription className="p-4">
                  {srv.description}
                </CardDescription>
                <CardContent className="md:py-4">
                  <div className="flex flex-col gap-3">
                    <Image
                      className="rounded-lg"
                      src={srv.src}
                      width={500}
                      height={100}
                      alt="img"
                    />
                    <p className="max-w-[650px]">{srv.details}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href="tel:+40213303012">
                    <Button className={`${srv.btnColor}`}>
                      Vreau {srv.want}
                    </Button>
                  </Link>
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
