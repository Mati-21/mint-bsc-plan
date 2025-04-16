import React, { useState } from "react";

import exampleImage from "../assets/download.jpg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function fetchUserData() {
  return fetch("http://localhost:8000/users").then((res) => res.json());
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const {
    data: usersData,
    isLoading,
    isError,
    error: fetchError,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchUserData,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usersData) return;

    const user = usersData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      switch (user.type) {
        case "admin":
          navigate("/admin");
          break;
        case "editor":
          navigate("/editor");
          break;
        case "workunit":
          navigate("/workunit");
          break;
        case "minister":
          navigate("/minister");
          break;
        case "executive":
          navigate("/executive");
          break;
        default:
          navigate("/");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500 mt-10">
        Error: {fetchError.message}
      </div>
    );

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/bg.jpg')` }}
    >
      <div className="w-full max-w-md rounded-xl bg-gradient-to-b from-purple-100/80 to-white p-8 shadow-sm backdrop-blur-md">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex h-15 w-15 items-center justify-center rounded-full bg-purple-50 overflow-hidden">
            <img src={exampleImage} alt="logo" />
          </div>

          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500">
              Please enter your details to sign in
            </p>
          </div>

          <div className="flex w-full items-center gap-2">
            <div className="h-px flex-1 bg-gray-800"></div>
            <span className="text-xs text-gray-800">or</span>
            <div className="h-px flex-1 bg-gray-800"></div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border px-3 py-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember for 30 days
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
