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

export const hybritMainMenuItems = {
  HYBRIT_COLLECTION: "HybrIT Collectie",
  HYBRIT_COLLECTIE: "HybrIT Collection",
  HYBRIT_OFFICE_GADGETS: "Hybrit Office Gadgets",
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
};
