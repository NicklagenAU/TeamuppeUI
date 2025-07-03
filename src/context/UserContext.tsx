import { createContext, useState, useContext, type ReactNode } from "react";

export type User = {
  name: string;
  role: "teacher" | "student" | "parent" | "admin" | null;
  email: string;
} | null;

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
