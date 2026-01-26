import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How to Make Your Man Worship You",
    slug: "make-him-worship-you",
    image: "/images/dating/dating-communication.jpg",
  },
  {
    title: "How to Make a Great First Impression on a Date",
    slug: "first-impression",
    image: "/images/dating/first-impression.png",
  },
  {
    title: "Building Trust and Emotional Connection",
    slug: "building-trust",
    image: "/images/dating/building-trust.jpg",
  },
  {
    title: "Healthy Communication in Relationships",
    slug: "healthy-communication",
    image: "/images/dating/healthy-communication.png",
  },
  {
    title: "5 Red Flags You Should Never Ignore",
    slug: "red-flags",
    image: "/images/dating/red-flags.png",
  },
];

export default function Dating() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "clamp(1.5rem, 4vw, 3rem)",
        background: "#020617",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Ambient Glow */}
      <div className="ambientGlow" />

      <h1 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>
        Dating & Relationships
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/dating/${blog.slug}`}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="blogCard"
              style={{
                position: "relative",
                height: "340px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "60px",
                  left: "20px",
                  right: "20px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                }}
              >
                {blog.title}
              </div>

              <div className="readCta">Read article →</div>
            </motion.div>
          </Link>
        ))}
      </section>

      <style jsx>{`
        .ambientGlow {
          position: fixed;
          inset: 0;
          background: radial-gradient(
              600px at 20% 20%,
              rgba(52, 211, 153, 0.08),
              transparent 40%
            ),
            radial-gradient(
              600px at 80% 60%,
              rgba(99, 102, 241, 0.08),
              transparent 40%
            );
          pointer-events: none;
          z-index: -1;
        }

        .readCta {
          position: absolute;
          bottom: 18px;
          left: 20px;
          padding: 10px 18px;
          background: rgba(0, 0, 0, 0.65);
          color: #fff;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .blogCard:hover .readCta {
          background: rgba(52, 211, 153, 0.9);
          transform: translateY(-3px);
        }
      `}</style>
    </main>
  );
    }
  
