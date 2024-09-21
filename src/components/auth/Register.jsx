import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/images/no-notes.png"; // Gambar sama dengan yang ada di halaman Login

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (/\d/.test(name)) {
      newErrors.name = "Nama tidak boleh mengandung angka.";
    }
    if (!email.includes("@")) {
      newErrors.email = "Email harus mengandung '@'.";
    }
    if (password.length < 8) {
      newErrors.password = "Password harus minimal 8 karakter.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password dan konfirmasi password tidak cocok.";
    }
    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setErrors({ email: "Email sudah terdaftar." });
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-10 bg-gray-100 dark:bg-gray-950">
      {/* Card Register */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100 p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col lg:flex-row mt-6">
        {/* Gambar di kiri */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img src={Image} alt="Gambar Kiri" className="w-full h-full object-cover rounded-l-lg" />
        </div>

        {/* Form Register */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-500 sm:text-sm dark:text-gray-300 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-500 sm:text-sm dark:text-gray-300 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-500 sm:text-sm dark:text-gray-300 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-500 sm:text-sm dark:text-gray-300 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center bg-violet-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors"
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 text-center">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-violet-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
