import { useState } from "react";
import { Locale } from "../components/Locale";

export default function useLocale() {
  const [locale, setLocale] = useState<string>(Locale.EN);
  return { locale, setLocale };
}
