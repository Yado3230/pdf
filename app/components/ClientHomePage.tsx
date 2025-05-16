"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    primary: "#1C7EC6", // Primary blue
    primaryDark: "#146bab", // Darker shade of primary
    secondary: "#E73861", // Secondary color (red/pink)
    accent: "#22c55e", // Green for CTA
    text: {
      dark: "#0f172a",
      medium: "#1e293b",
      light: "#64748b",
    },
    bg: {
      main: "#f8fafc",
      card: "#ffffff",
      highlight: "#e6f0f9", // Lighter version of primary
    },
    border: "#e2e8f0",
  };

  // FAQ items
  const faqItems = [
    {
      question: "What is a webinar funnel?",
      answer:
        "A webinar funnel is a marketing strategy that uses webinars to attract, engage, and convert prospects into customers. It typically includes registration pages, reminder emails, the webinar itself, and follow-up sequences.",
    },
    {
      question: "How long does it take to set up a webinar?",
      answer:
        "Setting up a basic webinar can take as little as a day, but creating a high-converting webinar funnel typically takes 1-2 weeks, including preparation of content, slides, technical setup, and marketing materials.",
    },
    {
      question: "Do I need technical experience to create a webinar?",
      answer:
        "No, our platform is designed to be user-friendly for beginners. We provide templates and step-by-step guidance that makes the process simple, even if you have no technical experience.",
    },
    {
      question: "What equipment do I need to host a webinar?",
      answer:
        "At minimum, you need a computer with a reliable internet connection, a microphone, and our webinar software. For better quality, we recommend a good webcam, headset, and quiet environment.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: colors.bg.main,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `linear-gradient(to bottom, ${colors.bg.highlight}, ${colors.bg.main} 15%, ${colors.bg.main})`,
      }}
    >
      {/* Main Header Section */}
      <Box
        sx={{
          bgcolor: colors.bg.highlight,
          py: 6,
          pb: 20,
          zIndex: 1,
          textAlign: "center",
          borderBottom: `1px solid ${colors.border}`,
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
              color: colors.primary,
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
              boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
              border: `1px solid ${colors.border}`,
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

        {/* FAQ Section */}
        <Box sx={{ mb: 10, mx: { xs: 1, md: 4 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: colors.primary,
              mb: 6,
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Stack spacing={2} sx={{ maxWidth: "900px", mx: "auto" }}>
            {faqItems.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: "8px!important",
                  overflow: "hidden",
                  "&:before": {
                    display: "none",
                  },
                  mb: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: colors.bg.card,
                    borderBottom: `1px solid ${colors.border}`,
                    "& .MuiAccordionSummary-content": {
                      margin: "12px 0",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: colors.text.dark,
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ backgroundColor: colors.bg.card, p: 3 }}
                >
                  <Typography
                    sx={{
                      color: colors.text.medium,
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>

        {/* CTA Section */}
        <Box
          onClick={handleOpenModal}
          sx={{
            bgcolor: colors.secondary,
            backgroundImage: `linear-gradient(135deg, ${colors.secondary}, #d02d53)`,
            p: 3,
            maxWidth: "900px",
            mx: "auto",
            borderRadius: 2,
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: `0 4px 12px rgba(231, 56, 97, 0.3)`,
            "&:hover": {
              bgcolor: "#d02d53",
              transform: "translateY(-2px)",
              boxShadow: `0 6px 16px rgba(231, 56, 97, 0.4)`,
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
            JOIN FOR FREE!
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
