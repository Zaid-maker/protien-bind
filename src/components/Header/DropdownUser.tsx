import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //   const user = useUser();
  const user = ''
  const router = useRouter();

  return (
    <Link
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="flex items-center gap-4"
      href="#"
    >
      <span className="hidden text-right lg:block">
        <span className="block text-sm font-medium text-black dark:text-white">
          firstName
        </span>
      </span>

      <span className="h-11 w-11 rounded-full">
        <Image
          width={80}
          height={80}
          src={user}
          className="rounded-full"
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="User"
        />
      </span>

      <ChevronDown />
    </Link>
  );
};

export default DropdownUser;
