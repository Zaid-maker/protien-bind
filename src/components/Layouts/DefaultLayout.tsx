import React from "react";
import Sidebar from "../Sidebar";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 dark:bg-[#121212] md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
