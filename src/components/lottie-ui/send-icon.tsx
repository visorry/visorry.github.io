"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Eye, EyeClosed } from "lucide-react";

const SendIcon = () => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === "light";
  const [hovered, setHovered] = useState(false);

  const iconStyles = "h-10 w-10 transition-opacity duration-300";

  return (
    <a
      href="/vishnu-resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="relative z-10"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`opacity-50 hover:opacity-100 ${iconStyles}`}
      >
        {isLightMode ? (
          hovered ? (
            <Eye className="text-blue-500" />
          ) : (
            <EyeClosed className="text-black" />
          )
        ) : hovered ? (
          <Eye className="text-blue-500" />
        ) : (
          <EyeClosed className="text-white" />
        )}
      </div>
    </a>
  );
};

export default SendIcon;
