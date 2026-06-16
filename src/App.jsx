import { Routes, Route } from "react-router-dom";
import GetInTouch from "./sections/get-in-touch";
import Products from "./sections/products";

import Certifications from "./sections/certifications";
import Footer from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import AboutOurApps from "./sections/about-our-apps";
import HeroSection from "./sections/hero-section";

import ScrollToTop from "./components/ScrollToTop";
import FireAlarmSystems from "./pages/firealarm";
import EmergencyLightingSystems from "./pages/emergencylight";
import FireFightingEquipment from "./pages/freefighting";
import AdminLogin from "./pages/admin-login";
import AdminDashboard from "./pages/admin-dashboard";


export default function Page() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutOurApps />
              <Products />
              <Certifications />
              <GetInTouch />
            </>
          }
        />
        <Route path="/fire-alarm-systems" element={<FireAlarmSystems />} />
        <Route path="/emergency-lighting-systems" element={<EmergencyLightingSystems />} />
        <Route path="/fire-fighting-equipment" element={<FireFightingEquipment />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}
