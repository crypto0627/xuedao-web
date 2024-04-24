"use client"
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard, autoPlay, virtualize, } from "react-swipeable-views-utils";
import { ImageType } from "@/models/types/uiTypes";
import Image from "next/image";

const SwipeableViewsVirtualize = virtualize(SwipeableViews);

const images: ImageType[] = [
  {
    index: 1,
    imgPath: "./a.png",
    label: "a",
  },
  {
    index: 2,
    imgPath: "./b.png",
    label: "b",
  },
  {
    index: 3,
    imgPath: "./c.png",
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
<Box className="flex flex-col justify-center items-center relative bg-xuedao_pink mx-auto h-screen overflow-hidden gap-6">
  <Typography variant="h3" className="text-3xl font-bold sm:text-6xl">
    Highlights
  </Typography>
  <Box className="flex items-center justify-between w-full">
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
          <div key={key} className="items-center align-middle justify-center flex">
            {image && (
              <div className="overflow-hidden border-white border-4 rounded-3xl">
                <Image
                  src={image.imgPath}
                  alt={image.label}
                  width={800}
                  height={600}
                  priority
                />
              </div>
            )}
          </div>
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
