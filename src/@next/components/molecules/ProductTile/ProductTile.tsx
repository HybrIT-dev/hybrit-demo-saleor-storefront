import React from "react";
import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { translateHybritProduct } from "../../../utils/misc";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const intl = useIntl();
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  return (
    <S.Wrapper>
      <S.Title data-test="productTile">
        {translateHybritProduct(product.name, intl, commonMessages)}
      </S.Title>
      <S.Price data-test="productPrice">
        <TaxedMoney taxedMoney={price} />
      </S.Price>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
      </S.Image>
    </S.Wrapper>
  );
};
