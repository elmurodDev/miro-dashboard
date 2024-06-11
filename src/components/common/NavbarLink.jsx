"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavbarLink = ({link, name}) => {
  const pathname = usePathname()
  return (
    <Link
      href={link}
      className={`py-[18px] text-neutral-500 px-2 transition-all duration-75 ${pathname === link && "shadow-sm border-b-4 border-primary"}`}
    >
      {name}
    </Link>
  );
};

export default NavbarLink;