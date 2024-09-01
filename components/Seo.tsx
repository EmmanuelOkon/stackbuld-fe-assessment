import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
