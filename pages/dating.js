export default function Dating() {
  const blogs = [
    {
      title: "How to make your man worship you (without losing yourself)",
      image: "/images/dating/dating-communication.png",
      excerpt: `A man doesn’t “worship” a woman because she controls him or tries too hard.
He adores her because of how she makes him feel, how she values herself, and how she creates emotional safety and attraction at the same time.

Here’s how to build that kind of connection — naturally and powerfully.
  
  1. **Master Self-Respect Before Seeking His Attention**.

    Nothing is more attractive than a woman who knows her worth.

     When you respect yourself:

    - You don’t chase validation

    - You set healthy boundaries

    - You don’t tolerate inconsistency or disrespect

A man is drawn to a woman who doesn’t need him to feel whole — but chooses him.
 
  2. **Let Him Feel Needed, Not Controlled**

   Men thrive when they feel useful and appreciated.

 This doesn’t mean dependency — it means:

    - Appreciating his effort

    - Letting him solve problems sometimes

    - Acknowledging his strengths

When a man feels trusted and respected, his emotional investment deepens.
 
  3. **Communicate Calmly, Not Emotionally Explosively**

   Strong relationships are built on emotional maturity.

  Instead of reacting:

    - Speak calmly

    - Express how you feel without blame

    - Listen as much as you speak

A woman who communicates with clarity and grace becomes irreplaceable.
  
  4.**Maintain Your Own Life, Passions, and Energy**

    Your independence is magnetic.

    When you have:

    - Hobbies

    - Goals

    - A life beyond the relationship

You naturally become more desirable. A man admires a woman who inspires him — not one who revolves around him.
  
  5. **Create Emotional Safety**

When a man feels safe with you emotionally, he opens up.

You create safety by:

    - Not judging his vulnerabilities

    - Supporting his growth

    - Being consistent with your words and actions

Emotional safety builds loyalty faster than attraction alone.
   
  6. **Know When to Step Back**

Sometimes the most powerful move is space.

   Space allows:

     - Desire to grow

     - Reflection to happen

     - Appreciation to return

A man values what he feels he could lose.
  
  **Final Thought**

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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {blogs.map((blog, index) => (
            <article
              key={index}
              style={{
                background: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "18px",
                padding: "1.25rem"
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "1rem"
                }}
              />

              <h3 style={{ marginBottom: "0.5rem" }}>{blog.title}</h3>

              <p style={{ fontSize: "0.95rem", color: "#cbd5f5" }}>
                {blog.excerpt}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
      }
        
