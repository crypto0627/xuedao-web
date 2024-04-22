"use client";

import { NavbarTest, SwiperTest, Footer } from "@/components";

import { Contributors } from "./contributor";
import { Hero } from "./hero";
import { Vision } from "./vision";

export default function Profile() {
  return (
    <>
      <NavbarTest />
      <Hero />
      <Vision />
      <Contributors />
      {/* <section className="w-full bg-black py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-black sm:text-6xl">
                Vibes
              </h2>
              <SwiperTest/>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
