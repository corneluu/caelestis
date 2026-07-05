export interface HistoryItem {
  name: string;
  url: string;
  date: string;
  change: string;
}

export interface UpdateHistory {
  lastUpdate: string;
  pdfs: HistoryItem[];
  audio: HistoryItem[];
}

export const updateHistory: UpdateHistory = {
  lastUpdate: '5 iulie 2026',
  pdfs: [
    { name: 'În fața ta, Doamne, ne adunăm', url: 'pdfs/cantec-1/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Intrare: Măriți pe Domnul', url: 'pdfs/cantec-5/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Ecce sacerdos magnus', url: 'pdfs/cantec-6/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Kyrie: Missa Încoronării', url: 'pdfs/cantec-7/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Aleluia', url: 'pdfs/cantec-9/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Ofertoriu: Tota Pulchra', url: 'pdfs/cantec-10/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Sanctus', url: 'pdfs/cantec-11/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'După Prefacere: Unul Sfânt', url: 'pdfs/cantec-12/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Agnus dei: Missa Secunda Pontificalis', url: 'pdfs/cantec-14/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' },
    { name: 'Final: Aleluia', url: 'pdfs/cantec-17/partitura.pdf', date: '30 iunie 2026', change: 'Partitură nouă' }
  ],
  audio: [
    { name: 'Final: Aleluia (Negativ)', url: 'audio/cantec-17/negativ.mp3', date: '5 iulie 2026', change: 'Audio adăugat' },
    { name: 'În fața ta, Doamne, ne adunăm (Bas)', url: 'audio/cantec-1/bas.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Ave Verum (Sopran)', url: 'audio/cantec-2/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Ne-ai dat o pâine îngerească (Alto)', url: 'audio/cantec-3/alto.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Ne-ai dat o pâine îngerească (Sopran)', url: 'audio/cantec-3/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Intrare: Măriți pe Domnul (Bas)', url: 'audio/cantec-5/bas.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Ecce sacerdos magnus (Sopran)', url: 'audio/cantec-6/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Gloria (doar refren) (Sopran)', url: 'audio/cantec-8/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Ofertoriu: Tota Pulchra (Sopran)', url: 'audio/cantec-10/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Sanctus (Bas)', url: 'audio/cantec-11/bas.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Sanctus (Sopran)', url: 'audio/cantec-11/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Tatăl nostru (Sopran)', url: 'audio/cantec-13/sopran.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Agnus dei: Missa Secunda Pontificalis (Alto)', url: 'audio/cantec-14/alto.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Împărtășanie: Cine se va sui pe Muntele Domnului (Sopran 1)', url: 'audio/cantec-15/sopran1.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Împărtășanie: Cine se va sui pe Muntele Domnului (Sopran 2)', url: 'audio/cantec-15/sopran2.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Doamne, buzele mele (Sopran 1)', url: 'audio/cantec-16/sopran1.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'Doamne, buzele mele (Sopran 2)', url: 'audio/cantec-16/sopran2.mp3', date: '14 iunie 2026', change: 'Audio actualizat' },
    { name: 'La pace verrà (Alto)', url: 'audio/cantec-9/alto.mp3', date: '9 mai 2026', change: 'Audio actualizat' },
    { name: 'La pace verrà (Sopran)', url: 'audio/cantec-9/sopran.mp3', date: '9 mai 2026', change: 'Audio actualizat' }
  ]
};
