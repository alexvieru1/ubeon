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
            <CardTitle className="p-4 text-3xl text-red-500">
              Your EPO
            </CardTitle>
            <CardDescription className="p-4 text-xl">
              Event Planner & Organizer
            </CardDescription>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg"
                    src="/images/red.png"
                    alt="Your EPO"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam aliquid tempora, nesciunt explicabo eveniet
                    necessitatibus laboriosam debitis at iure! Your EPO offers
                    exceptional event planning and organization services
                    tailored to meet your every need. Our dedicated team handles
                    every detail with precision, ensuring memorable and
                    flawlessly executed events.
                  </p>
                  <p className="mt-4">
                    With years of experience, we work closely with our clients
                    to transform their visions into reality. From corporate
                    conferences to private celebrations, we take pride in
                    delivering outstanding service and innovative solutions.
                  </p>
                  <p className="mt-4">
                    With years of experience, we work closely with our clients
                    to transform their visions into reality. From corporate
                    conferences to private celebrations, we take pride in
                    delivering outstanding service and innovative solutions.
                  </p>
                  <p className="mt-4">
                    With years of experience, we work closely with our clients
                    to transform their visions into reality. From corporate
                    conferences to private celebrations, we take pride in
                    delivering outstanding service and innovative solutions.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <Link href="https://wa.me/40722567212" target="blank">
                <Button className="bg-red-500 text-white">
                  Contacteaza-ne
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
