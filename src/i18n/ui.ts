
import { type Language } from "@/types/types";


export const languages: Record<Language, string> = {
    en: 'English',
    es: 'Spanish',
};


export const defaultLang = 'es';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.certifications': 'Certifications',
        'nav.contact': 'Contact',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Skills',
        'nav.certifications': 'Certificaciones',
        'nav.contact': 'Contacto',
    },
} as const;

export const showDefaultLang = false;

export const routes = {
    es: {
        'services': 'leistungen',
    },
    en: {
        'services': 'prestations-de-service',
    },
}