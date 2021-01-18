import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";
import { Container } from "@components/templates";
import { checkoutMessages } from "@temp/intl";

import { OrderStatus } from "@saleor/sdk";
import * as S from "./styles";
import { IProps } from "./types";

export const messages = defineMessages({
  unfulfilled: {
    defaultMessage:
      "We hebben u een orderbevestiging per e-mail gestuurd en laten u weten wanneer de bestelling is verzonden.",
    description: "thank you subtitle",
  },
  unconfirmed: {
    defaultMessage:
      "Je bestelling is geplaatst, deze moet worden bevestigd door het personeel, we sturen je een e-mail als het klaar is.",
    description: "thank you subtitle",
  },
});

/**
 * Thank you page after completing the checkout.
 */
const ThankYou: React.FC<IProps> = ({
  orderStatus,
  orderNumber,
  continueShopping,
  orderDetails,
}: IProps) => {
  return (
    <Container data-test="thankYouView">
      <S.Wrapper>
        <S.ThankYouHeader>
          <FormattedMessage defaultMessage="Dank u" />
          <br />
          <span>
            <FormattedMessage defaultMessage="voor uw bestelling!" />
          </span>
        </S.ThankYouHeader>
        <S.Paragraph>
          <FormattedMessage defaultMessage="Uw bestelnummer is" />{" "}
          <span>{orderNumber}</span>
        </S.Paragraph>
        <S.Paragraph>
          <FormattedMessage
            {...(orderStatus === OrderStatus.UNCONFIRMED
              ? messages.unconfirmed
              : messages.unfulfilled)}
          />
        </S.Paragraph>
        <S.Buttons>
          <Button
            testingContext="continueShoppingButton"
            onClick={continueShopping}
            color="secondary"
            fullWidth
          >
            <FormattedMessage {...checkoutMessages.continueShopping} />
          </Button>
          <Button
            testingContext="gotoOrderDetailsButton"
            onClick={orderDetails}
            fullWidth
          >
            <FormattedMessage defaultMessage="ORDER DETAILS" />
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  );
};

export { ThankYou };
