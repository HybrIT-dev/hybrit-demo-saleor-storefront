import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";
import { Button, OverlayTheme, OverlayType } from "..";
import { OverlayContextInterface } from "../Overlay";

const CheckoutAsGuest: React.FC<{
  overlay: OverlayContextInterface;
  checkoutUrl: string;
}> = ({ overlay, checkoutUrl }) => (
  <div className="checkout-login__guest">
    <h3 className="checkout__header">
      <FormattedMessage defaultMessage="Ga verder als gast" />
    </h3>
    <p>
      <FormattedMessage defaultMessage="Maak u geen zorgen als u geen account wilt registreren. U kunt als gast afrekenen. Wij geven net zo veel om u als elke geregistreerde gebruiker." />
    </p>
    <Link to={checkoutUrl}>
      <Button testingContext="continueAsGuestButton">
        <FormattedMessage defaultMessage="Ga door als gast" />
      </Button>
    </Link>

    <p>
      <FormattedMessage defaultMessage="of je kan" />{" "}
      <span
        data-test="showRegisterOverlay"
        className="u-link"
        onClick={() => overlay.show(OverlayType.register, OverlayTheme.right)}
      >
        <FormattedMessage defaultMessage="een account maken" />
      </span>
    </p>
  </div>
);

export default CheckoutAsGuest;
