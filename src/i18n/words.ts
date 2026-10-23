import type { Lang, Letter } from '../lib/routes';

// TODO(review): Portuguese and Spanish copy is a first draft — have native speakers check it.
// Word count for titles; small lists read better without a number.
const num = (n: number) => (n >= 5 ? `${n} ` : '');
// Polish plural of "słowo" for n >= 5: 12 słów, 22 słowa.
const plWords = (n: number) => ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'słowa' : 'słów');

// Copy for the "words with the letter" pages; only languages with a `words` section need it.
export type WordsCopy = {
  nav: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  gridTitle: string;
  letterTitle: (l: Letter, start: number, count: number) => string;
  letterDescription: (l: Letter, count: number, examples: string[]) => string;
  letterH1: (l: Letter, start: number) => string;
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
  letterTitle: (l, _s, n) => `Palavras com ${l.letter} para crianças: ${num(n)}objetos e coisas`,
  letterDescription: (l, n, ex) => `${n} palavras e objetos com a letra ${l.letter} para crianças: ${ex.join(', ')} e mais. Com figuras, atividades e ficha pontilhada grátis.`,
  letterH1: (l) => `Palavras com a letra ${l.letter} para crianças`,
  letterLead: (l, s, i) => `${s} palavras que começam com ${l.letter}${i ? ` e ${i} com ${l.letter} no meio ou no final` : ''}, escolhidas para crianças de 2 a 6 anos.`,
  picturesTitle: 'Com figura',
  startTitle: (l) => `Palavras e objetos que começam com ${l.letter}`,
  insideTitle: (l) => `Palavras com ${l.letter} no meio ou no final`,
  namesTitle: (l) => `Nomes com ${l.letter}`,
  activitiesTitle: 'Brincadeiras com a lista',
  activities: (l, s, i) => [
    `Leia em voz alta ${s.slice(0, 3).map((w) => `“${w}”`).join(', ')}. A criança repete e aponta a letra ${l.letter} na palavra escrita.`,
    i.length ? `Caça à letra: escreva ${i.slice(0, 3).map((w) => `“${w}”`).join(', ')} num papel e peça para a criança circular a letra ${l.letter} em cada palavra.` : `Procure objetos em casa que começam com ${l.letter}.`,
    `Desenho: a criança escolhe uma palavra da lista, desenha e escreve a letra ${l.letter} ao lado.`,
  ],
  nextTitle: 'Continue com a letra',
  tracingCard: (l) => ({ title: `Letra ${l.letter} pontilhada`, text: `Ficha grátis para cobrir ${l.letter} e ${l.lower}, com palavra e figura.` }),
  coloringCard: (l) => ({ title: `Letra ${l.letter} para colorir`, text: `O personagem da letra ${l.letter} para pintar.` }),
  otherLetters: 'Palavras com outras letras',
  faqTitle: 'Perguntas frequentes',
  faq: (l, s, i) => [
    { q: `Quais palavras começam com a letra ${l.letter}?`, a: `Por exemplo: ${s.slice(0, 8).join(', ')}. A lista completa está nesta página.` },
    ...(s.length ? [{ q: `Quais objetos começam com a letra ${l.letter}?`, a: `Coisas que a criança conhece e pode mostrar: ${s.slice(0, 5).join(', ')}. Ótimo para uma caça ao tesouro em casa.` }] : []),
    ...(i.length ? [{ q: `Quais palavras têm a letra ${l.letter} no meio ou no final?`, a: `Por exemplo: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Como usar a lista com crianças pequenas?', a: 'Escolha três ou quatro palavras por dia, fale devagar e destaque o som da letra. Depois, a criança pode cobrir a letra na ficha pontilhada.' },
  ],
  moreWords: (l) => `Mais palavras com ${l.letter}`,
  hubLink: 'Palavras com cada letra',
};

const es: WordsCopy = {
  nav: 'Palabras',
  title: 'Palabras con cada letra del abecedario para niños',
  description: 'Listas de palabras con cada letra de la A a la Z para preescolar: palabras que empiezan por la letra y que la llevan en medio. Con dibujos y actividades.',
  h1: 'Palabras con cada letra del abecedario',
  lead: 'Para cada letra, una lista de palabras sencillas que los niños conocen: las que empiezan por la letra y las que la llevan en medio o al final. Ideal para tareas, dictados y juegos.',
  gridTitle: 'Elige una letra',
  letterTitle: (l) => `Palabras y objetos con la letra ${l.letter} para niños`,
  letterDescription: (l, n, ex) => `${n} palabras y objetos con la letra ${l.letter} para niños: ${ex.join(', ')} y más. Con dibujos, actividades y ficha para repasar gratis.`,
  letterH1: (l) => `Palabras con la letra ${l.letter} para niños`,
  letterLead: (l, s, i) => `${s} palabras que empiezan por ${l.letter}${i ? ` y ${i} con ${l.letter} en medio o al final` : ''}, elegidas para niños de 2 a 6 años.`,
  picturesTitle: 'Con dibujo',
  startTitle: (l) => `Palabras y objetos que empiezan por ${l.letter}`,
  insideTitle: (l) => `Palabras con ${l.letter} en medio o al final`,
  namesTitle: (l) => `Nombres con ${l.letter}`,
  activitiesTitle: 'Juegos con la lista',
  activities: (l, s, i) => [
    `Lee en voz alta ${s.slice(0, 3).map((w) => `«${w}»`).join(', ')}. El niño repite y señala la letra ${l.letter} en la palabra escrita.`,
    i.length ? `Caza de la letra: escribe ${i.slice(0, 3).map((w) => `«${w}»`).join(', ')} en un papel y pide al niño que rodee la letra ${l.letter} en cada palabra.` : `Busca objetos en casa que empiecen por ${l.letter}.`,
    `Dibujo: el niño elige una palabra de la lista, la dibuja y escribe la letra ${l.letter} al lado.`,
  ],
  nextTitle: 'Sigue con la letra',
  tracingCard: (l) => ({ title: `Letra ${l.letter} para repasar`, text: `Ficha gratis para repasar ${l.letter} y ${l.lower}, con palabra y dibujo.` }),
  coloringCard: (l) => ({ title: `Letra ${l.letter} para colorear`, text: `El personaje de la letra ${l.letter} para pintar.` }),
  otherLetters: 'Palabras con otras letras',
  faqTitle: 'Preguntas frecuentes',
  faq: (l, s, i) => [
    { q: `¿Qué palabras empiezan por la letra ${l.letter}?`, a: `Por ejemplo: ${s.slice(0, 8).join(', ')}. La lista completa está en esta página.` },
    ...(s.length ? [{ q: `¿Qué objetos empiezan por la letra ${l.letter}?`, a: `Cosas que el niño conoce y puede señalar: ${s.slice(0, 5).join(', ')}. Ideal para un juego de búsqueda en casa.` }] : []),
    ...(i.length ? [{ q: `¿Qué palabras llevan la letra ${l.letter} en medio o al final?`, a: `Por ejemplo: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: '¿Cómo usar la lista con niños pequeños?', a: 'Elige tres o cuatro palabras al día, dilas despacio y marca bien el sonido de la letra. Después, el niño puede repasar la letra en la ficha.' },
  ],
  moreWords: (l) => `Más palabras con ${l.letter}`,
  hubLink: 'Palabras con cada letra',
};

const fr: WordsCopy = {
  nav: 'Mots',
  title: 'Mots avec chaque lettre de l’alphabet pour enfants',
  description: 'Des listes de mots pour chaque lettre de A à Z pour la maternelle : mots qui commencent par la lettre et mots qui la contiennent. Avec images et activités.',
  h1: 'Mots avec chaque lettre de l’alphabet',
  lead: 'Pour chaque lettre, une liste de mots simples que les enfants connaissent : ceux qui commencent par la lettre et ceux qui la contiennent au milieu ou à la fin. Idéal pour les devoirs et les jeux.',
  gridTitle: 'Choisissez une lettre',
  letterTitle: (l, _s, n) => `Mots en ${l.letter} pour enfants : ${num(n)}mots avec la lettre ${l.letter} (images)`,
  letterDescription: (l, n, ex) => `${n} mots en ${l.letter} pour les enfants : ${ex.join(', ')} et plus. Avec images, activités et fiche à tracer gratuite.`,
  letterH1: (l) => `Mots en ${l.letter} pour enfants`,
  letterLead: (l, s, i) => `${s} mots qui commencent par ${l.letter}${i ? ` et ${i} avec ${l.letter} au milieu ou à la fin` : ''}, choisis pour les enfants de 2 à 6 ans.`,
  picturesTitle: 'Avec image',
  startTitle: (l) => `Mots et objets qui commencent par ${l.letter}`,
  insideTitle: (l) => `Mots avec ${l.letter} au milieu ou à la fin`,
  namesTitle: (l) => `Prénoms avec ${l.letter}`,
  activitiesTitle: 'Jeux avec la liste',
  activities: (l, s, i) => [
    `Lisez à voix haute ${s.slice(0, 3).map((w) => `« ${w} »`).join(', ')}. L’enfant répète et montre la lettre ${l.letter} dans le mot écrit.`,
    i.length ? `Chasse à la lettre : écrivez ${i.slice(0, 3).map((w) => `« ${w} »`).join(', ')} sur une feuille et demandez à l’enfant d’entourer la lettre ${l.letter} dans chaque mot.` : `Cherchez à la maison des objets qui commencent par ${l.letter}.`,
    `Dessin : l’enfant choisit un mot de la liste, le dessine et écrit la lettre ${l.letter} à côté.`,
  ],
  nextTitle: 'Continuer avec la lettre',
  tracingCard: (l) => ({ title: `Lettre ${l.letter} à tracer`, text: `Fiche gratuite pour tracer ${l.letter} et ${l.lower}, avec un mot illustré.` }),
  coloringCard: (l) => ({ title: `Lettre ${l.letter} à colorier`, text: `Le personnage de la lettre ${l.letter} à colorier.` }),
  otherLetters: 'Mots avec d’autres lettres',
  faqTitle: 'Questions fréquentes',
  faq: (l, s, i) => [
    { q: `Quels mots commencent par la lettre ${l.letter} ?`, a: `Par exemple : ${s.slice(0, 8).join(', ')}. La liste complète est sur cette page.` },
    ...(s.length ? [{ q: `Quels objets commencent par la lettre ${l.letter} ?`, a: `Des choses que l’enfant connaît et peut montrer : ${s.slice(0, 5).join(', ')}. Idéal pour un jeu de chasse aux objets à la maison.` }] : []),
    ...(i.length ? [{ q: `Quels mots contiennent la lettre ${l.letter} au milieu ou à la fin ?`, a: `Par exemple : ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Comment utiliser la liste avec de jeunes enfants ?', a: 'Choisissez trois ou quatre mots par jour, lisez-les lentement et montrez la lettre dans le mot écrit. Ensuite, l’enfant peut tracer la lettre sur la fiche.' },
  ],
  moreWords: (l) => `Plus de mots avec ${l.letter}`,
  hubLink: 'Mots avec chaque lettre',
};

const de: WordsCopy = {
  nav: 'Wörter',
  title: 'Wörter mit jedem Buchstaben für Kinder',
  description: 'Wortlisten zu jedem Buchstaben von A bis Z für Kita und Vorschule: Wörter, die mit dem Buchstaben anfangen, und Wörter, in denen er vorkommt. Mit Bildern.',
  h1: 'Wörter mit jedem Buchstaben',
  lead: 'Zu jedem Buchstaben eine Liste einfacher Wörter, die Kinder kennen: Wörter, die mit dem Buchstaben anfangen, und Wörter, in denen er in der Mitte oder am Ende steht. Ideal für Hausaufgaben und Spiele.',
  gridTitle: 'Buchstaben wählen',
  letterTitle: (l, s, n) => (s ? `Wörter mit ${l.letter} für Kinder: ${num(n)}Gegenstände und Dinge` : `Wörter mit ${l.letter} für Kinder`),
  letterDescription: (l, n, ex) => `${n} Wörter und Gegenstände mit ${l.letter} für Kinder: ${ex.join(', ')} und mehr. Mit Bildern, Spielideen und kostenlosem Arbeitsblatt.`,
  letterH1: (l) => `Wörter mit ${l.letter} für Kinder`,
  letterLead: (l, s, i) => (s
    ? `${s} Wörter, die mit ${l.letter} anfangen${i ? `, und ${i} mit ${l.letter} in der Mitte oder am Ende` : ''}, ausgewählt für Kinder von 2 bis 6 Jahren.`
    : `${i} Wörter mit ${l.letter}, ausgewählt für Kinder von 2 bis 6 Jahren. Am Wortanfang steht ${l.letter} so gut wie nie.`),
  picturesTitle: 'Mit Bild',
  startTitle: (l) => `Wörter und Gegenstände, die mit ${l.letter} anfangen`,
  insideTitle: (l) => `Wörter mit ${l.letter} in der Mitte oder am Ende`,
  namesTitle: (l) => `Namen mit ${l.letter}`,
  activitiesTitle: 'Spiele mit der Liste',
  activities: (l, s, i) => [
    s.length ? `Lesen Sie ${s.slice(0, 3).map((w) => `„${w}“`).join(', ')} laut vor. Ihr Kind spricht nach und zeigt im geschriebenen Wort auf das ${l.letter}.` : `Lesen Sie ${i.slice(0, 3).map((w) => `„${w}“`).join(', ')} laut vor. Ihr Kind spricht nach und zeigt im geschriebenen Wort auf das ${l.letter}.`,
    i.length ? `Buchstabenjagd: Schreiben Sie ${i.slice(0, 3).map((w) => `„${w}“`).join(', ')} auf ein Blatt. Ihr Kind kreist in jedem Wort das ${l.letter} ein.` : `Suchen Sie zu Hause Dinge, die mit ${l.letter} anfangen.`,
    `Malen: Ihr Kind sucht sich ein Wort aus, malt es und schreibt das ${l.letter} daneben.`,
  ],
  nextTitle: 'Weiter mit dem Buchstaben',
  tracingCard: (l) => ({ title: `${l.letter} nachspuren`, text: `Kostenloses Arbeitsblatt zum Nachspuren von ${l.letter} und ${l.lower}, mit Bildwort.` }),
  coloringCard: (l) => ({ title: `${l.letter} ausmalen`, text: `Die Figur zum Buchstaben ${l.letter} zum Ausmalen.` }),
  otherLetters: 'Wörter mit anderen Buchstaben',
  faqTitle: 'Häufige Fragen',
  faq: (l, s, i) => [
    ...(s.length ? [{ q: `Welche Wörter fangen mit ${l.letter} an?`, a: `Zum Beispiel: ${s.slice(0, 8).join(', ')}. Die ganze Liste steht auf dieser Seite.` }] : []),
    ...(s.length ? [{ q: `Welche Gegenstände und Sachen fangen mit ${l.letter} an?`, a: `Dinge, die Kinder kennen und zeigen können: ${s.slice(0, 5).join(', ')}. Gut für ein Suchspiel zu Hause.` }] : []),
    ...(i.length ? [{ q: `Welche Wörter haben ${l.letter} in der Mitte oder am Ende?`, a: `Zum Beispiel: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Wie übe ich mit der Liste mit kleinen Kindern?', a: 'Nehmen Sie drei oder vier Wörter am Tag, lesen Sie sie langsam vor und zeigen Sie den Buchstaben im geschriebenen Wort. Danach kann Ihr Kind den Buchstaben auf dem Arbeitsblatt nachspuren.' },
  ],
  moreWords: (l) => `Mehr Wörter mit ${l.letter}`,
  hubLink: 'Wörter mit jedem Buchstaben',
};

const pl: WordsCopy = {
  nav: 'Słowa',
  title: 'Słowa i wyrazy na każdą literę alfabetu dla dzieci',
  description: 'Listy słów na każdą literę od A do Ż dla przedszkolaków: słowa, które zaczynają się na literę, i słowa, w których ona występuje. Z obrazkami i zabawami.',
  h1: 'Słowa na każdą literę alfabetu',
  lead: 'Dla każdej litery lista prostych słów, które dzieci znają: zaczynających się na tę literę i takich, w których stoi w środku lub na końcu. Przydatne do zadań domowych i zabaw.',
  gridTitle: 'Wybierz literę',
  letterTitle: (l, s, n) => (s ? `Wyrazy na literę ${l.letter} dla dzieci: ${n >= 5 ? `${n} ${plWords(n)} ` : ''}z obrazkami` : `Słowa i wyrazy z literą ${l.letter} dla dzieci`),
  letterDescription: (l, n, ex) => `${n} słów i wyrazów z literą ${l.letter} dla dzieci: ${ex.join(', ')} i więcej. Z obrazkami, zabawami i darmową kartą pracy.`,
  letterH1: (l, s) => (s ? `Słowa i wyrazy na literę ${l.letter}` : `Słowa i wyrazy z literą ${l.letter}`),
  letterLead: (l, s, i) => (s
    ? `${s} słów na literę ${l.letter}${i ? ` i ${i} z ${l.letter} w środku lub na końcu` : ''}, wybranych dla dzieci w wieku 2–6 lat.`
    : `${i} słów z literą ${l.letter}, wybranych dla dzieci w wieku 2–6 lat. Polskie słowa nie zaczynają się na ${l.letter}, dlatego szukamy jej w środku i na końcu.`),
  picturesTitle: 'Z obrazkiem',
  startTitle: (l) => `Słowa na literę ${l.letter}`,
  insideTitle: (l) => `Słowa z ${l.letter} w środku lub na końcu`,
  namesTitle: (l) => `Imiona na ${l.letter}`,
  activitiesTitle: 'Zabawy z listą',
  activities: (l, s, i) => [
    `Przeczytaj na głos ${(s.length ? s : i).slice(0, 3).map((w) => `„${w}”`).join(', ')}. Dziecko powtarza i pokazuje literę ${l.letter} w zapisanym słowie.`,
    i.length ? `Polowanie na literę: napisz ${i.slice(0, 3).map((w) => `„${w}”`).join(', ')} na kartce i poproś dziecko, żeby zakreśliło literę ${l.letter} w każdym słowie.` : `Poszukajcie w domu rzeczy na literę ${l.letter}.`,
    `Rysunek: dziecko wybiera słowo z listy, rysuje je i pisze obok literę ${l.letter}.`,
  ],
  nextTitle: 'Dalej z literą',
  tracingCard: (l) => ({ title: `Litera ${l.letter} po śladzie`, text: `Darmowa karta pracy: ${l.letter} i ${l.lower} po śladzie, słowo z obrazkiem.` }),
  coloringCard: (l) => ({ title: `Litera ${l.letter} do kolorowania`, text: `Postać litery ${l.letter} do pokolorowania.` }),
  otherLetters: 'Słowa na inne litery',
  faqTitle: 'Częste pytania',
  faq: (l, s, i) => [
    ...(s.length ? [{ q: `Jakie słowa zaczynają się na literę ${l.letter}?`, a: `Na przykład: ${s.slice(0, 8).join(', ')}. Pełna lista jest na tej stronie.` }] : []),
    ...(s.length ? [{ q: `Jakie wyrazy na ${l.letter} wybrać dla dziecka?`, a: `Najlepiej krótkie wyrazy, które dziecko zna i może pokazać na obrazku: ${s.slice(0, 5).join(', ')}.` }] : []),
    ...(i.length ? [{ q: `Jakie słowa mają literę ${l.letter} w środku lub na końcu?`, a: `Na przykład: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Jak korzystać z listy z małymi dziećmi?', a: 'Wybierz trzy–cztery słowa dziennie, czytaj je powoli i pokazuj literę w zapisanym słowie. Potem dziecko może napisać literę po śladzie na karcie pracy.' },
  ],
  moreWords: (l) => `Więcej słów z literą ${l.letter}`,
  hubLink: 'Słowa na każdą literę',
};

const tr: WordsCopy = {
  nav: 'Kelimeler',
  title: 'Her harf için kelimeler: çocuklar için listeler',
  description: 'A’dan Z’ye her harf için okul öncesi kelime listeleri: o harfle başlayan ve içinde o harf geçen kelimeler. Resimler ve etkinliklerle.',
  h1: 'Her harf için kelimeler',
  lead: 'Her harf için çocukların bildiği basit kelimeler: o harfle başlayanlar ve harfin ortada ya da sonda geçtiği kelimeler. Ödevler ve oyunlar için.',
  gridTitle: 'Bir harf seçin',
  letterTitle: (l, s) => (s ? `${l.letter} harfi ile başlayan kelimeler ve nesneler (çocuklar için)` : `${l.letter} harfi olan kelimeler (çocuklar için)`),
  letterDescription: (l, n, ex) => `Çocuklar için ${l.letter} harfi geçen ${n} kelime: ${ex.join(', ')} ve daha fazlası. Resimler, etkinlikler ve ücretsiz çalışma sayfası.`,
  letterH1: (l, s) => (s ? `${l.letter} harfi ile başlayan kelimeler` : `${l.letter} harfi olan kelimeler`),
  letterLead: (l, s, i) => (s
    ? `${l.letter} harfi ile başlayan ${s} kelime${i ? ` ve ${l.letter} harfinin ortada ya da sonda geçtiği ${i} kelime` : ''}; 2–6 yaş çocuklar için seçildi.`
    : `${l.letter} harfi geçen ${i} kelime; 2–6 yaş çocuklar için seçildi. Türkçede hiçbir kelime ${l.letter} ile başlamaz, bu yüzden harfi kelimenin içinde arıyoruz.`),
  picturesTitle: 'Resimli',
  startTitle: (l) => `${l.letter} harfi ile başlayan kelimeler ve nesneler`,
  insideTitle: (l) => `İçinde ${l.letter} harfi geçen kelimeler`,
  namesTitle: (l) => `${l.letter} harfi ile başlayan isimler`,
  activitiesTitle: 'Listeyle oyunlar',
  activities: (l, s, i) => [
    `${(s.length ? s : i).slice(0, 3).map((w) => `“${w}”`).join(', ')} kelimelerini yüksek sesle okuyun. Çocuk tekrar eder ve yazılı kelimede ${l.letter} harfini gösterir.`,
    i.length ? `Harf avı: ${i.slice(0, 3).map((w) => `“${w}”`).join(', ')} kelimelerini bir kâğıda yazın, çocuk her kelimedeki ${l.letter} harfini daire içine alsın.` : `Evde ${l.letter} harfi ile başlayan eşyalar arayın.`,
    `Resim: çocuk listeden bir kelime seçer, resmini çizer ve yanına ${l.letter} harfini yazar.`,
  ],
  nextTitle: 'Harfle devam edin',
  tracingCard: (l) => ({ title: `${l.letter} harfi yazma çalışması`, text: `${l.letter} ve ${l.lower} harflerini noktalardan yazmak için ücretsiz sayfa.` }),
  coloringCard: (l) => ({ title: `${l.letter} harfi boyama`, text: `${l.letter} harfinin karakterini boyayın.` }),
  otherLetters: 'Diğer harflerle kelimeler',
  faqTitle: 'Sık sorulan sorular',
  faq: (l, s, i) => [
    ...(s.length ? [{ q: `${l.letter} harfi ile başlayan kelimeler nelerdir?`, a: `Örneğin: ${s.slice(0, 8).join(', ')}. Listenin tamamı bu sayfada.` }] : []),
    ...(s.length ? [{ q: `${l.letter} harfi ile başlayan nesneler nelerdir?`, a: `Çocuğun tanıdığı ve gösterebileceği şeyler: ${s.slice(0, 5).join(', ')}. Evde bir arama oyunu için harika.` }] : []),
    ...(i.length ? [{ q: `İçinde ${l.letter} harfi geçen kelimeler nelerdir?`, a: `Örneğin: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Liste küçük çocuklarla nasıl kullanılır?', a: 'Günde üç dört kelime seçin, yavaşça okuyun ve harfi yazılı kelimede gösterin. Sonra çocuk harfi çalışma sayfasında yazabilir.' },
  ],
  moreWords: (l) => `${l.letter} harfi ile daha fazla kelime`,
  hubLink: 'Her harf için kelimeler',
};

const en: WordsCopy = {
  nav: 'Words',
  title: 'Words for every letter of the alphabet for kids',
  description: 'Word lists for every letter from A to Z for preschool: words that start with the letter and words that have it inside. With pictures and activities.',
  h1: 'Words for every letter of the alphabet',
  lead: 'For each letter, a list of simple words children know: words that start with the letter and words with the letter in the middle or at the end. Handy for homework and games.',
  gridTitle: 'Choose a letter',
  letterTitle: (l, s) => (s ? `Words and things that start with ${l.letter} for kids` : `Words with the letter ${l.letter} for kids`),
  letterDescription: (l, n, ex) => `${n} words and things with the letter ${l.letter} for kids: ${ex.join(', ')} and more. With pictures, activities and a free tracing worksheet.`,
  letterH1: (l, s) => (s ? `Words that start with ${l.letter} for kids` : `Words with the letter ${l.letter} for kids`),
  letterLead: (l, s, i) => `${s} words that start with ${l.letter}${i ? ` and ${i} with ${l.letter} in the middle or at the end` : ''}, picked for children aged 2 to 6.`,
  picturesTitle: 'With pictures',
  startTitle: (l) => `Words and things that start with ${l.letter}`,
  insideTitle: (l) => `Words with ${l.letter} in the middle or at the end`,
  namesTitle: (l) => `Names with ${l.letter}`,
  activitiesTitle: 'Games with the list',
  activities: (l, s, i) => [
    `Read ${s.slice(0, 3).map((w) => `“${w}”`).join(', ')} aloud. Your child repeats and points to the letter ${l.letter} in the written word.`,
    i.length ? `Letter hunt: write ${i.slice(0, 3).map((w) => `“${w}”`).join(', ')} on paper and ask your child to circle the ${l.letter} in each word.` : `Look for things at home that start with ${l.letter}.`,
    `Drawing: your child picks a word from the list, draws it and writes the letter ${l.letter} next to it.`,
  ],
  nextTitle: 'Keep going with the letter',
  tracingCard: (l) => ({ title: `Letter ${l.letter} tracing`, text: `Free worksheet to trace ${l.letter} and ${l.lower}, with a picture word.` }),
  coloringCard: (l) => ({ title: `Letter ${l.letter} coloring page`, text: `The letter ${l.letter} character to color.` }),
  otherLetters: 'Words with other letters',
  faqTitle: 'Frequently asked questions',
  faq: (l, s, i) => [
    { q: `What words start with the letter ${l.letter}?`, a: `For example: ${s.slice(0, 8).join(', ')}. The full list is on this page.` },
    ...(s.length ? [{ q: `What things start with the letter ${l.letter}?`, a: `Things your child knows and can point to: ${s.slice(0, 5).join(', ')}. Great for a scavenger hunt at home.` }] : []),
    ...(i.length ? [{ q: `What words have the letter ${l.letter} in the middle or at the end?`, a: `For example: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'How do I use the list with young children?', a: 'Pick three or four words a day, read them slowly and point to the letter in the written word. Then your child can trace the letter on the worksheet.' },
  ],
  moreWords: (l) => `More words with ${l.letter}`,
  hubLink: 'Words for every letter',
};

const ru: WordsCopy = {
  nav: 'Слова',
  title: 'Слова на каждую букву алфавита для детей',
  description: 'Списки слов на каждую букву от А до Я для дошкольников: слова, которые начинаются на букву, и слова, где она стоит в середине или в конце. С картинками.',
  h1: 'Слова на каждую букву алфавита',
  lead: 'Для каждой буквы — список простых слов, которые знают дети: слова, которые начинаются на эту букву, и слова, где она стоит в середине или в конце. Пригодится для домашних заданий и игр.',
  gridTitle: 'Выберите букву',
  letterTitle: (l, s) => (s ? `Слова и предметы на букву ${l.letter} для детей` : `Слова с буквой ${l.letter}: список для детей`),
  letterDescription: (l, n, ex) => `${n} слов и предметов с буквой ${l.letter} для детей: ${ex.join(', ')} и другие. С картинками, играми и бесплатной прописью.`,
  letterH1: (l, s) => (s ? `Слова на букву ${l.letter} для детей` : `Слова с буквой ${l.letter}`),
  letterLead: (l, s, i) => (s
    ? `${s} слов на букву ${l.letter}${i ? ` и ${i} слов, где ${l.letter} в середине или в конце` : ''} — для детей 2–6 лет.`
    : `${i} слов с буквой ${l.letter} — для детей 2–6 лет. Слова в русском языке не начинаются на ${l.letter}, поэтому ищем её в середине и в конце слова.`),
  picturesTitle: 'С картинкой',
  startTitle: (l) => `Слова и предметы на букву ${l.letter}`,
  insideTitle: (l) => `Слова с ${l.letter} в середине или в конце`,
  namesTitle: (l) => `Имена на букву ${l.letter}`,
  activitiesTitle: 'Игры со списком',
  activities: (l, s, i) => [
    `Прочитайте вслух ${(s.length ? s : i).slice(0, 3).map((w) => `«${w}»`).join(', ')}. Ребёнок повторяет и показывает букву ${l.letter} в написанном слове.`,
    i.length ? `Охота на букву: напишите на листке ${i.slice(0, 3).map((w) => `«${w}»`).join(', ')} и попросите ребёнка обвести букву ${l.letter} в каждом слове.` : `Поищите дома предметы на букву ${l.letter}.`,
    `Рисунок: ребёнок выбирает слово из списка, рисует его и пишет рядом букву ${l.letter}.`,
  ],
  nextTitle: 'Продолжить с буквой',
  tracingCard: (l) => ({ title: `Пропись буквы ${l.letter}`, text: `Бесплатная пропись: ${l.letter} и ${l.lower}, слово с картинкой.` }),
  coloringCard: (l) => ({ title: `Раскраска буквы ${l.letter}`, text: `Персонаж буквы ${l.letter}, чтобы раскрасить.` }),
  otherLetters: 'Слова на другие буквы',
  faqTitle: 'Частые вопросы',
  faq: (l, s, i) => [
    ...(s.length ? [{ q: `Какие слова начинаются на букву ${l.letter}?`, a: `Например: ${s.slice(0, 8).join(', ')}. Полный список — на этой странице.` }] : []),
    ...(s.length ? [{ q: `Какие предметы начинаются на букву ${l.letter}?`, a: `Вещи, которые ребёнок знает и может показать: ${s.slice(0, 5).join(', ')}. Подойдёт для игры «найди дома».` }] : []),
    ...(i.length ? [{ q: `В каких словах буква ${l.letter} стоит в середине или в конце?`, a: `Например: ${i.slice(0, 6).join(', ')}.` }] : []),
    { q: 'Как заниматься со списком с маленькими детьми?', a: 'Берите три-четыре слова в день, читайте медленно и показывайте букву в написанном слове. Потом ребёнок может обвести букву в прописи.' },
  ],
  moreWords: (l) => `Ещё слова с буквой ${l.letter}`,
  hubLink: 'Слова на каждую букву',
};

export const WORDS_COPY: Partial<Record<Lang, WordsCopy>> = { pt, es, fr, de, pl, tr, en, ru };
