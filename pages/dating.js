import Link from "next/link";

export default function Dating() {
  const blogs = [   
    {
      title: "How to Make Your Man Worship You (Without Losing Yourself)",
      image: "/images/dating/dating-communication.png",
      content: `A man doesn’t worship a woman because she controls him.

He does it because of how she makes him feel.

1. Master self‑respect
Know your worth. Set boundaries. Stop chasing validation.

2. Let him feel needed
Appreciate his effort. Trust his strength. Avoid control.

3. Communicate calmly
Speak with clarity. Listen deeply. Avoid emotional explosions.

4. Keep your own life
Passions, goals, independence make you magnetic.

5. Create emotional safety
When he feels safe, he opens up fully.`
    },
    {
      title: "Healthy Communication in Relationships",
      image: "/images/dating/healthy-communication.png",
      content: `Healthy communication is about safety, not winning.

• Speak honestly
• Listen without interrupting
• Validate feelings
• Stay calm under pressure

Strong communication builds trust and intimacy.`
    },
    {
      title: "5 Red Flags You Should Never Ignore",
      image: "/images/dating/red-flags.png",
      content: `1. Inconsistency
2. Disrespect
3. Lack of accountability
4. Emotional manipulation
5. Dishonesty

Ignoring red flags leads to pain. Awareness protects you.`
    },
    {
      title: "How to Make a Great First Impression on a Date",
      image: "/images/dating/first-impression.png",
      content: `First impressions matter.

• Dress confidently
• Maintain eye contact
• Listen more than you speak
• Be authentic
• Stay present

Confidence and warmth create attraction.`
    },
    {
      title: "Building Trust and Emotional Connection",
      image: "/images/dating/building-trust.png",
      content: `Trust grows through consistency.

• Keep your word
• Show empathy
• Communicate openly
• Be emotionally available

Connection deepens when trust is safe.`
    }
  ];

  return (
    <main style={{ padding: "3rem", background: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff", marginBottom: "2rem" }}>Dating & Relationships</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              height: "420px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          >
            {/* Background image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.6)"
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25))"
              }}
            />

            {/* Scrollable content */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "1.5rem",
                color: "#fff",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h2 style={{ marginBottom: "1rem" }}>{blog.title}</h2>

              <div
                style={{
                  overflowY: "auto",
                  paddingRight: "0.5rem",
                  lineHeight: "1.6",
                  fontSize: "0.95rem"
                }}
              >
                {blog.content.split("\n").map((line, i) => (
                  <p key={i} style={{ marginBottom: "0.75rem" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

    
        
          
