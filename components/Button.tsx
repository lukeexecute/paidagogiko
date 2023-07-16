import { MouseEventHandler } from "react";
import Image from "next/image";

type Props = {
  title: string;
  leftIcon?: string | null;
  rigthIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit" | "reset";
  occasion?: string | null;
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  leftIcon,
  rigthIcon,
  handleClick,
  isSubmitting,
  type,
  occasion,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      onClick={handleClick}
      className={`flex items-center justify-center px-3 py-2
      ${bgColor ? bgColor : ""}
      ${textColor ? textColor : ""}
      ${
        !bgColor && !textColor && occasion === "primary"
          ? "bg-zoho-blue text-white"
          : !bgColor && !textColor && occasion === "secondary"
          ? "bg-gray-300 text-black"
          : !bgColor && !textColor && occasion === "danger"
          ? "bg-red-500 text-white"
          : occasion === "warning"
          ? "bg-yellow-500 text-white"
          : !bgColor && !textColor && occasion === "success"
          ? "bg-green-500 text-white"
          : ""
      }
       rounded-md text-sm`}
    >
      {leftIcon && (
        <Image
          src={leftIcon}
          width={14}
          height={14}
          alt="leftIcon"
          className="mr-2"
        />
      )}
      {title}
      {rigthIcon && (
        <Image
          src={rigthIcon}
          width={14}
          height={14}
          alt="rightIcon"
          className="mr-2"
        />
      )}
    </button>
  );
};

export default Button;
