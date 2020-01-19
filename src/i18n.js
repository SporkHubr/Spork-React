import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

const configureI18n = (language) => {
  i18n
    .use(XHR)
    .init({
      fallbackLng: 'en',
      ns: ['interface', 'errors'],
      defaultNS: 'interface',
      lng: language,
      debug: false,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      // react i18next special options
      react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
      },

      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      initImmediate: true,
    });

  return i18n;
};

export default configureI18n;
