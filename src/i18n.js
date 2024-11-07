/*
 * i18next
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/*
 * JSON
 */
import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector) // Detecta el idioma automaticamente
  .use(initReactI18next) // Enlaza con react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "es", // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa de los valores de las variables
    },
  });

export default i18n;
