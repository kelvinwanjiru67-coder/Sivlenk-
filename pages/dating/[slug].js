import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

/* ===== BLOG DATA ===== */
const blogs = [
  {
    title: "How to Make Your Man Worship You (Without Losing Yourself)",
    slug: "make-him-worship-you",
    image: "/images/dating/dating-communication.jpg",
    content: `
A man doesn’t worship a woman because she controls him.
He adores her because of how she makes him feel — safe, respected, inspired.

1. Master Self-Respect  
Nothing is more attractive than grounded confidence.

2. Let Him Feel Needed (Not Controlled)  
Men bond through purpose, not pressure.

3. Communicate Calmly  
Emotional maturity builds desire.

4. Maintain Your Own Life  
Independence is magnetic.

5. Create Emotional Safety  
Safety creates devotion.
`,
  },
  {
    title: "How to Make a Great First Impression on a Date",
    slug: "first-impression",
    image: "/images/dating/first-impression.png",
    content: `
First impressions are emotional, not logical.
Your energy speaks before words.

Presence, calm body language, and authenticity matter most.
`,
  },
  {
    title: "Building Trust and Emotional Connection",
    slug: "building-trust",
    image: "/images/dating/building-trust.jpg",
    content: `
Trust is built through consistency, availability, and integrity.

Connection deepens when both partners feel safe to be real.
`,
  },
  {
    title: "Healthy Communication in Relationships",
    slug: "healthy-communication",
    image: "/images/dating/healthy-communication.png",
    content: `
Healthy communication isn’t about winning —
it’s about understanding.

Empathy strengthens long-term intimacy.
`,
  },
  {
    title: "5 Red Flags You Should Never Ignore",
    slug: "red-flags",
    image: "/images/dating/red-flags.png",
    content: `
Ignoring red flags early creates pain later.

Disrespect, inconsistency, manipulation — never minimize them.
`,
  },
];

/* ===== READING TIME ===== */
const readingTime = (text) =>
  Math.ceil(text.trim().split(/\s+/).length / 200);

export default function DatingSlug() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020617, #020617)",
        padding: "clamp(1.5rem, 5vw, 4rem)",
        color: "#e5e7eb",
      }}
    >
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            lineHeight: "1.25",
            marginBottom: "0.6rem",
            letterSpacing: "-0.02em",
          }}
        >
          {blog.title}
        </motion.h1>

        {/* Meta */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "#9ca3af",
            fontSize: "0.9rem",
            marginBottom: "2rem",
          }}
        >
          {readingTime(blog.content)} min read · Dating
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          style={{
            width: "100%",
            height: "clamp(260px, 50vw, 420px)",
            borderRadius: "22px",
            overflow: "hidden",
            marginBottom: "2.5rem",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
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
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.9",
            color: "#d1d5db",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <Link href="/dating">
            <span
              style={{
                display: "inline-block",
                padding: "0.75rem 1.6rem",
                borderRadius: "999px",
                background: "rgba(52,211,153,0.12)",
                color: "#34d399",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              ← Back to Dating
            </span>
          </Link>
        </motion.div>
      </article>
    </main>
  );
}
