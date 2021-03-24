export function maybe<T>(exp: () => T): T | undefined;
export function maybe<T>(exp: () => T, d: T): T;
export function maybe(exp: any, d?: any) {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
}

export function filterNotEmptyArrayItems<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

export const translateCategory = (name: string) => {
  switch (name) {
    default:
      return name;
  }
};

export function translateHybritProduct(
  name: string,
  intl?: any,
  commonMessages?: any
) {
  switch (name) {
    case "HybrIT Balpen":
      return intl.formatMessage(commonMessages.hybritPen);

    case "HybrIT External SSD":
      return intl.formatMessage(commonMessages.hybritExtSSD);

    case "hybrit himalaya zoutlamp":
      return intl.formatMessage(commonMessages.hybritSaltLamp);

    case "HybrIT Koffiekopje":
      return intl.formatMessage(commonMessages.hybritCoffeeCup);

    case "HybrIT Bier":
      return intl.formatMessage(commonMessages.hybritBeer);

    case "HybrIT Gember Bier":
      return intl.formatMessage(commonMessages.hybritGingerBeer);

    default:
      return name;
  }
}

export function translateHybritBreadcrumbs(
  value: string,
  intl: any,
  commonMessages: any
) {
  switch (value) {
    case hybritMenuItems.HYBRIT_COLLECTIE:
      return intl.formatMessage(commonMessages.hybritCollection);
    case hybritMenuItems.HYBRIT_OFFICE_GADGETS:
      return intl.formatMessage(commonMessages.hybritOfficeGadgets);
    case hybritMenuItems.HYBRIT_KITCHEN:
      return intl.formatMessage(commonMessages.hybritKitchen);
    case hybritMenuItems.HYBRIT_DRINKS:
      return intl.formatMessage(commonMessages.hybritDrinks);
    default:
      return translateHybritProduct(value, intl, commonMessages);
  }
}

export function translateHybritAttribute(
  name: string,
  intl: any,
  commonMessages: any
) {
  return name === hybritProductAttributes.BOTTLE_SIZE
    ? intl.formatMessage(commonMessages.bottleSize)
    : name === hybritProductAttributes.CONTENTS
    ? intl.formatMessage(commonMessages.contents)
    : name === hybritProductAttributes.FLAVOUR
    ? intl.formatMessage(commonMessages.flavour)
    : name === hybritProductAttributes.INGREDIENTS
    ? intl.formatMessage(commonMessages.ingredients)
    : name === hybritProductAttributes.COLOR
    ? intl.formatMessage(commonMessages.color)
    : name === hybritProductAttributes.MATERIAL
    ? intl.formatMessage(commonMessages.material)
    : name === hybritProductAttributes.SIZE
    ? intl.formatMessage(commonMessages.size)
    : name;
}

export function translateMenuItems(name, intl, commonMessages) {
  return name === hybritMenuItems.HYBRIT_COLLECTION
    ? intl.formatMessage(commonMessages.hybritCollection)
    : name === hybritMenuItems.DRANKJES
    ? intl.formatMessage(commonMessages.drinks)
    : name === hybritMenuItems.KANTOOR
    ? intl.formatMessage(commonMessages.office)
    : name === hybritMenuItems.KEUKEN
    ? intl.formatMessage(commonMessages.kitchen)
    : name === hybritMenuItems.COLLECTIONS
    ? intl.formatMessage(commonMessages.collections)
    : name === hybritMenuItems.HIGHLIGHTED_PRODUCTS
    ? intl.formatMessage(commonMessages.highlightedProducts)
    : name === hybritMenuItems.OFFERS
    ? intl.formatMessage(commonMessages.offers)
    : name === hybritMenuItems.ABOUT_US
    ? intl.formatMessage(commonMessages.aboutUs)
    : name;
}

export const hybritMenuItems = {
  COLLECTIONS: "Collecties",
  HIGHLIGHTED_PRODUCTS: "Uitgelichte producten",
  OFFERS: "Aanbiedingen",
  ABOUT_US: "Over Ons",
  HYBRIT_COLLECTION: "HybrIT Collectie",
  HYBRIT_COLLECTIE: "HybrIT Collection",
  HYBRIT_OFFICE_GADGETS: "Hybrit Office Gadgets",
  HYBRIT_KITCHEN: "HybrIT Kitchen",
  HYBRIT_DRINKS: "HybrIT Drinks",
  DRANKJES: "Drankjes",
  KANTOOR: "Kantoor",
  KEUKEN: "Keuken",
};

export const hybritProductDescriptions = {
  FS_BACKEND_DEV:
    "Of je team nu extra development capaciteit kan gebruiken, hulp nodig heeft bij de opzet van CI/CD of advies wil over architectuur: HybrIT helpt je team graag vooruit. Wij hebben ervaren software developers in dienst die op uurbasis ingehuurd kunnen worden. Developers die dagelijks in contact staan met ons development team. Zo krijg je in feite beschikking over alle expertise die we in huis hebben, ook als je maar één developer inhuurt. En daar zetten wij een eerlijk tarief tegenover",
  FS_FRONTEND_DEV:
    "Of je team nu extra development capaciteit kan gebruiken, hulp nodig heeft bij de opzet van CI/CD of advies wil over architectuur: HybrIT helpt je team graag vooruit. Wij hebben ervaren software developers in dienst die op uurbasis ingehuurd kunnen worden. Developers die dagelijks in contact staan met ons development team. Zo krijg je in feite beschikking over alle expertise die we in huis hebben, ook als je maar één developer inhuurt. En daar zetten wij een eerlijk tarief tegenover",
  INTEG_DEV:
    "Of je team nu extra development capaciteit kan gebruiken, hulp nodig heeft bij de opzet van CI/CD of advies wil over architectuur: HybrIT helpt je team graag vooruit. Wij hebben ervaren software developers in dienst die op uurbasis ingehuurd kunnen worden. Developers die dagelijks in contact staan met ons development team. Zo krijg je in feite beschikking over alle expertise die we in huis hebben, ook als je maar één developer inhuurt. En daar zetten wij een eerlijk tarief tegenover",
  HYBRIT_BEER:
    "Een gouden pils van eigen hand, rechtstreeks uit de HybrIT brouwerij",
  HYBRIT_GINGER_BEER:
    "Met een vleugje citroen en verse gember, rechstreeks uit de HybrIT Brouwerij",
  HYBRIT_PEN: "Handige HybrIT style balpen met opberg etui",
  HYBRIT_SSD: "Een razendsnelle 512GB External SSD in HybrIT style oranje",
  HYBRIT_CUP: "Een handig espresso kopje in HybrIT stijl oranje of zwart",
};

export const hybritProductAttributes = {
  BOTTLE_SIZE: "Flessengrootte",
  FLAVOUR: "Smaak",
  CONTENTS: "Inhoud",
  INGREDIENTS: "Ingredienten",
  COLOR: "Kleur",
  SIZE: "Grootte",
  MATERIAL: "Materiaal",
};

export const hybritAbout = {
  HYBRIT_ABOUT_HEADER: "HybrIT is de one-stop-specialist voor portals",
  HYBRIT_ABOUT_P1:
    "Wij leveren portals met standaard API's die te koppelen zijn aan alle grotere ERP-systemen. Is maatwerk nodig? Of wil je speciale features toevoegen? Wij hebben alle kennis in huis om portalen precies naar uw wensen te bouwen en te integreren. Wij zorgen ervoor dat uw nieuwe online bedrijfsportaal, met of zonder mobiele app, volledig aansluit op uw bestaande IT-systeem en uw bedrijf zoveel mogelijk ondersteunt.",
  HYBRIT_ABOUT_P2:
    "HybrIT maakt uw digitale ambities waar; van advies tot uitvoering.",
  HYBRIT_ABOUT_P3: "Neem contact op met HybrIT!",
};
