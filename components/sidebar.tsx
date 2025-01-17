"use client";
import React, { useState } from "react";
import { GoGraph } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbPhoto } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import logo from "../app/assets/images/newpalladium.svg";
import zeally from "../app/assets/images/zeally.svg";
import tweet from "../app/assets/images/tweet.svg";
import discord from "../app/assets/images/discord.svg";
import medium from "../app/assets/images/medium.svg";
import side1 from "../app/assets/images/side1.svg";
import side2 from "../app/assets/images/side2.svg";
import side3 from "../app/assets/images/side3.svg";
import side4 from "../app/assets/images/side4.svg";

interface TabsDemoProps {
  className?: string;
}

export const TabsDemo: React.FC<TabsDemoProps> = ({ className, ...props }) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const isMenuSelected = (menu: string) => {
    return selectedMenu === menu;
  };

  interface MenuItem {
    id: string;
    icon: React.ElementType;
    title: string;
    link: string;
  }

  const menuItems: MenuItem[] = [
    { id: "Dashboard", icon: LayoutGrid, title: "Dashboard", link: "" },
    {
      id: "Portfolio",
      icon: MdOutlineInventory2,
      title: "Portfolio",
      link: "Portfolio",
    },
    { id: "Borrow", icon: RiBillLine, title: "Borrow PUSD", link: "Borrow" },
    { id: "Stake-pusd", icon: BiDollar, title: "Stake PUSD", link: "Stake" },
    { id: "Redeem", icon: RiBillLine, title: "Redeem PUSD", link: "Redeem" },
  ];

  return (
    <div
      className={`sidebar  w-72 grid h-full grid-rows-[max-content_fr_max-content] 2c2819 text-white ${className}`}
      style={{ backgroundColor: "#2c2819" }}
    >
      <div className="flex items-center gap-x-1 justify-center">
        <Link href="/">
          <Image src={logo} alt="Logo" className="mr-10 w-56" />
        </Link>
      </div>
      <nav className="flex flex-col gap-y-2 px-4">
        {menuItems.map((menuItem) => (
          <Link legacyBehavior key={menuItem.id} href={menuItem.link}>
            <a
              className={`cursor-pointer text-xl menu flex min-w-[200px] items-center gap-x-3 rounded-lg p-2 ${
                isMenuSelected(menuItem.id)
                  ? "bg-yellow-400 text-black"
                  : "text-gray-500"
              }`}
              onClick={() => handleMenuClick(menuItem.id)}
            >
              <div
                className={`cursor-pointer menu flex items-center gap-x-3 rounded-full p-2 ${
                  isMenuSelected(menuItem.id) ? "text-black" : " text-white"
                }`}
              >
                {React.createElement(menuItem.icon, { size: 22 })}
              </div>
              <span className="font-medium">{menuItem.title}</span>
            </a>
          </Link>
        ))}
      </nav>
      <div className="ml-4 -mb-16">
        <Image src={zeally} alt="zeally" className="w-[247px] h-[210px]" />
      </div>
      <div className="flex items-center justify-center text-white gap-x-7 text-[19px] -mt-10">
        <Image src={tweet} alt="twitter" />
        <Image src={discord} alt="twitter" />
        <Image src={medium} alt="twitter" />
      </div>
    </div>
  );
};
