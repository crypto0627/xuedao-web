"use client"

import React, { useLayoutEffect, useState } from "react"
import SwipeableViews from "react-swipeable-views"
import { virtualize } from "react-swipeable-views-utils"

import Image from "next/image"

import { ChevronLeft, ChevronRight, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"

import { ImageType } from "@/models/types/uiTypes"

const SwipeableViewsVirtualize = virtualize(SwipeableViews)

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
]

export function ReactSwipeableViews() {
  const [index, setIndex] = useState(0)
  const [icons, setIcons] = useState([] as React.ReactNode[])
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const newIcons = images.map((image, idx) => (
        idx === index ? <RadioButtonChecked key={idx} /> : <RadioButtonUnchecked key={idx} />
      ))
      setIcons(newIcons)
    }
  }, [index, images])

  const handleChangeIndex = (index: number) => {
    setIndex(index)
  }

  const handleBackClick = () => {
    setIndex(index - 1)
  }

  const handleNextClick = () => {
    setIndex(index + 1)
  }

  return (
    <Box className="mx-auto flex flex-col items-center py-5 justify-center gap-6 overflow-hidden bg-xuedao_pink">
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
            const image = images.find((images) => images.index === imageIndex + 1)
            return (
              <Box key={key} className="flex flex-col items-center justify-center align-middle">
                {image && (
                  <Box className="overflow-hidden rounded-3xl mb-2">
                    <Image
                      src={image.imgPath}
                      alt={image.label}
                      width={800}
                      height={600}
                      priority
                    />
                  </Box>
                )}
                <Box className="flex">
                  {icons.map((icon, idx) => (
                    <IconButton key={idx} onClick={() => setIndex(idx)}>{icon}</IconButton>
                  ))}
                </Box>
              </Box>
            )
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
  )
}
