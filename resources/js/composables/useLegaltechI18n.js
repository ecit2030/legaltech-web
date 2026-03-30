import { ref, watch } from 'vue';
import { translations } from '../i18n/legaltech';

const STORAGE_KEY = 'legaltech-lang';

function readInitialLocale() {
    if (typeof window === 'undefined') {
        return 'en';
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'ar' || saved === 'en' ? saved : 'en';
}

function applyDocumentLocale(lang) {
    if (typeof document === 'undefined') {
        return;
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

export function useLegaltechI18n() {
    const locale = ref(readInitialLocale());
    applyDocumentLocale(locale.value);

    watch(locale, (lang) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, lang);
        }
        applyDocumentLocale(lang);
    });

    function setLocale(lang) {
        if (lang === 'en' || lang === 'ar') {
            locale.value = lang;
        }
    }

    function t(key) {
        return (
            translations[locale.value]?.[key] ??
            translations.en[key] ??
            key
        );
    }

    return { locale, setLocale, t };
}
