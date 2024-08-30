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
  return <div>Sidebar</div>;
};

export default Sidebar;
