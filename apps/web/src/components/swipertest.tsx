"use client";

import React, { useState, useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Swiper from "swiper";
import { SwiperClass } from "swiper/react";
import "swiper/swiper-bundle.css";

import { ImageType } from "@/models/types/uiTypes";

const images: ImageType[] = [
  {
    imgPath: "./a.png",
    label: "a",
  },
  {
    imgPath: "./b.png",
    label: "b",
  },
  {
    imgPath: "./c.png",
    label: "c",
  },
];

export function SwiperTest() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setSwiper(
        new Swiper(ref.current, {
          centeredSlides: true,
          slidesPerView: "auto",
          spaceBetween: 30,
          touchStartPreventDefault: false, // 添加這個選項
        }),
      );
    }
  }, []);

  return (
    <Box
      ref={ref}
      className="swiper-container"
      sx={{ maxWidth: 1500, flexGrow: 1 }}
    >
      <div className="swiper-wrapper">
        {images.map((items) => (
          <div className="swiper-slide" key={items.label}>
            <Box
              component="img"
              sx={{
                height: 1000,
                display: "flex",
                margin: "auto",
                maxWidth: 1500,
                overflow: "hidden",
                justifyContent: "center",
              }}
              src={items.imgPath}
              alt={items.label}
            />
          </div>
        ))}
      </div>
    </Box>
  );
}

export default SwiperTest;
