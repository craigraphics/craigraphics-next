// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources to load (can be JSON files, imports, or inline objects)
    resources: {
      en: {
        translation: {
          title: "craigraphics",
          welcomeMessage: "Welcome to React and Next.js",
          // other key-value pairs for English translations
        },
      },
      // other languages...
    },
    fallbackLng: "en", // default language to use
    detection: {
      // options for language detection (e.g., cookie, localStorage)
    },
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;
