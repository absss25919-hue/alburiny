import React, { useState, useEffect } from "react";

const FireFightingEquipment = () => {
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
    const pdfFileName = "FIREX-PRODUCT-CATALOGUE.pdf";
    link.href = `/${pdfFileName}`;
    link.download = pdfFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
    {
      title: "Portable Fire Extinguishers",
      description: "Versatile first-line defense against various fire types including ABC dry powder, CO2, foam, water, and wet chemical extinguishers suitable for different fire classes and environments.",
      image: "/firefighting1.jpg"
    },
    {
      title: "Fire Hose Reels and Landing Valves",
      description: "Durable, easy-to-deploy hose reel systems with swivel mounting and landing valves designed for quick response to fire emergencies in commercial and industrial settings.",
      image: "/firefighting2.jpg"
    },
    {
      title: "Fire Hydrant Systems",
      description: "Complete hydrant systems including underground and pillar hydrants with all necessary fittings, valves, and accessories for effective water supply during firefighting operations.",
      image: "/firefighting3.jpg"
    },
    {
      title: "Fire Blankets",
      description: "Heat-resistant fire blankets made from fiberglass material, ideal for smothering small fires in kitchens, laboratories, and workshops, providing safe escape from fire.",
      image: "/firefighting4.jpg"
    },
    {
      title: "Fire Suppression Systems",
      description: "Advanced automatic suppression systems including FM-200 clean agent, CO2 systems, and water sprinkler systems designed for comprehensive protection of critical assets and spaces.",
      image: "/firefighting5.jpg"
    },
    {
      title: "Fire Pumps and Controllers",
      description: "High-performance electric and diesel-driven fire pumps with intelligent controllers ensuring reliable water pressure and flow for firefighting operations during emergencies.",
      image: "/firefighting6.jpg"
    },
    {
      title: "Fire Cabinets and Hose Boxes",
      description: "Robust steel fire cabinets and hose boxes designed to house fire extinguishers, hoses, and related equipment, ensuring organized storage and easy accessibility during emergencies.",
      image: "/firefighting7.jpg"
    },
    {
      title: "Fire Safety Signage",
      description: "Photoluminescent and reflective safety signs compliant with international standards, providing clear emergency exit routes, equipment locations, and safety instructions.",
      image: "/firefighting8.png"
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
                Fire Fighting Equipment
              </h1>
              <p style={{ 
                fontSize: "clamp(1rem, 2vw, 1.1rem)", 
                lineHeight: 1.7, 
                color: "#555", 
                marginBottom: "2rem" 
              }}>
                Our comprehensive range of fire fighting equipment provides effective fire suppression solutions to combat fires and protect your premises. From portable extinguishers to sophisticated suppression systems, we supply high-quality products that meet international standards.
              </p>
              
              {/* Brands */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ 
                  fontSize: "clamp(1rem, 2vw, 1.2rem)", 
                  fontWeight: 600, 
                  marginBottom: "1rem", 
                  color: "#333" 
                }}>
                  Authorized Brand:
                </h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: "#ff6b00",
                    color: "#fff",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: 600
                  }}>
                    FIREX-UAE
                  </span>
                </div>
              </div>

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
                src="/picture3.png"
                alt="Fire Fighting Equipment"
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  maxHeight: "400px", 
                  objectFit: "cover", 
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
                      e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #ff6b00; font-size: 3rem;">🔥</div>`;
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

export default FireFightingEquipment;