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

export function translateMenuItems(
  name: string,
  intl: any,
  commonMessages: any
) {
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
    : name === hybritMenuItems.ALL_E_BIKES
    ? intl.formatMessage(commonMessages.allEBikes)
    : name === hybritMenuItems.DISCOVER_VOGUE
    ? intl.formatMessage(commonMessages.discoverVogue)
    : name === hybritMenuItems.STORES
    ? intl.formatMessage(commonMessages.vogueStores)
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
  ALL_E_BIKES: "All E-Bikes",
  DISCOVER_VOGUE: "Discover Vogue",
  STORES: "Stores",
};

export function translateHybritText(
  text: string,
  intl: any,
  commonMessages: any,
  formatBlock: (value: string) => any,
  block: any
) {
  return text?.includes(hybritProductDescriptions.FS_BACKEND_DEV)
    ? formatBlock(intl.formatMessage(commonMessages.hybritFsBackEndDev))
    : text?.includes(hybritProductDescriptions.FS_FRONTEND_DEV)
    ? formatBlock(intl.formatMessage(commonMessages.hybritFsFrontEndDev))
    : text?.includes(hybritProductDescriptions.INTEG_DEV)
    ? formatBlock(intl.formatMessage(commonMessages.integrationDev))
    : text?.includes(hybritProductDescriptions.HYBRIT_BEER)
    ? formatBlock(intl.formatMessage(commonMessages.hybritBeerDescription))
    : text?.includes(hybritProductDescriptions.HYBRIT_GINGER_BEER)
    ? formatBlock(
        intl.formatMessage(commonMessages.hybritGingerBeerDescription)
      )
    : text?.includes(hybritProductDescriptions.HYBRIT_PEN)
    ? formatBlock(intl.formatMessage(commonMessages.hybritPenDescription))
    : text?.includes(hybritProductDescriptions.HYBRIT_SSD)
    ? formatBlock(intl.formatMessage(commonMessages.hybritExtSSDDescription))
    : text?.includes(hybritProductDescriptions.HYBRIT_CUP)
    ? formatBlock(intl.formatMessage(commonMessages.hybritCoffeeCupDescription))
    : text?.includes(hybritAbout.HYBRIT_ABOUT_HEADER)
    ? formatBlock(intl.formatMessage(commonMessages.hybritAboutHeader))
    : text?.includes(hybritAbout.HYBRIT_ABOUT_P1)
    ? formatBlock(intl.formatMessage(commonMessages.hybritAboutP1))
    : text?.includes(hybritAbout.HYBRIT_ABOUT_P2)
    ? formatBlock(intl.formatMessage(commonMessages.hybritAboutP2))
    : text?.includes(hybritAbout.HYBRIT_ABOUT_P3)
    ? formatBlock(intl.formatMessage(commonMessages.hybritAboutP3))
    : text?.includes(vogueProductDescriptions.VOGUE_EASY_GO_part1)
    ? formatBlock(intl.formatMessage(commonMessages.vogueEasyGoPart1))
    : text?.includes(vogueProductDescriptions.VOGUE_EASY_GO_part2)
    ? formatBlock(intl.formatMessage(commonMessages.vogueEasyGoPart2))
    : text?.includes(vogueProductDescriptions.VOGUE_SLX_part1)
    ? formatBlock(intl.formatMessage(commonMessages.vogueSLXPart1))
    : text?.includes(vogueProductDescriptions.VOGUE_SLX_part2)
    ? formatBlock(intl.formatMessage(commonMessages.vogueSLXPart2))
    : text?.includes(vogueProductDescriptions.VOGUE_ELITE7_part1)
    ? formatBlock(intl.formatMessage(commonMessages.vogueElite7Part1))
    : text?.includes(vogueProductDescriptions.VOGUE_ELITE7_part2)
    ? formatBlock(intl.formatMessage(commonMessages.vogueElite7Part2))
    : text?.includes(vogueProductDescriptions.VOGUE_SUPERIOR_DELUXE_part1)
    ? formatBlock(intl.formatMessage(commonMessages.vogueSuperiorDeluxePart1))
    : text?.includes(vogueProductDescriptions.VOGUE_SUPERIOR_DELUXE_part2)
    ? formatBlock(intl.formatMessage(commonMessages.vogueSuperiorDeluxePart2))
    : text?.includes(vogueProductDescriptions.VOGUE_TRIVELO_part1)
    ? formatBlock(intl.formatMessage(commonMessages.vogueTriVeloPart1))
    : text?.includes(vogueProductDescriptions.VOGUE_TRIVELO_part2)
    ? formatBlock(intl.formatMessage(commonMessages.vogueTriVeloPart2))
    : { ...block, data: { text } };
}

export const vogueProductDescriptions = {
  VOGUE_EASY_GO_part1:
    "De Vogue Easy Go is een stoere vouwfiets voor ieder type fietser. De motor is te vinden in het achterwiel. Met 7 speed versnellingen en 5 digitale elektrische ondersteuning kom je heerlijk snel en zonder moeite bij je bestemming. De maximale snelheid van deze elektrische vouwfiets ligt op 25 kilometer per uur. Zo ben je snel onderweg over korte afstanden. De vaste zadelpen en voorvork zorgen voor een stabiele wegligging.",
  VOGUE_EASY_GO_part2:
    "De Easy Go is verkrijgbaar in twee verschillende kleuren: Silk-Blue en Matt-Black. Het gewicht is met 19 kilo goed te tillen om bijvoorbeeld de trein in te stappen. Met een maximaal belastbaar gewicht van 120 kg is deze fiets multifunctioneel te gebruiken. Ontdek de fraaie eigenschappen van de Vogue Easy Go nu bij één van onze dealers bij jou in de buurt.",
  VOGUE_SLX_part1:
    "Ben je op zoek naar een robuuste e-bike met nét iets meer functionaliteiten? Dan kom je uit bij de Vogue SLX. Dit model is onder meer voorzien van een Shimano Deore 9 speed versnellingen en motor op de trapas, waardoor je directe trapondersteuning ervaart tijdens het wegrijden. De 522WH accu, geïntegreerd in de frame, brengt je overal waar je wilt, zowel op korte als lange afstanden. Dankzij de verende voorvork en zadelpen merk je vrijwel niks van hobbels op de weg, en rijd je altijd comfortabel richting je eindbestemming.",
  VOGUE_SLX_part2:
    "Het frame van de Vogue SLX is dubbelwandig aluminium, hetgeen extra goed bestand is tegen roestvorming. Desondanks is het verstandig om de e-bike zoveel mogelijk binnen te stallen, om zodoende het frame en de accu te beschermen tegen externe factoren.",
  VOGUE_ELITE7_part1:
    "De Vogue Elite 7 is één van onze meest bekende edities van de Vogue e-bikes. Shimano Nexus 7 speed versnellingen geven je standaard opties om je ondersteuning in te stellen. Daarnaast heb je natuurlijk vanaf de digitale LCD kleuren display met usb lader voor je smartphone, ook 5 niveau’s van digitale ondersteuning. De motor bij deze elektrische fiets is te vinden op het voorwiel. Dit geeft een uniek gevoel aan je fietstocht. De motor is geruisloos en functioneert op basis van jouw rotatie. Dit zorgt voor een fraaie combinatie van trapondersteuning en gemak. De remmen zijn een Shimano Rollerbrake. Deze zijn van de hoogste kwaliteit, en voorkomen tevens dat je velgen na verloop van tijd gaan roesten. Daarnaast beschikken al onze voorwielmotor e-bikes voor uw veiligheid over een remlicht. De velgen zijn tevens van dubbelwandig aluminium, hetgeen jarenlange roestbestendigheid garandeert.",
  VOGUE_ELITE7_part2:
    "Kies voor de Vogue Elite 7. Deze is verkrijgbaar in drie kleuren: Matt-Black, Jeans-Blue en Mint-Green. Deze kleuren geven de fiets een fraaie en moderne uitstraling. Dankzij de moderne led verlichting aan voor- en achterkant, waarbij de achterverlichting geïntegreerd is in de accu, ben je altijd zichtbaar voor andere weggebruikers. Ga de weg op in stijl en geniet van tijdloos comfort met de Vogue Elite 7 e-bike.",
  VOGUE_SUPERIOR_DELUXE_part1:
    "Deze e-bakfiets is uitermate geschikt voor het vervoeren van onze kinderen, terwijl jij als bestuurder geniet van comfortabele trapondersteuning. Met de Vogue Superior Deluxe krijg jij het spreekwoordelijke duwtje in de rug. Dit model is voorzien van een motor op de trapas, en een sterke sensor om je direct de gewenste trapondersteuning te bieden. Betrouwbaar en stijlvol. De Superior Deluxe heeft een robuust uiterlijk met een matzwart aluminium frame, in combinatie met een bruine bak. Deze bak is voorzien van twee wielen aan beide kanten, waardoor je wegligging zeer stabiel is. In de laadbak is ruimte voor meerdere kinderen.",
  VOGUE_SUPERIOR_DELUXE_part2:
    "De display van de Superior Deluxe is gepositioneerd op de stang boven de bak. Deze stang fungeert tevens als stuur van de e-bakfiets. De Vogue Superior Deluxe vind je bij onze aangesloten erkende Vogue Bike dealers bij jou in de buurt.",
  VOGUE_TRIVELO_part1:
    "De Vogue Tri-Velo is een sportieve e-driewieler voor de doelgroep ouderen of mindervaliden. Deze driewieler beschikt over een stabiele wegligging met twee wielen achter, en één voor. De 7 speed Shimano derailleurversnelling geeft je genoeg mogelijkheden in combinatie met digitale ondersteuningen vanuit de motor. Het framemateriaal is aluminium en de kleur is matzwart of grijs. Zowel voor als achter is opbergruimte in de vorm van een mand. De maximale snelheid is 25 kilometer per uur, zeer geschikt voor de stedelijke én rurale omgeving.",
  VOGUE_TRIVELO_part2:
    "De motor van de Tri-Velo is te vinden op het voorwiel en de accu direct onder de achtermand. Met een gemiddelde actieradius van 50 kilometer is dit een ideaal vervoersmiddel. Onder de meest gunstige omstandigheden ligt de actieradius tussen de 60 en 80 kilometer. De Vogue Tri-Velo driewieler is verkrijgbaar bij onze aangesloten erkende Vogue Bike dealers.",
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
