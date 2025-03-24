import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../config/languages';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="absolute top-4 right-4 z-[100]">
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-100 
          text-sm text-gray-700 appearance-none cursor-pointer hover:border-purple-300 
          transition-colors duration-200 outline-none focus:ring-2 focus:ring-purple-200"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector; 