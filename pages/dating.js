import { useEffect, useState } from "react";

export default function Dating() {
  const [visible, setVisible] = useState([]);
  const [hovered, setHovered] = useState(null);

  const blogs = [
    {
      title: "How to Make Your Man Worship You (Without Losing Yourself)",
      slug: "make-him-worship-you",
      image: "/images/dating/dating-communication.png",
      content: `
A man doesn't worship a woman because she controls him.
He adores her because of how she makes him feel.

1. Master Self-Respect
Nothing is more attractive than a woman who knows her worth.

2. Let Him Feel Needed
Men bond deeply when they feel trusted and appreciated.

3. Communicate Calmly
Emotional maturity creates irresistible attraction.

4. Maintain Your Own Life
Independence is magnetic.

5. Create Emotional Safety
When a man feels safe, he opens his heart fully.
      `,
    },
    {
      title: "The Psychology of First Impressions",
      slug: "first-impression",
      image: "/images/dating/first-impression.png",
      content: `
First impressions are emotional, not logical.

Your body language, tone, and presence speak before words.
Confidence, warmth, and calm energy shape attraction instantly.
      `,
    },
    {
      title: "Building Trust and Emotional Connection",
      slug: "building-trust",
      image: "/images/dating/building-trust.png",
      content: `
Trust is built through consistency, not promises.
Emotional connection deepens when actions match words.
      `,
    },
  ];

  // Reading time calculation
  const getReadingTime = (text) => {
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#020617",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "clamp(1.2rem, 3vw, 3rem)",
        }}
      >
        {/* Header */}
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.6rem", color: "#e5e7eb" }}>
            Dating & Relationships
          </h1>
          <p style={{ color: "#94a3b8", marginTop: "0.6rem" }}>
            Modern love, emotional intelligence & meaningful connection
          </p>
        </section>

        {/* Blog Grid */}
        <section
          style={{
            width: "100%"
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.2rem",
          }}
        >
          {blogs.map((blog, index) => {
            const readingTime = getReadingTime(blog.content);

            return (
              <a
                href={`/dating/${blog.slug}`}
                key={index}
                data-index={index}
                className={`reveal ${
                  visible.includes(String(index)) ? "show" : ""
                }`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  height: "min(85vh, 520px)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  textDecoration: "none",
                  transform:
                    hovered === index
                      ? "translateY(-10px)"
                      : "translateY(0)",
                  transition: "all 0.45s ease",
                  boxShadow:
                    hovered === index
                      ? "0 35px 80px rgba(0,0,0,0.75)"
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
                      hovered === index ? "scale(1.1)" : "scale(1)",
                    transition: "transform 1.2s ease",
                    filter: "brightness(0.75)",
                  }}
                />

                {/* Gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.2))",
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    padding: "1.6rem",
                    color: "#fff",
                    maxHeight: "70%",
                    overflowY: "auto",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#c7d2fe",
                      opacity: 0.9,
                    }}
                  >
                    ⏱ {readingTime} min read
                  </span>

                  <h2
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginTop: "0.4rem",
                      textShadow:
                        hovered === index
                          ? "0 6px 28px rgba(0,0,0,0.85)"
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
                      marginTop: "0.6rem",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {blog.content}
                  </p>
                </div>
              </a>
            );
          })}
        </section>
      </div>

      {/* Styles */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(70px) scale(0.96);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </main>
  );
      }
      
