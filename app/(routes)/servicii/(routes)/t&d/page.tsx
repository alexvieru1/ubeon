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
            <CardTitle className="p-4 text-3xl text-orange-500">
              Your T&amp;D
            </CardTitle>
            <CardDescription className="p-4 text-xl">
              Training &amp; Development
            </CardDescription>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg"
                    src="/images/orange.png"
                    alt="Your T&D"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam aliquid tempora, nesciunt explicabo eveniet
                    necessitatibus laboriosam debitis at iure! Your T&amp;D
                    offers outstanding training and development programs
                    tailored to help you grow both professionally and
                    personally.
                  </p>
                  <p className="mt-4">
                    With a focus on innovative methodologies and hands-on
                    learning, our training solutions empower your team and boost
                    your organization’s performance.
                  </p>
                  <p className="mt-4">
                    With a focus on innovative methodologies and hands-on
                    learning, our training solutions empower your team and boost
                    your organization’s performance.
                  </p>
                  <p className="mt-4">
                    With a focus on innovative methodologies and hands-on
                    learning, our training solutions empower your team and boost
                    your organization’s performance.
                  </p>
                  <p className="mt-4">
                    With a focus on innovative methodologies and hands-on
                    learning, our training solutions empower your team and boost
                    your organization’s performance.
                  </p>
                  <p className="mt-4">
                    With a focus on innovative methodologies and hands-on
                    learning, our training solutions empower your team and boost
                    your organization’s performance.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4 gap-4">
              <Link href="/contact">
                <Button className="bg-orange-500 text-white">Contact us</Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="blank">
                <Button className="bg-orange-500 text-white">
                  Get Fast Access
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
