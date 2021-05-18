import "./scss/index.scss";

import * as React from "react";
import { channelSlug } from "@temp/constants";
import Page from "./Page";
import { TypedLeasePageQuery } from "./queries";

const View: React.FC = () => (
  <div className="lease-page">
    <TypedLeasePageQuery
      alwaysRender
      displayLoader={false}
      variables={{ channel: channelSlug }}
      errorPolicy="all"
    >
      {({ data, loading }) => {
        return <Page loading={loading} />;
      }}
    </TypedLeasePageQuery>
  </div>
);

export default View;
