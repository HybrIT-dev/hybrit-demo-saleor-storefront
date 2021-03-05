import "./scss/index.scss";

import * as React from "react";

import { channelSlug } from "@temp/constants";
import hybritImage from "../../images/hybrit-afbeelding.jpg";

import { MetaWrapper } from "../../components";
import Page from "./Page";
import { TypedHomePageQuery } from "./queries";

const View: React.FC = () => (
  <div className="home-page">
    <TypedHomePageQuery
      alwaysRender
      displayLoader={false}
      variables={{ channel: channelSlug }}
      errorPolicy="all"
    >
      {({ data, loading }) => {
        const planetImage = {
          ...data.collection?.backgroundImage,
          url: hybritImage,
        };
        return (
          <MetaWrapper
            meta={{
              description: data.shop ? data.shop.description : "",
              title: data.shop ? data.shop.name : "",
            }}
          >
            <Page
              loading={loading}
              backgroundImage={planetImage}
              categories={data.categories}
              shop={data.shop}
            />
          </MetaWrapper>
        );
      }}
    </TypedHomePageQuery>
  </div>
);

export default View;
