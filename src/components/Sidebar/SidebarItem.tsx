import Link from "next/link";
import React from "react";
import SidebarDropdown from "./SidebarDropdown";
import { usePathname } from "next/navigation";

export const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }

    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          className={`${isItemActive ? "rounded-md bg-graydark dark:bg-[#1e1e1e]" : ""} group relative flex items-center gap-2.5 rounded-md px-4 py-2  text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-[#1e1e1e]`}
        >
          {item.icon}
          {item.label}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};
