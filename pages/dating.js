export default function Dating() {
  const blogs = [
    {
      title: "How to make your man worship you (without losing yourself)",
      image: "/images/dating/dating-communication.png",
      excerpt: `A man doesn’t “worship” a woman because she controls him or tries too hard.
He adores her because of how she makes him feel, how she values herself, and how she creates emotional safety and attraction at the same time.

Here’s how to build that kind of connection — naturally and powerfully.
  
  1. Master Self-Respect Before Seeking His Attention.

    Nothing is more attractive than a woman who knows her worth.

     When you respect yourself:

    - You don’t chase validation

    - You set healthy boundaries

    - You don’t tolerate inconsistency or disrespect

A man is drawn to a woman who doesn’t need him to feel whole — but chooses him.
 
  2. Let Him Feel Needed, Not Controlled

   Men thrive when they feel useful and appreciated.

 This doesn’t mean dependency — it means:

    - Appreciating his effort

    - Letting him solve problems sometimes

    - Acknowledging his strengths

When a man feels trusted and respected, his emotional investment deepens.
 
  3. Communicate Calmly, Not Emotionally Explosively

   Strong relationships are built on emotional maturity.

  Instead of reacting:

    - Speak calmly

    - Express how you feel without blame

    - Listen as much as you speak

A woman who communicates with clarity and grace becomes irreplaceable.
  
  4.Maintain Your Own Life, Passions, and Energy

    Your independence is magnetic.

    When you have:

    - Hobbies

    - Goals

    - A life beyond the relationship

You naturally become more desirable. A man admires a woman who inspires him — not one who revolves around him.
  
  5. Create Emotional Safety

When a man feels safe with you emotionally, he opens up.

You create safety by:

    - Not judging his vulnerabilities

    - Supporting his growth

    - Being consistent with your words and actions

Emotional safety builds loyalty faster than attraction alone.
   
  6. Know When to Step Back

Sometimes the most powerful move is space.

   Space allows:

     - Desire to grow

     - Reflection to happen

     - Appreciation to return

A man values what he feels he could lose.
  
  Final Thought

True devotion isn’t forced — it’s inspired.

When you lead with confidence, self-love, emotional intelligence, and boundaries, the right man won’t just admire you — he’ll cherish you.

And most importantly:
Never shrink yourself to be adored. The right man rises to meet you.`
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      image: "/images/dating/dating-redflags.png",
      excerpt:
        "Recognizing early warning signs can save you emotional pain. Here are five relationship red flags that deserve serious attention."
    },
    {
      title: "How to Make a Great First Impression on a Date",
      image: "/images/dating/dating-first-date.png",
      excerpt:
        "First impressions matter. Discover simple but powerful tips to boost confidence, connect naturally, and enjoy your first date."
    },
    {
      title: "Building Trust and Emotional Connection",
      image: "/images/dating/dating-trust.jpg",
      excerpt:
        "Trust is the foundation of any healthy relationship. Learn practical ways to build emotional safety and deepen your bond."
    },
    {
      title: "How to Maintain Long-Term Relationship Happiness",
      image: "/images/dating/dating-long-term.jpg",
      excerpt:
        "Lasting relationships require effort and intention. Explore habits that help couples grow together and stay connected."
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "2rem"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Dating & Relationships
        </h1>

        <section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.8rem",
    marginTop: "3rem"
  }}
>
  {blogs.map((blog, index) => (
    <a
      key={index}
      href={`/dating/${blog.slug || index}`}
      style={{
        position: "relative",
        height: "420px",
        borderRadius: "22px",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
        transform: "translateY(0)",
        transition: "transform 0.35s ease"
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.75)"
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15) 55%)"
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: "1.6rem",
          left: "1.6rem",
          right: "1.6rem",
          color: "#fff"
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#34d399"
          }}
        >
          Dating
        </span>

        <h3
          style={{
            marginTop: "0.4rem",
            fontSize: "1.25rem",
            lineHeight: "1.35",
            fontWeight: "700"
          }}
        >
          {blog.title}
        </h3>

        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.9rem",
            color: "#d1d5db",
            lineHeight: "1.45"
          }}
        >
          {blog.excerpt.slice(0, 90)}...
        </p>
      </div>
    </a>
  ))}
</section>
          </main>
);
    }
  
