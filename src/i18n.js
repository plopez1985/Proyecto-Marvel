

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus traducciones
import translationES from "./locales/es/translation.json";

// Definí las traducciones
const resources = {
  es: { translation: translationES },
};

i18n
  .use(initReactI18next) // Integración con React
  .init({
    resources,
    lng: "es", // idioma fijo en español
    fallbackLng: "es", // idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;