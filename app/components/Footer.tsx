import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // For TikTok

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#05070A",
        py: 3,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Logo */}
          <Box sx={{ flex: 1 }}>
            <Link href="/" style={{ display: "inline-block" }}>
              <Image
                src="/images/khlix_logo.png"
                alt="Khiix"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </Box>

          {/* Copyright */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Copyright © Khiix 2025
            </Typography>
          </Box>

          {/* Social Media Icons */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flex: 1,
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <IconButton
              aria-label="Telegram"
              component="a"
              href="#"
              target="_blank"
              sx={{
                color: "#1e90ff",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                p: 1,
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <TelegramIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="#"
              target="_blank"
              sx={{
                color: "#1e90ff",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                p: 1,
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              component="a"
              href="#"
              target="_blank"
              sx={{
                color: "#1e90ff",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                p: 1,
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="TikTok"
              component="a"
              href="#"
              target="_blank"
              sx={{
                color: "#1e90ff",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                p: 1,
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <MusicNoteIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
