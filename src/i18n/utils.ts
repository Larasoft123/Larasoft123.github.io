import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: string) {
        const keys = key.split('.');
        let resultEn: any = ui[lang];
        let resultDefault: any = ui[defaultLang];

        for (const k of keys) {
            resultEn = resultEn?.[k];
            resultDefault = resultDefault?.[k];
        }

        return resultEn || resultDefault || key;
    }
}



export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        const pathName = path.replaceAll('/', '')
        const dictionary = routes as Record<string, Record<string, string>>;
        const hasTranslation = defaultLang !== l && dictionary[l] !== undefined && dictionary[l][pathName] !== undefined
        const translatedPath = hasTranslation ? '/' + dictionary[l][pathName] : path

        return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
    }
}



export function getRouteFromUrl(url: URL): string | undefined {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split('/');
    const path = parts.pop() || parts.pop();

    if (path === undefined) {
        return undefined;
    }

    const currentLang = getLangFromUrl(url);

    if (defaultLang === currentLang) {
        const route = routes[defaultLang] as Record<string, string>;
        return route[path] !== undefined ? route[path] : undefined;
    }

    const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
        return Object.keys(obj).find((key) => obj[key] === value);
    }

    const reversedKey = getKeyByValue(routes[currentLang] as Record<string, string>, path);

    if (reversedKey !== undefined) {
        return reversedKey;
    }

    return undefined;
}