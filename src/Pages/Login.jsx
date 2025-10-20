import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("❌ Email yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a1a] relative overflow-hidden">
      {/* subtle blur overlay */}
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
          className="text-3xl font-semibold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Welcome Back 👋
        </motion.h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition-all"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition-all"
          />

          {error && (
            <p className="text-red-400 text-center text-sm animate-pulse">
              {error}
            </p>
          )}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(56,189,248,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 py-3 rounded-xl font-semibold text-white shadow-lg hover:opacity-90 transition-all"
          >
            Sign In
          </motion.button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
