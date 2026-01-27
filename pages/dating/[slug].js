import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How to Make Your Man Worship You",
    slug: "make-him-worship-you",
    image: "/images/dating/dating-communication.jpg",
    content: `
True devotion is created through emotional safety, self-respect, and calm confidence.

A woman who honors herself invites admiration naturally.
`,
  },
  {
    title: "How to Make a Great First Impression on a Date",
    slug: "first-impression",
    image: "/images/dating/first-impression.png",
    content: `
First impressions are emotional, not logical.

Your presence speaks before your words.
`,
  },
  {
    title: "Building Trust and Emotional Connection",
    slug: "building-trust",
    image: "/images/dating/building-trust.jpg",
    content: `
Trust grows through consistency, availability, and emotional honesty.
`,
  },
  {
    title: "Healthy Communication in Relationships",
    slug: "healthy-communication",
    image: "/images/dating/healthy-communication.png",
    content: `
Healthy communication creates emotional intimacy and long-term connection.
`,
  },
  {
    title: "5 Red Flags You Should Never Ignore",
    slug: "red-flags",
    image: "/images/dating/red-flags.png",
    content: `
Ignoring red flags early often leads to deeper emotional pain later.
`,
  },
];

const readingTime = (text) =>
  Math.ceil(text.trim().split(/\s+/).length / 200);

export default function DatingArticle() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        padding: "clamp(1.5rem, 5vw, 4rem)",
        color: "#e5e7eb",
        position: "relative",
      }}
    >
      <div className="ambientGlow" />

      <article
  style={{
    width: "100%",
    maxWidth: "100%",
  }}
>
    
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
             maxWidth: "880px",
             margin: "0 auto 0.5rem",
             padding: "0 1rem",
             fontSize: "clamp(2rem, 4vw, 2.8rem)",
          }}
        >
    
        
          {blog.title}
        </motion.h1>

        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
          {readingTime(blog.content)} min read · Dating
        </p>

        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
              width: "100vw",
              height: "clamp(280px, 60vw, 520px)",
              marginLeft: "calc(-50vw + 50%)", // BREAK OUT OF CONTENT
              borderRadius: "0",
              overflow: "hidden",
              marginBottom: "3rem",
            }}
          >                       
          <motion.img
            src={blog.image}
            alt={blog.title}
            whileHover={{ scale: 1.04 }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>

        <div
  style={{
    maxWidth: "880px",
    margin: "0 auto",
    padding: "0 1rem",
    lineHeight: "1.9",
    fontSize: "1.05rem",
    whiteSpace: "pre-line",
  }}
>

          {blog.content}
        </div>

        {/* Monetization */}
        <div className="affiliateBox">
          <span>Recommended</span>
          <h4>The Ultimate Keto Meal Plan</h4>
          <p>Trusted by thousands for energy & confidence.</p>
          <a
            href="https://www.claudiacaldwell.com/oto-uf61a?el=splittest-1214-bradflow-control#aff=Kelvis67"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Offer →
          </a>
        </div>

        {/* Email */}
        <div className="emailBox">
          <h3>Get Smart Dating Insights</h3>
          <p>Weekly tips. No spam.</p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>

        {/* Related */}
        <h3 style={{ marginTop: "4rem" }}>Related Articles</h3>
        <div className="carousel">
          {blogs
            .filter((b) => b.slug !== blog.slug)
            .map((b) => (
              <Link key={b.slug} href={`/dating/${b.slug}`}>
                <div className="carouselCard">
                  <img src={b.image} />
                  <span>{b.title}</span>
                </div>
              </Link>
            ))}
        </div>

        {/* Back */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/dating">← Back to Dating</Link>
        </div>
      </article>

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
          z-index: -1;
        }

        .affiliateBox {
          margin: 4rem 0;
          padding: 2rem;
          border-left: 4px solid #34d399;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
        }

        .emailBox {
          margin-top: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          text-align: center;
        }

        .carousel {
          display: flex;
          gap: 1.2rem;
          overflow-x: auto;
          margin-top: 1.5rem;
        }

        .carouselCard {
          min-width: 220px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          overflow: hidden;
        }

        .carouselCard img {
          width: 100%;
          height: 140px;
          object-fit: cover;
        }

        .carouselCard span {
          padding: 0.8rem;
          display: block;
        }
      `}</style>
    </main>
  );
    }
  
