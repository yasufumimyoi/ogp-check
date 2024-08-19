import { Html, Head, Main, NextScript } from "next/document";
import { DefaultSeo, NextSeo } from "next-seo";

export default function Document() {
  return (
    <Html lang="en">
      {/* <DefaultSeo
        defaultTitle={"TEST"}
        description={"DESCRIPTION"}
        openGraph={{
          type: "article",
          title: "OG TITLE",
          description: "OG DESC",
          site_name: "SITE NAME",
          url: "https://www.schole-corp.com",
          images: [
            {
              url: "https://www.schole-corp.com/images/common/meta/ogp.jpg",
              width: 1200,
              height: 630,
              alt: "FDKSJFSLD",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        facebook={{
          appId: "517270843849718",
        }}
      /> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
