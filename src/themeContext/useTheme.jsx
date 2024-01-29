import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider"

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default useTheme