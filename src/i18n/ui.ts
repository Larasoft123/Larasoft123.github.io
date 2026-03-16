import { type Language } from "@/types/types";
import en from './en.json';
import es from './es.json';

export const languages: Record<Language, string> = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
    en,
    es
} as const;

export const showDefaultLang = false;

export const routes = {
    es: {
        'services': 'servicios',
    },
    en: {
        'services': 'services',
    },
} as const;