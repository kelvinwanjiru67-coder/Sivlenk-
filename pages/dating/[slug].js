import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const BLOGS = {
  "make-him-worship-you": {
    title: "How to Make Your Man Worship You",
    image: "/images/dating/dating-communication.jpg",
    minutes: 6,
    content: `
True devotion is not forced — it is inspired.

When a man feels emotionally safe, respected, and deeply desired,
his natural instinct is to invest, protect, and cherish.

This article explores:
• Feminine confidence vs neediness  
• Emotional safety as attraction  
• How self-respect creates desire  
• What makes men emotionally attach  

The key is never control.
It’s presence, polarity, and peace.
    `,
  },

  "healthy-communication": {
    title: "Healthy Communication in Relationships",
    image: "/images/dating/healthy-communication.png",
    minutes: 5,
    content: `
Healthy communication is the backbone of emotional intimacy.

Learn how to:
• Speak needs without blame  
• Listen without defensiveness  
• De-escalate conflict calmly  
• Build emotional trust daily  

When communication is safe,
love becomes effortless.
    `,
  },

  "dating-red-flags": {
    title: "5 Red Flags You Should Never Ignore",
    image: "/images/dating/red-flags.png",
    minutes: 4,
    content: `
Some warning signs are whispers — others are alarms.

This guide helps you identify:
• Emotional manipulation  
• Lack of accountability  
• Inconsistent behavior  
• Disrespect masked as humor  
• Boundary violations  

Ignoring red flags delays pain — it never prevents it.
    `,
  },

  "first-impression": {
    title: "How to Make a Great First Impression on a Date",
    image: "/images/dating/first-impression.png",
    minutes: 5,
    content: `
Attraction begins before words.

This article shows you how:
• Energy speaks louder than appearance  
• Confidence is felt, not performed  
• Calm presence creates intrigue  
• Authenticity builds connection  

First impressions are emotional — not logical.
    `,
  },

  "building-trust": {
    title: "Building Trust and Emotional Connection",
    image: "/images/dating/building-trust.jpg",
    minutes: 6,
    content: `
Trust is built through consistency, empathy, and honesty.

You’ll learn:
• How emotional safety forms bonds  
• Why vulnerability deepens love  
• The power of reliability  
• How trust grows over time  

Real connection feels calm, secure, and alive.
    `,
  },
};

export default function DatingBlog() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || !BLOGS[slug]) {
    return (
      <main style={{ padding: "4rem", color: "#fff", background: "#000" }}>
        <h1>Article not found</h1>
        <Link href="/dating">← Back to Dating</Link>
      </main>
    );
  }

  const blog = BLOGS[slug];

  return (
    <>
      <Head>
        <title>{blog.title} | Sivlenk</title>
        <meta name="description" content={blog.title} />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "#e5e7eb",
          overflowX: "hidden",
        }}
      >
        {/* Hero */}
        <section
          style={{
            height: "60vh",
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.4), #020617), url(${blog.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            padding: "3rem",
          }}
        >
          <div>
            <p style={{ color: "#34d399", fontSize: "0.85rem" }}>
              {blog.minutes} min read
            </p>
            <h1 style={{ fontSize: "2.5rem", marginTop: "0.5rem" }}>
              {blog.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <article
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            padding: "3rem 1.5rem",
            fontSize: "1.05rem",
            lineHeight: "1.9",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content}

          {/* CTA */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, #064e3b, #022c22)",
            }}
          >
            <h3>Want deeper relationship mastery?</h3>
            <p>
              Discover proven emotional attraction principles used by top
              relationship coaches.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.9rem 1.6rem",
                borderRadius: "999px",
                background: "#34d399",
                color: "#022c22",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Learn More →
            </a>
          </div>

          <p style={{ marginTop: "2rem" }}>
            <Link href="/dating">← Back to Dating</Link>
          </p>
        </article>
      </main>
    </>
  );
    }
    
