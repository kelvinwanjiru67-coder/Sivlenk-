import { useEffect, useRef, useState } from "react";

export default function Dating() {
  const [hovered, setHovered] = useState(null);
  
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.25 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const blogs = [
    {
      title: "How to Make Your Man Worship You (Without Losing Yourself)",
      image: "/images/dating/dating-communication.png",
      content: `A man does not worship a woman because she controls him. He does so because of how she makes him feel emotionally safe, inspired, and respected.

Self‑respect comes first. A woman who values herself naturally attracts admiration.

Create space for appreciation, calm communication, independence, and emotional safety. These traits make a woman unforgettable.`
    },
    {
      title: "Healthy Communication in Relationships",
      image: "/images/dating/healthy-communication.png",
      content: `Healthy communication is calm, honest, and respectful.

Speak with clarity, listen actively, and avoid emotional reactions. Emotional maturity builds lasting attraction and deep trust.`
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      image: "/images/dating/red-flags.png",
      content: `Disrespect, inconsistency, emotional manipulation, lack of accountability, and dishonesty are signs to walk away.

Ignoring red flags today leads to heartbreak tomorrow.`
    },
    {
      title: "How to Make a Great First Impression on a Date",
      image: "/images/dating/first-impression.png",
      content: `Confidence, eye contact, authenticity, and good energy matter more than looks.

Be present, relaxed, and genuinely interested. First impressions are emotional.`
    },
    {
      title: "Building Trust and Emotional Connection",
      image: "/images/dating/building-trust.png",
      content: `Trust is built through consistency, honesty, and emotional availability.

When someone feels safe with you, connection grows naturally.`
    }
  ];

  return (
    <main style={{ background: "#0b0b0b", minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <h1 style={{
        color: "#fff",
        fontSize: "2.5rem",
        fontWeight: "800",
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        Dating & Relationships
      </h1>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.8rem"
      }}>
        {blogs.map((blog, index) => (
          <a
  key={index}
  href={`/dating/${blog.slug || index}`}
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
  style={{
    position: "relative",
    height: "460px",
    borderRadius: "24px",
    overflow: "hidden",
    textDecoration: "none",
    transform: hovered === index ? "translateY(-8px)" : "translateY(0)",
    transition: "transform 0.45s ease",
    boxShadow:
      hovered === index
        ? "0 30px 70px rgba(0,0,0,0.75)"
        : "0 18px 40px rgba(0,0,0,0.45)",
  }}
>
  
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.2))"
            }} />

            <div style={{
              position: "absolute",
              bottom: 0,
              padding: "1.5rem",
              color: "#fff",
              maxHeight: "70%",
              overflowY: "auto"
            }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.6rem" }}>
                {blog.title}
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#d1d5db" }}>
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(60px) scale(0.96);
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
      
