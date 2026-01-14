import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Sivlenk</title>
        <meta
          name="description"
          content="Learn more about Sivlenk, our mission, and how we provide smart deals and honest picks."
        />
      </Head>

      <main style={{ padding: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <h1>About Sivlenk</h1>

        <p>
          Sivlenk is a curated deals and recommendations platform focused on
          helping people discover high-quality products across wellness,
          lifestyle, food, and digital solutions.
        </p>

        <p>
          Our mission is simple: <strong>Smart deals. Honest picks.</strong>
          Every product featured on Sivlenk is carefully reviewed to ensure
          real value for our audience.
        </p>

        <p>
          Sivlenk may earn a commission from affiliate links, at no extra cost
          to you. This helps us keep the platform free and continuously improve
          our recommendations.
        </p>
      </main>
    </>
  );
    }
    
