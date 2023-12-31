"use client";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0  bg-gradient-to-l from-[#FFD369] to-[#222831] text-[#EEEEEE] w-screen shadow-md flex items-center justify-between px-5 py-2 z-50 md:py-2 lg:px-10">
      <Logo />
      <Navigation />
      <Menu />
    </header>
  );
}
