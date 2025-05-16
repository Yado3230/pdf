"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Footer from "./Footer";

const ClientConfirmationContent = () => {
  // Client-side state
  const [timeLeft, setTimeLeft] = useState({ minutes: 3, seconds: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Colors
  const colors = {
    primary: "#1C7EC6", // Primary blue
    primaryDark: "#146bab", // Darker shade of primary
    secondary: "#E73861", // Secondary color (red/pink)
    secondaryLight: "#fbeaef", // Light version of secondary for backgrounds
    accent: "#22c55e", // Green for CTA
    accentDark: "#16a34a",
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
    rating: "#f59e0b", // Gold for stars
  };

  // Initialize HLS.js on mount
  useEffect(() => {
    if (videoRef.current) {
      const loadHls = async () => {
        try {
          const Hls = (await import("hls.js")).default;

          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(
              "https://vz-ba05a74e-57c.b-cdn.net/cd74d6de-b893-4a04-839c-8600497d2b33/playlist.m3u8"
            );
            if (videoRef.current) {
              hls.attachMedia(videoRef.current);
              hls.on(Hls.Events.MANIFEST_PARSED, () => {
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  videoRef.current.play().catch((error: Error) => {
                    console.error("Autoplay failed:", error);
                  });
                }
              });
            }
          } else if (
            videoRef.current?.canPlayType("application/vnd.apple.mpegurl")
          ) {
            // Native HLS support (Safari)
            videoRef.current.src =
              "https://vz-ba05a74e-57c.b-cdn.net/cd74d6de-b893-4a04-839c-8600497d2b33/playlist.m3u8";
            videoRef.current.muted = true;
            videoRef.current.play().catch((error: Error) => {
              console.error("Autoplay failed:", error);
            });
          }
        } catch (error) {
          console.error("Failed to load HLS.js:", error);
        }
      };

      loadHls();
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time with leading zeros
  const formatTime = (num: number) => num.toString().padStart(2, "0");

  // Pricing options
  const pricingOptions = [
    {
      id: 1,
      name: "Instant Access To The Perfect Webinar Script",
      price: 497,
    },
    {
      id: 2,
      name: "Full Access To The Perfect Webinar Training",
      price: 297,
    },
    {
      id: 3,
      name: "Instant Access To The Funnel Frameworks Training",
      price: 197,
    },
    {
      id: 4,
      name: "Discover My #1 Closing Technique: The Stack",
      price: 197,
    },
    {
      id: 5,
      name: "The Webinar Funnel (Training AND &apos;Share Funnels&apos;)",
      price: 297,
    },
  ];

  // Calculate total price
  const totalPrice = pricingOptions.reduce(
    (sum, option) => sum + option.price,
    0
  );
  const discountPrice = 7;

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      avatar: "/images/person.avif",
      comment: "Increased my sales by 327% in just 30 days!",
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Marketing Consultant",
      avatar: "/images/person.avif",
      comment:
        "The best funnel system I&apos;ve ever used. Simple and effective.",
    },
  ];

  // Static star array to avoid hydration errors
  const fiveStars = [0, 1, 2, 3, 4];

  return (
    <Box
      sx={{
        bgcolor: colors.bg.main,
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <EmojiEventsIcon
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.0rem", md: "3.5rem" },
                color: colors.rating,
              }}
            />
            Congratulations!
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
            Access the Proven Webinar Framework Behind Hundreds of &apos;Two
            Comma Club&apos; Wins!
          </Typography>

          {/* Countdown Timer Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {/* Countdown Timer */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                border: `1px solid ${colors.border}`,
                overflow: "hidden",
                mx: { xs: "auto", md: 0 }, // Center on mobile, align right on desktop
              }}
            >
              <Box
                sx={{
                  bgcolor: colors.secondary,
                  color: "white",
                  px: 2,
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                  }}
                >
                  Download Resources after
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2.5,
                  py: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    mr: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: colors.bg.main,
                      borderRadius: "4px",
                      px: 1.5,
                      py: 0.5,
                      minWidth: "36px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: colors.secondary,
                        lineHeight: 1,
                        fontSize: "1.5rem",
                      }}
                    >
                      {formatTime(timeLeft.minutes)}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.text.light,
                      mt: 0.5,
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Min
                  </Typography>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: colors.secondary,
                    mx: 0.5,
                  }}
                >
                  :
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    ml: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: colors.bg.main,
                      borderRadius: "4px",
                      px: 1.5,
                      py: 0.5,
                      minWidth: "36px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: colors.secondary,
                        lineHeight: 1,
                        fontSize: "1.5rem",
                      }}
                    >
                      {formatTime(timeLeft.seconds)}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.text.light,
                      mt: 0.5,
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Sec
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Video Section */}
        <Box
          sx={{
            mt: -16,
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
            {/* Video Header */}
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
                Watch How Our Expert Funnel System Works
              </Typography>
            </Box>

            {/* Video Player */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingBottom: "56.25%", // 16:9 aspect ratio
                bgcolor: "black",
              }}
            >
              <video
                ref={videoRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                controls
                playsInline
                muted
              />
            </Box>
          </Paper>
        </Box>

        {/* Secondary Header */}
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
            Trusted By Thousands Of Business Owners
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
            Join over 10,000+ entrepreneurs who have transformed their
            businesses with our proven webinar system
          </Typography>
        </Box>

        {/* Testimonials Row */}
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
            What Our Customers Are Saying
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            flexWrap="wrap"
            justifyContent="center"
          >
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.id}
                sx={{ width: { xs: "100%", md: "45%" }, mb: 4 }}
              >
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    transition: "transform 0.3s ease",
                    border: `1px solid ${colors.border}`,
                    overflow: "visible",
                    position: "relative",
                    backgroundColor: colors.bg.card,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <CardContent sx={{ px: 4, py: 4 }}>
                    <Box sx={{ position: "relative", mb: 4 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 80,
                          height: 80,
                          position: "absolute",
                          top: -40,
                          left: 0,
                          border: "4px solid white",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                      />
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {fiveStars.map((i) => (
                          <StarIcon
                            key={i}
                            sx={{
                              color: colors.rating,
                              fontSize: "1.2rem",
                              mr: 0.3,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: colors.text.medium,
                        fontSize: "1.05rem",
                        fontStyle: "italic",
                        mb: 3,
                      }}
                    >
                      &quot;{testimonial.comment}&quot;
                    </Typography>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: colors.primary,
                          mb: 0.5,
                          fontSize: "1.1rem",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.text.light}
                        sx={{ fontWeight: 500 }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Funnels Image Section */}
        <Box sx={{ mb: 10, mx: { xs: 4, md: 9 }, textAlign: "center" }}>
          <Paper
            elevation={4}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              //   maxWidth: "900px",
              mx: "auto",
              boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
            }}
          >
            {/* Hero Image Section */}
            <Box sx={{ position: "relative", width: "100%" }}>
              <Image
                src="/images/funnels.avif"
                alt="Russell Brunson with Perfect Webinar"
                width={1000}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </Box>

            {/* Header Section */}
            <Box sx={{ p: 4, bgcolor: colors.bg.main }}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontWeight: 900,
                  color: colors.text.dark,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                <Box component="span" sx={{ color: colors.secondary }}>
                  YES RUSSELL!
                </Box>{" "}
                Give Me Instant Access To The Perfect
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontWeight: 900,
                  color: colors.text.dark,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  lineHeight: 1.2,
                  mb: 5,
                }}
              >
                Webinar Scripts And Training RIGHT NOW For Just ${discountPrice}
                .00 !
              </Typography>

              {/* Pricing Options */}
              <Box sx={{ maxWidth: "850px", mx: "auto", textAlign: "left" }}>
                {pricingOptions.map((option) => (
                  <Box
                    key={option.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                      borderBottom:
                        option.id !== pricingOptions.length
                          ? `1px solid ${colors.border}`
                          : "none",
                      pb: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          color: colors.primary,
                          mr: 2,
                          minWidth: "20px",
                          fontSize: "1.2rem",
                        }}
                      >
                        ❯
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: colors.text.dark,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {option.name}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        color: colors.secondary,
                        whiteSpace: { xs: "nowrap" },
                        ml: 2,
                      }}
                    >
                      (Value ${option.price})
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Total Value */}
              <Box
                sx={{
                  borderTop: `1px solid ${colors.border}`,
                  borderBottom: `1px solid ${colors.border}`,
                  py: 4,
                  my: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: colors.text.dark,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                  }}
                >
                  Total Value: ${totalPrice}
                </Typography>
              </Box>

              {/* Today Just $7 */}
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    color: colors.primary,
                    mb: 4,
                    fontSize: { xs: "4rem", sm: "5rem", md: "7rem" },
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Today Just ${discountPrice}
                </Typography>
              </Box>

              {/* CTA Button */}
              <Box
                sx={{
                  bgcolor: colors.secondary,
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary}, #d02d53)`,
                  p: 3,
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
                  mt: 3,
                }}
                onClick={() => window.open("https://khilx.academy/", "_blank")}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: { xs: "1.3rem", sm: "1.6rem" },
                  }}
                >
                  YES! I Want Instant Access To &apos;Perfect Webinar
                  Secrets&apos;
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
                  Give Me Instant Access To Perfect Webinar Secrets For Just $
                  {discountPrice} Right Now!
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ClientConfirmationContent;
