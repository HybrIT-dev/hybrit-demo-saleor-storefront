import React from "react";
import { useIntl } from "react-intl";
import { Button } from "@components/atoms";
import { commonMessages } from "@temp/intl";

export interface IAddToCartButton {
  disabled: boolean;
  onSubmit: () => void;
}

export const AddToCartButton: React.FC<IAddToCartButton> = ({
  onSubmit,
  disabled,
}) => {
  const intl = useIntl();
  const addToCartString = intl.formatMessage(commonMessages.addToCart);
  return (
    <Button
      fullWidth
      testingContext="addProductToCartButton"
      onClick={onSubmit}
      color="primary"
      disabled={disabled}
    >
      {addToCartString}
    </Button>
  );
};
AddToCartButton.displayName = "AddToCartButton";
export default AddToCartButton;
