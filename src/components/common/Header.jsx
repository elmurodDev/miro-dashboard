"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import {TbEye, TbUserCircle} from "react-icons/tb";
import NavbarLink from "@/components/common/NavbarLink";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Header = () => {
  return (
    <nav className={"flex justify-between items-center px-6 border-b border-secondary bg-background"}>
      <div className={"flex items-center gap-1"}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">My Workspace</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>My New Form</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className={"actions flex items-center gap-2 "}>
        <NavbarLink link={"/create"} name={"Create"} />
        <NavbarLink link={"/"} name={"Connect"} />
        <NavbarLink link={"share"} name={"Share"} />
        <NavbarLink link={"/result"} name={"Results"} />
      </div>
      <div className={"flex gap-2.5 items-center py-3"}>
        <Button variant={"outline"} size={"icon"}>
          <TbEye className={"icon-sm"}/>
        </Button>

        <Button>
          Publish
        </Button>

        <Button variant={"secondary"} className={"rounded-full px-3"}>
          <TbUserCircle className={"icon"}/>
        </Button>
      </div>
    </nav>
  );
};

export default Header;