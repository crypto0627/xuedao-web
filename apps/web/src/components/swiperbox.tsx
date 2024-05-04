"use client";

import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Image from "next/image";
import { Box } from "@mui/material";
import { ImageType } from "@/models/types/uiTypes";

const AutoPlaySwipeableViews  = autoPlay(SwipeableViews);

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

  return (
    <Box className="flex w-full items-center justify-between">
  <AutoPlaySwipeableViews
    index={index}
    onChangeIndex={handleChangeIndex}
    axis="x"
    enableMouseEvents
  >
    {images.map((image, index) => (
      <Box key={index} className="rounded-3xl border">
        <Image
          src={image.imgPath}
          alt={image.label}
          width={800}
          height={600}
          className="w-full rounded-3xl"
          priority
        />
      </Box>
    ))}
  </AutoPlaySwipeableViews>
</Box>
  );
}
