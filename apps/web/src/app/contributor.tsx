"use client";

import React from "react";

import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";

import { MemberType } from "@/models/types/uiTypes";

export function Contributors() {
  const members: MemberType[] = [
    { id: 1, name: "Jennifer" },
    { id: 2, name: "Kevin" },
    { id: 3, name: "Tim" },
    { id: 4, name: "Albert" },
    { id: 5, name: "Johnny" },
    { id: 6, name: "Terrance" },
    { id: 7, name: "Louis" },
    { id: 8, name: "Moven" },
    { id: 9, name: "Vincent" },
    { id: 10, name: "HongRu" },
    { id: 11, name: "Jourden" },
    { id: 12, name: "Rita" },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-black sm:text-6xl">
              Core Contributors
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {members.map((name, id) => (
              <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
                <Box textAlign="center" p={1}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 1,
                      borderRadius: "50%",
                      display: "inline-block",
                      mb: 2,
                    }}
                  >
                    <Avatar
                      alt={members[id].name}
                      src={`/core-contributors/${members[id].name}.png`}
                      sx={{ width: 144, height: 144 }}
                    />
                  </Paper>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: "medium", color: "text.primary" }}
                  >
                    {members[id].name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}
