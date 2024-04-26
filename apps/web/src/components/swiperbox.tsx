"use client";

import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  bindKeyboard,
  autoPlay,
  virtualize,
} from "react-swipeable-views-utils";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Pagination, Typography } from "@mui/material";

import { ImageType } from "@/models/types/uiTypes";

const SwipeableViewsVirtualize = virtualize(SwipeableViews);

const images: ImageType[] = [
  {
    index: 1,
    imgPath: "/a.png",
    label: "a",
  },
  {
    index: 2,
    imgPath: "/b.png",
    label: "b",
  },
  {
    index: 3,
    imgPath: "/c.png",
    label: "c",
  },
];

export function ReactSwipeableViews() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setIndex(index);
  };

  const handleBackClick = () => {
    setIndex(index - 1);
  };

  const handleNextClick = () => {
    setIndex(index + 1);
  };

  return (
    <Box className="relative mx-auto flex h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-xuedao_pink">
      <Typography variant="h3" className="text-3xl font-bold sm:text-6xl">
        Highlights
      </Typography>
      <Box className="flex w-full items-center justify-between">
        <IconButton
          aria-label="left"
          onClick={handleBackClick}
          color="secondary"
          disabled={index === 0}
        >
          <ChevronLeft />
        </IconButton>
        <SwipeableViewsVirtualize
          index={index}
          onChangeIndex={handleChangeIndex}
          slideCount={images.length}
          slideRenderer={({ index: imageIndex, key }) => {
            const image = images.find((img) => img.index === imageIndex + 1);
            return (
              <Box
                key={key}
                className="flex items-center justify-center align-middle"
              >
                {image && (
                  <Box className="overflow-hidden rounded-3xl border-4 border-white hover:border-cyan-400">
                    <Image
                      src={image.imgPath}
                      alt={image.label}
                      width={800}
                      height={600}
                      priority
                    />
                    <Box display="flex" justifyContent="center">
                      <Pagination
                        count={images.length}
                        defaultPage={1}
                        size="small"
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            );
          }}
          axis="x"
          enableMouseEvents
        />
        <IconButton
          aria-label="right"
          onClick={handleNextClick}
          color="secondary"
          disabled={index === images.length - 1}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
}
