import type { Letter } from '../lib/routes';

// TODO(review): German copy is a first draft — check before publishing.
const withArticle = (l: Letter) => (l.article ? `${l.article} ${l.word}` : (l.word ?? ''));

export default {
  langName: 'Deutsch',
  locale: 'de_DE',
  nav: { tracing: 'Buchstaben nachspuren', coloring: 'Ausmalbilder', app: 'App', download: 'Laden' },
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
    sub: (langs: number, games: number) => `${langs} Sprachen · ${games} Spiele · für Kinder von 3\u00a0bis\u00a06`,
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
    otherLangsTitle: (l: Letter) => `Der Buchstabe ${l.letter} in anderen Sprachen`,
    otherLangsText: 'Derselbe Buchstabe in den anderen Alphabeten der App – praktisch, wenn Ihr Kind zwei Sprachen lernt.',
    activitiesTitle: (l: Letter) => `Spielideen zum Buchstaben ${l.letter}`,
    activities: (l: Letter, words: string[]) => [
      `Buchstabenjagd: Suchen Sie ${l.letter} und ${l.lower} auf Verpackungen, in Büchern und auf Schildern. Wer findet die meisten?`,
      `Lautspiel: Sprechen Sie ${words.map((w) => `„${w}“`).join(', ')} langsam vor. Ihr Kind klatscht, sobald es ${l.letter} hört.`,
      `Ohne Stift: Malen Sie ein großes ${l.letter} mit dem Finger in die Luft, in den Sand oder auf eine beschlagene Scheibe – danach auf dem Blatt nachspuren.`,
    ],
    faqTitle: 'Fragen von Eltern',
    faq: (l: Letter, words: string[]) => [
      {
        q: l.wordsMatch === 'inside' ? `Welche Wörter enthalten ein ${l.letter}?` : `Welche Wörter beginnen mit ${l.letter}?`,
        a: `Zum Beispiel: ${words.join(', ')}. Bilder dazu finden Sie auf dieser Seite.`,
      },
      {
        q: `Ab welchem Alter lernen Kinder den Buchstaben ${l.letter}?`,
        a: 'Kennenlernen geht schon mit 2–3 Jahren: den Laut sagen, den Buchstaben auf einem Bild finden, ihn mit dem Finger nachfahren. Mit dem Stift nachspuren klappt meist mit 4–5 Jahren, wenn das Kind den Stift sicher hält.',
      },
      {
        q: `Ist das Arbeitsblatt zum Buchstaben ${l.letter} kostenlos?`,
        a: 'Ja. Das PDF lässt sich ohne Anmeldung und ohne E-Mail herunterladen. Drucken Sie so viele Exemplare, wie Sie brauchen – für zu Hause oder für die Kita.',
      },
      {
        q: 'Wie drucke ich das Arbeitsblatt aus?',
        a: 'Laden Sie das PDF herunter und drucken Sie es auf A4 in Originalgröße (100 %), damit die Lineatur die richtige Höhe behält.',
      },
    ],
    coloringCta: (l: Letter) => `Ausmalbild: ${l.letter} wie ${l.word}`,
  },

  coloring: {
    title: 'Buchstaben-Ausmalbilder: kostenlos ausdrucken (PDF)',
    description: 'Kostenlose Ausmalbilder zu den Buchstaben für Kinder von 2 bis 6 – mit den Figuren aus der App ABC Alphabet. PDF zum Ausdrucken auf A4, ohne Anmeldung.',
    h1: 'Ausmalbilder zu den Buchstaben',
    lead: 'Zu jedem Buchstaben ein Ausmalbild mit seiner Figur aus der App. Ausdrucken und gemeinsam ausmalen.',
    gridTitle: 'Buchstaben wählen',
    letterTitle: (l: Letter) => `Ausmalbild Buchstabe ${l.letter}: ${l.word} – kostenlos ausdrucken`,
    letterDescription: (l: Letter) => `Kostenloses Ausmalbild zum Buchstaben ${l.letter}: ${l.letter} wie ${l.word}. PDF zum Ausdrucken auf A4, ohne Anmeldung.`,
    letterH1: (l: Letter) => `Ausmalbild zum Buchstaben ${l.letter}: ${l.word}`,
    letterLead: (l: Letter) => `${l.letter} wie ${l.word}. Buchstaben und Figur ausmalen und danach das ${l.letter} in den Wörtern unten finden.`,
    previewAlt: (l: Letter) => `Ausmalbild zum Buchstaben ${l.letter}: ${l.word}`,
    tipsTitle: 'So wird Ausmalen zum Lernen',
    tips: [
      'Zuerst den Umriss des Buchstabens mit dem Finger nachfahren und den Laut sagen.',
      'Den Buchstaben in einer Farbe ausmalen, die Figur so bunt wie gewünscht.',
      'Dicke Buntstifte oder Wachsmalstifte sind für kleine Hände leichter als Filzstifte.',
      'Name und Datum aufschreiben – nach einem Monat sieht man, wie viel genauer es wird.',
    ],
    tracingTitle: (l: Letter) => `Buchstabe ${l.letter} nachspuren`,
    tracingText: (l: Letter) => `Nächster Schritt: ${l.letter} und ${l.lower} auf der gestrichelten Linie nachspuren und das Wort „${l.word}“ schreiben.`,
  },

  articles: {
    nav: 'Ratgeber',
    title: 'Ratgeber für Eltern: Buchstaben lernen zu Hause',
    description: 'Praktische Ratgeber für Eltern und Erzieher: Buchstaben kennenlernen, nachspuren und schreiben, mit kostenlosen Arbeitsblättern als PDF.',
    h1: 'Ratgeber für Eltern',
    lead: 'Kurze, praktische Ratgeber zum Buchstabenlernen für Kinder von 2 bis 6 Jahren, mit kostenlosen Arbeitsblättern zum Ausdrucken.',
    readMore: 'Ratgeber lesen',
    published: 'Veröffentlicht am',
    faqTitle: 'Häufige Fragen',
    lettersTitle: 'Mit diesen Buchstaben anfangen',
    sheetsCta: 'Alle Arbeitsblätter zum Nachspuren herunterladen (PDF)',
    guideLink: 'Der ausführliche Ratgeber für Eltern',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Hör dir das ${l.letter} in der App an` : 'Buchstaben mit muttersprachlicher Stimme'),
    text: 'In der App ABC Alphabet wird jeder Buchstabe lebendig: Die Figur bewegt sich, eine Stimme spricht den Laut, und der Buchstabe lässt sich mit dem Finger nachfahren. Dazu 12 Spiele für Aufmerksamkeit, Gedächtnis und erstes Lesen.',
  },

  app: {
    title: 'ABC Alphabet App: Buchstaben lernen in 8 Sprachen',
    description: 'Alphabet-App für iPhone, iPad und Android: Buchstabenfiguren, Aussprache von Muttersprachlern, 12 Lernspiele in 8 Sprachen.',
    h1: 'Die App ABC Alphabet',
    lead: 'ABC-App für Kinder von 2 bis 6: Buchstabenfiguren, Aussprache von Muttersprachlern und Spiele, in denen Buchstaben gesucht, zusammengesetzt und nachgespurt werden.',
    redirecting: 'App Store wird geöffnet…',
  },

  privacy: {
    title: 'Datenschutzerklärung | ABC Alphabet',
    description: 'abcalphabetkids.com verwendet keine Cookies und sammelt keine personenbezogenen Daten. Besuchsstatistik mit Cloudflare Web Analytics ohne Cookies.',
    h1: 'Datenschutz',
    body: `
<p>Verantwortlich für diese Website ist AVIA YAZILIM LİMİTED ŞİRKETİ (Kontakt im <a href="/de/impressum/">Impressum</a>). Hier steht kurz, welche Daten die Website verarbeitet. Die Datenschutzerklärung der App finden Sie im App Store und bei Google Play.</p>
<h2>Was wir nicht tun</h2>
<ul><li>Keine Cookies. Im Browser wird nur die Sprache gespeichert, die Sie selbst gewählt haben (localStorage). Sie wird nirgendwohin übertragen.</li><li>Keine Anmeldung, keine E-Mail-Adressen: Arbeitsblätter werden direkt heruntergeladen.</li><li>Keine Werbung und keine Werbe-Tracker.</li></ul>
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
