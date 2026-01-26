import { useRouter } from "next/router";
import Link from "next/link";

/* ===== BLOG DATA ===== */
const blogs = [
  {
    title: "How to Make Your Man Worship You (Without Losing Yourself)",
    slug: "make-him-worship-you",
    image: "/images/dating/dating-communication.jpg",
    content: `
A man doesn’t “worship” a woman because she controls him or tries too hard.
He adores her because of how she makes him feel — safe, respected, inspired.

1. Master Self-Respect First  
Nothing is more attractive than a woman who knows her worth.

2. Let Him Feel Needed (Not Controlled)  
Men thrive when they feel useful and appreciated.

3. Communicate Calmly  
Strong relationships are built on emotional maturity.

4. Maintain Your Own Life  
Your independence is magnetic.

5. Create Emotional Safety  
When a man feels emotionally safe with you, devotion grows naturally.
`,
  },
  {
    title: "How to Make a Great First Impression on a Date",
    slug: "first-impression",
    image: "/images/dating/first-impression.png",
    content: `
First impressions are emotional, not logical.
Your energy, confidence, and presence speak before your words.

Eye contact, calm body language, and genuine curiosity matter more than perfection.
`,
  },
  {
    title: "Building Trust and Emotional Connection",
    slug: "building-trust",
    image: "/images/dating/building-trust.jpg",
    content: `
Trust is built through consistency, emotional availability,
and showing up even when it’s inconvenient.

True connection grows when both partners feel seen and safe.
`,
  },
  {
    title: "Healthy Communication in Relationships",
    slug: "healthy-communication",
    image: "/images/dating/healthy-communication.png",
    content: `
Healthy communication isn’t about winning arguments —
it’s about understanding each other.

Listening, validating emotions, and responding with empathy
strengthens long-term bonds.
`,
  },
  {
    title: "5 Red Flags You Should Never Ignore",
    slug: "red-flags",
    image: "/images/dating/red-flags.png",
    content: `
Ignoring red flags early often leads to emotional pain later.

Disrespect, inconsistency, emotional unavailability,
and manipulation should never be overlooked.
`,
  },
];

/* ===== HELPER: READING TIME ===== */
function getReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default function DatingBlog() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  const readingTime = getReadingTime(blog.content);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "clamp(1.2rem, 4vw, 3rem)",
      }}
    >
      <article style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            marginBottom: "0.6rem",
            lineHeight: "1.25",
          }}
        >
          {blog.title}
        </h1>

        {/* Meta */}
        <p
          style={{
            color: "#9ca3af",
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
          }}
        >
          {readingTime} min read · Dating
        </p>

        {/* Image */}
        <div
          style={{
            width: "100%",
            height: "clamp(260px, 50vw, 420px)",
            borderRadius: "18px",
            overflow: "hidden",
            marginBottom: "2rem",
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
        </div>

        {/* Content */}
        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.75",
            color: "#d1d5db",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content}
        </div>

        {/* Bottom Back Button */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link href="/dating">
            <span
              style={{
                color: "#34d399",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              ← Back to Dating
            </span>
          </Link>
        </div>
      </article>
    </main>
  );
    }
    
