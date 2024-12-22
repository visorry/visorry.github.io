"use client";
import Grid from "@/components/grid";
import { CustomCursor } from "@/components/custom-cursor";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import GradientFlow from "@/components/ui/gradient-flow";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <CustomCursor />

      <div className="absolute inset-0 -z-10">
      <GradientFlow
          duration={20}
          colors={[
            "#FFB6C1", // Light Pink
            "#FFD700", // Light Gold
            "#ADD8E6", // Light Blue
            "#98FB98", // Pale Green
            "#FF77FF", // Light Violet
            "#F0E68C", // Khaki
            "#FFB347", // Light Orange
            "#E6E6FA", // Lavender
            "#FAD02E", // Soft Yellow
            "#B0E0E6", // Powder Blue
            "#32CD32", // Lime Green
            "#66CDAA", // Medium Aquamarine
            "#A9DFBF", // Light Green
            "#228B22", // Forest Green
            "#8FBC8F", // Dark Sea Green
            "#C1E1C1", // Very Pale Green
            "#D3F9D8", // Honeydew Green
            "#F0FFF0", // Honeydew
            "#E0FFFF", // Light Cyan
            "#90EE90", // Light Green
            "#B5EAAA", // Mint Green
            "#C5E8D3", // Soft Green
          ]}
          fullWidth={true}
          radialOverlay={true}
          blurAmount="10px"
        >
          <div />
        </GradientFlow>
      </div>


      <motion.div
        className="relative max-w-[100vw] overflow-hidden pt-16"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Grid />
      </motion.div>

      <motion.div
        className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
        style={{ opacity }}
      />
    </motion.div>
  );
}
