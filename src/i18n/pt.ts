import type { Letter } from '../lib/routes';

// TODO(review): Portuguese (Brazil) copy is a first draft — have a native speaker check it.
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default {
  langName: 'Português',
  locale: 'pt_BR',
  nav: { tracing: 'Alfabeto pontilhado', app: 'Aplicativo', download: 'Baixar' },
  store: { appStoreTop: 'Baixar na', googlePlayTop: 'Disponível no' },
  footer: {
    about: 'O ABC Alphabet é feito por pais e desenvolvedores da AVIA YAZILIM.',
    contact: 'E-mail',
    privacy: 'Privacidade',
    language: 'Idioma',
  },
  skip: 'Ir para o conteúdo',

  home: {
    title: 'App de alfabeto para crianças de 3 a 6 e atividades grátis',
    description: 'App de alfabeto: cada letra é um personagem, com voz de falantes nativos. E atividades de alfabeto pontilhado A–Z grátis em PDF, sem cadastro.',
    h1: 'O alfabeto que fala com voz nativa',
    sub: (langs: number, games: number) => `${langs} idiomas · ${games} jogos · para crianças de 3 a 6 anos`,
    heroNote: 'As seis primeiras letras são grátis.',
    freeTitle: 'Grátis para as famílias',
    freeLead: 'Imprima e pratique longe das telas. Sem cadastro e sem e-mail.',
    tracingCard: { title: 'Alfabeto pontilhado A–Z', text: 'Uma folha por letra: cobrir maiúscula e minúscula, uma palavra com figura e um desenho para colorir com o personagem da letra.', cta: 'Ver as atividades' },
    coloringCard: { title: 'Desenhos para colorir com personagens', text: 'Os personagens das letras do aplicativo como desenhos para colorir. Chegam em novembro, junto com um kit de Natal.', soon: 'Em breve' },
    howTitle: 'Como o aplicativo funciona',
    how: [
      { title: 'Cada letra é um personagem', text: 'A de abelha, G de girafa, P de pinguim. A criança lembra da letra pelo personagem, não por uma tabela.' },
      { title: 'Voz de falantes nativos', text: 'Todas as letras e palavras foram gravadas por falantes nativos. Seu filho ouve a pronúncia certa desde o primeiro dia.' },
      { title: 'Escrever com o dedo', text: 'A criança cobre a letra na tela com o dedo, ponto a ponto. Depois, com o lápis fica bem mais fácil.' },
    ],
    screensAlt: 'Tela do aplicativo ABC Alphabet',
    langsTitle: 'Oito alfabetos em um só aplicativo',
    langsText: 'Português, inglês, espanhol, francês, alemão, polonês, turco e russo. O idioma muda nas configurações, e o progresso fica salvo separadamente para cada alfabeto.',
    abroadTitle: 'Para famílias bilíngues',
    abroadText: 'O alfabeto da língua de casa e o da escola no mesmo aplicativo. Seu filho aprende os dois alternando, sem trocar de programa.',
    trustTitle: 'Bom saber',
    trust: [
      'Controle dos pais antes de qualquer compra',
      'Sessões curtas: uma letra de cada vez',
      'Progresso separado para cada alfabeto',
    ],
  },

  tracing: {
    title: 'Alfabeto pontilhado para imprimir: atividades A–Z em PDF',
    description: '26 atividades grátis de alfabeto pontilhado para educação infantil: maiúscula e minúscula, palavra com figura e desenho para colorir. PDF sem cadastro.',
    h1: 'Alfabeto pontilhado para imprimir grátis: letras A–Z',
    lead: 'Uma atividade para cada letra do alfabeto, com K, W e Y. Em cada folha: uma letra grande para cobrir, linhas de caligrafia, uma palavra com figura e um desenho para colorir com o personagem do aplicativo ABC Alphabet.',
    downloadAll: 'Baixar o alfabeto completo (PDF)',
    gridTitle: 'Escolha uma letra',
    setsTitle: 'Grupos',
    sets: [
      { title: 'Vogais', letters: ['A', 'E', 'I', 'O', 'U'], note: 'Um bom começo: as vogais podem ser esticadas com a voz, e a criança as ouve com facilidade nas palavras.' },
      { title: 'Letras que se confundem', letters: ['B', 'D', 'P', 'Q', 'M', 'W'], note: 'Com b, d, p e q a dificuldade está nas minúsculas. Pratique cada par no mesmo dia.' },
      { title: 'K, W e Y', letters: ['K', 'W', 'Y'], note: 'Voltaram ao alfabeto em 2009 e aparecem em nomes e palavras estrangeiras, como koala e wombat.' },
    ],
    guideTitle: 'Como usar as atividades',
    guide: `
<p>Resumindo: 5 a 10 minutos por dia, uma letra por vez e só enquanto a criança estiver com vontade. Muitas crianças ficam prontas para cobrir letras aos 4 ou 5 anos. Mais do que a idade, observe a mão: se ela segura o lápis com firmeza e desenha um círculo fechado, já dá para começar.</p>
<h3>Primeiro, conhecer a letra</h3>
<p>Apresente a letra sem lápis. Diga o som, procure a letra numa caixa de cereal ou numa placa, pensem juntos em três palavras. Em cada folha há uma palavra com figura: comece por ela. “Esta é uma abelha. Abelha começa com A.”</p>
<h3>Primeiro com o dedo, depois com o lápis</h3>
<p>Deixe a criança passar o dedo sobre a letra grande, de cima para baixo, do jeito que se escreve. Assim a mão aprende a direção. Depois, cobrir o pontilhado com o lápis. Um lápis macio ou um lápis grosso triangular é mais fácil que caneta.</p>
<h3>As linhas</h3>
<p>A primeira linha é a letra maiúscula, a segunda a minúscula e depois a palavra. A última linha fica vazia: peça para a criança escrever a letra sozinha. Não precisa preencher tudo de uma vez. Duas letras caprichadas valem mais que uma linha torta de cansaço.</p>
<h3>Se ainda não sai</h3>
<p>A letra sair da linha, escrita espelhada, trocar b e d — tudo isso é normal até os 6 ou 7 anos. Não corrija cada erro. Cubram juntos, com a sua mão sobre a dela, e façam uma pausa. No dia seguinte costuma sair melhor.</p>
<h3>No final, colorir</h3>
<p>Na segunda página há um desenho para colorir com o personagem da letra. É o prêmio por cobrir as letras e treina a mesma coordenação motora fina.</p>
<h3>Com que frequência</h3>
<p>Três ou quatro folhas por semana bastam. Assim vocês completam o alfabeto em dois ou três meses, sem pressa. Voltem às letras mais difíceis ou que se confundem.</p>
`,
  },

  letter: {
    title: (l: Letter) => `Letra ${l.letter} pontilhada: atividade grátis em PDF`,
    description: (l: Letter) => `Atividade da letra ${l.letter} para educação infantil: cobrir ${l.letter} e ${l.lower}, a palavra “${l.word}” com figura${l.coloring ? ' e desenho para colorir' : ''}. PDF em A4.`,
    h1: (l: Letter) => `Letra ${l.letter}: ${l.coloring ? 'pontilhado e desenho para colorir' : 'atividade pontilhada'}`,
    lead: (l: Letter) => `${l.letter} de ${l.word}. Imprima a folha e cubra a letra pela linha pontilhada.`,
    download: 'Baixar PDF',
    previewAlt: (l: Letter) => `Atividade da letra ${l.letter} pontilhada com ${l.word}`,
    characterAlt: (l: Letter) => `${cap(l.word ?? '')}, personagem da letra ${l.letter} no aplicativo ABC Alphabet`,
    wordsTitle: (l: Letter) => `Palavras com ${l.letter} no início`,
    wordsInsideTitle: (l: Letter) => `Palavras com ${l.letter}`,
    wordAlt: (w: string) => `Figura: ${w}`,
    howTitle: 'Como praticar',
    how: [
      'Diga a letra e o som dela, mostre a figura.',
      'Passe o dedo sobre a letra grande, de cima para baixo.',
      'Cubra as linhas com lápis: maiúscula, minúscula, palavra.',
      'A última linha, sem pontilhado.',
    ],
    prev: 'Letra anterior',
    next: 'Próxima letra',
    all: 'Todas as letras',
    sheetPage: 'Página 1: pontilhado, página 2: colorir',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `Ouça a letra ${l.letter} no aplicativo` : 'Letras com voz de falantes nativos'),
    text: 'No aplicativo ABC Alphabet cada letra ganha vida: o personagem se mexe, uma voz fala o som e a criança cobre a letra com o dedo. E ainda 11 jogos de atenção, memória e primeiras leituras.',
  },

  app: {
    title: 'Aplicativo ABC Alphabet: aprender as letras em 8 idiomas',
    description: 'App de alfabeto para iPhone, iPad e Android: personagens das letras, voz de falantes nativos e 11 jogos educativos em 8 idiomas.',
    h1: 'O aplicativo ABC Alphabet',
    lead: 'App de alfabeto para crianças de 3 a 6 anos: personagens das letras, voz de falantes nativos e jogos para encontrar, montar e cobrir letras.',
    redirecting: 'Abrindo a loja de aplicativos…',
  },

  privacy: {
    title: 'Política de privacidade | ABC Alphabet',
    description: 'O abcalphabetkids.com não usa cookies nem coleta dados pessoais. As estatísticas de visitas vêm do Cloudflare Web Analytics, sem cookies.',
    h1: 'Privacidade',
    body: `
<p>Este site é mantido pela AVIA YAZILIM LİMİTED ŞİRKETİ. Aqui explicamos quais dados o site trata. O aplicativo tem a sua própria política de privacidade, disponível na App Store e no Google Play.</p>
<h2>O que não fazemos</h2>
<ul><li>Não usamos cookies. O navegador guarda apenas o idioma do site que você escolheu (localStorage), e ele não é enviado a lugar nenhum.</li><li>Sem cadastro e sem e-mail: as atividades são baixadas diretamente.</li><li>Sem anúncios e sem rastreadores de publicidade.</li></ul>
<h2>Estatísticas de visitas</h2>
<p>Contamos as visitas com o Cloudflare Web Analytics. Ele não usa cookies, não cria perfis de visitantes e não acompanha você em outros sites. Vemos apenas totais: páginas vistas, país, tipo de dispositivo.</p>
<h2>Hospedagem</h2>
<p>O site está hospedado no GitHub Pages. Como qualquer servidor web, o GitHub recebe tecnicamente o seu endereço IP para entregar a página. Mais detalhes na declaração de privacidade do GitHub.</p>
<h2>Links para as lojas</h2>
<p>Os botões da App Store e do Google Play levam uma etiqueta da página de onde você veio (por exemplo, site_pt_home). Ela mostra quais páginas são úteis e não contém dados sobre você.</p>
<h2>Contato</h2>
<p>Dúvidas sobre dados: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },
};
