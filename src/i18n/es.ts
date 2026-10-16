import type { Letter } from '../lib/routes';

// TODO(review): Spanish copy is a first draft — have a native speaker check it.
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default {
  langName: 'Español',
  locale: 'es_ES',
  nav: { tracing: 'Fichas del abecedario', coloring: 'Para colorear', app: 'App', download: 'Descargar' },
  store: { appStoreTop: 'Descárgalo en el', googlePlayTop: 'Disponible en' },
  footer: {
    about: 'ABC Alphabet lo hacen madres, padres y desarrolladores de AVIA YAZILIM.',
    contact: 'Correo',
    privacy: 'Privacidad',
    language: 'Idioma',
  },
  skip: 'Ir al contenido',

  home: {
    title: 'App del abecedario para niños de 2 a 6 y fichas gratis',
    description: 'App del abecedario: cada letra es un personaje con voz de hablantes nativos. Y fichas gratis para repasar letras A–Z en PDF, sin registro.',
    h1: 'El abecedario que habla con voz nativa',
    sub: (langs: number, games: number) => `${langs} idiomas · ${games} juegos · para niños de 2 a 6 años`,
    heroNote: 'Las seis primeras letras son gratis.',
    freeTitle: 'Gratis para las familias',
    freeLead: 'Imprímelas y practica sin pantallas. Sin registro y sin correo.',
    tracingCard: { title: 'Fichas del abecedario A–Z', text: 'Una ficha por letra: repasar mayúscula y minúscula, una palabra con dibujo y una página para colorear con el personaje de la letra.', cta: 'Ver las fichas' },
    coloringCard: { title: 'Dibujos para colorear con personajes', text: 'Los personajes de las letras de la app como dibujos para colorear. Llegan en noviembre, junto con un set de Navidad.', soon: 'Pronto' },
    howTitle: 'Cómo funciona la app',
    how: [
      { title: 'Cada letra es un personaje', text: 'A de aguacate, G de gato, P de pingüino. Los niños recuerdan la letra a través del personaje, no de una tabla.' },
      { title: 'Voces de hablantes nativos', text: 'Todas las letras y palabras están grabadas por hablantes nativos. Tu hijo oye la pronunciación correcta desde el primer día.' },
      { title: 'Escribir con el dedo', text: 'Los niños repasan la letra en la pantalla con el dedo, punto a punto. Después, con el lápiz resulta mucho más fácil.' },
    ],
    screensAlt: 'Pantalla de la app ABC Alphabet',
    langsTitle: 'Ocho abecedarios en una sola app',
    langsText: 'Español, inglés, francés, alemán, portugués, polaco, turco y ruso. El idioma se cambia en los ajustes y el progreso se guarda por separado para cada abecedario.',
    abroadTitle: 'Para familias bilingües',
    abroadText: 'El abecedario del idioma de casa y el del colegio en la misma app. Tu hijo aprende los dos por turnos, sin cambiar de programa.',
    trustTitle: 'Bueno saber',
    trust: [
      'Control parental antes de cualquier compra',
      'Sesiones cortas: una letra cada vez',
      'Progreso separado para cada abecedario',
    ],
  },

  tracing: {
    title: 'Fichas del abecedario para imprimir: letras A–Z en PDF',
    description: '27 fichas gratis para repasar letras, con la Ñ: mayúscula y minúscula, palabra con dibujo y página para colorear. PDF sin registro.',
    h1: 'Fichas del abecedario para imprimir gratis: letras A–Z',
    lead: 'Una ficha para cada letra del abecedario español, incluida la Ñ. En cada una: una letra grande para repasar, renglones de caligrafía, una palabra con dibujo y una página para colorear con el personaje de la app ABC Alphabet.',
    downloadAll: 'Descargar todo el abecedario (PDF)',
    gridTitle: 'Elige una letra',
    setsTitle: 'Grupos',
    sets: [
      { title: 'Vocales', letters: ['A', 'E', 'I', 'O', 'U'], note: 'Un buen comienzo: las vocales se pueden alargar con la voz y los niños las oyen fácilmente en las palabras.' },
      { title: 'Letras que se confunden', letters: ['B', 'D', 'P', 'Q', 'N', 'Ñ'], note: 'Con b, d, p y q la dificultad está en las minúsculas. Practica cada pareja el mismo día.' },
    ],
    guideTitle: 'Cómo usar las fichas',
    guide: `
<p>En resumen: 5–10 minutos al día, una letra por sesión y solo mientras tu hijo tenga ganas. Muchos niños están listos para repasar letras a los 4 o 5 años. Más que la edad, mira la mano: si sujeta bien el lápiz y dibuja un círculo cerrado, podéis empezar.</p>
<h3>Primero, conocer la letra</h3>
<p>Presenta la letra sin lápiz. Di su sonido, búscala en una caja de cereales o en un cartel, pensad juntos tres palabras. En cada ficha hay una palabra con dibujo: empieza por ella. «Esto es un aguacate. Aguacate empieza por A».</p>
<h3>Primero con el dedo, luego con el lápiz</h3>
<p>Que tu hijo repase la letra grande con el dedo, de arriba abajo, como se escribe. Así la mano aprende la dirección. Después, a repasar la línea discontinua con el lápiz. Un lápiz blando o uno grueso triangular es más fácil que un bolígrafo.</p>
<h3>Los renglones</h3>
<p>El primer renglón es la mayúscula, el segundo la minúscula y después la palabra. El último está vacío: pide a tu hijo que escriba la letra sin ayuda. No hace falta completarlo todo de una vez. Dos letras bonitas valen más que un renglón torcido por el cansancio.</p>
<h3>Si todavía no sale</h3>
<p>Que la letra se salga del renglón, escribir en espejo o confundir la b y la d es normal hasta los 6 o 7 años. No corrijas cada error. Repasad juntos, con tu mano sobre la suya, y haced una pausa. Al día siguiente suele salir mejor.</p>
<h3>Para terminar, colorear</h3>
<p>En la segunda página hay un dibujo para colorear con el personaje de la letra. Es el premio por repasar y entrena la misma motricidad fina.</p>
<h3>Con qué frecuencia</h3>
<p>Tres o cuatro fichas por semana son suficientes. Así completaréis el abecedario en dos o tres meses, sin prisas. Volved a las letras que cuestan o que se confunden.</p>
`,
  },

  letter: {
    title: (l: Letter) => `Letra ${l.letter} para repasar: ficha gratis en PDF`,
    description: (l: Letter) => `Ficha de la letra ${l.letter} para infantil: repasar ${l.letter} y ${l.lower}, la palabra «${l.word}» con dibujo${l.coloring ? ' y página para colorear' : ''}. PDF en A4 y carta.`,
    h1: (l: Letter) => `Letra ${l.letter}: ${l.coloring ? 'repasar y colorear' : 'ficha para repasar'}`,
    lead: (l: Letter) => `${l.letter} de ${l.word}. Imprime la ficha y repasa la letra por la línea discontinua.`,
    download: 'Descargar PDF',
    previewAlt: (l: Letter) => `Ficha para repasar la letra ${l.letter} con ${l.word}`,
    characterAlt: (l: Letter) => `${cap(l.word ?? '')}, el personaje de la letra ${l.letter} en la app ABC Alphabet`,
    wordsTitle: (l: Letter) => `Palabras que empiezan por ${l.letter}`,
    wordsInsideTitle: (l: Letter) => `Palabras con ${l.letter}`,
    wordAlt: (w: string) => `Dibujo: ${w}`,
    howTitle: 'Cómo practicar',
    how: [
      'Di la letra y su sonido, enseña el dibujo.',
      'Repasa la letra grande con el dedo, de arriba abajo.',
      'Repasa los renglones con lápiz: mayúscula, minúscula, palabra.',
      'El último renglón, sin línea de guía.',
    ],
    prev: 'Letra anterior',
    next: 'Letra siguiente',
    all: 'Todas las letras',
    sheetPage: 'Página 1: repasar, página 2: colorear',
    otherLangsTitle: (l: Letter) => `La letra ${l.letter} en otros idiomas`,
    otherLangsText: 'La misma letra en los otros alfabetos de la app: útil si tu peque aprende dos idiomas.',
    activitiesTitle: (l: Letter) => `Actividades con la letra ${l.letter}`,
    activities: (l: Letter, words: string[]) => [
      `Caza de letras: buscad la ${l.letter} y la ${l.lower} en cajas, libros y carteles. Contad cuántas encontráis.`,
      `Juego de sonidos: di despacio ${words.map((w) => `«${w}»`).join(', ')} y pide a tu peque que dé una palmada cuando oiga la ${l.letter}.`,
      `Sin lápiz: dibuja una ${l.letter} grande con el dedo en el aire, en la arena o en un cristal empañado, y después repásala en la ficha.`,
    ],
    faqTitle: 'Preguntas de las familias',
    faq: (l: Letter, words: string[]) => [
      {
        q: l.wordsMatch === 'inside' ? `¿Qué palabras llevan la letra ${l.letter}?` : `¿Qué palabras empiezan por la letra ${l.letter}?`,
        a: `Por ejemplo: ${words.join(', ')}. Tienes los dibujos en esta página.`,
      },
      {
        q: `¿A qué edad se aprende la letra ${l.letter}?`,
        a: 'Se puede conocer una letra desde los 2–3 años: decir su sonido, encontrarla en un dibujo, repasarla con el dedo. Repasar con lápiz suele salir hacia los 4–5 años, cuando el niño sujeta bien el lápiz.',
      },
      {
        q: `¿La ficha de la letra ${l.letter} es gratis?`,
        a: 'Sí. El PDF se descarga sin registro y sin correo. Imprime todas las copias que necesites, en casa o en clase.',
      },
      {
        q: '¿Cómo imprimo la ficha?',
        a: 'Descarga el PDF e imprímelo en A4 o carta al 100 % («Tamaño real») para que los renglones mantengan la altura correcta.',
      },
    ],
    coloringCta: (l: Letter) => `Para colorear: ${l.letter} de ${l.word}`,
  },

  coloring: {
    title: 'Abecedario para colorear: letras para imprimir gratis (PDF)',
    description: 'Dibujos del abecedario para colorear gratis, para niños de 2 a 6 años, con los personajes de la app ABC Alphabet. PDF para imprimir en A4 o carta, sin registro.',
    h1: 'Abecedario para colorear',
    lead: 'Para cada letra, un dibujo para colorear con su personaje de la app. Imprímelo y coloread juntos.',
    gridTitle: 'Elige una letra',
    letterTitle: (l: Letter) => `Letra ${l.letter} para colorear: ${l.word} – imprimir gratis`,
    letterDescription: (l: Letter) => `Dibujo gratis de la letra ${l.letter} para colorear: ${l.letter} de ${l.word}. PDF para imprimir en A4 o carta, sin registro.`,
    letterH1: (l: Letter) => `Letra ${l.letter} para colorear: ${l.word}`,
    letterLead: (l: Letter) => `${l.letter} de ${l.word}. Colorea la letra y el personaje, y después busca la ${l.letter} en las palabras de abajo.`,
    previewAlt: (l: Letter) => `Dibujo para colorear de la letra ${l.letter} con ${l.word}`,
    tipsTitle: 'Colorear y aprender a la vez',
    tips: [
      'Primero repasa el contorno de la letra con el dedo y di su sonido.',
      'Colorea la letra de un solo color y el personaje con todos los que quieras.',
      'Las ceras gruesas o los lápices triangulares son más fáciles para manos pequeñas que los rotuladores.',
      'Escribe el nombre y la fecha: en un mes se nota cuánto ha mejorado.',
    ],
    tracingTitle: (l: Letter) => `Ficha para repasar la letra ${l.letter}`,
    tracingText: (l: Letter) => `Siguiente paso: repasar ${l.letter} y ${l.lower} por la línea discontinua y escribir la palabra «${l.word}».`,
  },

  articles: {
    nav: 'Consejos',
    title: 'Consejos para padres: cómo enseñar el abecedario en casa',
    description: 'Guías prácticas para padres y maestras de infantil: cómo enseñar las letras, repasarlas y escribirlas, con fichas gratis en PDF.',
    h1: 'Consejos para padres',
    lead: 'Guías breves y prácticas para enseñar las letras a niños de 2 a 6 años, con fichas gratis para imprimir.',
    readMore: 'Leer la guía',
    published: 'Publicado el',
    faqTitle: 'Preguntas frecuentes',
    lettersTitle: 'Empieza por estas letras',
    sheetsCta: 'Descargar todas las fichas del abecedario (PDF)',
    guideLink: 'Guía completa para padres',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Escucha la letra ${l.letter} en la app` : 'Letras con voz de hablantes nativos'),
    text: 'En la app ABC Alphabet cada letra cobra vida: el personaje se mueve, una voz dice el sonido y los niños repasan la letra con el dedo. Además, 12 juegos de atención, memoria y primeras lecturas.',
  },

  app: {
    title: 'App ABC Alphabet: aprender las letras en 8 idiomas',
    description: 'App del abecedario para iPhone, iPad y Android: personajes de letras, voces de hablantes nativos y 12 juegos educativos en 8 idiomas.',
    h1: 'La app ABC Alphabet',
    lead: 'App del abecedario para niños de 2 a 6 años: personajes de letras, voces de hablantes nativos y juegos para encontrar, formar y repasar letras.',
    redirecting: 'Abriendo la tienda de apps…',
  },

  privacy: {
    title: 'Política de privacidad | ABC Alphabet',
    description: 'abcalphabetkids.com no usa cookies ni recoge datos personales. Las estadísticas de visitas vienen de Cloudflare Web Analytics, sin cookies.',
    h1: 'Privacidad',
    body: `
<p>Este sitio web lo gestiona AVIA YAZILIM LİMİTED ŞİRKETİ. Aquí explicamos qué datos trata el sitio. La app tiene su propia política de privacidad, disponible en App Store y Google Play.</p>
<h2>Lo que no hacemos</h2>
<ul><li>No usamos cookies. El navegador solo guarda el idioma del sitio que tú elegiste (localStorage), y no se envía a ningún sitio.</li><li>Sin registro ni direcciones de correo: las fichas se descargan directamente.</li><li>Sin anuncios ni rastreadores publicitarios.</li></ul>
<h2>Estadísticas de visitas</h2>
<p>Contamos las visitas con Cloudflare Web Analytics. No usa cookies, no crea perfiles de visitantes y no te sigue por otros sitios. Solo vemos totales: páginas vistas, país, tipo de dispositivo.</p>
<h2>Alojamiento</h2>
<p>El sitio está alojado en GitHub Pages. Como cualquier servidor web, GitHub recibe técnicamente tu dirección IP para entregar la página. Más detalles en la declaración de privacidad de GitHub.</p>
<h2>Enlaces a las tiendas de apps</h2>
<p>Los botones de App Store y Google Play llevan una etiqueta de la página de la que vienes (por ejemplo, site_es_home). Nos ayuda a saber qué páginas son útiles y no contiene datos sobre ti.</p>
<h2>Contacto</h2>
<p>Preguntas sobre datos: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },
};
