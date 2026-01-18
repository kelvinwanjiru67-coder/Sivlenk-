import Link from "next/link";

export default function Dating() {
  const blogs = [
    {
      title: "How to Make Your Man Worship You (Without Losing Yourself)",
      slug: "make-him-worship-you",
      image: "/images/dating/dating-communication.png",
      excerpt:
        "A man doesn’t worship a woman because she controls him. He adores her because of how she makes him feel, her self-respect, and the emotional safety she creates.",
    },
    {
      title: "Healthy Communication in Relationships",
      slug: "healthy-communication",
      image: "/images/dating/healthy-communication.png",
      excerpt:
        "Strong relationships are built on calm, honest communication that creates understanding instead of conflict.",
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      slug: "five-red-flags",
      image: "/images/dating/red-flags.png",
      excerpt:
        "Some behaviors are warnings, not challenges. Learn the signs that protect your emotional and mental well-being.",
    },
    {
      title: "How to Make a Great First Impression on a Date",
      slug: "first-impression",
      image: "/images/dating/first-impression.png",
      excerpt:
        "First impressions are made in minutes. Confidence, presence, and authenticity make all the difference.",
    },
    {
      title: "Building Trust and Emotional Connection",
      slug: "building-trust",
      image: "/images/dating/building-trust.png",
      excerpt:
        "Trust is built through consistency, honesty, and emotional safety — not force or pressure.",
    },
  ];

  return (
    <main style={{ padding: "3rem 1.2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "800",
          marginBottom: "0.6rem",
        }}
      >
        Dating & Relationships
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "2.5rem" }}>
        Honest advice, emotional intelligence, and modern relationship wisdom.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.8rem",
        }}
      >
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/dating/${blog.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article
              style={{
                position: "relative",
                height: "420px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 30px 70px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.35)";
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${blog.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.75)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15) 60%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  left: "1.8rem",
                  right: "1.8rem",
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#34d399",
                    fontWeight: "600",
                  }}
                >
                  Dating
                </span>
                <h3
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "1.3rem",
                    lineHeight: "1.3",
                    fontWeight: "800",
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    marginTop: "0.6rem",
                    fontSize: "0.95rem",
                    color: "#e5e7eb",
                    lineHeight: "1.45",
                  }}
                >
                  {blog.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
