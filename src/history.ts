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
  lastUpdate: '14 iunie 2026',
  pdfs: [
    { 
      name: 'Eu te iubesc, Doamne', 
      url: 'pdfs/cantec-13/partitura.pdf', 
      date: '9 mai 2026', 
      change: 'Partitură actualizată' 
    }
  ],
  audio: [
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
