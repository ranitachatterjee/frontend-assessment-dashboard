import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { LogIn, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  const [showPassword, setShowPassword] = useState(false);

  // ✅ Load saved user (persist across refresh)
  const [formData, setFormData] = useState(() => {
    return {
      username: localStorage.getItem("userName") || "",
      password: localStorage.getItem("userPassword") || "",
    };
  });

  //  Auto redirect if already logged in (persist login)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      const from = (location.state as any)?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [navigate, location]);

  // ✅ Handle Login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Please enter username and password");
      return;
    }

    // ✅ Persist user data
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", formData.username);
    localStorage.setItem("userPassword", formData.password);

  setFormData({
  username: "",
  password: "",
});
    toast.success("Login successful!");

    const from = (location.state as any)?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="w-full min-w-0">
      <div className="w-full p-2 sm:p-4">
        <div
          className={`w-full rounded-2xl shadow-2xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            
            {/* USERNAME */}
            <div className="flex flex-col gap-1 mb-4">
              <label
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Username
              </label>

              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                placeholder="Enter username"
                className={`w-full px-3 py-2 rounded-lg border bg-transparent
                  ${
                    darkMode
                      ? "text-white border-white placeholder-gray-400"
                      : "text-gray-900 border-gray-900 placeholder-gray-400"
                  }`}
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-1 mb-6">
              <label
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter password"
                  className={`w-full px-3 py-2 rounded-lg border bg-transparent pr-10
                    ${
                      darkMode
                        ? "text-white border-white placeholder-gray-400"
                        : "text-gray-900 border-gray-900 placeholder-gray-400"
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2 mb-4"
            >
              <LogIn size={18} />
              Login
            </button>

            {/* OPTIONAL INFO */}
            {/* <div
              className={`text-center text-sm p-3 rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <p>
                Stored Username:{" "}
                <span className="font-semibold">
                  {localStorage.getItem("userName") || "—"}
                </span>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}