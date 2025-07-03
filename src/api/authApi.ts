// src/api/authApi.ts
export async function loginApi(email: string, password: string) {
  // Replace with real API
  return fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (!res.ok) throw new Error("Invalid credentials");
    return res.json();
  });
}
