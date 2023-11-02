import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

interface Props {
  pathname: string;
  svg: any;
  label: string;
}

const SidebarMobileButton = ({pathname, svg, label}:Props) => {
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const currentPath = usePathname()
  return (
    <button
      ref={ref}
      onClick={() => {
        router.push("/");
      }}
      className={`flex ${
        currentPath === pathname ? "bg-[#333638]" : null
      } hover:bg-[#5f6467] transition-all duration-300 hover:bg-opacity-70  items-center gap-2 py-3 w-56 px-8 rounded-full`}
    >
      {svg}
      <p>{label}</p>
    </button>
  );
};

export default SidebarMobileButton;
