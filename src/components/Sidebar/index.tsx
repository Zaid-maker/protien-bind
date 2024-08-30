"use client";

import React from "react";
import {
  LayoutGrid,
  Atom,
  Network,
  Microscope,
  Settings,
  MessageSquareText,
  ChevronLeft,
} from "lucide-react";
import SidebarDropdown from "./SidebarDropdown";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "",
    menuItems: [
      {
        icon: <LayoutGrid size={25} />,
        label: "Dashboard",
        route: "/",
      },
      {
        icon: <Atom size={25} />,
        label: "Molecules Bank",
        route: "/molecule-bank",
      },
      {
        icon: <Network size={25} />,
        label: "Model",
        route: "/model",
      },
      {
        icon: <Microscope size={25} />,
        label: "Research",
        route: "/research",
      },
      {
        icon: <MessageSquareText size={25} />,
        label: "Messages",
        route: "/message",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <Settings size={25} />,
        label: "Settings",
        route: "/settings",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-[#000000] lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="ml-2 rounded-lg bg-[#3c4fe0] p-1">
              <Image
                width={32}
                height={32}
                src={"/images/logo/dna.svg"}
                alt="Logo"
                priority
              />
            </div>
            <p className="text-xl font-semibold text-white">ProteinBind</p>
          </div>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          className="block lg:hidden"
        >
          <ChevronLeft />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
