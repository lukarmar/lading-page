/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Metacore",
  titleTemplate: "MetaCore",
  defaultTitle: "Metacore",
  description: "A MetaCore é um hub de negócios de tecnologias inovadoras, soluções em blockchain e metaverso, investimentos e finanças.",
  canonical: "http://metacore.com.vc",
  openGraph: {
    url: "http://metacore.com.vc",
    title: "MetaCore",
    description: "A MetaCore é um hub de negócios de tecnologias inovadoras, soluções em blockchain e metaverso, investimentos e finanças.",
    images: [
      {
        url: "/logo_footer.png",
        alt: "Logo MetaCore",
        width: 800,
        height: 600,
      },
    ],
    site_name: "Metacore",
  },
};

export default defaultSEOConfig;
