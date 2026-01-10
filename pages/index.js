import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Affiliate Product Hub</title>
        <meta name="description" content="Top physical and digital product recommendations." />
      </Head>

      <main style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        padding: "3rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem" }}>Smart Deals. Honest Picks.</h1>
        <p style={{ color: "#cbd5e1", maxWidth: "600px", margin: "1rem auto" }}>
          Discover trusted physical and digital products including Digistore24 offers.
        </p>
      </main>
    </>
  );
}
