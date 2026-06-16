import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full text-center px-6 py-14"
      style={{
        background: "linear-gradient(135deg, #1a0a00 0%, #330a00 100%)",
        borderTop: "4px solid #ff6b00",
        color: "#ddd",
      }}
    >
      <p className="text-sm md:text-base mb-2">
        © 2026 AL BURINY SECURITY SYSTEM AND SAFETY. All Rights Reserved.
      </p>

      <p className="text-xs md:text-sm tracking-wide text-slate-300">
        Fire Alarms | Fire Fighting Equipment | Emergency Lighting Systems
      </p>
    </motion.footer>
  );
}
