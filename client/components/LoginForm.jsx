"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://portfolio-3oyr.onrender.com/auth/login", {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      onLogin?.();  
      onClose?.();
      router.push("/admin");
    } catch (err) {
      setError("Invalid login");
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-50 bg-black p-6 rounded-lg border border-[rgb(246,119,138)] text-white w-80 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-[rgb(246,119,138)]">Admin Login</h3>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[rgb(246,119,138)] text-black py-2 rounded hover:bg-[rgba(246,119,138,0.557)] transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-sm text-gray-400 mt-2 hover:underline"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
