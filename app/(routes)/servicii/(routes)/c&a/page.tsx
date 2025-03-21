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
            <CardTitle className="p-4 text-3xl text-blue-500">
              Your C&amp;A
            </CardTitle>
            <CardDescription className="p-4 text-xl">
              Consultant &amp; Advisor
            </CardDescription>
            <CardContent className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-lg"
                    src="/images/blue.png"
                    alt="Your C&A"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam aliquid tempora, nesciunt explicabo eveniet
                    necessitatibus laboriosam debitis at iure! Your C&amp;A
                    provides expert advice and consulting services to help you
                    overcome challenges and seize new opportunities.
                  </p>
                  <p className="mt-4">
                    Our experienced consultants work closely with you to deliver
                    tailored solutions that drive success and foster sustainable
                    growth.
                  </p>
                  <p className="mt-4">
                    Our experienced consultants work closely with you to deliver
                    tailored solutions that drive success and foster sustainable
                    growth.
                  </p>
                  <p className="mt-4">
                    Our experienced consultants work closely with you to deliver
                    tailored solutions that drive success and foster sustainable
                    growth.
                  </p>
                  <p className="mt-4">
                    Our experienced consultants work closely with you to deliver
                    tailored solutions that drive success and foster sustainable
                    growth.
                  </p>
                  <p className="mt-4">
                    Our experienced consultants work closely with you to deliver
                    tailored solutions that drive success and foster sustainable
                    growth.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4 gap-4">
              <Link href="/contact">
                <Button className="bg-blue-500 text-white">
                  Contact us
                </Button>
              </Link>
              <Link href="https://wa.me/40722567212" target="blank">
                <Button className="bg-blue-500 text-white">
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
