"use client"
import React from "react"
import Image from "next/image"
import { Grid, Typography } from "@mui/material"

export function Hero() {
  return (
    <Grid
      spacing={2}
      className="flex w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-xuedao_pink px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48"
    >
      <Grid item xs={6} md={8} className="flex flex-col ">
        <Image src={"/logo-square.png"} alt="xuedao logo" width={700} height={70} />
        <Typography className="font-bold text-yellow-500 mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          A XueDAO hackathon | May 01 - July 11
        </Typography>
        <Typography className="font-bold text-yellow-500 mt-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
           Show the world Taiwanese Students can Build!
        </Typography>
      </Grid>
    </Grid>
  )
}

