import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Firebase'da yangi foydalanuvchini yaratish
      await createUserWithEmailAndPassword(auth, email, password);

      // Foydalanuvchini ma'lumotlarini localStorage'ga saqlash
      const userData = { name, url, email };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Ro‘yxatdan o‘tganidan so‘ng Home sahifasiga yo‘naltirish
      navigate("/", { state: userData });
    } catch (err) {
      setError("❌ Email allaqachon mavjud yoki parol kuchsiz!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1c1c1c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-8 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-semibold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
        >
          Create Account ✨
        </motion.h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400/60 transition-all"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="url"
            placeholder="Profile Photo URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400/60 transition-all"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400/60 transition-all"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400/60 transition-all"
          />

          {error && (
            <p className="text-red-400 text-center text-sm animate-pulse">
              {error}
            </p>
          )}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(236,72,153,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 py-3 rounded-xl font-semibold text-white shadow-lg hover:opacity-90 transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
