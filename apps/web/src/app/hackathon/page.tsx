"use client";

import React from "react";

import { Hero, Prize } from "@/app/hackathon";
import { Footer, Navbar } from "@/components";

export default function Hackathon() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prize />
      <Footer />
    </>
  );
}
