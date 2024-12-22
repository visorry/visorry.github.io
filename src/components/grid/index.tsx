"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import {
  WidthProvider,
  ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next";
import { heights, layouts } from "@/data";
import ThemeToggle from "../theme-toggle";
import BlurFade from "../magic-ui/blur-fade";
import {
  TextMarqueeCard,
  MyTechCard,
  JobsCard,
  AboutCard,
  ResumeCard,
  IconCard,
  ViscapeCard,
  BayleafCard,
  QuezzoCard,
} from "@/components/cards";
import styles from "./grid.module.scss";
import { ExternalLink, GithubIcon } from "lucide-react";
import ResponsiveGridBackground from "../bg-card";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
  const [height, setHeight] = useState(280);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
     <div
  className={cn(
    "absolute inset-0 bg-gray-200 dark:bg-gray-900 rounded-lg z-0",
    "bg-opacity-50 dark:bg-opacity-70", // Add slight transparency
    styles.backgroundCard,
    "m-[-2rem]" // Custom margin of 50rem (example)
  )}
  style={{
    border: "6px solid black", // Outer thick black border
    borderRadius: "16px", // Ensure the border-radius applies to both borders
  }}
/>

      <ResponsiveGridLayout
        useCSSTransforms
        className={styles.layout}
        layouts={layouts.all}
        breakpoints={{
          lg: 1199,
          md: 799,
          sm: 374,
        }}
        cols={{
          lg: 12,
          md: 10,
          sm: 4,
        }}
        isDraggable={true} // Enable dragging
        isResizable={true} // Optional: Enable resizing
        rowHeight={height}
        onBreakpointChange={(breakpoint: any) => {
          setHeight(heights[breakpoint]);
        }}
        margin={[16, 16]}
      >
        <div
          key="bio"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
            height: "100%",
          }}
        >
          <BlurFade delay={0.01}>
            <AboutCard />
          </BlurFade>
        </div>
        <div
          key="theme-toggle"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
            <BlurFade delay={0.1}>
              <ResumeCard />
            </BlurFade>
            <BlurFade delay={0.12}>
              <ThemeToggle />
            </BlurFade>
          </div>
        </div>
        <div
          key="email"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <div className="flex sm:flex-row flex-col gap-3 h-full w-full">
            <BlurFade delay={0.1} className="flex-1">
              <IconCard title="Email" link="mailto:vishnuvisa00@gmail.com" />
            </BlurFade>
            <BlurFade delay={0.12} className="flex-1">
              <IconCard title="Phone" link="tel:+916238851130" />
            </BlurFade>
          </div>
        </div>

        <div
          key="text-marquee"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.04}>
            <TextMarqueeCard />
          </BlurFade>
        </div>
        <div
          key="linkedin"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.24}>
            <IconCard
              title="Linkedin"
              link="https://www.linkedin.com/in/vishnuvisa/"
            />
          </BlurFade>
        </div>
        <div
          key="github"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.26}>
            <IconCard title="Github" link="https://github.com/visorry" />
          </BlurFade>
        </div>
        <div
          key="my-stack"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms",
          }}
        >
          <BlurFade delay={0.35}>
            <MyTechCard />
          </BlurFade>
        </div>
        <div
          key="jobs"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.4}>
            <JobsCard />
          </BlurFade>
        </div>

        <div
          key="project-2"
          className={cn(
            styles.itemGrab,
            styles.item,
            "relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300"
          )}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.5}>
            <QuezzoCard />
          </BlurFade>

          {/* GitHub and Deployed Link Icons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out">
            <a
              href="https://github.com/visorry/Quezzo"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-3 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition-colors duration-200 ease-in-out transform hover:scale-110"
            >
              <GithubIcon size={28} />
            </a>
            <a
              href="https://quezzo-dwen.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-3 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition-colors duration-200 ease-in-out transform hover:scale-110"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </div>

        <div
          key="project-1"
          className={cn(
            styles.itemGrab,
            styles.item,
            "relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300"
          )}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.55}>
            <ViscapeCard />
          </BlurFade>

          {/* GitHub and Deployed Link Icons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out">
            <a
              href="https://viscape.ai" // Replace with actual deployed link for Viscape
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-3 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition-colors duration-200 ease-in-out transform hover:scale-110"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </div>

        <div
          key="project-3"
          className={cn(
            styles.itemGrab,
            styles.item,
            "relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300"
          )}
          style={{
            transitionDuration: isMounted ? "700ms" : "0ms",
          }}
        >
          <BlurFade delay={0.6}>
            <BayleafCard />
          </BlurFade>

          {/* GitHub and Deployed Link Icons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out">
            <a
              href="https://bayleaf.nf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-3 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition-colors duration-200 ease-in-out transform hover:scale-110"
            >
              <GithubIcon size={28} />
            </a>
            <a
              href="https://github.com/visorry/bayleaf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-3 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition-colors duration-200 ease-in-out transform hover:scale-110"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Grid;
