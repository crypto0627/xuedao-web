import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Box, Typography } from "@mui/material"

export function Hero() {
  return (
    <Box className="relative w-full overflow-hidden bg-xuedao_pink bg-cover bg-center py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
      <Box className="flex flex-col items-center justify-between gap-x-8 px-8 sm:flex-row sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <Box className="flex flex-col gap-5">
          <Box className="mb-5 pb-6">
            <Image
              src={"/logo-square.png"}
              alt="xuedao logo"
              width={700}
              height={70}
              priority
            />
          </Box>
          <Typography className="max-w-[600px] md:text-2xl/relaxed">
            Our mission is to break down barriers, foster global connections
            among students, ignite a deep passion for learning, and promote a
            vibrant culture of knowledge sharing for both students and lifelong
            learners.
          </Typography>
          <Box className="min-[600px] mt-8 flex flex-col sm:w-48 sm:flex-row">
            <Link
              className="!important inline-flex h-10 w-72 items-center justify-center rounded-3xl bg-joinus_btn px-12 text-lg font-bold text-white shadow hover:bg-joinus_btn focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="https://forms.gle/WAm4n1KiKeYksWj19"
              target="_blank"
            >
              Join Us!
            </Link>
          </Box>
        </Box>
        <Box className="absolute right-[20px] top-0 hidden sm:right-[-80px] md:right-[-100px] lg:right-[-120px] xl:right-[-150px] 2xl:right-[-180px] 2xl:block xl:mt-10">
          <Image
            src="/puzzle.png"
            width={700}
            height={600}
            alt="puzzle"
            priority
          />
        </Box>
      </Box>
    </Box>
  )
}
