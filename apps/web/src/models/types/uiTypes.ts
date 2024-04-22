import React from "react";

export type MemberType = {
  id: number;
  name: string;
};

export type ImageType = {
  imgPath: string;
  label: string;
};

export type NavbarItemType = {
    name: string,
    icon: React.ReactElement
    href: string
    target: string
}