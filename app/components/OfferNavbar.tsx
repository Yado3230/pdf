"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function OfferNavbar() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 14,
    minutes: 1,
    seconds: 27,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return {
            ...prevTime,
            minutes: prevTime.minutes - 1,
            seconds: 59,
          };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time with leading zeros
  const formatTime = (num: number) => num.toString().padStart(2, "0");

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        // bgcolor: "#5541CF", // The purple color from the image
        color: "white",
        py: 1.5,
        borderRadius: 2,
        px: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          width: "100%",
          backgroundImage: "linear-gradient(90deg, #5541CF, #7339EA)",
          color: "white",
          py: 1.5,
          borderRadius: 2,
          px: 2,
          boxShadow: 3,
          mx: "auto",
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                <Image
                  src="/images/khlix_logo.png"
                  alt="logo"
                  width={100}
                  height={36}
                />
              </Box>
            </Box>

            {/* Timer Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  mr: 1,
                  display: { xs: "none", md: "block" },
                }}
              >
                OFFER ENDS:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: { xs: 0, md: 2 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, mx: 0.5, whiteSpace: "nowrap" }}
                  >
                    {formatTime(timeLeft.days)} Days
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, mx: 0.5, whiteSpace: "nowrap" }}
                  >
                    {formatTime(timeLeft.hours)} Hours
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, mx: 0.5, whiteSpace: "nowrap" }}
                  >
                    {formatTime(timeLeft.minutes)} Minute
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, mx: 0.5, whiteSpace: "nowrap" }}
                  >
                    {formatTime(timeLeft.seconds)} Seconds
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                onClick={scrollToBottom}
                sx={{
                  backgroundImage: "linear-gradient(90deg, #d53f8c, #3b82f6)",
                  color: "white",
                  fontWeight: 700,
                  px: 2,
                  py: 0.8,
                  borderRadius: 1,
                  border: "2px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    backgroundImage: "linear-gradient(90deg, #d53f8c, #3b82f6)",
                    filter: "brightness(1.1)",
                  },
                }}
              >
                {" "}
                GET ACCESS NOW{" "}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
