export const languages = [
  { code: 'zh', name: '繁體中文'},
  { code: 'en', name: 'English'},
  { code: 'fr', name: 'Français'},
  { code: 'pt', name: 'Português'},
  { code: 'es', name: 'Español'},
  { code: 'id', name: 'bahasa Indonesia'},
  { code: 'tl', name: 'Filipino'},
  { code: 'ja', name: '日本語'},
  { code: 'th', name: 'ไทย'},
  { code: 'ms', name: 'Melayu'},
  { code: 'hi', name: 'हिन्दी'},
  { code: 'ar', name: 'العربية'},
  { code: 'it', name: 'Italiano'},
  { code: 'de', name: 'Deutsch'},
  { code: 'hu', name: 'Magyar'},
  { code: 'ro', name: 'Română'},
  { code: 'vi', name: 'Tiếng Việt'},
  { code: 'pl', name: 'Polski'},
  { code: 'te', name: 'తెలుగు'},
  { code: 'tr', name: 'Türkçe'},
  { code: 'sw', name: 'Kiswahili'},
  { code: 'el', name: 'Ελληνικά'},
  { code: 'cs', name: 'čeština'},
  { code: 'da', name: 'dansk'},
  { code: 'fi', name: 'Suomalainen'},
  { code: 'nw', name: 'norsk'},
  { code: 'nl', name: 'Nederlands'},
  { code: 'ru', name: 'Русский'},
  { code: 'bn', name: 'বাংলা'},
  { code: 'he', name: 'עִברִית'},
  { code: 'bu', name: 'български'},
  { code: 'ka', name: 'Қазақша'},
  { code: 'la', name: 'Latvija'},
  { code: 'uk', name: 'українська'},
  { code: 'ur', name: 'اردو'},
  { code: 'lao', name: 'ພາສາລາວ'},
  { code: 'ic', name: 'Íslenska'},
  { code: 'li', name: 'Lietuvių'},
  { code: 'kh', name: 'ខ្មែរ'},
  { code: 'et', name: 'Eesti'},
  { code: 'cr', name: 'Hrvatski'},
  { code: 'sb', name: 'Srpski'},
  { code: 'jv', name: 'Bahasa Jawa'},
  { code: 'lu', name: 'Lëtzebuergesch'},
  { code: 'sl', name: 'Slovenščina'},
  { code: 'kr', name: '한국어'}
] as const;

export type LanguageCode = typeof languages[number]['code'];

export const getDefaultLanguage = (): LanguageCode => {
  const savedLang = localStorage.getItem('language');
  if (savedLang && languages.some(lang => lang.code === savedLang)) {
    return savedLang as LanguageCode;
  }
  return 'en';
}; 