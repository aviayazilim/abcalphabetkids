import type { Lang, Letter } from '../lib/routes';

// TODO(review): Portuguese and Spanish copy is a first draft — have native speakers check it.
// Copy for the "words with the letter" pages; only languages with a `words` section need it.
export type WordsCopy = {
  nav: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  gridTitle: string;
  letterTitle: (l: Letter) => string;
  letterDescription: (l: Letter, count: number, examples: string[]) => string;
  letterH1: (l: Letter) => string;
  letterLead: (l: Letter, start: number, inside: number) => string;
  picturesTitle: string;
  startTitle: (l: Letter) => string;
  insideTitle: (l: Letter) => string;
  namesTitle: (l: Letter) => string;
  activitiesTitle: string;
  activities: (l: Letter, start: string[], inside: string[]) => string[];
  nextTitle: string;
  tracingCard: (l: Letter) => { title: string; text: string };
  coloringCard: (l: Letter) => { title: string; text: string };
  otherLetters: string;
  faqTitle: string;
  faq: (l: Letter, start: string[], inside: string[]) => { q: string; a: string }[];
  moreWords: (l: Letter) => string;
  hubLink: string;
};

const pt: WordsCopy = {
  nav: 'Palavras',
  title: 'Palavras com cada letra do alfabeto para crianças',
  description: 'Listas de palavras com cada letra de A a Z para a educação infantil: palavras que começam com a letra e que têm a letra no meio. Com figuras e atividades.',
  h1: 'Palavras com cada letra do alfabeto',
  lead: 'Para cada letra, uma lista de palavras simples que as crianças conhecem: as que começam com a letra e as que têm a letra no meio ou no final. Ótimo para tarefas da escola, ditados e brincadeiras.',
  gridTitle: 'Escolha uma letra',
  letterTitle: (l) => `Palavras com a letra ${l.letter}: lista para crianças`,
  letterDescription: (l, n, ex) => `${n} palavras com a letra ${l.letter} para crianças: ${ex.join(', ')} e mais. Com figuras, atividades e ficha pontilhada grátis.`,
  letterH1: (l) => `Palavras com a letra ${l.letter}`,
  letterLead: (l, s, i) => `${s} palavras que começam com ${l.letter}${i ? ` e ${i} com ${l.letter} no meio ou no final` : ''}, escolhidas para crianças de 2 a 6 anos.`,
  picturesTitle: 'Com figura',
  startTitle: (l) => `Palavras que começam com ${l.letter}`,
  insideTitle: (l) => `Palavras com ${l.letter} no meio ou no final`,
  namesTitle: (l) => `Nomes com ${l.letter}`,
  activitiesTitle: 'Brincadeiras com a lista',
  activities: (l, s, i) => [
    `Fale devagar: ${s.slice(0, 3).map((w) => `“${w}”`).join(', ')}. A criança repete e diz qual som aparece no começo.`,
    i.length ? `Caça ao som: leia ${i.slice(0, 3).map((w) => `“${w}”`).join(', ')} e peça para a criança bater palmas quando ouvir ${l.letter}.` : `Procure objetos em casa que começam com ${l.letter}.`,
    `Desenho: a criança escolhe uma palavra da lista, desenha e escreve a letra ${l.letter} ao lado.`,
  ],
  nextTitle: 'Continue com a letra',
  tracingCard: (l) => ({ title: `Letra ${l.letter} pontilhada`, text: `Ficha grátis para cobrir ${l.letter} e ${l.lower}, com palavra e figura.` }),
  coloringCard: (l) => ({ title: `Letra ${l.letter} para colorir`, text: `O personagem da letra ${l.letter} para pintar.` }),
  otherLetters: 'Palavras com outras letras',
  faqTitle: 'Perguntas frequentes',
  faq: (l, s, i) => [
    { q: `Quais palavras começam com a letra ${l.letter}?`, a: `Por exemplo: ${s.slice(0, 8).join(', ')}. A lista completa está nesta página.` },
    ...(i.length ? [{ q: `Quais palavras têm a letra ${l.letter} no meio?`, a: `Por exemplo: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Como usar a lista com crianças pequenas?', a: 'Escolha três ou quatro palavras por dia, fale devagar e destaque o som da letra. Depois, a criança pode cobrir a letra na ficha pontilhada.' },
  ],
  moreWords: (l) => `Mais palavras com ${l.letter}`,
  hubLink: 'Palavras com cada letra',
};

const es: WordsCopy = {
  nav: 'Palabras',
  title: 'Palabras con cada letra del abecedario para niños',
  description: 'Listas de palabras con cada letra de la A a la Z para niños de infantil: palabras que empiezan por la letra y que la llevan en medio. Con dibujos y actividades.',
  h1: 'Palabras con cada letra del abecedario',
  lead: 'Para cada letra, una lista de palabras sencillas que los niños conocen: las que empiezan por la letra y las que la llevan en medio o al final. Ideal para tareas, dictados y juegos.',
  gridTitle: 'Elige una letra',
  letterTitle: (l) => `Palabras con la letra ${l.letter}: lista para niños`,
  letterDescription: (l, n, ex) => `${n} palabras con la letra ${l.letter} para niños: ${ex.join(', ')} y más. Con dibujos, actividades y ficha para repasar gratis.`,
  letterH1: (l) => `Palabras con la letra ${l.letter}`,
  letterLead: (l, s, i) => `${s} palabras que empiezan por ${l.letter}${i ? ` y ${i} con ${l.letter} en medio o al final` : ''}, elegidas para niños de 2 a 6 años.`,
  picturesTitle: 'Con dibujo',
  startTitle: (l) => `Palabras que empiezan por ${l.letter}`,
  insideTitle: (l) => `Palabras con ${l.letter} en medio o al final`,
  namesTitle: (l) => `Nombres con ${l.letter}`,
  activitiesTitle: 'Juegos con la lista',
  activities: (l, s, i) => [
    `Di despacio: ${s.slice(0, 3).map((w) => `«${w}»`).join(', ')}. El niño repite y dice qué sonido oye al principio.`,
    i.length ? `Caza del sonido: lee ${i.slice(0, 3).map((w) => `«${w}»`).join(', ')} y pide al niño que dé una palmada cuando oiga la ${l.letter}.` : `Busca objetos en casa que empiecen por ${l.letter}.`,
    `Dibujo: el niño elige una palabra de la lista, la dibuja y escribe la letra ${l.letter} al lado.`,
  ],
  nextTitle: 'Sigue con la letra',
  tracingCard: (l) => ({ title: `Letra ${l.letter} para repasar`, text: `Ficha gratis para repasar ${l.letter} y ${l.lower}, con palabra y dibujo.` }),
  coloringCard: (l) => ({ title: `Letra ${l.letter} para colorear`, text: `El personaje de la letra ${l.letter} para pintar.` }),
  otherLetters: 'Palabras con otras letras',
  faqTitle: 'Preguntas frecuentes',
  faq: (l, s, i) => [
    { q: `¿Qué palabras empiezan por la letra ${l.letter}?`, a: `Por ejemplo: ${s.slice(0, 8).join(', ')}. La lista completa está en esta página.` },
    ...(i.length ? [{ q: `¿Qué palabras llevan la letra ${l.letter} en medio?`, a: `Por ejemplo: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: '¿Cómo usar la lista con niños pequeños?', a: 'Elige tres o cuatro palabras al día, dilas despacio y marca bien el sonido de la letra. Después, el niño puede repasar la letra en la ficha.' },
  ],
  moreWords: (l) => `Más palabras con ${l.letter}`,
  hubLink: 'Palabras con cada letra',
};

export const WORDS_COPY: Partial<Record<Lang, WordsCopy>> = { pt, es };
