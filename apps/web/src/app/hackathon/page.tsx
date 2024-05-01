import React from "react";

import { Hero, Schedule, Sponsors, Track, WorkShop } from "@/app/hackathon";
import { Footer, Navbar } from "@/components";

export default function Hackathon() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Track />
      <Schedule />
      <WorkShop />
      <Footer />
    </>
  );
}
