import type { Letter } from '../lib/routes';

// TODO(review): Polish copy is a first draft — have a native speaker check it.
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default {
  langName: 'Polski',
  locale: 'pl_PL',
  nav: { tracing: 'Karty pracy: litery', app: 'Aplikacja', download: 'Pobierz' },
  store: { appStoreTop: 'Pobierz z', googlePlayTop: 'Pobierz z' },
  footer: {
    about: 'ABC Alphabet tworzą rodzice i programiści z AVIA YAZILIM.',
    contact: 'E-mail',
    privacy: 'Prywatność',
    language: 'Język',
  },
  skip: 'Przejdź do treści',

  home: {
    title: 'Aplikacja z alfabetem dla dzieci 3–6 i darmowe karty pracy',
    description: 'Aplikacja z alfabetem: każda litera to postać, a głos nagrali native speakerzy. Do tego darmowe karty pracy z literami A–Ż w PDF, bez rejestracji.',
    h1: 'Alfabet, który mówi głosem native speakera',
    sub: (langs: number, games: number) => `${langs} języków · ${games} gier · dla dzieci w wieku 3–6 lat`,
    heroNote: 'Pierwsze sześć liter jest za darmo.',
    freeTitle: 'Za darmo dla rodziców',
    freeLead: 'Wydrukuj i ćwicz bez ekranu. Bez rejestracji i bez e-maila.',
    tracingCard: { title: 'Karty pracy z literami A–Ż', text: 'Jedna karta na literę: pisanie po śladzie wielkiej i małej litery, słowo z obrazkiem i kolorowanka z postacią litery.', cta: 'Zobacz karty pracy' },
    coloringCard: { title: 'Kolorowanki z postaciami', text: 'Postacie liter z aplikacji jako kolorowanki. Pojawią się w listopadzie, razem z zestawem świątecznym.', soon: 'Wkrótce' },
    howTitle: 'Jak działa aplikacja',
    how: [
      { title: 'Każda litera to postać', text: 'A jak awokado, K jak kot, P jak pingwin. Dziecko zapamiętuje literę dzięki postaci, a nie tabelce.' },
      { title: 'Głos native speakerów', text: 'Wszystkie litery i słowa nagrali native speakerzy. Dziecko od pierwszego dnia słyszy poprawną wymowę.' },
      { title: 'Pisanie palcem', text: 'Dziecko pisze literę palcem po ekranie, kropka po kropce. Potem ołówkiem idzie już znacznie łatwiej.' },
    ],
    screensAlt: 'Ekran aplikacji ABC Alphabet',
    langsTitle: 'Osiem alfabetów w jednej aplikacji',
    langsText: 'Polski, angielski, niemiecki, francuski, hiszpański, portugalski, turecki i rosyjski. Język zmienia się w ustawieniach, a postępy w każdym alfabecie zapisują się osobno.',
    abroadTitle: 'Dla rodzin za granicą',
    abroadText: 'Polski alfabet z domu i alfabet ze szkoły czy przedszkola w jednej aplikacji. Dziecko uczy się obu na zmianę, bez przełączania programów.',
    trustTitle: 'Warto wiedzieć',
    trust: [
      'Blokada rodzicielska przed zakupami',
      'Krótkie sesje: jedna litera naraz',
      'Osobne postępy dla każdego alfabetu',
    ],
  },

  tracing: {
    title: 'Karty pracy litery A–Ż do druku: pisanie po śladzie PDF',
    description: '32 darmowe karty pracy z literami, z Ą, Ć, Ę, Ł, Ń, Ó, Ś, Ź i Ż: pisanie po śladzie, słowo z obrazkiem, kolorowanka. PDF bez rejestracji.',
    h1: 'Karty pracy z literami do druku: pisanie po śladzie A–Ż',
    lead: 'Osobna karta dla każdej litery polskiego alfabetu, łącznie z literami ze znakami diakrytycznymi. Na karcie: duża litera do pisania po śladzie, liniatura, słowo z obrazkiem i kolorowanka z postacią z aplikacji ABC Alphabet.',
    downloadAll: 'Pobierz cały alfabet (PDF)',
    gridTitle: 'Wybierz literę',
    setsTitle: 'Zestawy',
    sets: [
      { title: 'Samogłoski', letters: ['A', 'Ą', 'E', 'Ę', 'I', 'O', 'Ó', 'U', 'Y'], note: 'Dobry początek: samogłoski można przeciągać głosem, więc dziecko łatwo słyszy je w słowach.' },
      { title: 'Ogonki, kreski i kropki', letters: ['Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż'], note: 'Ćwicz je zaraz po literze bazowej: najpierw A, potem Ą. Dziecko widzi, co zmienia mały znak.' },
    ],
    guideTitle: 'Jak pracować z kartami',
    guide: `
<p>W skrócie: 5–10 minut dziennie, jedna litera na raz i tylko dopóki dziecko ma ochotę. Wiele dzieci jest gotowych do pisania po śladzie w wieku 4–5 lat. Patrz jednak na rękę, nie na wiek: jeśli dziecko pewnie trzyma ołówek i rysuje zamknięte kółko, można zaczynać.</p>
<h3>Najpierw poznajcie literę</h3>
<p>Przedstaw literę bez ołówka. Powiedz jej głoskę, poszukajcie jej na pudełku płatków albo szyldzie, wymyślcie razem trzy słowa. Na każdej karcie jest słowo z obrazkiem, zacznij od niego: „To jest awokado. Awokado zaczyna się na A”.</p>
<h3>Najpierw palcem, potem ołówkiem</h3>
<p>Niech dziecko poprowadzi palec po dużej literze, z góry na dół, tak jak się ją pisze. Tak ręka uczy się kierunku. Potem pisanie po śladzie ołówkiem. Miękki ołówek albo gruby trójkątny jest łatwiejszy niż długopis.</p>
<h3>Linijki</h3>
<p>Pierwsza linijka to wielka litera, druga mała, potem słowo. Ostatnia jest pusta: poproś dziecko, żeby napisało literę samodzielnie. Nie trzeba wypełniać wszystkiego za jednym razem. Dwie ładne litery są lepsze niż krzywa linijka ze zmęczenia.</p>
<h3>Jeśli jeszcze nie wychodzi</h3>
<p>Wychodzenie poza linię, pismo lustrzane, mylenie b i d — to normalne do 6–7 roku życia. Nie poprawiaj każdego błędu. Piszcie razem, twoja ręka na jego ręce, i zróbcie przerwę. Następnego dnia zwykle idzie lepiej.</p>
<h3>Na koniec kolorowanie</h3>
<p>Na drugiej stronie jest kolorowanka z postacią litery. To nagroda za pisanie i trening tej samej małej motoryki.</p>
<h3>Jak często</h3>
<p>Trzy–cztery karty w tygodniu w zupełności wystarczą. Tak przejdziecie cały alfabet w dwa–trzy miesiące, bez pośpiechu. Wracajcie do liter, które sprawiają trudność albo się mylą.</p>
`,
  },

  letter: {
    title: (l: Letter) => `Litera ${l.letter}: karta pracy do druku, pisanie po śladzie`,
    description: (l: Letter) => `Karta pracy z literą ${l.letter} dla przedszkolaków: pisanie po śladzie ${l.letter} i ${l.lower}, słowo „${l.word}” z obrazkiem${l.coloring ? ' i kolorowanka' : ''}. PDF A4.`,
    h1: (l: Letter) => `Litera ${l.letter}: ${l.coloring ? 'pisanie po śladzie i kolorowanka' : 'karta pracy'}`,
    lead: (l: Letter) => `${l.letter} jak ${l.word}. Wydrukuj kartę i pisz literę po przerywanej linii.`,
    download: 'Pobierz PDF',
    previewAlt: (l: Letter) => `Karta pracy z literą ${l.letter}, obrazek: ${l.word}`,
    characterAlt: (l: Letter) => `${cap(l.word ?? '')}: postać litery ${l.letter} w aplikacji ABC Alphabet`,
    wordsTitle: (l: Letter) => `Słowa na literę ${l.letter}`,
    wordsInsideTitle: (l: Letter) => `Słowa z literą ${l.letter}`,
    wordAlt: (w: string) => `Obrazek: ${w}`,
    howTitle: 'Jak ćwiczyć',
    how: [
      'Nazwij literę i głoskę, pokaż obrazek.',
      'Poprowadź palec po dużej literze, z góry na dół.',
      'Pisz po śladzie ołówkiem: wielka litera, mała, słowo.',
      'Ostatnią linijkę dziecko pisze samo, bez śladu.',
    ],
    prev: 'Poprzednia litera',
    next: 'Następna litera',
    all: 'Wszystkie litery',
    sheetPage: 'Strona 1: pisanie po śladzie, strona 2: kolorowanka',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Posłuchaj litery ${l.letter} w aplikacji` : 'Litery mówią głosem native speakera'),
    text: 'W aplikacji ABC Alphabet każda litera ożywa: postać się porusza, głos wymawia głoskę, a dziecko pisze literę palcem. Do tego 11 gier na uwagę, pamięć i pierwsze czytanie.',
  },

  app: {
    title: 'Aplikacja ABC Alphabet: nauka liter w 8 językach',
    description: 'Aplikacja z alfabetem na iPhone’a, iPada i Androida: postacie liter, głos native speakerów i 11 gier edukacyjnych w 8 językach.',
    h1: 'Aplikacja ABC Alphabet',
    lead: 'Aplikacja z alfabetem dla dzieci w wieku 3–6 lat: postacie liter, głos native speakerów i gry, w których litery trzeba znaleźć, ułożyć i napisać po śladzie.',
    redirecting: 'Otwieramy sklep z aplikacjami…',
  },

  privacy: {
    title: 'Polityka prywatności | ABC Alphabet',
    description: 'abcalphabetkids.com nie używa plików cookie i nie zbiera danych osobowych. Statystyki odwiedzin pochodzą z Cloudflare Web Analytics bez cookie.',
    h1: 'Prywatność',
    body: `
<p>Administratorem tej strony jest AVIA YAZILIM LİMİTED ŞİRKETİ. Poniżej krótko opisujemy, jakie dane przetwarza strona. Aplikacja ma własną politykę prywatności, dostępną w App Store i Google Play.</p>
<h2>Czego nie robimy</h2>
<ul><li>Nie używamy plików cookie. Przeglądarka zapamiętuje tylko wybrany przez Ciebie język strony (localStorage) i nigdzie go nie wysyła.</li><li>Bez rejestracji i bez adresów e-mail: karty pracy pobierasz bezpośrednio.</li><li>Bez reklam i bez trackerów reklamowych.</li></ul>
<h2>Statystyki odwiedzin</h2>
<p>Odwiedziny liczymy za pomocą Cloudflare Web Analytics. Usługa nie używa plików cookie, nie tworzy profili odwiedzających i nie śledzi Cię na innych stronach. Widzimy tylko sumy: wyświetlenia stron, kraj, typ urządzenia.</p>
<h2>Hosting</h2>
<p>Strona jest hostowana na GitHub Pages. Jak każdy serwer WWW, GitHub technicznie otrzymuje Twój adres IP, aby dostarczyć stronę. Szczegóły w oświadczeniu o prywatności GitHub.</p>
<h2>Linki do sklepów</h2>
<p>Przyciski App Store i Google Play zawierają oznaczenie strony, z której przychodzisz (np. site_pl_home). Dzięki temu wiemy, które strony są przydatne. Nie zawiera ono danych o Tobie.</p>
<h2>Kontakt</h2>
<p>Pytania dotyczące danych: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },
};
