"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const currentPath = usePathname();
  return (
    <div className="flex">
      <Link
        className={currentPath === "/" ? "active-link" : "pending-lisk"}
        href={"/"}
        replace
      >
        Home
      </Link>
      <br />
      <Link
        className={currentPath === "/about" ? "active-link" : "pending-lisk"}
        href={{
          pathname: "/about",
          query: { name: "This is Next JS project" },
        }}
        replace
      >
        About
      </Link>
      <br />
      <Link
        className={currentPath === "/product" ? "active-link" : "pending-lisk"}
        href={{
          pathname: "/product",
          query: { name: "book", price: "200 Taka" },
        }}
        replace
      >
        Product
      </Link>
      <br />
      <Link
        prefetch={false}
        className={currentPath === "/profile" ? "active-link" : "pending-lisk"}
        href={"/profile"}
        replace
      >
        Profile
      </Link>
      <br />
    </div>
  );
};

export default Menu;
