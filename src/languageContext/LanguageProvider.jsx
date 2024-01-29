import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(()=>{
    return localStorage.getItem('language')
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
};

export default LanguageProvider
