import type { Letter } from '../lib/routes';

// TODO(review): French copy is a first draft — have a native speaker check it.
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default {
  langName: 'Français',
  locale: 'fr_FR',
  nav: { tracing: 'Fiches alphabet', app: 'Application', download: 'Télécharger' },
  store: { appStoreTop: 'Télécharger dans l’', googlePlayTop: 'Disponible sur' },
  footer: {
    about: 'ABC Alphabet est conçu par des parents et des développeurs d’AVIA YAZILIM.',
    contact: 'E-mail',
    privacy: 'Confidentialité',
    imprint: 'Mentions légales',
    language: 'Langue',
  },
  skip: 'Aller au contenu',

  home: {
    title: 'Appli alphabet pour enfants de 3 à 6 ans et fiches gratuites',
    description: 'Appli alphabet : chaque lettre est un personnage, avec la voix de locuteurs natifs. Et des fiches alphabet A–Z à imprimer gratuitement, sans inscription.',
    h1: 'L’alphabet qui parle avec une voix native',
    sub: (langs: number, games: number) => `${langs} langues · ${games} jeux · pour les enfants de 3 à 6 ans`,
    heroNote: 'Les six premières lettres sont gratuites.',
    freeTitle: 'Gratuit pour les parents',
    freeLead: 'Imprimez et entraînez-vous sans écran. Sans inscription, sans e-mail.',
    tracingCard: { title: 'Fiches alphabet A–Z', text: 'Une fiche par lettre : repasser la majuscule et la minuscule, un mot illustré et un coloriage avec le personnage de la lettre.', cta: 'Voir les fiches' },
    coloringCard: { title: 'Coloriages avec les personnages', text: 'Les personnages des lettres de l’appli en coloriages. Disponibles en novembre, avec une série spéciale Noël.', soon: 'Bientôt' },
    howTitle: 'Comment fonctionne l’appli',
    how: [
      { title: 'Chaque lettre est un personnage', text: 'A comme abeille, C comme chat, P comme pingouin. L’enfant retient la lettre grâce au personnage, pas grâce à un tableau.' },
      { title: 'La voix de locuteurs natifs', text: 'Toutes les lettres et tous les mots sont enregistrés par des locuteurs natifs. Votre enfant entend la bonne prononciation dès le premier jour.' },
      { title: 'Écrire avec le doigt', text: 'L’enfant repasse la lettre du doigt sur l’écran, point par point. Ensuite, au crayon, c’est beaucoup plus facile.' },
    ],
    screensAlt: 'Écran de l’application ABC Alphabet',
    langsTitle: 'Huit alphabets dans une seule appli',
    langsText: 'Français, anglais, allemand, espagnol, portugais, polonais, turc et russe. La langue se change dans les réglages, et la progression est enregistrée séparément pour chaque alphabet.',
    abroadTitle: 'Pour les familles bilingues',
    abroadText: 'L’alphabet de la langue de la maison et celui de l’école dans la même appli. Votre enfant apprend les deux en alternance, sans changer de programme.',
    trustTitle: 'Bon à savoir',
    trust: [
      'Contrôle parental avant tout achat',
      'Séances courtes : une lettre à la fois',
      'Progression séparée pour chaque alphabet',
    ],
  },

  tracing: {
    title: 'Fiches alphabet maternelle à imprimer : lettres A–Z en PDF',
    description: '26 fiches alphabet gratuites pour la maternelle : repasser majuscule et minuscule, mot illustré et coloriage. PDF à imprimer, sans inscription.',
    h1: 'Fiches alphabet à imprimer gratuitement : lettres A–Z',
    lead: 'Une fiche pour chaque lettre de l’alphabet. Sur chaque fiche : une grande lettre à repasser, des lignes d’écriture, un mot illustré et un coloriage avec le personnage de l’appli ABC Alphabet. Les lettres sont en script (capitales et minuscules d’imprimerie).',
    downloadAll: 'Télécharger tout l’alphabet (PDF)',
    gridTitle: 'Choisissez une lettre',
    setsTitle: 'Séries',
    sets: [
      { title: 'Voyelles', letters: ['A', 'E', 'I', 'O', 'U', 'Y'], note: 'Un bon début : les voyelles se prolongent à voix haute, et l’enfant les entend facilement dans les mots.' },
      { title: 'Lettres faciles à confondre', letters: ['B', 'D', 'P', 'Q', 'M', 'W'], note: 'Avec b, d, p et q, la difficulté est dans les minuscules. Travaillez chaque paire le même jour.' },
    ],
    guideTitle: 'Comment utiliser les fiches',
    guide: `
<p>En bref : 5 à 10 minutes par jour, une lettre par séance, et seulement tant que l’enfant en a envie. Beaucoup d’enfants sont prêts à repasser des lettres vers 4 ou 5 ans. Regardez la main plutôt que l’âge : si votre enfant tient bien son crayon et trace un rond fermé, vous pouvez commencer.</p>
<h3>D’abord, faire connaissance avec la lettre</h3>
<p>Présentez la lettre sans crayon. Dites son son, cherchez-la sur une boîte de céréales ou un panneau, trouvez ensemble trois mots. Chaque fiche a un mot illustré : commencez par lui. « Ça, c’est une abeille. Abeille commence par A. »</p>
<h3>Le doigt d’abord, le crayon ensuite</h3>
<p>Laissez l’enfant suivre la grande lettre du doigt, de haut en bas, dans le sens de l’écriture. C’est ainsi que la main apprend le geste. Ensuite, on repasse les pointillés au crayon. Un crayon gras ou un gros crayon triangulaire est plus facile qu’un stylo.</p>
<h3>Les lignes</h3>
<p>La première ligne, c’est la majuscule, la deuxième la minuscule, puis le mot. La dernière est vide : demandez à l’enfant d’écrire la lettre tout seul. Inutile de tout remplir d’un coup. Deux jolies lettres valent mieux qu’une ligne tordue par la fatigue.</p>
<h3>Si ça ne vient pas encore</h3>
<p>Lettre qui dépasse la ligne, écriture en miroir, confusion entre b et d : c’est normal jusqu’à 6 ou 7 ans. Ne corrigez pas chaque erreur. Repassez ensemble, votre main sur la sienne, et faites une pause. Le lendemain, ça va souvent mieux.</p>
<h3>Pour finir, le coloriage</h3>
<p>La deuxième page est un coloriage avec le personnage de la lettre. C’est la récompense, et il entraîne la même motricité fine.</p>
<h3>À quelle fréquence</h3>
<p>Trois ou quatre fiches par semaine suffisent largement. Vous ferez ainsi tout l’alphabet en deux ou trois mois, sans pression. Revenez aux lettres difficiles ou qui se confondent.</p>
`,
  },

  letter: {
    title: (l: Letter) => `Lettre ${l.letter} à repasser : fiche gratuite à imprimer`,
    description: (l: Letter) => `Fiche lettre ${l.letter} pour la maternelle : repasser ${l.letter} et ${l.lower}, le mot « ${l.word} » illustré${l.coloring ? ' et un coloriage' : ''}. PDF A4.`,
    h1: (l: Letter) => `Lettre ${l.letter} : ${l.coloring ? 'écriture et coloriage' : 'fiche d’écriture'}`,
    lead: (l: Letter) => `${l.letter} comme ${l.word}. Imprimez la fiche et repassez la lettre en suivant les pointillés.`,
    download: 'Télécharger le PDF',
    previewAlt: (l: Letter) => `Fiche d’écriture de la lettre ${l.letter} avec ${l.word}`,
    characterAlt: (l: Letter) => `${cap(l.word ?? '')}, le personnage de la lettre ${l.letter} dans l’appli ABC Alphabet`,
    wordsTitle: (l: Letter) => `Mots qui commencent par ${l.letter}`,
    wordsInsideTitle: (l: Letter) => `Mots avec ${l.letter}`,
    wordAlt: (w: string) => `Image : ${w}`,
    howTitle: 'Comment s’entraîner',
    how: [
      'Dites la lettre et son son, montrez l’image.',
      'Suivez la grande lettre du doigt, de haut en bas.',
      'Repassez les lignes au crayon : majuscule, minuscule, mot.',
      'La dernière ligne, sans pointillés.',
    ],
    prev: 'Lettre précédente',
    next: 'Lettre suivante',
    all: 'Toutes les lettres',
    sheetPage: 'Page 1 : écriture, page 2 : coloriage',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Écoutez la lettre ${l.letter} dans l’appli` : 'Des lettres avec la voix de locuteurs natifs'),
    text: 'Dans l’appli ABC Alphabet, chaque lettre prend vie : le personnage bouge, une voix prononce le son et l’enfant repasse la lettre du doigt. Plus 11 jeux pour l’attention, la mémoire et les premières lectures.',
  },

  app: {
    title: 'Appli ABC Alphabet : apprendre les lettres en 8 langues',
    description: 'Appli alphabet pour iPhone, iPad et Android : personnages des lettres, voix de locuteurs natifs et 11 jeux éducatifs en 8 langues.',
    h1: 'L’application ABC Alphabet',
    lead: 'Une appli alphabet pour les enfants de 3 à 6 ans : personnages des lettres, voix de locuteurs natifs et jeux pour trouver, assembler et repasser les lettres.',
    redirecting: 'Ouverture de la boutique d’applications…',
  },

  privacy: {
    title: 'Politique de confidentialité | ABC Alphabet',
    description: 'abcalphabetkids.com n’utilise pas de cookies et ne collecte aucune donnée personnelle. Statistiques de visite via Cloudflare Web Analytics, sans cookies.',
    h1: 'Confidentialité',
    body: `
<p>Ce site est édité par AVIA YAZILIM LİMİTED ŞİRKETİ (voir les <a href="/fr/mentions-legales/">mentions légales</a>). Voici en bref les données traitées par le site. L’application a sa propre politique de confidentialité, disponible sur l’App Store et Google Play.</p>
<h2>Ce que nous ne faisons pas</h2>
<ul><li>Aucun cookie. Le navigateur garde seulement la langue du site que vous avez choisie (localStorage), et elle n’est envoyée nulle part.</li><li>Ni inscription ni adresse e-mail : les fiches se téléchargent directement.</li><li>Ni publicité ni traceurs publicitaires.</li></ul>
<h2>Statistiques de visite</h2>
<p>Nous comptons les visites avec Cloudflare Web Analytics. Ce service n’utilise pas de cookies, ne crée pas de profil de visiteur et ne vous suit pas sur d’autres sites. Nous ne voyons que des totaux : pages vues, pays, type d’appareil.</p>
<h2>Hébergement</h2>
<p>Le site est hébergé sur GitHub Pages. Comme tout serveur web, GitHub reçoit techniquement votre adresse IP pour afficher la page. Voir la déclaration de confidentialité de GitHub.</p>
<h2>Liens vers les boutiques</h2>
<p>Les boutons App Store et Google Play portent une étiquette de la page d’origine (par exemple site_fr_home). Elle nous indique quelles pages sont utiles et ne contient aucune donnée vous concernant.</p>
<h2>Contact</h2>
<p>Questions sur les données : <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },

  imprint: {
    title: 'Mentions légales | ABC Alphabet',
    description: 'Mentions légales du site abcalphabetkids.com – AVIA YAZILIM LİMİTED ŞİRKETİ.',
    h1: 'Mentions légales',
    // TODO: postal address, director and registration number must come from the company documents.
    body: `
<h2>Éditeur</h2>
<p><strong>AVIA YAZILIM LİMİTED ŞİRKETİ</strong><br>[Adresse – à compléter]<br>Turquie</p>
<p>E-mail : <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a><br>Directeur de la publication : [à compléter]<br>Immatriculation : [à compléter]</p>
<h2>Hébergeur</h2>
<p>GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>
`,
  },
};
