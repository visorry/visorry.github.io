import Image from "next/image";
import { useTheme } from "next-themes";
import { PhoneIcon } from "lucide-react"; // Import the Phone icon from Lucide React
import CardWrapper from "./card-wrapper";

type Icon = {
  src?: string;
  classNames?: string;
  icon?: JSX.Element;
};

const IconCard = ({ title, link }: { title: string; link: string }) => {
  const { resolvedTheme } = useTheme();

  // Define icons with specific types
  const icons: Record<string, Icon> = {
    Linkedin: {
      src:
        resolvedTheme === "dark"
          ? "/social-icons/linkedin.svg"
          : "/social-icons/linkedin-dark.svg",
      classNames: "aspect-square",
    },
    Github: {
      src:
        resolvedTheme === "dark"
          ? "/social-icons/github.svg"
          : "/social-icons/github-dark.svg",
      classNames: "aspect-[49/48]",
    },
    Phone: {
      icon: <PhoneIcon size={52} />, // Use Lucide React's Phone icon here
    },
    Email: {
      src:
        resolvedTheme === "dark"
          ? "/social-icons/email.svg"
          : "/social-icons/email-dark.svg",
      classNames: "aspect-[25/24]",
    },
  };

  const icon = icons[title as keyof typeof icons];

  return (
    <CardWrapper>
      <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
        <a
          className="w-[55%] h-[55%] flex items-center justify-center rounded-3xl"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`relative h-full w-auto ${icon?.classNames || ""}`}>
            {icon?.icon ? (
              icon.icon // Render the Phone icon from Lucide React
            ) : (
              <Image
                src={icon?.src!} // `!` is used here to assert that `src` is present for image-based icons
                alt={title}
                fill
              />
            )}
          </div>
        </a>
      </div>
    </CardWrapper>
  );
};

export default IconCard;
