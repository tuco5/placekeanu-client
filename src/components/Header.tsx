"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { OctoCatIcon } from "./Icons/OctoCatIcon";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

/* TODO: add link to readme for server docs */
const MENU = [
  { id: 1, label: "API Docs", href: "https://placekeanu.com/" },
  {
    id: 2,
    label: "Server Docs",
    href: "https://github.com/tuco5/placekeanu-gql-server",
  },
  {
    id: 3,
    label: "Client Docs",
    href: "https://github.com/tuco5/placekeanu-client",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu>
        {MENU.map(({ id, label, href }) => (
          <NavbarMenuItem key={id}>
            <Link className="w-full" href={href}>
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarBrand>
        <Link
          href="https://github.com/tuco5"
          className="flex gap-4 items-center"
        >
          <OctoCatIcon />
          <p className="font-light text-inherit">tuco5</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MENU.map(({ id, label, href }) => (
          <NavbarItem
            key={id}
            className="px-3 py-1 hover:bg-black hover:text-white transition-all"
          >
            <Link href={href}>{label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
