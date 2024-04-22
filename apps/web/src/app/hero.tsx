"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mt-4 w-full bg-black py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="flex flex-col items-center justify-between gap-x-8 px-8 sm:flex-row sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white sm:text-5xl xl:text-8xl/none">
            Welcome to XueDAO
          </h1>
          <p className="max-w-[600px] text-white md:text-2xl/relaxed">
            Our mission is to break down barriers, foster global connections
            among students, ignite a deep passion for learning, and promote a
            vibrant culture of knowledge sharing for both students and lifelong
            learners.
          </p>
          <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row sm:flex-row">
            <div className="flex flex-row gap-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-12 text-sm font-medium text-black shadow transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                href="https://forms.gle/WAm4n1KiKeYksWj19"
                target="_blank"
              >
                Join Us
              </Link>
              <Link
                className="disabled:opacity-500 inline-flex h-10 items-center justify-center rounded-md bg-white px-12 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none"
                href="#vision"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("why-join");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:mt-0">
          <Image
            src="/logo-square.png"
            width={1000}
            height={1000}
            alt="XueDAO square logo"
          />
        </div>
      </div>
    </section>
  );
}
