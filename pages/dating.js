export default function Dating() {
  const blogs = [
    {
      title: "Healthy Communication in Relationships",
      image: "/images/dating/dating-communication.png",
      excerpt:
        "Strong relationships are built on clear, honest communication. Learn how to express your needs, listen actively, and avoid common misunderstandings."
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      image: "/images/dating/dating-redflags.png",
      excerpt:
        "Recognizing early warning signs can save you emotional pain. Here are five relationship red flags that deserve serious attention."
    },
    {
      title: "How to Make a Great First Impression on a Date",
      image: "/images/dating/dating-first-date.png",
      excerpt:
        "First impressions matter. Discover simple but powerful tips to boost confidence, connect naturally, and enjoy your first date."
    },
    {
      title: "Building Trust and Emotional Connection",
      image: "/images/dating/dating-trust.png",
      excerpt:
        "Trust is the foundation of any healthy relationship. Learn practical ways to build emotional safety and deepen your bond."
    },
    {
      title: "How to Maintain Long-Term Relationship Happiness",
      image: "/images/dating/dating-long-term.png",
      excerpt:
        "Lasting relationships require effort and intention. Explore habits that help couples grow together and stay connected."
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "2rem"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Dating & Relationships
        </h1>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {blogs.map((blog, index) => (
            <article
              key={index}
              style={{
                background: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "18px",
                padding: "1.25rem"
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "1rem"
                }}
              />

              <h3 style={{ marginBottom: "0.5rem" }}>{blog.title}</h3>

              <p style={{ fontSize: "0.95rem", color: "#cbd5f5" }}>
                {blog.excerpt}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
      }
        
