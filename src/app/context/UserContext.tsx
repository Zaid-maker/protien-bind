import React, { createContext, ReactNode, useState } from "react";
import { useSession } from "next-auth/react";

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    photo: "/images/user/user-01.png",
    jobTitle: "Drug Researcher",
    userBio: "",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
