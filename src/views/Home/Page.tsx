import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { hybritMenuItems } from "@utils/misc";
import { commonMessages } from "@temp/intl";
import { Button, Loader, ProductsFeatured } from "../../components";
import { generateCategoryUrl } from "../../core/utils";

import * as PreRender from "./PreRender";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_collection_backgroundImage,
} from "./gqlTypes/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_collection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();

  const [imageCounter, setImageCounter] = React.useState(0);
  const [preRender, setPrerender] = React.useState("visible");
  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageCounter(imageCounter => imageCounter + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPrerender("hidden");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (imageCounter > 1)
    setImageCounter(imageCounter => imageCounter - imageCounter);

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>

      <PreRender.PreRenderImages val={preRender} />

      <div
        className="home-page__hero"
        style={PreRender.mappedBackgrounds[imageCounter]}
      >
        <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              <h1> ALLES ONDER ÉÉN DAK! </h1>
            </span>
          </div>
        </div>
        <div className="home-page__hero-action">
          {loading && !categories ? (
            <Loader />
          ) : (
            categoriesExist() && (
              <Link
                to={generateCategoryUrl(
                  categories.edges[0].node.id,
                  categories.edges[0].node.name
                )}
              >
                <Button testingContext="homepageHeroActionButton">
                  {/* {intl.formatMessage(commonMessages.seeOurServices)} */}
                  {intl.formatMessage(commonMessages.seeOurBikes)}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
      <ProductsFeatured
        title={intl.formatMessage(commonMessages.highlighted)}
      />
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>{intl.formatMessage(commonMessages.shopByCategory)}</h3>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${
                          category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                        })`,
                      }}
                    />
                    <h3>
                      {category.name === hybritMenuItems.HYBRIT_COLLECTIE
                        ? intl.formatMessage(commonMessages.hybritCollection)
                        : category.name}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
