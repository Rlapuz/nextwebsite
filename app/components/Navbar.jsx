"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./dark and light/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-100 flex justify-between items-center">
      <Link href="/">
        <Image src="/MyRayLogo.png" alt="My logo" width={180} height={100} />
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => {
          const isActive = pathname === link.url;

          return (
            <Link
              href={link.url}
              key={link.id}
              className={`font-bold ${
                isActive ? "text-green-500" : "text-gray-500"
              }`}>
              {link.title}
            </Link>
          );
        })}
        {/* <button className="px-5 py-1 border-none bg-green-500 text-white cursor-pointer rounded-md">
          Logout
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
