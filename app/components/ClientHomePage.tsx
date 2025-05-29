"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import Image from "next/image";
import Footer from "./Footer";
import { useRouter } from "next/navigation";
import SignupModal from "./SignupModal";

const ClientHomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleSubmitSuccess = () => {
    router.push("/confirmation");
  };

  // Colors similar to ConfirmationPage for consistent styling
  const colors = {
    primary: "#1e90ff", // Primary blue
    primaryDark: "#0066cc", // Darker shade of primary
    secondary: "#d53f8c", // Secondary color (pink)
    accent: "#3b82f6", // Blue accent
    text: {
      dark: "#ffffff",
      medium: "#e0e0e0",
      light: "#b8b8b8",
    },
    bg: {
      main: "#000000",
      card: "#111111",
      highlight: "#111827", // Darker highlight for depth
    },
    border: "#333333",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background: "transparent",
        zIndex: 1,
      }}
    >
      {/* Main Header Section */}
      <Box
        sx={{
          background: "transparent",
          py: 6,
          pb: 20,
          zIndex: 1,
          textAlign: "center",
          borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: colors.text.dark,
              fontSize: { xs: "2.5rem", sm: "3.0rem", md: "3.5rem" },
              lineHeight: 1.1,
              maxWidth: "1000px",
              mb: 3,
              mx: "auto",
              letterSpacing: "-0.02em",
            }}
          >
            Get Free Resources
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.accent,
              fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
              maxWidth: "1000px",
              mx: "auto",
              lineHeight: 1.3,
            }}
          >
            The framework has achieved over $100 million in online sales by
            following a clear, strategic approach designed specifically for
            webinars that convert
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Overlay for depth effect */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: 500,
            background:
              "radial-gradient(circle at center, rgba(20, 30, 60, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Image Section */}
        <Box
          sx={{
            mt: -12,
            zIndex: 10,
            position: "relative",
            mx: { xs: 1, md: 4 },
          }}
        >
          <Paper
            elevation={4}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              border: `1px solid rgba(255,255,255,0.1)`,
              background: "transparent",
            }}
          >
            {/* Image Header */}
            <Box
              sx={{
                bgcolor: colors.primary,
                color: "white",
                py: 1.5,
                px: 3,
                zIndex: 10,
                textAlign: "center",
                backgroundImage: `linear-gradient(90deg, ${colors.primaryDark}, ${colors.primary})`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                The Perfect Webinar System
              </Typography>
            </Box>

            {/* Main Image */}
            <Box sx={{ position: "relative", width: "100%" }}>
              <Image
                src="/images/person.jpg"
                alt="Webinar funnels and systems"
                width={1000}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </Box>
          </Paper>
        </Box>

        {/* Secondary Header & Description */}
        <Box sx={{ textAlign: "center", mb: 8, mt: 10, px: { xs: 2, md: 0 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: colors.primary,
              mb: 3,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Transform Your Business With Webinars
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: colors.text.light,
              maxWidth: "800px",
              mx: "auto",
              mb: 5,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              lineHeight: 1.6,
            }}
          >
            Webinars are the most powerful way to sell high-ticket products and
            services online. Our proven system has generated over $100 million
            in sales across dozens of industries. Learn how to create, launch
            and profit from webinars, even if you&apos;re starting from scratch.
          </Typography>
        </Box>

        {/* CTA Section */}
        <Box
          onClick={handleOpenModal}
          sx={{
            backgroundImage: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary})`,
            p: 3,
            maxWidth: "900px",
            mx: "auto",
            borderRadius: 2,
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: `0 4px 12px rgba(213, 63, 140, 0.3)`,
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 6px 16px rgba(213, 63, 140, 0.4)`,
            },
            my: 3,
            mb: 10,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "1.3rem", sm: "1.6rem" },
            }}
          >
            Download Free Resources!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: { xs: "0.9rem", md: "1rem" },
              mt: 1,
            }}
          >
            Give Me Instant Access To Free Resources;
          </Typography>
        </Box>

        {/* Signup Modal Component */}
        <SignupModal
          open={openModal}
          onClose={handleCloseModal}
          onSubmitSuccess={handleSubmitSuccess}
          colors={colors}
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default ClientHomePage;
