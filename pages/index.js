import Head from "next/head";

const products = [
  {
    title: "Wireless Earbuds Pro",
    desc: "High-quality sound, long battery life, perfect for daily use.",
    link: "https://example.com", // replace with Amazon/Jumia link
    type: "Physical"
  },
  {
    title: "Smart Home Blender",
    desc: "Powerful blender for smoothies, shakes, and meal prep.",
    link: "https://example.com", // replace with Amazon/Jumia link
    type: "Physical"
  },
  {
    title: "Digital Marketing Mastery",
    desc: "Learn how to build profitable online businesses step by step.",
    link: "https://example.com", // replace with Digistore24 link
    type: "Digital"
  },
  {
    title: "AI Tools for Business",
    desc: "Boost productivity and income using modern AI tools.",
    link: "https://example.com", // replace with Digistore24 link
    type: "Digital"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sivlenk | Best Product Deals & Reviews</title>
        <meta
          name="description"
          content="Discover top-rated physical and digital products. Honest reviews, trusted recommendations, and the best deals online."
        />
      </Head>

      <main style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        padding: "2.5rem",
        fontFamily: "system-ui"
      }}>

        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.7rem", marginBottom: "1rem" }}>
            Smart Deals. Honest Picks.
          </h1>
          <p style={{ color: "#cbd5e1", maxWidth: "650px", margin: "0 auto 1.5rem" }}>
            Sivlenk helps you discover the best physical and digital products —
            carefully selected to save you time and money.
          </p>
          <a href="#products" style={{
            background: "#34d399",
            color: "#000",
            padding: "14px 26px",
            borderRadius: "18px",
            fontWeight: "700",
            textDecoration: "none"
          }}>
            View Top Products
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
          <div>✔ Real User Value</div>
          <div>✔ Secure & Trusted Links</div>
        </section>

        {/* PRODUCTS */}
        <section id="products" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem"
        }}>
          {products.map((p, i) => (
            <div key={i} style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "1.5rem"
            }}>
              <span style={{
                fontSize: "0.75rem",
                color: "#34d399"
              }}>
                {p.type} Product
              </span>

              <h3 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
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
                  padding: "10px 18px",
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

        {/* AFFILIATE DISCLOSURE */}
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
          believe provide real value.
        </footer>

      </main>
    </>
  );
}

