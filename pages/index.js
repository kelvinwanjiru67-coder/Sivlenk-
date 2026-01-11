import Head from "next/head";

const products = [
  {
    title: "Wireless Earbuds Pro",
    desc: "Premium sound quality, noise reduction, and long battery life for everyday use.",
    link: "https://example.com", // replace with physical affiliate link
    type: "Physical",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
  },
  {
    title: "High-Speed Smart Blender",
    desc: "A powerful blender for healthy smoothies, meal prep, and fitness lifestyles.",
    link: "https://example.com",
    type: "Physical",
    image: "https://images.unsplash.com/photo-1585238342028-4bbc4c6caa58"
  },
  {
    title: "The Ultimate Keto Meal Plan",
    desc: "A proven keto meal plan designed to help you burn fat, boost energy, and stay healthy.",
    link: "https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=Kelvis67",
    type: "Digital",
    image: "/images/keto-meal-plan.png"
  },
    

  

  {
    title: "AI Tools for Online Business",
    desc: "Automate, scale, and grow faster using modern AI-powered tools.",
    link: "https://example.com", // Digistore24 link
    type: "Digital",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sivlenk | Smart Deals, Honest Picks</title>
        <meta
          name="description"
          content="Sivlenk is a trusted product discovery brand helping people find high-quality physical and digital products that deliver real value."
        />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }
        `}</style>
      </Head>

      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#020617",
          color: "#e5e7eb",
          padding: "1rem",
          boxSizing: "border-box"
       }}
     >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
       }}
     >




        {/* HEADER / BRAND */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "3rem"
        }}>
          <strong style={{ fontSize: "1.2rem", color: "#34d399" }}>
            Sivlenk
          </strong>
          <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Smart Deals. Honest Picks.
          </span>
        </header>

        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.9rem", marginBottom: "1rem" }}>
            Discover Products That Actually Deliver
          </h1>
          <p style={{
            color: "#cbd5e1",
            maxWidth: "720px",
            margin: "0 auto 1.8rem"
          }}>
            Sivlenk is a modern product discovery brand helping you find trusted
            physical and digital products that improve your life, productivity,
            and income.
          </p>
          <a href="#products" style={{
            background: "#34d399",
            color: "#000",
            padding: "15px 30px",
            borderRadius: "20px",
            fontWeight: "700",
            textDecoration: "none"
          }}>
            Explore Top Picks
          </a>
        </section>

        {/* TRUST */}
        <section style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "3.5rem",
          color: "#94a3b8",
          fontSize: "0.95rem"
        }}>
          <div>✔ Carefully Researched</div>
          <div>✔ Honest Recommendations</div>
          <div>✔ Secure Affiliate Partners</div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.8rem",
            width: "100%",
            boxSizing: "border-box"
         }}
      >
          
          {products.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "22px",
                padding: "1.5rem"
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "180px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "1rem"
              }}
           />


              <span style={{ fontSize: "0.75rem", color: "#34d399" }}>
                {p.type} Product
              </span>

              <h3 style={{ margin: "0.5rem 0" }}>{p.title}</h3>

              <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                {p.desc}
              </p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  background: "#34d399",
                  color: "#000",
                  padding: "11px 20px",
                  borderRadius: "14px",
                  fontWeight: "600",
                  textDecoration: "none"
                }}
              >
                {p.type === "Digital" ? "Get Instant Access" : "Buy Now"}
            
              </a>
            </div>
          ))}
        </section>

        {/* ABOUT BRAND */}
        <section style={{
          marginTop: "4.5rem",
          maxWidth: "900px",
          marginInline: "auto",
          color: "#cbd5e1",
          textAlign: "center"
        }}>
          <h2 style={{ marginBottom: "1rem" }}>About Sivlenk</h2>
          <p>
            Sivlenk was created to cut through online noise and hype.
            We focus on quality, usability, and long-term value — recommending
            only products that genuinely help people make smarter decisions.
          </p>
        </section>

        {/* FOOTER */}
        <footer style={{
          marginTop: "4rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #1e293b",
          color: "#94a3b8",
          fontSize: "0.85rem",
          textAlign: "center"
        }}>
          © {new Date().getFullYear()} Sivlenk. All rights reserved. <br />
          Affiliate Disclosure: Sivlenk may earn commissions from qualifying
          purchases at no extra cost to you.
        </footer>
        </div>
      </main>
    </>
  );
}
      
