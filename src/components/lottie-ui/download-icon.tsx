"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Download,MoveDown } from "lucide-react";

const DownloadIcon = () => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === "light";
  const [hovered, setHovered] = useState(false);

  const iconStyles = "h-10 w-10 transition-opacity duration-300";

  return (
    <a
      href="/vishnu-resume.pdf"
      download
      className="relative z-10"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`opacity-50 hover:opacity-100 ${iconStyles}`}
      >
        {isLightMode ? (
          hovered ? (
            <MoveDown className="text-blue-500" />
          ) : (
            <Download className="text-gray-700" />
          )
        ) : (
          hovered ? (
            <MoveDown className="text-blue-500" />
          ) : (
            <Download className="text-gray-300" />
          )
        )}
      </div>
    </a>
  );
};

export default DownloadIcon;
