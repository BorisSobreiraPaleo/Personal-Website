import useLanguage from "../languageContext/useLanguage";

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage()
  return (
    <div onClick={toggleLanguage} className="font-semibold text-[16.67px]">
      {language === 'es' ? 'EN' : 'ES'}
    </div>
  )
};

export default LanguageSelector;
