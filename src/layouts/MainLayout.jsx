import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#141414] text-gray-100 relative overflow-hidden">
      {/* noise texture background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none"></div>

      {/* ==== HEADER ==== */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
            🎬 Movie App
          </h1>

          <ul className="flex items-center gap-8 text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "Profile", path: "/profile" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative transition-all duration-300 hover:text-cyan-400 ${
                      isActive
                        ? "text-cyan-400 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-cyan-400 after:rounded-full"
                        : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* ==== MAIN CONTENT ==== */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow container mx-auto p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl mt-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <Outlet />
      </motion.main>

      {/* ==== FOOTER ==== */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white/5 backdrop-blur-xl border-t border-white/10 mt-10 py-4 text-center text-gray-400 text-sm"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Movie App</span> — All
          rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}

export default MainLayout;
