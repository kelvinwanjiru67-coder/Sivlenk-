import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dating() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState([]);

  // Fix mobile viewport height
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll(".reveal").forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible((v) => [...new Set([...v, i])]);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blogs = [
    {
      title: "How to Make Your Man Worship You",
      slug: "make-him-worship-you",
      image: "/images/dating/dating-communication.png",
      content:
        "True devotion comes from emotional safety, self-respect, and feminine confidence. Learn how to inspire desire without control, neediness, or chasing.",
      minutes: 6,
    },
    {
      title: "Healthy Communication in Relationships",
      slug: "healthy-communication",
      image: "/images/dating/healthy-communication.png",
      content:
        "Healthy communication builds attraction, trust, and emotional depth. Learn how to express needs calmly, listen deeply, and avoid emotional shutdown.",
      minutes: 5,
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      slug: "dating-red-flags",
      image: "/images/dating/red-flags.png",
      content:
        "Some behaviors predict emotional pain. Learn the subtle warning signs early so you don’t invest where respect, safety, and honesty are missing.",
      minutes: 4,
    },
    {
      title: "How to Make a Great First Impression on a Date",
      slug: "first-impression",
      image: "/images/dating/first-impression.png",
      content:
        "First impressions are emotional, not logical. Discover how presence, energy, and confidence create instant attraction before words even matter.",
      minutes: 5,
    },
    {
      title: "Building Trust and Emotional Connection",
      slug: "building-trust",
      image: "/images/dating/building-trust.png",
      content:
        "Trust grows through consistency, empathy, and emotional availability. Learn how to create deep bonds that feel safe, exciting, and secure.",
      minutes: 6,
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        background: "#020617",
        overflowX: "hidden",
        padding: "clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {/* Header */}
      <section
        style={{
          textAlign: "center",
          color: "#e5e7eb",
          marginBottom: "3rem",
        }}
      >
        <h1 style={{ fontSize: "2.6rem", marginBottom: "0.5rem" }}>
          Dating & Relationships
        </h1>
        <p style={{ color: "#94a3b8" }}>
          Modern love, emotional intelligence, and meaningful connections
        </p>
      </section>

      {/* Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {blogs.map((blog, index) => (
          <Link
            href={`/dating/${blog.slug}`}
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`reveal ${
              visible.includes(index) ? "show" : ""
            }`}
            style={{
              position: "relative",
              height: "520px",
              borderRadius: "26px",
              overflow: "hidden",
              transform:
                hovered === index ? "translateY(-10px)" : "translateY(0)",
              transition: "transform 0.45s ease",
              boxShadow:
                hovered === index
                  ? "0 40px 90px rgba(0,0,0,.8)"
                  : "0 20px 50px rgba(0,0,0,.5)",
              textDecoration: "none",
            }}
          >
            {/* Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform:
                  hovered === index ? "scale(1.08)" : "scale(1)",
                transition: "transform 1.4s ease",
                filter: "brightness(0.85)",
              }}
            />

            {/* Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.1) 60%)",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                padding: "1.8rem",
                color: "#fff",
                maxHeight: "70%",
                overflowY: "auto",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#34d399",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {blog.minutes} min read
              </span>

              <h2
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.4rem",
                  lineHeight: "1.3",
                }}
              >
                {blog.title}
              </h2>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                  marginTop: "0.6rem",
                }}
              >
                {blog.content}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Animations */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </main>
  );
}
