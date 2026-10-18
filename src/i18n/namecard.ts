import type { Lang } from '../lib/routes';

// TODO(review): first drafts for every language except en and ru — have native speakers check them.
// Copy for the "name in pictures" card maker (MVP of a share feature for the app).
export type NameCardCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  formatLabel: string;
  formats: { square: string; story: string; print: string };
  download: string;
  print: string;
  previewLabel: string;
  ideasTitle: string;
  ideas: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  link: string;
  privacy: string;
};

const pt: NameCardCopy = {
  title: 'Nome com desenhos: cada letra é um personagem',
  description: 'Digite o nome da criança e crie uma imagem em que cada letra é um personagem do ABC Alphabet. Baixe para compartilhar ou imprima em A4. Grátis.',
  h1: 'O nome da criança com personagens das letras',
  lead: 'Cada letra do nome vira um personagem: M de macaco, A de abelha. Baixe a imagem para compartilhar ou imprima para a porta do quarto.',
  formatLabel: 'Formato',
  formats: { square: 'Post 1:1', story: 'Stories 9:16', print: 'A4 para imprimir' },
  download: 'Baixar imagem',
  print: 'Imprimir',
  previewLabel: 'Prévia da imagem',
  ideasTitle: 'Ideias para usar',
  ideas: ['Pôster na porta do quarto: a criança vê as letras do próprio nome todos os dias.', 'Cartão de aniversário para a vovó ou para um amigo.', 'Jogo: encontre cada letra do nome no alfabeto pontilhado e cubra.'],
  faqTitle: 'Perguntas frequentes',
  faq: [
    { q: 'O nome fica salvo?', a: 'Não. A imagem é criada no seu navegador e nada é enviado para servidores.' },
    { q: 'Posso usar um nome com letras de outro idioma?', a: 'Sim. Letras que não existem neste alfabeto aparecem sem personagem.' },
  ],
  link: 'Nome com personagens',
  privacy: 'O nome não é enviado nem salvo: a imagem é criada no seu navegador.',
};

const es: NameCardCopy = {
  title: 'Nombre con dibujos: cada letra es un personaje',
  description: 'Escribe el nombre del niño y crea una imagen en la que cada letra es un personaje de ABC Alphabet. Descárgala para compartir o imprímela en A4. Gratis.',
  h1: 'El nombre del niño con personajes de las letras',
  lead: 'Cada letra del nombre se convierte en un personaje: la M de manzana, la A de aguacate. Descarga la imagen para compartir o imprímela para la puerta de su cuarto.',
  formatLabel: 'Formato',
  formats: { square: 'Post 1:1', story: 'Historia 9:16', print: 'A4 para imprimir' },
  download: 'Descargar imagen',
  print: 'Imprimir',
  previewLabel: 'Vista previa',
  ideasTitle: 'Ideas para usarla',
  ideas: ['Póster en la puerta del cuarto: el niño ve las letras de su nombre cada día.', 'Felicitación de cumpleaños para la abuela o un amigo.', 'Juego: busca cada letra del nombre en las fichas y repásala.'],
  faqTitle: 'Preguntas frecuentes',
  faq: [
    { q: '¿Se guarda el nombre?', a: 'No. La imagen se crea en tu navegador y no se envía nada a ningún servidor.' },
    { q: '¿Puedo usar un nombre con letras de otro idioma?', a: 'Sí. Las letras que no existen en este abecedario aparecen sin personaje.' },
  ],
  link: 'Nombre con personajes',
  privacy: 'El nombre no se envía ni se guarda: la imagen se crea en tu navegador.',
};

const fr: NameCardCopy = {
  title: 'Prénom en images : chaque lettre est un personnage',
  description: 'Tapez le prénom de l’enfant et créez une image où chaque lettre est un personnage d’ABC Alphabet. À télécharger pour partager ou à imprimer en A4. Gratuit.',
  h1: 'Le prénom de l’enfant avec les personnages des lettres',
  lead: 'Chaque lettre du prénom devient un personnage : L comme lion, A comme abeille. Téléchargez l’image pour la partager ou imprimez-la pour la porte de sa chambre.',
  formatLabel: 'Format',
  formats: { square: 'Post 1:1', story: 'Story 9:16', print: 'A4 à imprimer' },
  download: 'Télécharger l’image',
  print: 'Imprimer',
  previewLabel: 'Aperçu',
  ideasTitle: 'Idées d’utilisation',
  ideas: ['Affiche sur la porte de la chambre : l’enfant voit les lettres de son prénom chaque jour.', 'Carte d’anniversaire pour mamie ou un copain.', 'Jeu : retrouver chaque lettre du prénom sur les fiches alphabet et la tracer.'],
  faqTitle: 'Questions fréquentes',
  faq: [
    { q: 'Le prénom est-il enregistré ?', a: 'Non. L’image est créée dans votre navigateur et rien n’est envoyé à un serveur.' },
    { q: 'Puis-je utiliser un prénom avec des lettres d’une autre langue ?', a: 'Oui. Les lettres absentes de cet alphabet apparaissent sans personnage.' },
  ],
  link: 'Prénom en images',
  privacy: 'Le prénom n’est ni envoyé ni enregistré : l’image est créée dans votre navigateur.',
};

const de: NameCardCopy = {
  title: 'Name in Bildern: jeder Buchstabe eine Figur',
  description: 'Namen eingeben und ein Bild erstellen, auf dem jeder Buchstabe eine Figur aus ABC Alphabet ist. Zum Teilen herunterladen oder in A4 drucken. Kostenlos.',
  h1: 'Der Name Ihres Kindes mit Buchstaben-Figuren',
  lead: 'Jeder Buchstabe des Namens wird zur Figur: M wie Maus, A wie Apfel. Laden Sie das Bild zum Teilen herunter oder drucken Sie es für die Kinderzimmertür.',
  formatLabel: 'Format',
  formats: { square: 'Post 1:1', story: 'Story 9:16', print: 'A4 zum Drucken' },
  download: 'Bild herunterladen',
  print: 'Drucken',
  previewLabel: 'Vorschau',
  ideasTitle: 'Ideen',
  ideas: ['Poster an der Kinderzimmertür: Ihr Kind sieht die Buchstaben seines Namens jeden Tag.', 'Geburtstagskarte für Oma oder Freunde.', 'Spiel: jeden Buchstaben des Namens auf den Arbeitsblättern finden und nachspuren.'],
  faqTitle: 'Häufige Fragen',
  faq: [
    { q: 'Wird der Name gespeichert?', a: 'Nein. Das Bild entsteht in Ihrem Browser, es wird nichts an einen Server gesendet.' },
    { q: 'Geht auch ein Name mit Buchstaben aus einer anderen Sprache?', a: 'Ja. Buchstaben, die es in diesem Alphabet nicht gibt, erscheinen ohne Figur.' },
  ],
  link: 'Name in Bildern',
  privacy: 'Der Name wird weder gesendet noch gespeichert: Das Bild entsteht in Ihrem Browser.',
};

const pl: NameCardCopy = {
  title: 'Imię w obrazkach: każda litera to postać',
  description: 'Wpisz imię dziecka i stwórz obrazek, na którym każda litera jest postacią z ABC Alphabet. Pobierz, by udostępnić, lub wydrukuj w A4. Za darmo.',
  h1: 'Imię dziecka z postaciami liter',
  lead: 'Każda litera imienia staje się postacią: K jak kot, A jak awokado. Pobierz obrazek, żeby go udostępnić, albo wydrukuj na drzwi pokoju.',
  formatLabel: 'Format',
  formats: { square: 'Post 1:1', story: 'Relacja 9:16', print: 'A4 do druku' },
  download: 'Pobierz obrazek',
  print: 'Drukuj',
  previewLabel: 'Podgląd',
  ideasTitle: 'Pomysły',
  ideas: ['Plakat na drzwi pokoju: dziecko codziennie widzi litery swojego imienia.', 'Kartka urodzinowa dla babci albo kolegi.', 'Zabawa: znajdź każdą literę imienia na kartach pracy i napisz ją po śladzie.'],
  faqTitle: 'Częste pytania',
  faq: [
    { q: 'Czy imię jest zapisywane?', a: 'Nie. Obrazek powstaje w przeglądarce i nic nie jest wysyłane na serwer.' },
    { q: 'Czy można wpisać imię z literami z innego języka?', a: 'Tak. Litery, których nie ma w tym alfabecie, pojawią się bez postaci.' },
  ],
  link: 'Imię w obrazkach',
  privacy: 'Imię nie jest nigdzie wysyłane ani zapisywane: obrazek powstaje w przeglądarce.',
};

const tr: NameCardCopy = {
  title: 'Resimli isim: her harf bir karakter',
  description: 'Çocuğun adını yazın, her harfin ABC Alphabet karakteri olduğu bir resim oluşturun. Paylaşmak için indirin ya da A4 yazdırın. Ücretsiz.',
  h1: 'Harf karakterleriyle çocuğun adı',
  lead: 'Adın her harfi bir karaktere dönüşür: E için eşek, L için limon. Resmi paylaşmak için indirin ya da oda kapısı için yazdırın.',
  formatLabel: 'Boyut',
  formats: { square: 'Gönderi 1:1', story: 'Hikâye 9:16', print: 'Yazdırmak için A4' },
  download: 'Resmi indir',
  print: 'Yazdır',
  previewLabel: 'Önizleme',
  ideasTitle: 'Kullanım fikirleri',
  ideas: ['Oda kapısına poster: çocuk adının harflerini her gün görür.', 'Babaanneye ya da arkadaşa doğum günü kartı.', 'Oyun: adın her harfini çalışma sayfalarında bulun ve yazın.'],
  faqTitle: 'Sık sorulan sorular',
  faq: [
    { q: 'İsim kaydediliyor mu?', a: 'Hayır. Resim tarayıcınızda oluşturulur ve hiçbir sunucuya gönderilmez.' },
    { q: 'Başka bir dilin harfleriyle isim yazabilir miyim?', a: 'Evet. Bu alfabede olmayan harfler karaktersiz görünür.' },
  ],
  link: 'Resimli isim',
  privacy: 'İsim hiçbir yere gönderilmez ve kaydedilmez: resim tarayıcınızda oluşturulur.',
};

const en: NameCardCopy = {
  title: 'Name in pictures: every letter is a character',
  description: 'Type your child’s name and make a picture where every letter is an ABC Alphabet character. Download it to share or print it on A4. Free.',
  h1: 'Your child’s name with letter characters',
  lead: 'Every letter of the name becomes a character: M for mouse, A for avocado. Download the picture to share, or print it for their bedroom door.',
  formatLabel: 'Format',
  formats: { square: 'Post 1:1', story: 'Story 9:16', print: 'Print A4' },
  download: 'Download picture',
  print: 'Print',
  previewLabel: 'Preview',
  ideasTitle: 'Ideas',
  ideas: ['A poster for the bedroom door: your child sees the letters of their name every day.', 'A birthday card for grandma or a friend.', 'A game: find each letter of the name on the tracing worksheets and trace it.'],
  faqTitle: 'Frequently asked questions',
  faq: [
    { q: 'Is the name saved?', a: 'No. The picture is made in your browser, and nothing is sent to a server.' },
    { q: 'Can I use a name with letters from another language?', a: 'Yes. Letters that aren’t in this alphabet show without a character.' },
  ],
  link: 'Name in pictures',
  privacy: 'The name isn’t sent or saved anywhere: the picture is made in your browser.',
};

const ru: NameCardCopy = {
  title: 'Имя в картинках: каждая буква — персонаж',
  description: 'Введите имя ребёнка и соберите картинку, где каждая буква — персонаж из ABC Alphabet. Скачайте, чтобы поделиться, или распечатайте на A4. Бесплатно.',
  h1: 'Имя ребёнка из персонажей букв',
  lead: 'Каждая буква имени превращается в персонажа: М — мышь, А — авокадо. Скачайте картинку, чтобы поделиться, или распечатайте на дверь детской.',
  formatLabel: 'Формат',
  formats: { square: 'Пост 1:1', story: 'Сторис 9:16', print: 'A4 для печати' },
  download: 'Скачать картинку',
  print: 'Распечатать',
  previewLabel: 'Как будет выглядеть картинка',
  ideasTitle: 'Идеи',
  ideas: ['Плакат на дверь детской: ребёнок каждый день видит буквы своего имени.', 'Открытка на день рождения бабушке или другу.', 'Игра: найти каждую букву имени в прописях и обвести её.'],
  faqTitle: 'Частые вопросы',
  faq: [
    { q: 'Имя где-то сохраняется?', a: 'Нет. Картинка собирается в вашем браузере, на сервер ничего не отправляется.' },
    { q: 'Можно ввести имя с буквами другого языка?', a: 'Да. Буквы, которых нет в этом алфавите, будут без персонажа.' },
  ],
  link: 'Имя в картинках',
  privacy: 'Имя никуда не отправляется и не сохраняется: картинка собирается в вашем браузере.',
};

export const NAMECARD_COPY: Record<Lang, NameCardCopy> = { pt, es, fr, de, pl, tr, en, ru };
