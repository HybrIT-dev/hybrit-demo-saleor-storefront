import React from "react";
import { useIntl, FormattedMessage } from "react-intl";

import { Address, DropdownMenu, IconButton, Tile } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

const defaultShippingAddress = (
  <S.MenuItem>
    <FormattedMessage defaultMessage="Instellen als standaard verzendadres" />
  </S.MenuItem>
);
const defaultBillingAddress = (
  <S.MenuItem>
    <FormattedMessage defaultMessage="Stel in als standaard factuuradres" />
  </S.MenuItem>
);

export const AddressTile: React.FC<IProps> = ({
  onEdit,
  onRemove,
  setDefault,
  address,
}: IProps) => {
  const intl = useIntl();
  const header = (
    <S.HeaderContent>
      <DropdownMenu
        type="clickable"
        header={
          <IconButton testingContext="expandButton" name="expand" size={24} />
        }
        items={[
          {
            content: defaultBillingAddress,
            onClick: () => {
              setDefault("BILLING");
            },
            testingContext: "set-billing",
          },
          {
            content: defaultShippingAddress,
            onClick: () => {
              setDefault("SHIPPING");
            },
            testingContext: "set-shipping",
          },
        ]}
      />

      {address.isDefaultBillingAddress && address.isDefaultShippingAddress
        ? intl.formatMessage({ defaultMessage: "Standaard adres" })
        : address.isDefaultShippingAddress
        ? intl.formatMessage({ defaultMessage: "Standaard verzendadres" })
        : address.isDefaultBillingAddress
        ? intl.formatMessage({ defaultMessage: "Standaard factuuradres" })
        : null}
    </S.HeaderContent>
  );
  const footer = (
    <S.FooterContent>
      <div>
        <IconButton
          testingContext="editButton"
          name="edit"
          onClick={onEdit}
          size={22}
        />
      </div>
      <div>
        <IconButton
          testingContext="removeButton"
          name="trash"
          onClick={onRemove}
          size={19}
        />
      </div>
    </S.FooterContent>
  );

  const content = <Address {...address} />;
  return (
    <S.Wrapper
      data-test-billing-default={address.isDefaultBillingAddress}
      data-test-shipping-default={address.isDefaultShippingAddress}
    >
      <Tile footer={footer} header={header}>
        {content}
      </Tile>
    </S.Wrapper>
  );
};
