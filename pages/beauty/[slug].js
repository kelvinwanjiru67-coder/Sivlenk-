import { useRouter } from "next/router";
import Link from "next/link";

const blogs = [
  {
    title: "Luxury Skincare Rituals for Radiant Skin",
    slug: "luxury-skincare",
    image: "/images/beauty/luxury-skincare.png",
    content: `
True luxury skincare is not excess — it is intention.

Gentle routines, quality ingredients, and consistency create glow.
`,
  },
  {
    title: "The Art of Natural Beauty Enhancement",
    slug: "natural-beauty",
    image: "/images/beauty/natural-beauty.png",
    content: `
Natural beauty is about harmony, not perfection.

Enhancing what already exists is the highest form of elegance.
`,
  },
  {
    title: "Self-Care as the Ultimate Beauty Secret",
    slug: "self-care-beauty",
    image: "/images/beauty/self-care.png",
    content: `
Self-care is not indulgence.

It is maintenance for the soul and skin alike.
`,
  },
];

const readingTime = (text) =>
  Math.ceil(text.trim().split(/\s+/).length / 200);

export default function BeautyArticle() {
  const { slug } = useRouter().query;
  if (!slug) return null;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  return (
    <main style={{ background: "#020617", color: "#e5e7eb" }}>
      {/* FULL WIDTH IMAGE */}
      <div
        style={{
          width: "100vw",
          maxWidth: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          background: "#020617",
          padding: "2rem 0",
        }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <h1 style={{ fontSize: "2.4rem" }}>{blog.title}</h1>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
          {readingTime(blog.content)} min read · Beauty
        </p>

        <div style={{ lineHeight: "1.9", whiteSpace: "pre-line" }}>
          {blog.content}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/beauty">← Back to Beauty</Link>
        </div>
      </section>
    </main>
  );
    }
      
