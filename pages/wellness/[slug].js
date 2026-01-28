import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

/* =====================
   BLOG DATA (EDIT HERE)
===================== */

const wellnessBlogs = {
  "luxury-morning-rituals": {
    title: "Luxury Morning Wellness Rituals",
    image: "/images/wellness/morning-habits.jpg",
    time: "5 min read",
    content: `
Starting your day with intention is the foundation of long-term wellness.

Luxury morning rituals focus on calm, clarity, and nourishment rather than rushing.

Begin with hydration, gentle stretching, sunlight exposure, and a nourishing breakfast.
Avoid digital noise in the first hour of your day.

These habits reset your nervous system and create lasting balance.
`,
  },

  "healing-nutrition": {
    title: "Healing Nutrition for a Balanced Life",
    image: "/images/wellness/healing-nutrition.jpg",
    time: "6 min read",
    content: `
Food is information for your body, not just fuel.

Healing nutrition emphasizes whole foods, mineral balance, and mindful eating.

Premium wellness nutrition prioritizes quality, digestion, and consistency over restriction.
`,
  },

  "reducing-stress": {
    title: "Reducing Stress the Luxury Way",
    image: "/images/wellness/reduce-stress.jpg",
    time: "4 min read",
    content: `
Chronic stress quietly destroys energy, focus, and health.

Luxury stress reduction focuses on slowing the nervous system gently through breathwork,
warm baths, journaling, and intentional rest.

Your body heals best when it feels safe.
`,
  },

  "deep-sleep": {
    title: "Deep Sleep & Restoration",
    image: "/images/wellness/better-sleep.jpg",
    time: "5 min read",
    content: `
Deep sleep is the most powerful wellness tool available.

Create a night ritual: dim lighting, reduce screens, magnesium baths,
and consistent sleep times.

Sleep is not optional — it is medicine.
`,
  },

  "mental-wellness": {
    title: "Mental Wellness & Emotional Balance",
    image: "/images/wellness/mental-wellness.jpg",
    time: "7 min read",
    content: `
Mental wellness requires boundaries, emotional regulation, and rest.

Luxury mental health means removing chaos, simplifying life,
and choosing calm over stimulation.

Peace is the ultimate success metric.
`,
  },
};

/* =====================
   PAGE COMPONENT
===================== */

export default function WellnessBlog() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = wellnessBlogs[slug];

  if (!blog) {
    return (
      <div style={styles.notFound}>
        <h1>Article not found</h1>
        <Link href="/wellness" style={styles.backLink}>
          ← Back to Wellness
        </Link>
      </div>
    );
  }

  const related = Object.entries(wellnessBlogs).filter(
    ([key]) => key !== slug
  );

  return (
    <main style={styles.page}>
      {/* FULL WIDTH IMAGE (SAME LOGIC AS DATING) */}
      <div style={styles.fullImageWrap}>
        <motion.img
          src={blog.image}
          alt={blog.title}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          style={styles.fullImage}
        />
      </div>

      {/* CONTENT */}
      <section style={styles.content}>
        <span style={styles.readTime}>{blog.time}</span>
        <h1 style={styles.title}>{blog.title}</h1>

        {blog.content.split("\n").map((para, index) => (
          <p key={index} style={styles.paragraph}>
            {para}
          </p>
        ))}

        {/* RELATED ARTICLES */}
        <section style={styles.related}>
          <h3 style={styles.relatedTitle}>Related Wellness Articles</h3>

          <div style={styles.relatedGrid}>
            {related.map(([key, item]) => (
              <Link key={key} href={`/wellness/${key}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={styles.relatedCard}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={styles.relatedImage}
                  />
                  <span style={styles.relatedText}>{item.title}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* BACK BUTTON */}
        <Link href="/wellness">
          <span style={styles.backButton}>← Back to Wellness</span>
        </Link>
      </section>
    </main>
  );
}

/* =====================
   STYLES
===================== */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0d1412",
    color: "#f5f5f5",
  },

  fullImageWrap: {
    width: "100vw",
    maxWidth: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    background: "#020617",
    padding: "2rem 0",
  },

  fullImage: {
    display: "block",
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    objectFit: "contain",
    margin: "0 auto",
  },

  content: {
    maxWidth: "880px",
    margin: "0 auto",
    padding: "3rem 1rem 5rem",
    lineHeight: 1.8,
    fontSize: "1.05rem",
  },

  readTime: {
    fontSize: "0.85rem",
    color: "#9ee6c1",
  },

  title: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 700,
    margin: "0.6rem 0 2rem",
  },

  paragraph: {
    marginBottom: "24px",
    color: "#d5ddd9",
  },

  related: {
    marginTop: "4rem",
  },

  relatedTitle: {
    marginBottom: "1.2rem",
    fontSize: "1.2rem",
  },

  relatedGrid: {
    display: "flex",
    gap: "1rem",
    overflowX: "auto",
    paddingBottom: "1rem",
  },

  relatedCard: {
    minWidth: "220px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.04)",
    cursor: "pointer",
  },

  relatedImage: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
  },

  relatedText: {
    display: "block",
    padding: "0.8rem",
    fontSize: "0.85rem",
  },

  backButton: {
    display: "inline-block",
    marginTop: "4rem",
    color: "#9ee6c1",
    fontWeight: 600,
    cursor: "pointer",
  },

  notFound: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d1412",
    color: "#fff",
  },

  backLink: {
    marginTop: "20px",
    color: "#9ee6c1",
    textDecoration: "none",
  },
};
     
