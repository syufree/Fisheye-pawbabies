import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getDefaultLanguage } from './config/languages';

// Import all language files
import en from './locales/en.json';
import zh from './locales/zh.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import ja from './locales/ja.json';
import ar from './locales/ar.json';
import de from './locales/de.json';
import nl from './locales/nl.json';
import pt from './locales/pt.json';
import id from './locales/id.json';
import el from './locales/el.json';
import cs from './locales/cs.json';
import da from './locales/da.json';
import nw from './locales/nw.json';
import bn from './locales/bn.json';
import bu from './locales/bu.json';
import uk from './locales/uk.json';
import ur from './locales/ur.json';
import ic from './locales/ic.json';
import li from './locales/li.json';
import cr from './locales/cr.json';
import sb from './locales/sb.json';
import tl from './locales/tl.json';
import th from './locales/th.json';
import ms from './locales/ms.json';
import hi from './locales/hi.json';
import it from './locales/it.json';
import hu from './locales/hu.json';
import ro from './locales/ro.json';
import vi from './locales/vi.json';
import pl from './locales/pl.json';
import te from './locales/te.json';
import tr from './locales/tr.json';
import sw from './locales/sw.json';
import fi from './locales/fi.json';
import ru from './locales/ru.json';
import he from './locales/he.json';
import ka from './locales/ka.json';
import la from './locales/la.json';
import lao from './locales/lao.json';
import kh from './locales/kh.json';
import et from './locales/et.json';
import jv from './locales/jv.json';
import lu from './locales/lu.json';
import sl from './locales/sl.json';
import kr from './locales/kr.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      fr: { translation: fr },
      es: { translation: es },
      ja: { translation: ja },
      ar: { translation: ar },
      de: { translation: de },
      nl: { translation: nl },
      pt: { translation: pt },
      id: { translation: id },
      el: { translation: el },
      cs: { translation: cs },
      da: { translation: da },
      nw: { translation: nw },
      bn: { translation: bn },
      bu: { translation: bu },
      uk: { translation: uk },
      ur: { translation: ur },
      ic: { translation: ic },
      li: { translation: li },
      cr: { translation: cr },
      sb: { translation: sb },
      tl: { translation: tl },
      th: { translation: th },
      ms: { translation: ms },
      hi: { translation: hi },
      it: { translation: it },
      hu: { translation: hu },
      ro: { translation: ro },
      vi: { translation: vi },
      pl: { translation: pl },
      te: { translation: te },
      tr: { translation: tr },
      sw: { translation: sw },
      fi: { translation: fi },
      ru: { translation: ru },
      he: { translation: he },
      ka: { translation: ka },
      la: { translation: la },
      lao: { translation: lao },
      kh: { translation: kh },
      et: { translation: et },
      jv: { translation: jv },
      lu: { translation: lu },
      sl: { translation: sl },
      kr: { translation: kr }
    },
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Dynamic language loading
export const loadLanguage = async (lang: string) => {
  if (i18n.hasResourceBundle(lang, 'translation')) {
    return;
  }

  try {
    const module = await import(`./locales/${lang}.json`);
    i18n.addResourceBundle(lang, 'translation', module.default);
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
  }
};

export default i18n;