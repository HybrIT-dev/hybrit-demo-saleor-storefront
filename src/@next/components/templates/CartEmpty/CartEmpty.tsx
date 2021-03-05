import React from "react";
import { FormattedMessage } from "react-intl";

import * as S from "./styles";
import { IProps } from "./types";

import { Container } from "../Container";

/**
 * Template for empty cart page.
 */
const CartEmpty: React.FC<IProps> = ({ button }: IProps) => {
  return (
    <Container>
      <S.Wrapper>
        <S.TitleFirstLine>
          <FormattedMessage defaultMessage="Jouw winkelwagen" />
        </S.TitleFirstLine>
        <S.TitleSecondLine>
          <FormattedMessage defaultMessage="ziet er leeg uit" />
        </S.TitleSecondLine>
        <S.HR />
        <S.Subtitle>
          <FormattedMessage defaultMessage="Misschien heeft u uw keuzes nog niet gemaakt" />
        </S.Subtitle>
        <S.ContinueButton>{button}</S.ContinueButton>
      </S.Wrapper>
    </Container>
  );
};

export { CartEmpty };
