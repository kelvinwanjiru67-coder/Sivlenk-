import Head from "next/head";

export default function AffiliateDisclosure() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | Sivlenk</title>
      </Head>

      <main style={{ padding: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Affiliate Disclosure</h1>

        <p>
          Sivlenk participates in affiliate marketing programs. This means we
          may earn commissions on purchases made through links on this site.
        </p>

        <p>
          These commissions come at no additional cost to you and help support
          the maintenance of this platform.
        </p>

        <p>
          We only recommend products we believe provide genuine value.
        </p>
      </main>
    </>
  );
}

