export type Lang = 'RO' | 'EN' | 'IT' | 'LA';
export type Voice = 'sopran' | 'sopran1' | 'sopran2' | 'alto' | 'tenor' | 'bas' | 'toate';

export interface Song {
  id: string;
  title: string;
  composer: string;
  lang: Lang;
  voices: Voice[];
  hasScore: boolean;
  audioExt?: string; // optional, defaults to 'mp3'. Use 'wav', 'ogg', 'aac', etc.
  youtubeUrl?: string;
  audioUrl?: string;
}

export const songs: Song[] = [
  { id: 'cantec-1', title: 'În fața ta, Doamne, ne adunăm', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-2', title: 'Ave Verum', composer: 'W. A. Mozart', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas', 'toate'] },
  { id: 'cantec-3', title: 'Ne-ai dat o pâine îngerească', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-4', title: 'Laudate Dominum', composer: '', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-5', title: 'Intrare: Măriți pe Domnul', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-6', title: 'Ecce sacerdos magnus', composer: '', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-7', title: 'Kyrie: Missa Încoronării', composer: 'W. A. Mozart', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas', 'toate'] },
  { id: 'cantec-8', title: 'Gloria (doar refren)', composer: 'Vivaldi', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas', 'toate'] },
  { id: 'cantec-9', title: 'Aleluia', composer: 'C. Tocănel', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-10', title: 'Ofertoriu: Tota Pulchra', composer: '', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas', 'toate'] },
  { id: 'cantec-11', title: 'Sanctus', composer: 'L. Cherubini', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-12', title: 'După Prefacere: Unul Sfânt', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-13', title: 'Tatăl nostru', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-14', title: 'Agnus dei: Missa Secunda Pontificalis', composer: '', lang: 'LA', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-15', title: 'Împărtășanie: Cine se va sui pe Muntele Domnului', composer: 'G. Muzicescu', lang: 'RO', hasScore: true, voices: ['sopran1', 'sopran2', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-16', title: 'Doamne, buzele mele', composer: '', lang: 'RO', hasScore: true, voices: ['sopran1', 'sopran2', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-17', title: 'Final: Aleluia', composer: 'G. F. Händel', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas', 'toate'] }
];
