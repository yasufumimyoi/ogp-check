import React from "react";
import { DefaultSeo } from "next-seo";

export default function Usecase({ testData }: { testData: any }) {
  const ogpImage = {
    url: "https://images.microcms-assets.io/assets/72f1bc5502644c1eb1d16885a4a3e700/2c197b44771349faad1f07310f3b00a7/ekkyou_01.jpg",
    width: 1440,
    height: 860,
    alt: "fadsfsa",
    type: "image/jpeg",
  };
  console.log(testData);
  return (
    <>
      <DefaultSeo
        defaultTitle={"TEST"}
        description={"DESCRIPTION"}
        openGraph={{
          type: "article",
          title: "OG TITLE",
          description: "OG DESC",
          site_name: "SITE NAME",
          url: "https://www.schole-corp.com",
          images: [
            ogpImage ?? {
              url: `${"https://www.schole-corp.com/images/common/meta/ogp.jpg"}`,
              width: 1200,
              height: 630,
              alt: "HEY",
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
      />
      <section>test</section>
    </>
  );
}

export const getStaticPaths = async () => {
  const test = [
    { id: "1", title: "TEST1" },
    { id: "2", title: "TEST2" },
    { id: "3", title: "TEST3" },
  ];
  const paths = test.map((content) => ({
    params: {
      id: content.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  //   const id = params.id;
  //   const draftKey = previewData?.draftKey
  //     ? { draftKey: previewData.draftKey }
  //     : {};
  //   const allArticleData = await client.get({
  //     endpoint: "usecase",
  //   });
  //   const data = await client.get({
  //     endpoint: "usecase",
  //     contentId: id,
  //     queries: draftKey,
  //   });
  //   if (!data) {
  //     return { notFound: true };
  //   }
  //   const answererArr: string[] = [];
  //   data.usecaseArticle.forEach((elm) => {
  //     if (elm.fieldId === "answer" && !answererArr.includes(elm.jpAnswerer)) {
  //       answererArr.push(elm.jpAnswerer);
  //     }
  //   });
  const test = [
    { id: "1", title: "TEST1" },
    { id: "2", title: "TEST2" },
    { id: "3", title: "TEST3" },
  ];
  return {
    props: {
      testData: test,
    },
  };
};
