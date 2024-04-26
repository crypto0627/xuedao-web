"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, Box, Typography } from "@mui/material";
import { BasicTable } from "./components";

export function Hero() {
  return (
    <Grid
      container
      spacing={2}
      className="relative w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-xuedao_pink px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48"
    >
      <Grid item xs={6} md={6}>
        <Image src={"/logo-square.png"} alt="xuedao logo" width={700} height={70} />
        <Typography variant="h3" component="h5" className="font-bold text-yellow-500">
          A XueDAO hackathon | May 01 - July 11
        </Typography>
      </Grid>
      <Grid item xs={6} md={6} className="border-4 border-white rounded-3xl hover:border-yellow-300">
        <Typography variant="h3" component="h5" className="text-yellow-500">
          Important days
        </Typography>
        <BasicTable />
      </Grid>
    </Grid>
  );
}

