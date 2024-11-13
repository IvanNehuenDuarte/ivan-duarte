import { useTranslation } from "react-i18next";

const ButtonLng = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-5 right-5 bg-sky-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-sky-800 transition duration-300 z-50"
    >
      {i18n.language === "en" ? "ES" : "EN"}
    </button>
  );
};

export default ButtonLng;
