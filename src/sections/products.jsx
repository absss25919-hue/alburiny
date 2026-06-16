import React from "react";
import { useNavigate } from "react-router-dom";

const gradientAnimation = {
  background: "linear-gradient(-45deg, #ff3b30, #ff6b00, #ff9500, #ffcc00)",
  backgroundSize: "400% 400%",
  animation: "gradientShift 15s ease infinite",
};

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Inline keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <section
        id="products"
        style={{ ...gradientAnimation, color: "#fff" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "6rem 2rem",
          }}
        >
          {/* Title */}
          <h2
  style={{
    textAlign: "center",
    fontSize: "3.2rem",
    fontWeight: 800,
    marginBottom: "5rem",
    background: "linear-gradient(135deg, #ffffff 0%, #fff9e6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
  }}
>
  Our Products & Services

  {/* underline */}
  <span
    style={{
      position: "absolute",
      left: "50%",
      bottom: "-25px",
      transform: "translateX(-50%)",
      width: "140px",
      height: "6px",
      borderRadius: "999px",
      background:
        "linear-gradient(to right, #ff3b30, #ff6b00, #ffcc00)",
      boxShadow: "0 0 30px rgba(255,107,0,0.6)",
    }}
  />
</h2>

          
          
          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* CARD */}
            {[
              {
                title: "Fire Alarm Systems",
                img: "https://www.firexuae.com/files/products/fire_detection_alarm_system/4.jpg",
                desc:
                  "Advanced fire detection and alarm systems designed to provide early warning and maximum protection for your facility.",
                list: [
                  "Addressable Fire Alarm Systems",
                  "Smoke & Heat Detectors",
                  "Manual Call Points",
                  "Control Panels",
                  "Sounders & Visual Alarms",
                ],
              },
              {
                title: "Fire Fighting Equipment",
                img: "https://www.firexuae.com/files/products/fire_fighting_products/1.jpg",
                desc:
                  "Complete range of fire fighting equipment to combat fires effectively and protect your premises.",
                list: [
                  "Fire Extinguishers (All Types)",
                  "Fire Hose Reels & Cabinets",
                  "Fire Hydrant Systems",
                  "Sprinkler Systems",
                  "Fire Pumps & Valves",
                  "Fire Blankets",
                ],
              },
              {
                title: "Emergency Lighting Systems",
                img: "/picture4.png",
                desc:
                  "Reliable emergency lighting solutions to ensure safe evacuation during power failures or emergencies.",
                list: [
                  "Emergency Exit Lights",
                  "LED Emergency Lights",
                  "Exit Signs (Illuminated)",
                  "Central Battery Systems",
                  "Self-Contained Units",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
                  border: "3px solid rgba(255,255,255,0.3)",
                  transition: "all 0.5s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 25px 70px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.3)";
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div style={{ padding: "2.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      lineHeight: "1.8",
                      marginBottom: "1.8rem",
                      color: "rgba(255,255,255,0.95)",
                    }}
                  >
                    {item.desc}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                    {item.list.map((li, i) => (
                      <li
                        key={i}
                        style={{
                          padding: "0.7rem 0",
                          paddingLeft: "2.5rem",
                          position: "relative",
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                          }}
                        >
                          ⭐
                        </span>
                        {li}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      if (item.title === "Fire Alarm Systems") {
                        navigate("/fire-alarm-systems");
                      } else if (item.title === "Emergency Lighting Systems") {
                        navigate("/emergency-lighting-systems");
                      } else if (item.title === "Fire Fighting Equipment") {
                        navigate("/fire-fighting-equipment");
                      }
                    }}
                    style={{
                      background: "rgba(255,255,255,0.25)",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255,255,255,0.4)",
                      borderRadius: "15px",
                      padding: "1rem 2.5rem",
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.35)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;