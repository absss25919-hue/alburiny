import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Reset visibility on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    // Native smooth only (Lenis already handles desktop)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
                 bg-gradient-to-br from-orange-400 to-orange-600
                 shadow-lg hover:scale-110 transition-transform"
      aria-label="Scroll to top"
    >
      <span className="text-white text-2xl font-bold">↑</span>
    </button>
  );
}
