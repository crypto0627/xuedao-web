import React from "react"
import { Box, Typography } from "@mui/material"

export function Schedule() {
  return (
    <Box
      id="sponsors"
      className="w-full bg-xuedao_pink bg-cover bg-center py-12 md:py-24 lg:py-32"
      component="section"
    >
      <Box className="container mx-auto px-4 md:px-6">
        <Box className="flex flex-col items-center justify-center space-y-4 text-center">
          <Typography variant="h3" className="text-3xl font-bold sm:text-6xl">
            Schedule
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
