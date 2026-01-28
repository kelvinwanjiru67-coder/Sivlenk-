import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Luxury Skincare Rituals for Radiant Skin",
    slug: "luxury-skincare",
    image: "/images/beauty/luxury-skincare.png",
  },
  {
    title: "The Art of Natural Beauty Enhancement",
    slug: "natural-beauty",
    image: "/images/beauty/natural-beauty.png",
  },
  {
    title: "Self-Care as the Ultimate Beauty Secret",
    slug: "self-care-beauty",
    image: "/images/beauty/self-care.png",
  },
];

export default function Beauty() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "clamp(1.5rem, 4vw, 3rem)",
        background: "#020617",
        color: "#ffffff",
        position: "relative",
      }}
    >
      <div className="ambientGlow" />

      <h1 style={{ fontSize: "2.3rem", marginBottom: "1.5rem" }}>
        Beauty & Elegance
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/beauty/${blog.slug}`}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                position: "relative",
                height: "340px",
                borderRadius: "22px",
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
                  fontWeight: 600,
                  color: "#ffffff",
                  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
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
              600px at 30% 20%,
              rgba(244, 114, 182, 0.08),
              transparent 40%
            ),
            radial-gradient(
              600px at 70% 60%,
              rgba(168, 85, 247, 0.08),
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
          background: rgba(0, 0, 0, 0.6);
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
    }
  
