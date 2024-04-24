"use client";
import { Box, Typography } from "@mui/material";
import { AccessTime, People, Settings } from "@mui/icons-material";
import React from "react";

export function Vision() {
  return (
    <Box
      id="vision"
      className="w-full bg-cover bg-center py-12 md:py-24 lg:py-32 bg-xuedao_pink"
      component="section"
    >
      <Box className="container mx-auto px-4 md:px-6">
        <Box className="flex flex-col items-center justify-center space-y-4 text-center">
          <Box className="space-y-2">
            <Typography variant="h3" className="text-3xl font-bold sm:text-6xl">
              Why Join XueDAO?
            </Typography>
            <Typography
              variant="body1"
              className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              As a member of XueDAO, you'll have access to a wide range of
              resources and benefits designed to help you succeed in the world
              of Web3.
            </Typography>
          </Box>
        </Box>
        <Box className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:mt-20 ">
          <Box
            component="a"
            className="group relative z-40 m-2 bg-white p-4 transition-all duration-1000 hover:bg-blue-600 hover:shadow-xl"
          >
            <Box className="absolute left-0 top-0 z-30 h-1 w-24 bg-blue-600/50 transition-all duration-200 group-hover:w-1/2 group-hover:bg-white" />
            <Box className="relative px-9 py-2">
              <AccessTime className="h-16 w-16 fill-gray-400 group-hover:fill-white" />
              <Typography className="mt-8 text-lg font-semibold text-black group-hover:text-white">
                Education
              </Typography>
              <Typography className="mt-4 text-base text-gray-600 group-hover:text-white">
                Access to educational resources and workshops on blockchain and
                Web3 technologies.
              </Typography>
            </Box>
          </Box>
          <Box
            component="a"
            className="group relative z-40 m-2 bg-white p-4 transition-all duration-1000 hover:bg-blue-600 hover:shadow-xl"
          >
            <Box className="absolute left-0 top-0 z-30 h-1 w-24 bg-blue-600/50 transition-all duration-200 group-hover:w-1/2 group-hover:bg-white" />
            <Box className="relative px-9 py-2">
              <People className="h-16 w-16 fill-gray-400 group-hover:fill-white" />
              <Typography className="mt-8 text-lg font-semibold text-black group-hover:text-white">
                Networking
              </Typography>
              <Typography className="mt-4 text-base text-gray-600 group-hover:text-white">
                Connect with other students and professionals in the Web3 space.
              </Typography>
            </Box>
          </Box>

          <Box
            component="a"
            className="group relative z-40 m-2 bg-white p-4 transition-all duration-1000 hover:bg-blue-500 hover:shadow-xl"
          >
            <Box className="absolute left-0 top-0 z-30 h-1 w-24 bg-blue-600/50 transition-all duration-200 group-hover:w-1/2 group-hover:bg-white" />
            <Box className="relative px-9 py-2">
              <Settings className="h-16 w-16 fill-gray-400 group-hover:fill-white" />
              <Typography className="mt-8 text-lg font-semibold text-black group-hover:text-white">
                Governance
              </Typography>
              <Typography className="mt-4 text-base text-gray-600 group-hover:text-white">
                Participate in the decision-making process of Xue DAO.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
