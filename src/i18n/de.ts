import type { Letter } from '../lib/routes';

// TODO(review): German copy is a first draft — check before publishing.
const withArticle = (l: Letter) => (l.article ? `${l.article} ${l.word}` : (l.word ?? ''));

export default {
  langName: 'Deutsch',
  locale: 'de_DE',
  nav: { tracing: 'Buchstaben nachspuren', app: 'App', download: 'Laden' },
  store: { appStoreTop: 'Laden im', googlePlayTop: 'Jetzt bei' },
  footer: {
    about: 'ABC Alphabet wird von Eltern und Entwicklern bei AVIA YAZILIM gemacht.',
    contact: 'E-Mail',
    privacy: 'Datenschutz',
    imprint: 'Impressum',
    language: 'Sprache',
  },
  skip: 'Zum Inhalt',

  home: {
    title: 'ABC-Lern-App für Kinder ab 3 und gratis Arbeitsblätter',
    description: 'Alphabet-App: jeder Buchstabe ist eine Figur, gesprochen von Muttersprachlern. Dazu kostenlose Arbeitsblätter A–Z als PDF, ohne Anmeldung.',
    h1: 'Das ABC, das mit muttersprachlicher Stimme spricht',
    sub: (langs: number, games: number) => `${langs} Sprachen · ${games} Spiele · für Kinder von 3 bis 6`,
    heroNote: 'Die ersten sechs Buchstaben sind kostenlos.',
    freeTitle: 'Kostenlos für Eltern',
    freeLead: 'Ausdrucken und ohne Bildschirm üben. Keine Anmeldung, keine E-Mail.',
    tracingCard: { title: 'Buchstaben nachspuren A–Z', text: 'Ein Blatt pro Buchstabe: Groß- und Kleinbuchstaben nachspuren, ein Wort mit Bild und ein Ausmalbild mit der Buchstabenfigur.', cta: 'Zu den Arbeitsblättern' },
    coloringCard: { title: 'Ausmalbilder mit Figuren', text: 'Die Buchstabenfiguren aus der App als Ausmalbilder. Kommen im November, zusammen mit dem Weihnachtsset.', soon: 'Bald' },
    howTitle: 'So funktioniert die App',
    how: [
      { title: 'Jeder Buchstabe ist eine Figur', text: 'A wie Apfel, F wie Fuchs, K wie Katze. Kinder merken sich den Buchstaben über die Figur – nicht über eine Tabelle.' },
      { title: 'Gesprochen von Muttersprachlern', text: 'Alle Buchstaben und Wörter sind von Muttersprachlern eingesprochen. Ihr Kind hört von Anfang an die richtige Aussprache.' },
      { title: 'Mit dem Finger schreiben', text: 'Den Buchstaben mit dem Finger auf dem Bildschirm nachfahren, Punkt für Punkt. Danach klappt es auch mit dem Stift.' },
    ],
    screensAlt: 'Bildschirm der App ABC Alphabet',
    langsTitle: 'Acht Alphabete in einer App',
    langsText: 'Deutsch, Englisch, Französisch, Spanisch, Portugiesisch, Polnisch, Türkisch und Russisch. Die Sprache wechseln Sie in den Einstellungen, der Fortschritt bleibt für jedes Alphabet erhalten.',
    abroadTitle: 'Für mehrsprachige Familien',
    abroadText: 'Das Alphabet der Familiensprache und das Alphabet aus dem Kindergarten in einer App. Ihr Kind lernt beide abwechselnd, ohne zwischen zwei Programmen zu wechseln.',
    trustTitle: 'Gut zu wissen',
    trust: [
      'Elternsperre vor Käufen',
      'Kurze Einheiten: ein Buchstabe pro Mal',
      'Fortschritt für jedes Alphabet getrennt',
    ],
  },

  tracing: {
    title: 'Buchstaben nachspuren: Arbeitsblätter A–Z als PDF',
    description: '30 Arbeitsblätter zum Buchstaben nachspuren, mit Ä, Ö, Ü und ß: Groß- und Kleinbuchstaben, Wort mit Bild, Ausmalbild. Kostenlos, ohne Anmeldung.',
    h1: 'Buchstaben nachspuren: kostenlose Arbeitsblätter A–Z',
    lead: 'Ein Blatt für jeden Buchstaben des deutschen Alphabets, inklusive Umlaute und ß. Darauf: ein großer Buchstabe zum Nachspuren, Linien zum Nachspuren, ein Wort mit Bild und ein Ausmalbild mit der Figur aus der App ABC Alphabet.',
    downloadAll: 'Ganzes Alphabet laden (PDF)',
    gridTitle: 'Buchstaben wählen',
    setsTitle: 'Zusammenstellungen',
    sets: [
      { title: 'Vokale', letters: ['A', 'E', 'I', 'O', 'U'], note: 'Ein guter Anfang: Vokale lassen sich lang ziehen, und Kinder hören sie leichter in Wörtern.' },
      { title: 'Umlaute und ß', letters: ['Ä', 'Ö', 'Ü', 'ß'], note: 'Am besten direkt nach A, O und U üben – dann sieht das Kind, was die Pünktchen verändern.' },
      { title: 'Leicht zu verwechseln', letters: ['B', 'D', 'P', 'Q', 'M', 'W'], note: 'Bei b, d, p und q liegt die Schwierigkeit in den Kleinbuchstaben. Üben Sie die Paare am selben Tag.' },
    ],
    guideTitle: 'So üben Sie mit den Arbeitsblättern',
    guide: `
<p>Kurz gesagt: 5 bis 10 Minuten am Tag, ein Buchstabe pro Übung, und nur so lange, wie Ihr Kind Lust hat. Viele Kinder sind mit 4 bis 5 Jahren bereit zum Nachspuren. Wichtiger als das Alter ist die Hand: Hält Ihr Kind den Stift sicher und malt einen geschlossenen Kreis, kann es losgehen.</p>
<h3>Erst der Buchstabe im Alltag</h3>
<p>Stellen Sie den Buchstaben zuerst ohne Stift vor. Sprechen Sie den Laut, suchen Sie ihn auf der Müslipackung oder einem Schild, finden Sie gemeinsam drei Wörter. Auf jedem Blatt steht ein Wort mit Bild – fangen Sie damit an: „Das ist ein Apfel. Apfel fängt mit A an.“</p>
<h3>Erst mit dem Finger, dann mit dem Stift</h3>
<p>Ihr Kind fährt den großen Buchstaben zuerst mit dem Finger nach – von oben nach unten, so wie man ihn schreibt. So merkt sich die Hand die Richtung. Danach wird mit dem Stift auf der gestrichelten Linie nachgespurt. Ein weicher Bleistift oder ein dicker Dreikantstift ist leichter als ein Kuli.</p>
<h3>Die Zeilen</h3>
<p>Erste Zeile: Großbuchstabe, zweite Zeile: Kleinbuchstabe, danach das Wort. Die letzte Zeile ist leer – hier schreibt Ihr Kind den Buchstaben selbst. Es muss nicht alles auf einmal ausgefüllt werden. Zwei schöne Buchstaben sind besser als eine müde, schiefe Zeile.</p>
<h3>Wenn es noch nicht klappt</h3>
<p>Der Buchstabe rutscht über die Linie, wird gespiegelt, b und d werden verwechselt – das ist bis 6 oder 7 Jahre ganz normal. Korrigieren Sie nicht jeden Fehler. Spuren Sie gemeinsam nach, Ihre Hand auf der Hand des Kindes, und machen Sie eine Pause. Am nächsten Tag geht es meist besser.</p>
<h3>Zum Schluss ausmalen</h3>
<p>Auf der zweiten Seite wartet ein Ausmalbild mit der Buchstabenfigur. Das ist die Belohnung fürs Nachspuren und trainiert gleichzeitig die Feinmotorik.</p>
<h3>Wie oft?</h3>
<p>Drei- bis viermal pro Woche ein Blatt reicht völlig. So schaffen Sie das ganze Alphabet in zwei bis drei Monaten, ohne Druck. Wiederholen Sie Buchstaben, die schwerfallen oder verwechselt werden.</p>
`,
  },

  letter: {
    title: (l: Letter) => `Buchstabe ${l.letter} nachspuren: Arbeitsblatt als PDF`,
    description: (l: Letter) => `Arbeitsblatt zum Buchstaben ${l.letter} für Kinder von 4 bis 6: ${l.letter} und ${l.lower} nachspuren, Wort „${l.word}“ mit Bild${l.coloring ? ', Ausmalbild' : ''}. PDF zum Ausdrucken auf A4.`,
    h1: (l: Letter) => `Buchstabe ${l.letter}: ${l.coloring ? 'Nachspuren und Ausmalen' : 'Arbeitsblatt zum Nachspuren'}`,
    lead: (l: Letter) => `${l.letter} wie ${l.word}. Blatt ausdrucken und den Buchstaben auf der gestrichelten Linie nachspuren.`,
    download: 'PDF laden',
    previewAlt: (l: Letter) => `Arbeitsblatt Buchstabe ${l.letter} mit ${withArticle(l)}`,
    characterAlt: (l: Letter) => `${withArticle(l)} – Figur für den Buchstaben ${l.letter} aus der App ABC Alphabet`,
    wordsTitle: (l: Letter) => `Wörter mit ${l.letter} am Anfang`,
    wordsInsideTitle: (l: Letter) => `Wörter mit ${l.letter}`,
    wordAlt: (w: string) => `Bild: ${w}`,
    howTitle: 'So geht’s',
    how: [
      'Buchstaben und Laut benennen, das Bild zeigen.',
      'Den großen Buchstaben mit dem Finger nachfahren, von oben nach unten.',
      'Die Zeilen mit dem Stift nachspuren: groß, klein, Wort.',
      'Die letzte Zeile ohne Vorlage selbst schreiben.',
    ],
    prev: 'Vorheriger Buchstabe',
    next: 'Nächster Buchstabe',
    all: 'Alle Buchstaben',
    sheetPage: 'Seite 1: Nachspuren, Seite 2: Ausmalbild',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Hör dir das ${l.letter} in der App an` : 'Buchstaben mit muttersprachlicher Stimme'),
    text: 'In der App ABC Alphabet wird jeder Buchstabe lebendig: Die Figur bewegt sich, eine Stimme spricht den Laut, und der Buchstabe lässt sich mit dem Finger nachfahren. Dazu 11 Spiele für Aufmerksamkeit, Gedächtnis und erstes Lesen.',
  },

  app: {
    title: 'ABC Alphabet App: Buchstaben lernen in 8 Sprachen',
    description: 'Alphabet-App für iPhone, iPad und Android: Buchstabenfiguren, Aussprache von Muttersprachlern, 11 Lernspiele in 8 Sprachen.',
    h1: 'Die App ABC Alphabet',
    lead: 'ABC-App für Kinder von 3 bis 6: Buchstabenfiguren, Aussprache von Muttersprachlern und Spiele, in denen Buchstaben gesucht, zusammengesetzt und nachgespurt werden.',
    redirecting: 'App Store wird geöffnet…',
  },

  privacy: {
    title: 'Datenschutzerklärung | ABC Alphabet',
    description: 'abcalphabetkids.com verwendet keine Cookies und sammelt keine personenbezogenen Daten. Besuchsstatistik mit Cloudflare Web Analytics ohne Cookies.',
    h1: 'Datenschutz',
    body: `
<p>Verantwortlich für diese Website ist AVIA YAZILIM LİMİTED ŞİRKETİ (Kontakt im <a href="/de/impressum/">Impressum</a>). Hier steht kurz, welche Daten die Website verarbeitet. Die Datenschutzerklärung der App finden Sie im App Store und bei Google Play.</p>
<h2>Was wir nicht tun</h2>
<ul><li>Keine Cookies, nichts wird in Ihrem Browser gespeichert.</li><li>Keine Anmeldung, keine E-Mail-Adressen: Arbeitsblätter werden direkt heruntergeladen.</li><li>Keine Werbung und keine Werbe-Tracker.</li></ul>
<h2>Besuchsstatistik</h2>
<p>Wir zählen Besuche mit Cloudflare Web Analytics. Der Dienst setzt keine Cookies, erstellt kein Besucherprofil und verfolgt Sie nicht über andere Websites. Wir sehen nur zusammengefasste Zahlen: Seitenaufrufe, Land, Gerätetyp.</p>
<h2>Hosting</h2>
<p>Die Website liegt bei GitHub Pages. Wie jeder Webserver erhält GitHub technisch Ihre IP-Adresse, um die Seite auszuliefern. Details stehen in der Datenschutzerklärung von GitHub.</p>
<h2>Links zu den App-Stores</h2>
<p>Die Buttons für App Store und Google Play enthalten eine Kennung der Seite, von der Sie kommen (z. B. site_de_home). Damit sehen wir, welche Seiten hilfreich sind. Daten über Sie enthält sie nicht.</p>
<h2>Kontakt</h2>
<p>Fragen zum Datenschutz: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },

  imprint: {
    title: 'Impressum | ABC Alphabet',
    description: 'Impressum von abcalphabetkids.com – AVIA YAZILIM LİMİTED ŞİRKETİ.',
    h1: 'Impressum',
    // TODO: postal address and register number must come from the company documents.
    body: `
<p><strong>AVIA YAZILIM LİMİTED ŞİRKETİ</strong><br>[Anschrift – bitte ergänzen]<br>Türkei</p>
<p>E-Mail: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a></p>
<p>Vertreten durch: [Geschäftsführer – bitte ergänzen]<br>Handelsregister: [bitte ergänzen]</p>
`,
  },
};
