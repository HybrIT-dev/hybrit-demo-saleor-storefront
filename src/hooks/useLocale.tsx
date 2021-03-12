import { useState } from "react";
import { Locale } from "../components/Locale";

export default function useLocale() {
  const [locale, setLocale] = useState(Locale.EN);
  return { locale, setLocale };
}
