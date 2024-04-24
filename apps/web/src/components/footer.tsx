import React from "react";
import {
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  YouTube as YouTubeIcon,
  X as XIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import {
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import * as DiscordIcon from '../../public/icons-discord.svg'
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col bg-xuedao_pink items-center justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <Typography variant="body1" color="text.secondary">
        © 2024 XueDAO foundation. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton component="a" href="https://www.instagram.com/xue_dao_/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </IconButton>
        <IconButton component="a" href="https://twitter.com/xuedao_tw" target="_blank" rel="noopener noreferrer">
          <XIcon />
        </IconButton>
        <IconButton component="a" href="https://t.me/+0Rvawr400uNhNTY1" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
        </IconButton>
        <IconButton component="a" href="https://discord.gg/G2V7G7FN" target="_blank" rel="noopener noreferrer" className="">
          <Image src={DiscordIcon} alt='dicord' width={24} height={24} style={{ filter: 'grayscale(100%)' }}/>
        </IconButton>
        <IconButton component="a" href="https://www.facebook.com/profile.php?id=100094540248529" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
        <IconButton component="a" href="link_to_youtube" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon />
        </IconButton>
      </Box>
      <Box sx={{display: 'flex', gap: 2}}>
        <Typography variant="body2" color="text.secondary">
          <Link href="/">
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
