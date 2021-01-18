import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
  search: {
    defaultMessage: "zoeken",
  },
  outOfStock: {
    defaultMessage: "Niet op voorraad",
  },
  lowStock: {
    defaultMessage: "Lage voorraad",
  },
  noItemsAvailable: {
    defaultMessage: "Geen items beschikbaar",
  },
  noPurchaseAvailable: {
    defaultMessage: "Niet beschikbaar voor verkoop",
  },
  purchaseAvailableOn: {
    defaultMessage: `Komt beschikbaar voor aankoop op {date} om {time}`,
  },
  youMightLike: {
    defaultMessage: "Je houdt misschien van",
  },
  choosePaymentMethod: {
    defaultMessage: "Kies een betalingsmethode.",
  },
  provideEmailAddress: {
    defaultMessage: "Geef een e-mailadres op.",
  },
  account: {
    defaultMessage: "Account",
  },
  myAccount: {
    defaultMessage: "Mijn Account",
  },
  orderHistory: {
    defaultMessage: "Bestelgeschiedenis",
  },
  addressBook: {
    defaultMessage: "Adresboek",
  },
  logOut: {
    defaultMessage: "Uitloggen",
  },
  firstName: {
    defaultMessage: "Voornaam",
  },
  lastName: {
    defaultMessage: "Achternaam",
  },
  password: {
    defaultMessage: "Wachtwoord",
  },
  quantity: {
    defaultMessage: "Aantal stuks",
  },
  sku: {
    defaultMessage: "SKU",
  },
  maxQtyIs: {
    defaultMessage: "Maximale hoeveelheid is {maxQuantity}",
  },
  qty: {
    defaultMessage: "Hoeveelheid",
  },
  subtotal: {
    defaultMessage: "Subtotaal",
  },
  shipping: {
    defaultMessage: "Verzending",
  },
  promoCode: {
    defaultMessage: "Promotiecode",
  },
  total: {
    defaultMessage: "Totaal",
  },
  totalPrice: {
    defaultMessage: "Totale prijs",
  },
  checkout: {
    defaultMessage: "Afrekenen",
  },
  eMail: {
    defaultMessage: "E-mailadres",
  },
  shortEmail: {
    defaultMessage: "Email",
  },
  loading: {
    defaultMessage: "Laden",
  },
  products: {
    defaultMessage: "Produkten",
  },
  price: {
    defaultMessage: "Prijs",
  },
  variant: {
    defaultMessage: "Variant",
  },
  phone: {
    defaultMessage: "Telefoon",
  },
  phoneNumber: {
    defaultMessage: "Telefoonnummer: {phone}",
  },
  showEmail: {
    defaultMessage: "E-mail: {email}",
  },
  save: {
    defaultMessage: "Opslaan",
  },
  add: {
    defaultMessage: "Toevoegen",
  },
  filterHeader: {
    defaultMessage: "FILTERS",
  },
  clearFilterHeader: {
    defaultMessage: "VERWIJDER FILTERS",
  },
  status: {
    defaultMessage: "Status",
  },
  cancel: {
    defaultMessage: "annuleren",
  },
  home: {
    defaultMessage: "Home",
  },
});

export const checkoutMessages = defineMessages({
  stepNameAddress: {
    defaultMessage: "Adres",
  },
  stepNameShipping: {
    defaultMessage: "Verzending",
  },
  stepNamePayment: {
    defaultMessage: "Betaling",
  },
  stepNameReview: {
    defaultMessage: "Bekijk",
  },
  addressNextActionName: {
    defaultMessage: "Ga verder naar Verzenden",
  },
  shippingNextActionName: {
    defaultMessage: "Ga verder met betalen",
  },
  paymentNextActionName: {
    defaultMessage: "Ga door naar beoordeling",
  },
  reviewNextActionName: {
    defaultMessage: "Plaats bestelling",
  },
  addNewAddress: {
    defaultMessage: "Nieuw adres toevoegen",
  },
  shippingMethod: {
    defaultMessage: "VERZENDMETHODE",
  },
  billingAddress: {
    defaultMessage: "Facturatieadres",
  },
  paymentMethod: {
    defaultMessage: "BETALINGSMIDDEL",
  },
  reviewOrder: {
    defaultMessage: "CONTROLEER ORDER",
  },
  shippingAddress: {
    defaultMessage: "Verzendingsadres",
  },
  continueShopping: {
    defaultMessage: "DOORGAAN MET WINKELEN",
  },
});

export const prodListHeaderCommonMsg = defineMessages({
  sortOptionsClear: {
    defaultMessage: "Verwijder...",
  },
  sortOptionsPrice: {
    defaultMessage: "Prijs Laag-Hoog",
  },
  sortOptionsPriceDsc: {
    defaultMessage: "Prijs Hoog-Laag",
  },
  sortOptionsName: {
    defaultMessage: "Naam Stijgend",
  },
  sortOptionsNameDsc: {
    defaultMessage: "Naam Dalend",
  },
  sortOptionsUpdatedAt: {
    defaultMessage: "Laatst Bijgewerkt Oplopend",
  },
  sortOptionsUpdatedAtDsc: {
    defaultMessage: "Laatst Bijgewerkt Aflopend",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Niet in rekening gebracht",
  },
  partiallyCharged: {
    defaultMessage: "Gedeeltelijk in rekening gebracht",
  },
  fullyCharged: {
    defaultMessage: "Volledig in rekening gebracht",
  },
  partiallyRefunded: {
    defaultMessage: "Gedeeltelijk terugbetaald",
  },
  fullyRefunded: {
    defaultMessage: "Volledig terugbetaald",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "E-mailconcept",
  },
  unfulfilled: {
    defaultMessage: "Niet vervuld",
  },
  partiallyFulfilled: {
    defaultMessage: "Gedeeltelijk vervuld",
  },
  fulfilled: {
    defaultMessage: "Vervuld",
  },
  canceled: {
    defaultMessage: "Geannuleerd",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Not charged":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Partially charged":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Fully charged":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Partially refunded":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Fully refunded":
      return intl.formatMessage(paymentStatusMessages.fullyRefunded);
    default:
      return status;
  }
}

export function translateOrderStatus(status: string, intl: IntlShape): string {
  switch (status) {
    case "Draft":
      return intl.formatMessage(orderStatusMessages.draft);
    case "Unfulfilled":
      return intl.formatMessage(orderStatusMessages.unfulfilled);
    case "Partially fulfilled":
      return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
    case "Fulfilled":
      return intl.formatMessage(orderStatusMessages.fulfilled);
    case "Canceled":
      return intl.formatMessage(orderStatusMessages.canceled);
    default:
      return status;
  }
}
