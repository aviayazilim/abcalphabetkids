import type { Letter } from '../lib/routes';

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const an = (w: string) => (/^[aeiou]/i.test(w) ? `an ${w}` : `a ${w}`);

export default {
  langName: 'English',
  locale: 'en_US',
  nav: { tracing: 'Letter tracing', coloring: 'Coloring pages', app: 'App', download: 'Get the app' },
  store: { appStoreTop: 'Download on the', googlePlayTop: 'Get it on' },
  footer: {
    about: 'ABC Alphabet is made by parents and developers at AVIA YAZILIM.',
    contact: 'Email',
    privacy: 'Privacy',
    language: 'Language',
  },
  skip: 'Skip to content',

  home: {
    title: 'ABC app for kids 2–6 and free letter tracing worksheets',
    description: 'Alphabet app where every letter is a character, voiced by native speakers. Plus free printable letter tracing worksheets A–Z, no sign-up.',
    h1: 'The ABC app that speaks with a native voice',
    sub: (langs: number, games: number) => `${langs} languages · ${games} games · for kids 2–6 years`,
    heroNote: 'The first six letters are free.',
    freeTitle: 'Free for parents',
    freeLead: 'Print them out and practice away from the screen. No sign-up, no email.',
    tracingCard: { title: 'Letter tracing A–Z', text: 'One sheet per letter: trace uppercase and lowercase, a word with a picture, and a coloring page with the letter’s character.', cta: 'Open the worksheets' },
    coloringCard: { title: 'Coloring pages with characters', text: 'The letter characters from the app as coloring pages. Coming in November, together with a Christmas set.', soon: 'Soon' },
    howTitle: 'How the app works',
    how: [
      { title: 'Every letter is a character', text: 'A for avocado, C for cat, P for penguin. Kids remember a letter through its character, not a chart.' },
      { title: 'Native speaker voices', text: 'Every letter and word is voiced by a native speaker, so your child hears the right sound from day one.' },
      { title: 'Trace with a finger', text: 'Kids trace the letter on screen, dot by dot. After that, the same letter is easy with a pencil.' },
    ],
    screensAlt: 'ABC Alphabet app screen',
    langsTitle: 'Eight alphabets in one app',
    langsText: 'English, Spanish, French, German, Portuguese, Polish, Turkish and Russian. Switch the language in settings; progress is saved separately for each alphabet.',
    abroadTitle: 'For bilingual families',
    abroadText: 'The alphabet of your home language and the alphabet of your child’s school in one app. Learn both side by side without juggling two programs.',
    trustTitle: 'Good to know',
    trust: [
      'Parental gate before purchases',
      'Short sessions: one letter at a time',
      'Separate progress for every alphabet',
    ],
  },

  tracing: {
    title: 'Letter Tracing Worksheets A–Z: Free Printable PDF',
    description: '26 free letter tracing worksheets for preschool and kindergarten: uppercase and lowercase tracing, a word with a picture, and a coloring page. No sign-up.',
    h1: 'Free printable letter tracing worksheets A–Z',
    lead: 'One worksheet for every letter of the alphabet. Each one has a big letter to trace, handwriting lines, a word with a picture, and a coloring page with the character from the ABC Alphabet app.',
    downloadAll: 'Download the whole alphabet (PDF)',
    gridTitle: 'Pick a letter',
    setsTitle: 'Sets',
    sets: [
      { title: 'Vowels', letters: ['A', 'E', 'I', 'O', 'U'], note: 'A good place to start: vowels can be stretched out loud, so kids hear them easily in words.' },
      { title: 'Easy to mix up', letters: ['B', 'D', 'P', 'Q', 'M', 'W'], note: 'With b, d, p and q the trouble is in the lowercase letters. Practice each pair on the same day.' },
    ],
    guideTitle: 'How to use the tracing worksheets',
    guide: `
<p>Short answer: 5–10 minutes a day, one letter per session, and only for as long as your child is interested. Many kids are ready to trace letters at 4 or 5. Look at the hand rather than the age: if your child holds a pencil steadily and can draw a closed circle, you can start.</p>
<h3>Meet the letter first</h3>
<p>Introduce the letter without a pencil. Say its sound, spot it on a cereal box or a street sign, think of three words together. Every sheet has a word with a picture — start there: “This is an avocado. Avocado starts with A.”</p>
<h3>Finger first, then pencil</h3>
<p>Let your child trace the big letter with a finger, top to bottom, the way it’s written. That’s how the hand learns the direction. Then trace the dashed lines with a pencil. A soft pencil or a thick triangular one is easier than a pen.</p>
<h3>The rows</h3>
<p>Row one is the uppercase letter, row two the lowercase, then the word. The last row is empty: ask your child to write the letter without help. There’s no need to fill everything at once. Two neat letters are better than a tired, wobbly row.</p>
<h3>When it doesn’t work yet</h3>
<p>Letters slipping off the line, mirror writing, mixing up b and d — all normal until 6 or 7. Don’t correct every mistake. Trace together with your hand over theirs, and take a break. The next day usually goes better.</p>
<h3>Coloring at the end</h3>
<p>The second page is a coloring page with the letter’s character. It’s a reward for tracing and trains the same fine motor skills.</p>
<h3>How often</h3>
<p>Three or four sheets a week is plenty. That way you’ll get through the alphabet in two or three months without pressure. Come back to letters that are hard or get mixed up.</p>
`,
  },

  letter: {
    title: (l: Letter) => `Letter ${l.letter} Tracing Worksheet: Free Printable PDF`,
    description: (l: Letter) => `Free letter ${l.letter} tracing worksheet for preschool: trace ${l.letter} and ${l.lower}, the word “${l.word}” with a picture${l.coloring ? ', and a coloring page' : ''}. PDF in US Letter and A4.`,
    h1: (l: Letter) => `Letter ${l.letter}: ${l.coloring ? 'tracing and coloring' : 'tracing worksheet'}`,
    lead: (l: Letter) => `${l.letter} is for ${l.word}. Print the sheet and trace the letter along the dashed line.`,
    download: 'Download PDF',
    previewAlt: (l: Letter) => `Letter ${l.letter} tracing worksheet with ${an(l.word ?? '')}`,
    characterAlt: (l: Letter) => `${cap(l.word ?? '')}, the character for letter ${l.letter} in the ABC Alphabet app`,
    wordsTitle: (l: Letter) => `Words that start with ${l.letter}`,
    wordsInsideTitle: (l: Letter) => `Words with ${l.letter}`,
    wordAlt: (w: string) => `Picture: ${w}`,
    howTitle: 'How to practice',
    how: [
      'Say the letter and its sound, show the picture.',
      'Trace the big letter with a finger, top to bottom.',
      'Trace the rows with a pencil: uppercase, lowercase, the word.',
      'Write the last row without the dashed guide.',
    ],
    prev: 'Previous letter',
    next: 'Next letter',
    all: 'All letters',
    sheetPage: 'Page 1: tracing, page 2: coloring',
    otherLangsTitle: (l: Letter) => `Letter ${l.letter} in other languages`,
    otherLangsText: 'The same letter in the other alphabets of the app — handy if your child is learning two languages.',
    activitiesTitle: (l: Letter) => `Activities for the letter ${l.letter}`,
    activities: (l: Letter, words: string[]) => [
      `Letter hunt: look for ${l.letter} and ${l.lower} on cereal boxes, in books and on street signs. Count how many you find.`,
      `Sound game: say ${words.map((w) => `“${w}”`).join(', ')} slowly and ask your child to clap when they hear ${l.letter}.`,
      `No pencil yet: draw a big ${l.letter} with a finger in the air, in sand or on a misty window, then trace it on paper.`,
    ],
    faqTitle: 'Questions from parents',
    faq: (l: Letter, words: string[]) => [
      {
        q: l.wordsMatch === 'inside' ? `What words have the letter ${l.letter}?` : `What words start with the letter ${l.letter}?`,
        a: `For example: ${words.join(', ')}. You’ll find pictures for them on this page.`,
      },
      {
        q: `At what age can kids learn the letter ${l.letter}?`,
        a: 'Kids can get to know a letter at 2–3: say its sound, spot it in a picture, trace it with a finger. Tracing with a pencil usually works at 4–5, once your child holds a pencil steadily.',
      },
      {
        q: `Is the letter ${l.letter} worksheet free?`,
        a: 'Yes. The PDF downloads with no sign-up and no email. Print as many copies as you need, at home or for a classroom.',
      },
      {
        q: 'How do I print the worksheet?',
        a: 'Download the PDF and print on US Letter or A4 at 100% (“Actual size”) so the handwriting lines keep the right height.',
      },
    ],
    coloringCta: (l: Letter) => `Coloring page: ${l.letter} is for ${l.word}`,
  },

  coloring: {
    title: 'Alphabet Coloring Pages: Free Printable PDF A–Z',
    description: 'Free alphabet coloring pages for kids 2–6, one for every letter A–Z with a character from the ABC Alphabet app. Printable PDF, no sign-up.',
    h1: 'Free alphabet coloring pages',
    lead: 'One coloring page for every letter, each with its character from the app: an avocado, a cat, a penguin and more. Print it out and color it in together.',
    gridTitle: 'Pick a letter',
    letterTitle: (l: Letter) => `Letter ${l.letter} Coloring Page: ${cap(l.word ?? '')} — Free Printable`,
    letterDescription: (l: Letter) => `Free letter ${l.letter} coloring page for kids: ${l.letter} is for ${l.word}. Printable PDF in US Letter and A4, no sign-up.`,
    letterH1: (l: Letter) => `Letter ${l.letter} coloring page: ${l.word}`,
    letterLead: (l: Letter) => `${l.letter} is for ${l.word}. Color in the letter and the character, then find ${l.letter} in the words below.`,
    previewAlt: (l: Letter) => `Letter ${l.letter} coloring page with ${an(l.word ?? '')}`,
    tipsTitle: 'Make coloring count',
    tips: [
      'Trace the outline of the letter with a finger first and say its sound.',
      'Color the letter in one color and the character in as many as you like.',
      'Chunky crayons or triangular pencils are easier for small hands than markers.',
      'Write the name and date on the sheet — in a month you’ll see how much neater it gets.',
    ],
    tracingTitle: (l: Letter) => `Letter ${l.letter} tracing worksheet`,
    tracingText: (l: Letter) => `Next step: trace uppercase and lowercase ${l.letter}${l.lower} along the dashed lines and write the word “${l.word}”.`,
  },

  articles: {
    nav: 'Guides',
    title: 'Parent guides: teaching the alphabet at home',
    description: 'Practical guides for parents and preschool teachers: how to teach letters, letter tracing and early writing, with free printable PDF worksheets.',
    h1: 'Parent guides',
    lead: 'Short, practical guides to teaching letters to children aged 2 to 6, with free printable worksheets.',
    readMore: 'Read the guide',
    published: 'Published',
    faqTitle: 'Frequently asked questions',
    lettersTitle: 'Start with these letters',
    sheetsCta: 'Download all letter tracing worksheets (PDF)',
    guideLink: 'The full guide for parents',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Hear the letter ${l.letter} in the app` : 'Letters that speak with a native voice'),
    text: 'In the ABC Alphabet app every letter comes alive: the character moves, a voice says the sound, and kids trace the letter with a finger. Plus 12 games for attention, memory and first reading.',
  },

  app: {
    title: 'ABC Alphabet app: learn letters in 8 languages',
    description: 'Alphabet app for iPhone, iPad and Android: letter characters, native speaker voices and 12 learning games in 8 languages.',
    h1: 'The ABC Alphabet app',
    lead: 'An ABC app for kids 2 to 6: letter characters, native speaker voices, and games where kids find, build and trace letters.',
    redirecting: 'Opening the app store…',
  },

  privacy: {
    title: 'Privacy Policy | ABC Alphabet',
    description: 'abcalphabetkids.com uses no cookies and collects no personal data. Visit statistics come from cookie-free Cloudflare Web Analytics.',
    h1: 'Privacy',
    body: `
<p>This website is run by AVIA YAZILIM LİMİTED ŞİRKETİ. Here is what data the website handles. The app has its own privacy policy, available in the App Store and on Google Play.</p>
<h2>What we don’t do</h2>
<ul><li>No cookies. The browser only stores the site language you picked yourself (localStorage). It is never sent anywhere.</li><li>No sign-up and no email addresses: worksheets download directly.</li><li>No ads and no ad trackers.</li></ul>
<h2>Visit statistics</h2>
<p>We count visits with Cloudflare Web Analytics. It sets no cookies, builds no visitor profile and doesn’t track you across websites. We only see totals: page views, country, device type.</p>
<h2>Hosting</h2>
<p>The website is hosted on GitHub Pages. Like any web server, GitHub technically receives your IP address to deliver the page. See GitHub’s privacy statement for details.</p>
<h2>App store links</h2>
<p>The App Store and Google Play buttons carry a label for the page you came from (for example, site_en_home). It tells us which pages are useful and contains no data about you.</p>
<h2>Contact</h2>
<p>Questions about data: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },
};
