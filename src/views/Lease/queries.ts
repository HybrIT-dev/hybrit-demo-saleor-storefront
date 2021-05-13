import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";

export const leasePageQuery = gql`
  query ProductsList($channel: String) {
    shop {
      description
      name
    }
    collection(slug: "featured-products", channel: $channel) {
      backgroundImage {
        url
        alt
      }
    }
    categories(level: 0, first: 4) {
      edges {
        node {
          id
          name
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;

export const TypedLeasePageQuery = TypedQuery<null, {}>(leasePageQuery);
