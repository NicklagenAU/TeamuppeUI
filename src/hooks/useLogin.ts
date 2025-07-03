import { useState } from "react";
import type { User } from "../context/UserContext";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(email: string, password: string): Promise<User> {
    setIsLoading(true);
    setError(null);
    await new Promise((res) => setTimeout(res, 700)); // simulate network delay

    // Mocked credentials check
    if (email === "coach" && password === "pw") {
      setIsLoading(false);
      return {
        role: "teacher",
        name: "Coach Luebbe",
        email: "coach@teamuppe.com",
      };
    } else if (email === "student" && password === "pw") {
      setIsLoading(false);
      return { role: "student", name: "Robert", email: "student@teamuppe.com" };
    } else if (email === "parent" && password === "pw") {
      setIsLoading(false);
      return { role: "parent", name: "Sydney", email: "parent@teamuppe.com" };
    } else if (email === "admin" && password === "pw") {
      setIsLoading(false);
      return { role: "admin", name: "admin", email: "admin@teamuppe.com" };
    } else {
      setIsLoading(false);
      setError("Invalid email or password");
      throw new Error("Invalid email or password");
    }
  }

  return { login, isLoading, error };
}
