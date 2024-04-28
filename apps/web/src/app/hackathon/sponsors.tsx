import React from "react"

import { AccessTime, People, Settings } from "@mui/icons-material"
import { Box, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import Image from "next/image"
import { ImageType } from "@/models/types/uiTypes"

export function Sponsors() {
  const images: ImageType[] = [
    {
      index: 1,
      imgPath: "/sponsors/zeus_network.webp",
      label: "a",
    },
    {
      index: 2,
      imgPath: "/",
      label: "b",
    },
    {
      index: 3,
      imgPath: "/c.webp",
      label: "c",
    },
  ]
  return (
    <Box
      id="sponsors"
      className="w-full bg-xuedao_pink bg-cover bg-center py-12 md:py-24 lg:py-32"
      component="section"
    >
      <Box className="container mx-auto px-4 md:px-6">
        <Box className="flex flex-col items-center justify-center space-y-4 text-center">
          <Typography variant="h3" className="text-3xl font-bold sm:text-6xl">
            Sponsors
          </Typography>
          <Box className="flex flex-row items-center justify-center ">
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Image src={'/sponsors/zeus_network.webp'} width={150} height={150} alt="zeus_network.webp"/>
              </Grid>
              <Grid item xs={2}>
              <Image src={'/sponsors/zeus_network.webp'} width={150} height={150} alt="zeus_network.webp"/>
              </Grid>
              <Grid item xs={2}>
              <Image src={'/sponsors/zeus_network.webp'} width={150} height={150} alt="zeus_network.webp"/>
              </Grid>
              <Grid item xs={2}>
              <Image src={'/sponsors/zeus_network.webp'} width={150} height={150} alt="zeus_network.webp"/>
              </Grid>
              <Grid item xs={2}>
              <Image src={'/sponsors/zeus_network.webp'} width={150} height={150} alt="zeus_network.webp"/>
              </Grid>
              <Grid item xs={2}>
              <Image src={'/sponsors/zeus_network.webp'} width={150} height={150} alt="zeus_network.webp"/>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
