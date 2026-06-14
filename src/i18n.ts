import { useState, useCallback, useEffect } from 'react';

export const i18n = {
  ro: {
    portalSubtitle: "PARTITURI OFICIALE",
    searchPlaceholder: "Caută cântec...",
    sopran: "Sopran",
    sopran1: "Sopran 1",
    sopran2: "Sopran 2",
    alto: "Alto",
    tenor: "Tenor",
    bas: "Bas",
    viewScore: "Vezi Partitură",
    showMore: "Arată toate vocile...",
    showLess: "Ascunde vocile",
    copied: "Link copiat!",
    useZoomButtons: "Folosește butoanele zoom",
    zoomIn: "Mărire",
    zoomOut: "Micșorare",
    download: "Descarcă",
    share: "Distribuie",
    close: "Închide",
    noResults: "Niciun cântec găsit.",
    backToTop: "Înapoi sus",
    offlineTitle: "Nu ești conectat!",
    offlineDesc: "Aplicația necesită internet sau date mobile pentru a încărca resursele.",
    offlineConfirm: "Am înțeles",
    youtube: "YouTube",
    all: "Toate",
    lastUpdate: "Revizuit pe",
    viewChanges: "vezi modificările",
    historyTitle: "Istoric modificări",
    historyDesc: "Aici găsești toate fișierele actualizate recent. Click pe orice fișier pentru a-l deschide.",
    file: "Fișier",
    date: "Data modificării",
    change: "Ce s-a schimbat",
  },
  en: {
    portalSubtitle: "OFFICIAL SCORES",
    searchPlaceholder: "Search song...",
    sopran: "Soprano",
    sopran1: "Soprano 1",
    sopran2: "Soprano 2",
    alto: "Alto",
    tenor: "Tenor",
    bas: "Bass",
    viewScore: "View Score",
    showMore: "Show all voices...",
    showLess: "Hide voices",
    copied: "Link copied!",
    useZoomButtons: "Use zoom buttons",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    download: "Download",
    share: "Share",
    close: "Close",
    noResults: "No songs found.",
    backToTop: "Back to top",
    offlineTitle: "You are offline!",
    offlineDesc: "The app requires internet or mobile data to load resources.",
    offlineConfirm: "Got it",
    youtube: "YouTube",
    all: "All",
    lastUpdate: "Revised on",
    viewChanges: "view changes",
    historyTitle: "Change History",
    historyDesc: "Here you can find all recently updated files. Click on any file to open it.",
    file: "File",
    date: "Modification Date",
    change: "What changed",
  },
  it: {
    portalSubtitle: "SPARTITI UFFICIALI",
    searchPlaceholder: "Cerca brano...",
    sopran: "Soprano",
    sopran1: "Soprano 1",
    sopran2: "Soprano 2",
    alto: "Contralto",
    tenor: "Tenore",
    bas: "Basso",
    viewScore: "Vedi Spartito",
    showMore: "Mostra tutte le voci...",
    showLess: "Nascondi",
    copied: "Link copiato!",
    useZoomButtons: "Usa i pulsanti zoom",
    zoomIn: "Ingrandisci",
    zoomOut: "Riduci",
    download: "Scarica",
    share: "Condividi",
    close: "Chiudi",
    noResults: "Nessun brano trovato.",
    backToTop: "Torna su",
    offlineTitle: "Sei offline!",
    offlineDesc: "L'app richiede internet o dati mobili per caricare le risorse.",
    offlineConfirm: "Ho capito",
    youtube: "YouTube",
    all: "Tutti",
    lastUpdate: "Revisionato il",
    viewChanges: "vedi modifiche",
    historyTitle: "Cronologia modifiche",
    historyDesc: "Qui puoi trovare tutti i file aggiornati di recente. Clicca su qualsiasi file per aprirlo.",
    file: "File",
    date: "Data modifica",
    change: "Cosa è cambiato",
  }
} as const;

export type AppLang = keyof typeof i18n;
export type TKey = keyof typeof i18n['ro'];

export function useLang() {
  const [lang, setLangState] = useState<AppLang>(() => {
    const saved = localStorage.getItem('hc-lang') as AppLang;
    return (saved && i18n[saved]) ? saved : 'ro';
  });

  const setLang = useCallback((l: AppLang) => {
    localStorage.setItem('hc-lang', l);
    setLangState(l);
  }, []);

  const t = useCallback((key: TKey) => {
    return i18n[lang][key];
  }, [lang]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'hc-lang' && e.newValue && i18n[e.newValue as AppLang]) {
        setLangState(e.newValue as AppLang);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return { lang, setLang, t };
}
