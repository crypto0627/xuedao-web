import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { ReactSwipeableViews } from "@/components/swiperbox";
import Link from "next/link";

export function Events() {
  return (
    <Box
      className="w-full bg-gradient-to-b from-event to-event2 py-32 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-2"
      component="section"
    >
      <Image
        src="/events_header.png"
        width={700}
        height={300}
        alt="events header"
        className="items-center justify-center"
      />
      <Grid container spacing={6}>
        {/* Column 1: 50% width */}
        <Grid item xs={12} md={6}>
          <ReactSwipeableViews />
        </Grid>
        {/* Column 2: 50% width */}
        <Grid item xs={12} md={6}>
          {/* Row 1: 25% height */}
          <Grid container item xs={12} style={{ height: "25%" }}>
            <Typography variant="h5" className="font-bold">
              We Hack!
            </Typography>
            <Typography className="max-w-[550px] text-black text-base md:text-lg/relaxed lg:text-xl/relaxed xl:text-3xl/relaxed">
              We join hackathons together and win several prizes already
            </Typography>
          </Grid>
          {/* Row 2: 25% height */}
          <Grid container item xs={12} style={{ height: "25%" }}>
            <Typography variant="h5" className="font-bold">
              We Learn!
            </Typography>
            <Typography className="max-w-[550px] text-black text-base md:text-lg/relaxed lg:text-xl/relaxed xl:text-3xl/relaxed">
              we host bi-weekly co-learning day which is open for everyone to
              join, also the study groups
            </Typography>
          </Grid>
          {/* Row 3: 25% height */}
          <Grid container item xs={12} style={{ height: "25%" }}>
            <Typography variant="h5" className="font-bold">
              We Connect!
            </Typography>
            <Typography className="max-w-[550px] text-black text-base md:text-lg/relaxed lg:text-xl/relaxed xl:text-3xl/relaxed">
              We host side event during ETH Taipei, and Keynotes Speechs with
              professions from the industry
            </Typography>
          </Grid>
          {/* Row 4: 25% height */}
          <Grid container item xs={12} style={{ height: "25%" }}>
            <Link href={"https://edux-taipei.com/"}>
              <Button className="border-4 bg-xuedao_blue hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)]  hover:bg-xuedao_blue rounded-xl p-1 text-xs md:text-sm lg:text-base xl:text-lg text-black font-bold h-10 xl:h-12">
                EduX Conference Official Website
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
