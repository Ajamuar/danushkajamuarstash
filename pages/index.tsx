import { Box, Center, Flex, Grid } from "@chakra-ui/layout";
import Head from "next/head";
import Header from "../components/Header";
import ProductCatalog from "../components/ProductCatalog";

export default function Home() {
  return (
    <div>
      <Head>
        <title>D Anushka's Stash</title>
        <meta
          name="description"
          content="A catalog of products handpicked by Anushka Jamuar."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: "100vh" }}>
        <Header />
        <ProductCatalog />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
