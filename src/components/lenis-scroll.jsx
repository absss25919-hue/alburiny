import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let lenisInstance = null;

export default function LenisScroll() {
  const location = useLocation();

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window);

    
    if (isMobile) {
      // Ensure native scroll starts from top on route change
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // ✅ Create Lenis only once
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        smoothTouch: false,
        normalizeWheel: true,
      });

      const raf = (time) => {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }

    // ✅ Reset scroll on route change (desktop only)
    lenisInstance.scrollTo(0, {
      immediate: true,
      force: true,
    });

    return () => {
      
    };
  }, [location.pathname]);

  return null;
}
