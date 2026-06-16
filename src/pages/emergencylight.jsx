import React, { useState, useEffect } from "react";

const EmergencyLightingSystems = () => {
  const [imageScale, setImageScale] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setImageScale(1.1);
  };

  const handleImageMouseLeave = () => {
    setImageScale(1);
  };

  const handleDownloadCatalogue = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    const pdfFileName = "emergencylighting-systems.pdf";
    link.href = `/${pdfFileName}`;
    link.download = pdfFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
  // 1️⃣ Control Panel First
  {
    title: "Central Monitoring System Control Panel",
    description: "3.5-inch touch screen TFT display panel supporting up to 255 slave devices with 1000m communication distance.",
    image: "/emergency6.png"
  },

  // 2️⃣ Addressable Products
  {
    title: "Emergency Down Light Round (Addressable)",
    description: "Round downlight for monitoring systems with SMD 2835 LEDs, IP65 rated, 3-hour emergency time, maintained/non-maintained operation.",
    image: "/emergency5.png"
  },
  {
    title: "Emergency Light for Monitoring System (Addressable)",
    description: "24pcs SMD 2835 LEDs with IP65 rating, maintained/non-maintained operation, surface mount with optional recessed kit.",
    image: "/emergency8.png"
  },
  {
    title: "Exit Sign for Monitoring System (Addressable)",
    description: "24pcs SMD 4014 LEDs with IP65 protection, maintained/non-maintained modes, ceiling/wall mounting options, UL & Dubai approved.",
    image: "/emergency7.png"
  },

  // 3️⃣ Conventional Products
  {
    title: "Exit Surface Mounted (Conventional)",
    description: "Super bright LED bulkhead with 3-hour emergency duration, IP65 protection, universal AC input voltage.",
    image: "/emergency2.png"
  },
  {
    title: "Emergency Exit Sign (Conventional)",
    description: "CE approved LED exit sign with multiple liquid options, 3-hour emergency duration, maintained/non-maintained modes.",
    image: "/emergency3.png"
  },
  {
    title: "Emergency Down Light (Conventional Type)",
    description: "TUV CE approved LED downlight with LiFePO4 battery, auto-test function, up to 4-year lifespan, overcharge protection.",
    image: "/emergency4.png"
  },
  {
    title: "Emergency Bulkhead (Conventional Type)",
    description: "High-performance LED bulkhead designed for conventional emergency lighting systems, 3-hour backup duration, IP65 protection, maintained/non-maintained operation with easy wall or ceiling installation.",
    image: "/emergency8.png"
  },

  // 4️⃣ System Encoder Last
  {
    title: "System Encoder",
    description: "Handheld encoder for programming emergency lighting systems with digital display and keypad control.",
    image: "/emergency1.png"
  }
];


  
  


  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Hero Section */}
      <section style={{ background: "#fff", padding: "8rem 2rem 3rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "3rem", 
            alignItems: "center" 
          }}>
            {/* Left Content */}
            <div>
              <h1 style={{ 
                fontSize: "clamp(2rem, 5vw, 2.8rem)", 
                fontWeight: 700, 
                marginBottom: "1.5rem", 
                color: "#ff6b00",
                lineHeight: 1.2
              }}>
                Emergency Lighting Systems
              </h1>
              <p style={{ 
                fontSize: "clamp(1rem, 2vw, 1.1rem)", 
                lineHeight: 1.7, 
                color: "#555", 
                marginBottom: "2rem" 
              }}>
                SIGMA LUX emergency lighting systems provide reliable illumination solutions to ensure safe evacuation during power failures or emergencies. Our own brand combines cutting-edge LED technology with robust design to meet and exceed international safety regulations.
              </p>

              {/* Catalogue Button */}
              <button
                onClick={handleDownloadCatalogue}
                style={{
                  display: "inline-block",
                  background: "#ff6b00",
                  color: "#fff",
                  padding: "1rem 2rem",
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff8500";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ff6b00";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                📥 Download Catalogue
              </button>
            </div>

            {/* Right Image */}
            <div style={{ 
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              border: "2px solid #ff6b00"
            }}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}>
              <img 
                src="/picture2.png"
                alt="Emergency Lighting Systems"
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  maxHeight: "400px", 
                  objectFit: "contain", 
                  display: "block",
                  transform: `scale(${imageScale})`,
                  transition: "transform 0.3s ease"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={{ padding: "3rem 1rem", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "clamp(1.5rem, 4vw, 2rem)", 
            fontWeight: 700, 
            marginBottom: "3rem",
            color: "#ff6b00",
            borderLeft: "4px solid #ff6b00",
            paddingLeft: "1rem"
          }}>
            Key Features & Products
          </h2>
          
          <div style={{ display: "grid", gap: "2rem" }}>
            {products.map((product, index) => (
              <div 
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: hoveredProduct === index ? "0 8px 24px rgba(255, 107, 0, 0.15)" : "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  display: "grid",
                  gridTemplateColumns: isDesktop ? "250px 1fr" : "1fr",
                  gap: "1.5rem",
                  alignItems: "center"
                }}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "2px solid #f0f0f0",
                  height: isDesktop ? "200px" : "250px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f9f9f9"
                }}>
                  <img 
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transform: hoveredProduct === index ? "scale(1.02)" : "scale(1)",
                      transition: "transform 0.3s ease",
                      background: "#fff"
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #ff6b00; font-size: 3rem;">💡</div>`;
                    }}
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 style={{
                    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                    fontWeight: 600,
                    color: "#ff6b00",
                    marginBottom: "0.75rem"
                  }}>
                    {product.title}
                  </h3>
                  <p style={{
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    lineHeight: 1.6,
                    color: "#666",
                    margin: 0
                  }}>
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyLightingSystems;