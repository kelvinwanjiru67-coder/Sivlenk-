import Head from "next/head";

const products = [
  {
    title: "Wireless Earbuds Pro",
    desc: "Crystal-clear sound, noise reduction, and long battery life.",
    link: "https://example.com", // replace with Amazon/Jumia affiliate link
    type: "Physical",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
  },
  {
    title: "High-Speed Blender",
    desc: "Perfect for smoothies, meal prep, and healthy living.",
    link: "https://example.com", // replace with Amazon/Jumia affiliate link
    type: "Physical",
    image: "https://images.unsplash.com/photo-1585238342028-4bbc4c6caa58"
  },
  {
    title: "Digital Marketing Blueprint",
    desc: "Step-by-step system to build online income streams.",
    link: "https://example.com", // replace with Digistore24 link
    type: "Digital",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "AI Income Tools Pack",
    desc: "Leverage AI tools to automate and scale your business.",
    link: "https://example.com", // replace with Digistore24 link
    type: "Digital",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sivlenk | Best Product Deals & Reviews</title>
        <meta
          name="description"
          content="Sivlenk helps you find trusted physical and digital products that deliver real value. Honest reviews, top deals, and smart recommendations."
        />
      </Head>

      <main style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #020617, #020617)",
        color: "white",
        padding: "2.5rem",
        fontFamily: "system-ui"
      }}>

        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
            Smart Deals. Honest Picks.
          </h1>
          <p style={{ color: "#cbd5e1", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            Discover carefully selected physical and digital products that help
            you save money, improve productivity, and grow smarter.
          </p>
          <a href="#products" style={{
            background: "#34d399",
            color: "#000",
            padding: "15px 28px",
            borderRadius: "20px",
            fontWeight: "700",
            textDecoration: "none"
          }}>
            View Top Recommendations
          </a>
        </section>

        {/* TRUST */}
        <section style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
          color: "#94a3b8",
          fontSize: "0.95rem"
        }}>
          <div>✔ Honest Reviews</div>
          <div>✔ Real Value Products</div>
          <div>✔ Secure Affiliate Links</div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem"
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
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "1rem"
                }}
              />

              <span style={{
                fontSize: "0.75rem",
                color: "#34d399"
              }}>
                {p.type} Product
              </span>

              <h3 style={{ margin: "0.5rem 0" }}>
                {p.title}
              </h3>

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
                Check Price →
              </a>
            </div>
          ))}
        </section>

        {/* NICHE POSITIONING */}
        <section style={{
          marginTop: "4rem",
          textAlign: "center",
          color: "#cbd5e1",
          maxWidth: "800px",
          marginInline: "auto"
        }}>
          <h2 style={{ marginBottom: "0.8rem" }}>
            Why Trust Sivlenk?
          </h2>
          <p>
            We research, test, and compare products so you don’t have to.
            Sivlenk focuses on quality, usability, and long-term value — not hype.
          </p>
        </section>

        {/* FOOTER */}
        <footer style={{
          marginTop: "3.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #1e293b",
          color: "#94a3b8",
          fontSize: "0.85rem",
          textAlign: "center"
        }}>
          Affiliate Disclosure: Sivlenk may earn commissions from qualifying
          purchases at no extra cost to you. We only recommend products we
          believe provide genuine value.
        </footer>

      </main>
    </>
  );
}

