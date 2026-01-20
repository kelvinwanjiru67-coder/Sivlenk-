import { useState } from "react";

export default function Dating() {
  const [hovered, setHovered] = useState(null);

  const blogs = [
    {
      title: "How to Make Your Man Worship You (Without Losing Yourself)",
      slug: "make-him-worship-you",
      image: "/images/dating/dating-communication.png",
      content:
        "A man doesn’t worship a woman because she controls him. He adores her because of how she makes him feel — respected, emotionally safe, and inspired. This guide shows how self-respect, emotional maturity, and calm communication naturally deepen his devotion.",
    },
    {
      title: "Healthy Communication in Relationships",
      slug: "healthy-communication",
      image: "/images/dating/healthy-communication.png",
      content:
        "Healthy communication is not about winning arguments. It’s about feeling heard, understood, and emotionally safe. Learn how tone, timing, and empathy transform everyday conversations into deeper emotional connection.",
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      slug: "dating-red-flags",
      image: "/images/dating/red-flags.png",
      content:
        "Red flags don’t appear loudly — they whisper. From inconsistency to emotional unavailability, discover the early warning signs that protect your heart, time, and emotional energy.",
    },
    {
      title: "How to Make a Great First Impression on a Date",
      slug: "first-impression",
      image: "/images/dating/first-impression.png",
      content:
        "First impressions are emotional, not logical. Learn how presence, body language, and authentic confidence make you unforgettable — without pretending to be someone you’re not.",
    },
    {
      title: "Building Trust and Emotional Connection",
      slug: "building-trust",
      image: "/images/dating/building-trust.png",
      content:
        "Trust isn’t built through words — it’s built through consistency, emotional safety, and reliability. This guide shows how true connection grows when someone feels safe being fully themselves with you.",
    },
  ];

  return (
    <main
  style={{
    minHeight: "100svh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#020617",
  }}
>
      <div
  style={{
    width: "100%",
    maxWidth: "1400px",
    padding: "clamp(1.2rem, 3vw, 3rem)",
  }}
>

      {/* Page Header */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 3rem",
          textAlign: "center",
          color: "#e5e7eb",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
          Dating & Relationships
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1rem" }}>
          Modern love, emotional intelligence, and meaningful connections
        </p>
      </section>

      {/* Blog Grid */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.8rem",
        }}
      >
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={`/dating/${blog.slug}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              height: "460px",
              borderRadius: "24px",
              overflow: "hidden",
              textDecoration: "none",
              transform:
                hovered === index ? "translateY(-8px)" : "translateY(0)",
              transition: "transform 0.45s ease",
              boxShadow:
                hovered === index
                  ? "0 30px 70px rgba(0,0,0,0.75)"
                  : "0 18px 40px rgba(0,0,0,0.45)",
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
                transform:
                  hovered === index ? "scale(1.08)" : "scale(1)",
                transition: "transform 1.2s ease",
                filter: "brightness(0.8)",
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
                bottom: 0,
                padding: "1.5rem",
                color: "#fff",
                maxHeight: "70%",
                overflowY: "auto",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#34d399",
                }}
              >
                Dating
              </span>

              <h2
                style={{
                  marginTop: "0.4rem",
                  fontSize: "1.35rem",
                  lineHeight: "1.35",
                  fontWeight: "700",
                  textShadow:
                    hovered === index
                      ? "0 6px 30px rgba(0,0,0,0.8)"
                      : "none",
                  transition: "text-shadow 0.4s ease",
                }}
              >
                {blog.title}
              </h2>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                  marginTop: "0.5rem",
                }}
              >
                {blog.content}
              </p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
     }
     
