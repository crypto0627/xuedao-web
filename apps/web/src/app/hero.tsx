"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="w-full bg-cover bg-center bg-xuedao_pink py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="flex flex-col items-center justify-between gap-x-8 px-8 sm:flex-row sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <div className="flex flex-col gap-5">
          <div className="pb-6 mb-5">
            <Image
            src={'/logo-square.png'}
            alt='xuedao logo'
            width={700}
            height={70}
            />
          </div>
          <p className="max-w-[600px] md:text-2xl/relaxed">
            Our mission is to break down barriers, foster global connections
            among students, ignite a deep passion for learning, and promote a
            vibrant culture of knowledge sharing for both students and
            lifelong learners.
          </p>
          <div className="mt-8 flex flex-col min-[600px] sm:flex-row sm:w-48">
              <Link
                className="inline-flex w-72 h-10 items-center text-white justify-center rounded-3xl bg-joinus_btn px-12 text-lg font-bold shadow hover:bg-joinus_btn focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 !important"
                href="https://forms.gle/WAm4n1KiKeYksWj19"
                target="_blank"
              >
                Join Us!
              </Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center border border-xuedao_pink rounded-xl overflow-hidden opacity-70">
          <Image
            src="/logo-square.png"
            width={1000}
            height={1000}
            alt="XueDAO logo"
            priority
          />
        </div>
      </div>
    </section>
  )
}