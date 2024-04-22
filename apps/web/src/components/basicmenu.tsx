"use client";

import React from "react";

import Link from "next/link";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="underline-offset-4 hover:underline"
        onClick={handleClick}
      >
        Contact +
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="https://twitter.com/xuedao_tw" target="_blank">
            X
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="https://www.instagram.com/xue_dao_/" target="_blank">
            Instagram
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="https://t.me/+0Rvawr400uNhNTY1" target="_blank">
            Telegram
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            href="https://www.facebook.com/profile.php?id=100094540248529"
            target="_blank"
          >
            Facebook
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default BasicMenu;
