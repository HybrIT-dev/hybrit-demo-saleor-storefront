import React from "react";
import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";
import ReactSVG from "react-svg";

import {
  Button,
  CartCostsSummary,
  Loader,
  OfflinePlaceholder,
} from "@components/atoms";
import { CardHeader } from "@components/molecules";
import { TaxedMoney } from "@components/containers";
import { useHandlerWhenClickedOutside, useNetworkStatus } from "@hooks";
import { ITaxedMoney } from "@types";

import { IItems } from "@saleor/sdk/lib/api/Cart/types";

import cartImg from "images/cart.svg";
import { CartRow, Overlay } from "..";
import * as S from "./styles";

const generateCart = (
  items: IItems,
  removeItem: (variantId: string) => any,
  updateItem: (variantId: string, quantity: number) => any
) => {
  return items?.map(({ id, variant, quantity, totalPrice }, index) => (
    <CartRow
      type="condense"
      key={id ? `id-${id}` : `idx-${index}`}
      index={index}
      id={variant?.product?.id || ""}
      name={variant?.product?.name || ""}
      maxQuantity={variant.quantityAvailable || quantity}
      quantity={quantity}
      onRemove={() => removeItem(variant.id)}
      onQuantityChange={quantity => updateItem(variant.id, quantity)}
      thumbnail={{
        ...variant?.product?.thumbnail,
        alt: variant?.product?.thumbnail?.alt || "",
      }}
      totalPrice={<TaxedMoney taxedMoney={totalPrice} />}
      unitPrice={<TaxedMoney taxedMoney={variant?.pricing?.price} />}
      sku={variant.sku}
      attributes={variant.attributes?.map(attribute => {
        return {
          attribute: {
            id: attribute.attribute.id,
            name: attribute.attribute.name || "",
          },
          values: attribute.values.map(value => {
            return {
              id: value?.id,
              name: value?.name || "",
              value: value?.value,
            };
          }),
        };
      })}
    />
  ));
};

export interface ICartSidebar {
  items: IItems;
  removeItem: (variantId: string) => any;
  updateItem: (variantId: string, quantity: number) => any;
  totalPrice?: ITaxedMoney | null;
  shippingTaxedPrice?: ITaxedMoney | null;
  promoTaxedPrice?: ITaxedMoney | null;
  subtotalPrice?: ITaxedMoney | null;
  hide: () => void;
  show: boolean;
  target?: HTMLElement | null;
  continueShopping: () => void;
  goToCart: () => void;
  proceedToCheckout: () => void;
}

const CartSidebar: React.FC<ICartSidebar> = ({
  items,
  removeItem,
  updateItem,
  totalPrice,
  shippingTaxedPrice,
  promoTaxedPrice,
  subtotalPrice,
  hide,
  show,
  target,
  continueShopping,
  goToCart,
  proceedToCheckout,
}: ICartSidebar) => {
  const { online } = useNetworkStatus();
  const intl = useIntl();

  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    hide();
  });

  const missingVariants = () => {
    return items?.find(item => !item.variant || !item.totalPrice);
  };

  return (
    <Overlay
      position="right"
      duration={0}
      show={show}
      hide={hide}
      target={target}
      testingContext="cartOverlay"
    >
      <S.Wrapper ref={setElementRef()}>
        <CardHeader divider onHide={hide} prefix={<ReactSVG path={cartImg} />}>
          <span>{intl.formatMessage(commonMessages.myCart)}</span>
        </CardHeader>
        <S.Content>
          {!online ? (
            <S.EmptyCart>
              <OfflinePlaceholder />
            </S.EmptyCart>
          ) : items?.length ? (
            missingVariants() ? (
              <Loader />
            ) : (
              <S.Cart>{generateCart(items, removeItem, updateItem)}</S.Cart>
            )
          ) : (
            <S.EmptyCart>
              <S.EmptyCartTitle>
                {intl.formatMessage(commonMessages.cartIsEmpty)}
              </S.EmptyCartTitle>
              <S.EmptyCartDescription>
                {intl.formatMessage(commonMessages.cartIsEmptyExplanation)}
              </S.EmptyCartDescription>
              <Button
                name="continueShopping"
                testingContext="emptyCartHideOverlayButton"
                color="secondary"
                fullWidth
                onClick={continueShopping}
              >
                {intl.formatMessage(commonMessages.continueShopping)}
              </Button>
            </S.EmptyCart>
          )}
        </S.Content>
        {online && !!items?.length && (
          <S.Footer>
            <CartCostsSummary
              subtotalPrice={subtotalPrice}
              totalPrice={totalPrice}
              shippingPrice={shippingTaxedPrice}
              discountPrice={promoTaxedPrice}
            />
            <Button
              name="gotoCartView"
              testingContext="gotoCartViewButton"
              color="secondary"
              fullWidth
              onClick={goToCart}
            >
              {intl.formatMessage(commonMessages.gotoCart)}
            </Button>
            <Button
              name="gotoCheckout"
              testingContext="gotoCheckoutButton"
              color="primary"
              fullWidth
              onClick={proceedToCheckout}
            >
              {intl.formatMessage(commonMessages.gotoCheckout)}
            </Button>
          </S.Footer>
        )}
      </S.Wrapper>
    </Overlay>
  );
};

export { CartSidebar };
