import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: any, index: number) => (
          <li key={item}>
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
