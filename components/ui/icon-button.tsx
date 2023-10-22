import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonPropps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonPropps> = ({ onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md hover:scale-110 transition p-2",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
