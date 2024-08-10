import Layout from "@/components/layouts";
import HomeView from "@/views/home";
import Head from "next/head";

export default function HomePage({ nfts }) {
  return (
    <Layout>
      <Head>
        <title>Home | NFTERS</title>
        <meta name="description" content="Home page of NFTERS" />
        <meta property="og:title" content="NFT is Cool" />
        <meta property="og:description" content="NFT is Super cool" />
        <meta property="og:image" content="https://c.files.bbci.co.uk/31F0/production/_117548721_nfts2.jpg" />
        {/* We can add more attributes and details for SEO */}
      </Head>
      <HomeView />
    </Layout>
  );
}

// For API call to make page server side rendering.
export async function getStaticProps() {
  const nfts = [];
  if (false) {
    // If there is a server error, you might want to throw an error instead of returning so that the cache is not updated
    throw new Error(`Something went wrong. Please try again later.`)
  }
  return {
    props: {
      nfts,
    },
    //revalidate: 10, // Currently disabling as we are not calling API
  };
}
