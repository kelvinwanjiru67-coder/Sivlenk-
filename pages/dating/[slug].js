import { useRouter } from "next/router";
import Link from "next/link";

const blogs = [
  {
    title: "How to Make Your Man Worship You (Without Losing Yourself)",
    slug: "make-him-worship-you",
    image: "/images/dating/dating-communication.jpg",
    content: `
A man doesn’t “worship” a woman because she controls him or tries too hard.
He adores her because of how she makes him feel — safe, respected, inspired.

### 1. Master Self-Respect First
Nothing is more attractive than a woman who knows her worth.
When you respect yourself, you don’t chase validation or tolerate disrespect.

### 2. Let Him Feel Needed (Not Controlled)
Men thrive when they feel useful and appreciated.
Allow him to contribute, protect, and solve problems.

### 3. Communicate Calmly
Strong relationships are built on emotional maturity.
Speak calmly, listen deeply, and express needs without blame.

### 4. Maintain Your Own Life
Your independence is magnetic.
Have goals, passions, and a life outside the relationship.

### 5. Create Emotional Safety
When a man feels emotionally safe with you, he opens up fully.
That’s when devotion naturally grows.
    `,
  },
  {
    title: "How to Make a Great First Impression on a Date",
    slug: "first-impression",
    image: "/images/dating/first-impression.png",
    content: `
First impressions are emotional, not logical.
Your energy, presence, and confidence matter more than perfection.

Focus on authenticity, calm body language, eye contact, and genuine curiosity.
    `,
  },
  {
    title: "Building Trust and Emotional Connection",
    slug: "building-trust",
    image: "/images/dating/building-trust.jpg",
    content: `
Trust isn’t built through words — it’s built through consistency,
emotional availability, and reliability over time.
    `,
  },
];

export default function DatingBlog() {
  const router = useRouter();
  const { slug } = router.query;

  // ✅ Prevent render before slug exists
  if (!slug) return null;

  const blog = blogs.find((b) => b.slug === slug);

  // ✅ Handle missing blog safely
  if (!blog) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <h2>Article not found</h2>
          <p>This dating article may have been removed.</p>

          <Link href="/dating">
            <span
              style={{
                display: "inline-block",
                marginTop: "1.5rem",
                color: "#34d399",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              ← Back to Dating
            </span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "clamp(1.2rem, 4vw, 3rem)",
      }}
    >
      {/* Back Button */}
      <Link href="/dating">
        <span
          style={{
            display: "inline-block",
            marginBottom: "1.5rem",
            color: "#34d399",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          ← Back to Dating
        </span>
      </Link>

      {/* Content Wrapper */}
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            marginBottom: "1.2rem",
            lineHeight: "1.25",
          }}
        >
          {blog.title}
        </h1>

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
              objectFit: "cover", // ✅ SAME AS WELLNESS
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
      </article>
    </main>
  );
  }
            
