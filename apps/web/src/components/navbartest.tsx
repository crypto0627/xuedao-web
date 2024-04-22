import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Web as WebIcon,
  AccountCircle as AccountCircleIcon,
  Code as CodeIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

const NAV_MENU = [
  {
    name: "Home",
    icon: <WebIcon />,
    href: "/",
  },
  {
    name: "Events",
    icon: <AccountCircleIcon />,
    href: "https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH",
    target: "_blank",
  },
  {
    name: "Hackathon",
    icon: <CodeIcon />,
    href: "/hackathon",
  },
  {
    name: "Blog",
    icon: <CodeIcon />,
    href: "https://medium.com/xuedao",
    target: "_blank",
  },
];

export function NavbarTest() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1),
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <Image
              src="/XD_logo.png"
              alt="Xue DAO logo"
              width={100}
              height={100}
            />
            <span className="sr-only">XueDAO</span>
          </Link>
        </Typography>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: 2,
            alignItems: "center",
            pt: 2,
          }}
        >
          {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
            <Link key={name} href={href} target={target} passHref>
              <Button color="inherit" startIcon={Icon}>
                {name}
              </Button>
            </Link>
          ))}
        </Box>
        <div style={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Link
            href="https://forms.gle/WAm4n1KiKeYksWj19"
            target="_blank"
            passHref
          >
            <Button
              color="inherit"
              variant="outlined"
              endIcon={<AccountCircleIcon />}
            >
              Join Us
            </Button>
          </Link>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpen}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="nav">
          {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
            <Link key={name} href={href} target={target} passHref>
              <Box sx={{ display: "block", textAlign: "left", pt: 1 }}>
                <ListItem button onClick={handleOpen}>
                  <ListItemIcon>{Icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </Box>
            </Link>
          ))}
          <ListItem>
            <Link
              href="https://forms.gle/WAm4n1KiKeYksWj19"
              target="_blank"
              passHref
            >
              <Button
                color="inherit"
                variant="outlined"
                endIcon={<AccountCircleIcon />}
              >
                Join Us
              </Button>
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </AppBar>
  );
}

export default NavbarTest;
