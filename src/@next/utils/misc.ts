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
    case "Accessories":
      return "Accessoires";
    case "Groceries":
      return "Voedingswaren";
    case "Apparel":
      return "Kleding";
    case "Address":
      return "Adres";
    case "Paints":
      return "Verven";
    case "Juices":
      return "Sappen";
    case "Homewares":
      return "Huishoudmiddelen";
    default:
      return name;
  }
};
