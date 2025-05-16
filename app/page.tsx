"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "./components/LoadingSpinner";

// Client-only wrapper component
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }

  // Using dynamic import to force client-side rendering
  const ClientHomePage = dynamic(() => import("./components/ClientHomePage"), {
    ssr: false,
    loading: () => <LoadingSpinner />,
  });

  return <ClientHomePage />;
}
