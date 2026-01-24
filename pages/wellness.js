import { motion } from "framer-motion";
import Link from "next/link";

const wellnessBlogs = [
  {
    title: "Luxury Morning Wellness Rituals",
    slug: "luxury-morning-rituals",
    image: "/images/wellness/morning-habits.jpg",
    excerpt:
      "Begin your day with calming, luxurious habits that align your mind, body, and spirit.",
    time: "5 min read",
  },
  {
    title: "Healing Nutrition for a Balanced Life",
    slug: "healing-nutrition",
    image: "/images/wellness/healing-nutrition.jpg",
    excerpt:
      "Discover how premium nutrition fuels longevity, energy, and inner peace.",
    time: "6 min read",
  },
  {
    title: "Reducing Stress the Luxury Way",
    slug: "reducing-stress",
    image: "/images/wellness/reduce-stress.jpg",
    excerpt:
      "Simple spa-inspired techniques to calm your nervous system and reclaim clarity.",
    time: "4 min read",
  },
  {
    title: "Deep Sleep & Restoration",
    slug: "deep-sleep",
    image: "/images/wellness/better-sleep.jpg",
    excerpt:
      "Create a night routine that promotes deep, uninterrupted, restorative sleep.",
    time: "5 min read",
  },
  {
    title: "Mental Wellness & Emotional Balance",
    slug: "mental-wellness",
    image: "/images/wellness/mental-wellness.jpg",
    excerpt:
      "Luxury self-care practices to protect your mental and emotional well-being.",
    time: "7 min read",
  },
];

export default function Wellness() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.heroTitle}
        >
          Wellness & Self-Care
        </motion.h1>
        <p style={styles.heroSubtitle}>
          Premium habits for a healthier, calmer, and more fulfilled life.
        </p>
      </section>

      {/* BLOG GRID */}
      <section style={styles.grid}>
        {wellnessBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={styles.card}
          >
            <Link href={`/wellness/${blog.slug}`} style={styles.cardLink}>
              <div
                style={{
                  ...styles.cardImage,
                  backgroundImage: `url(${blog.image})`,
                }}
              >
                <div style={styles.overlay} />
                <div style={styles.cardContent}>
                  <span style={styles.readTime}>{blog.time}</span>
                  <h2 style={styles.cardTitle}>{blog.title}</h2>
                  <p style={styles.cardExcerpt}>{blog.excerpt}</p>
                  <span style={styles.readMore}>Read Article →</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

/* =======================
   STYLES
======================= */

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0d1412",
    color: "#f5f5f5",
    margin: 0,
    padding: 0,
  },

  hero: {
    minHeight: "70vh",
    padding: "80px 20px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "clamp(2.2rem, 6vw, 4rem)",
    fontWeight: 700,
    marginBottom: "16px",
  },

  heroSubtitle: {
    maxWidth: "600px",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "#cfd8d3",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    padding: "40px 20px 80px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  card: {
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#111a17",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },

  cardImage: {
    height: "420px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
  },

  cardContent: {
    position: "relative",
    padding: "24px",
    zIndex: 2,
  },

  readTime: {
    fontSize: "0.8rem",
    opacity: 0.8,
  },

  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: 600,
    margin: "8px 0",
  },

  cardExcerpt: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    opacity: 0.9,
  },

  readMore: {
    display: "inline-block",
    marginTop: "12px",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#9ee6c1",
  },
};
    
