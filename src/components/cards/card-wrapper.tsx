import { ReactNode } from "react";
import { useTheme } from "next-themes";

interface CardWrapperProps {
  children: ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <style jsx>{`
        @keyframes subtle-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes subtle-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
          }
        }

        .group {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .group:hover {
          animation: subtle-float 3s ease-in-out infinite, subtle-glow 3s ease-in-out infinite;
        }

        .content-wrapper {
          transition: opacity 0.3s ease;
        }

        .group:hover .content-wrapper {
          opacity: 0.9;
        }
      `}</style>

      <div className="group w-full h-full relative overflow-hidden rounded-3xl p-px dark:bg-white/10 bg-white/60 dark:border-black border-black border-4">
        {resolvedTheme === "dark" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <div className="absolute inset-px rounded-3xl bg-zinc-950/80 transition-colors duration-300 group-hover:bg-zinc-900/70 border-black border-4" />
          </>
        )}
        {resolvedTheme === "light" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white" />
            <div className="absolute inset-px rounded-3xl bg-white/20 transition-colors duration-300 group-hover:bg-white/50 border-black border-4" />
          </>
        )}

        <div className="relative h-full content-wrapper">
          {children}
        </div>
      </div>
    </>
  );
}

