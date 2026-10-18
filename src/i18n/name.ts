import type { Lang } from '../lib/routes';

// TODO(review): first drafts for every language except en and ru — have native speakers check them.
// Copy for the name tracing generator page.
export type NameCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  nameLabel: string;
  placeholder: string;
  caseLabel: string;
  rowsLabel: string;
  characterLabel: string;
  emptyRowLabel: string;
  paperLabel: string;
  print: string;
  privacy: string;
  errEmpty: string;
  errInvalid: string;
  sheetTitle: string;
  colorHint: string;
  previewLabel: string;
  guideTitle: string;
  guide: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  hubLink: string;
  card: { title: string; text: string; cta: string };
};

const pt: NameCopy = {
  title: 'Nome pontilhado para imprimir: gerador grátis',
  description: 'Digite o nome da criança e imprima uma folha de nome pontilhado para cobrir, com linhas de caligrafia e a letra inicial para colorir. Grátis, sem cadastro.',
  h1: 'Nome pontilhado para imprimir',
  lead: 'Digite o nome da criança, escolha maiúsculas ou minúsculas e imprima. A folha fica pronta na hora, no seu navegador.',
  nameLabel: 'Nome da criança',
  placeholder: 'Maria',
  caseLabel: 'Como escrever',
  rowsLabel: 'Linhas para cobrir',
  characterLabel: 'Letra inicial para colorir',
  emptyRowLabel: 'Linha vazia no final',
  paperLabel: 'Papel',
  print: 'Imprimir ou salvar PDF',
  privacy: 'O nome não é enviado nem salvo: a folha é criada no seu navegador.',
  errEmpty: 'Digite um nome',
  errInvalid: 'Use só letras, espaço e hífen',
  sheetTitle: 'Escreva o seu nome',
  colorHint: 'Pinte a primeira letra do seu nome',
  previewLabel: 'Prévia da folha',
  guideTitle: 'Como ensinar a criança a escrever o próprio nome',
  guide: `<p>O próprio nome costuma ser a primeira palavra que a criança quer escrever. Ela vê o nome na mochila, nos desenhos e na porta do quarto, por isso aprende essas letras mais rápido que as outras.</p>
<h3>Comece pela letra bastão</h3>
<p>Na educação infantil, use o nome em maiúsculas (letra bastão): os traços são simples. Mais tarde, passe para a primeira letra maiúscula e o resto minúsculo, como na escola.</p>
<h3>Um pouco por dia</h3>
<p>Uma ou duas linhas por dia bastam. Primeiro a criança passa o dedo sobre o nome-modelo, depois cobre o pontilhado com lápis, sempre de cima para baixo e da esquerda para a direita. Na linha vazia, ela escreve sozinha.</p>
<h3>Nomes compridos</h3>
<p>Se o nome for longo, comece pelas primeiras letras ou pelo apelido. Ninguém precisa escrever “Maria Eduarda” inteiro aos 4 anos.</p>`,
  faqTitle: 'Perguntas frequentes',
  faq: [
    { q: 'Com que idade a criança aprende a escrever o nome?', a: 'Muitas crianças começam a cobrir o próprio nome entre 4 e 5 anos e a escrevê-lo sozinhas perto dos 5 ou 6. Antes disso, reconhecer as letras do nome já é um ótimo começo.' },
    { q: 'O nome digitado fica salvo em algum lugar?', a: 'Não. A folha é montada no seu navegador e nada é enviado para servidores.' },
    { q: 'Posso imprimir em tamanho Carta?', a: 'Sim. Escolha A4 ou Carta antes de imprimir e use a escala de 100% (tamanho real).' },
  ],
  hubLink: 'Nome pontilhado com o nome da criança',
  card: { title: 'Nome pontilhado', text: 'Digite o nome da criança e imprima uma folha para cobrir as letras do próprio nome.', cta: 'Criar folha' },
};

const es: NameCopy = {
  title: 'Nombre para repasar: generador gratis para imprimir',
  description: 'Escribe el nombre del niño e imprime una ficha para repasar su nombre con pauta y la letra inicial para colorear. Gratis y sin registro.',
  h1: 'Nombre para repasar e imprimir',
  lead: 'Escribe el nombre del niño, elige mayúsculas o minúsculas e imprime. La ficha se crea al momento, en tu navegador.',
  nameLabel: 'Nombre del niño',
  placeholder: 'Lucía',
  caseLabel: 'Cómo escribirlo',
  rowsLabel: 'Renglones para repasar',
  characterLabel: 'Letra inicial para colorear',
  emptyRowLabel: 'Renglón vacío al final',
  paperLabel: 'Papel',
  print: 'Imprimir o guardar PDF',
  privacy: 'El nombre no se envía ni se guarda: la ficha se crea en tu navegador.',
  errEmpty: 'Escribe un nombre',
  errInvalid: 'Usa solo letras, espacio y guion',
  sheetTitle: 'Escribe tu nombre',
  colorHint: 'Colorea la primera letra de tu nombre',
  previewLabel: 'Vista previa de la ficha',
  guideTitle: 'Cómo enseñar a un niño a escribir su nombre',
  guide: `<p>Su propio nombre suele ser la primera palabra que un niño quiere escribir. Lo ve en la mochila, en sus dibujos y en la puerta de su cuarto, por eso aprende esas letras antes que las demás.</p>
<h3>Empieza por las mayúsculas</h3>
<p>En infantil, usa el nombre en mayúsculas: los trazos son sencillos. Más adelante, pasa a la primera letra en mayúscula y el resto en minúscula, como en el cole. Si en su clase usan letra ligada, sigue al colegio.</p>
<h3>Un poco cada día</h3>
<p>Uno o dos renglones al día son suficientes. Primero el niño recorre con el dedo el nombre modelo, después repasa la línea de puntos con lápiz, de arriba abajo y de izquierda a derecha. En el renglón vacío lo escribe solo.</p>
<h3>Nombres largos</h3>
<p>Si el nombre es largo, empieza por las primeras letras o por el diminutivo. Nadie necesita escribir el nombre completo a los 4 años.</p>`,
  faqTitle: 'Preguntas frecuentes',
  faq: [
    { q: '¿A qué edad aprende un niño a escribir su nombre?', a: 'Muchos niños empiezan a repasar su nombre entre los 4 y los 5 años y a escribirlo solos hacia los 5 o 6. Antes, reconocer las letras de su nombre ya es un gran paso.' },
    { q: '¿Se guarda el nombre en algún sitio?', a: 'No. La ficha se crea en tu navegador y no se envía nada a ningún servidor.' },
    { q: '¿Puedo imprimir en tamaño carta?', a: 'Sí. Elige A4 o Carta antes de imprimir y usa la escala al 100 % (tamaño real).' },
  ],
  hubLink: 'Ficha para repasar el nombre del niño',
  card: { title: 'Nombre para repasar', text: 'Escribe el nombre del niño e imprime una ficha para repasar las letras de su propio nombre.', cta: 'Crear ficha' },
};

const fr: NameCopy = {
  title: 'Prénom à tracer : générateur gratuit à imprimer',
  description: 'Tapez le prénom de l’enfant et imprimez une fiche pour tracer son prénom, avec des lignes d’écriture et l’initiale à colorier. Gratuit, sans inscription.',
  h1: 'Prénom à tracer à imprimer',
  lead: 'Tapez le prénom de l’enfant, choisissez capitales ou minuscules et imprimez. La fiche se crée tout de suite, dans votre navigateur.',
  nameLabel: 'Prénom de l’enfant',
  placeholder: 'Léa',
  caseLabel: 'Écriture',
  rowsLabel: 'Lignes à tracer',
  characterLabel: 'Initiale à colorier',
  emptyRowLabel: 'Ligne vide à la fin',
  paperLabel: 'Papier',
  print: 'Imprimer ou enregistrer en PDF',
  privacy: 'Le prénom n’est ni envoyé ni enregistré : la fiche est créée dans votre navigateur.',
  errEmpty: 'Tapez un prénom',
  errInvalid: 'Uniquement des lettres, l’espace et le tiret',
  sheetTitle: 'J’écris mon prénom',
  colorHint: 'Colorie la première lettre de ton prénom',
  previewLabel: 'Aperçu de la fiche',
  guideTitle: 'Apprendre à son enfant à écrire son prénom',
  guide: `<p>Le prénom est souvent le premier mot qu’un enfant veut écrire. Il le voit sur son porte-manteau à l’école, sur ses dessins, sur la porte de sa chambre : ces lettres-là, il les apprend avant les autres.</p>
<h3>D’abord en capitales</h3>
<p>En petite et moyenne section, on écrit le prénom en capitales d’imprimerie : les gestes sont simples. En grande section, on passe souvent à l’écriture cursive. Suivez ce que fait l’école.</p>
<h3>Un peu chaque jour</h3>
<p>Une ou deux lignes par jour suffisent. L’enfant suit d’abord le prénom modèle du doigt, puis repasse les pointillés au crayon, de haut en bas et de gauche à droite. Sur la ligne vide, il écrit seul.</p>
<h3>Les prénoms longs</h3>
<p>Pour un prénom long ou composé, commencez par le premier prénom ou le diminutif. Inutile d’écrire tout « Marie-Charlotte » à 4 ans.</p>`,
  faqTitle: 'Questions fréquentes',
  faq: [
    { q: 'À quel âge un enfant écrit-il son prénom ?', a: 'Beaucoup d’enfants tracent leur prénom vers 4 ou 5 ans et l’écrivent seuls en grande section. Avant, reconnaître les lettres de son prénom est déjà un beau début.' },
    { q: 'Le prénom est-il enregistré quelque part ?', a: 'Non. La fiche est créée dans votre navigateur et rien n’est envoyé à un serveur.' },
    { q: 'Puis-je imprimer en format Letter ?', a: 'Oui. Choisissez A4 ou Letter avant d’imprimer et gardez l’échelle à 100 %.' },
  ],
  hubLink: 'Fiche avec le prénom de l’enfant',
  card: { title: 'Prénom à tracer', text: 'Tapez le prénom de l’enfant et imprimez une fiche pour tracer les lettres de son prénom.', cta: 'Créer la fiche' },
};

const de: NameCopy = {
  title: 'Namen nachspuren: kostenloser Vorlagen-Generator',
  description: 'Namen eingeben und ein Arbeitsblatt zum Namen nachspuren ausdrucken, mit Schreiblinien und dem Anfangsbuchstaben zum Ausmalen. Kostenlos, ohne Anmeldung.',
  h1: 'Namen nachspuren: Vorlage zum Ausdrucken',
  lead: 'Namen Ihres Kindes eingeben, Groß- oder Kleinbuchstaben wählen und drucken. Das Blatt entsteht sofort in Ihrem Browser.',
  nameLabel: 'Name des Kindes',
  placeholder: 'Emma',
  caseLabel: 'Schreibweise',
  rowsLabel: 'Zeilen zum Nachspuren',
  characterLabel: 'Anfangsbuchstabe zum Ausmalen',
  emptyRowLabel: 'Leere Zeile am Ende',
  paperLabel: 'Papier',
  print: 'Drucken oder als PDF speichern',
  privacy: 'Der Name wird weder gesendet noch gespeichert: Das Blatt entsteht in Ihrem Browser.',
  errEmpty: 'Bitte einen Namen eingeben',
  errInvalid: 'Nur Buchstaben, Leerzeichen und Bindestrich',
  sheetTitle: 'Ich schreibe meinen Namen',
  colorHint: 'Male den ersten Buchstaben deines Namens aus',
  previewLabel: 'Vorschau des Blatts',
  guideTitle: 'So lernt Ihr Kind, seinen Namen zu schreiben',
  guide: `<p>Der eigene Name ist oft das erste Wort, das ein Kind schreiben möchte. Es sieht ihn am Garderobenhaken in der Kita, auf seinen Bildern und an der Zimmertür. Diese Buchstaben lernt es deshalb schneller als andere.</p>
<h3>Zuerst in Großbuchstaben</h3>
<p>Im Kindergarten schreiben viele Kinder ihren Namen zuerst in Großbuchstaben: Die Formen sind einfacher. Vor der Einschulung kommt dann der große Anfangsbuchstabe mit Kleinbuchstaben dazu, so wie in der Grundschule.</p>
<h3>Jeden Tag ein bisschen</h3>
<p>Eine oder zwei Zeilen am Tag genügen. Zuerst fährt Ihr Kind den Musternamen mit dem Finger nach, dann spurt es die Punkte mit dem Stift nach, von oben nach unten und von links nach rechts. In der leeren Zeile schreibt es allein.</p>
<h3>Lange Namen</h3>
<p>Bei langen oder Doppelnamen beginnen Sie mit dem ersten Namen oder dem Spitznamen. Mit 4 Jahren muss niemand „Marie-Charlotte“ ganz schreiben.</p>`,
  faqTitle: 'Häufige Fragen',
  faq: [
    { q: 'Ab wann können Kinder ihren Namen schreiben?', a: 'Viele Kinder spuren ihren Namen mit 4 bis 5 Jahren nach und schreiben ihn vor der Einschulung allein. Vorher ist es schon ein guter Anfang, die Buchstaben des eigenen Namens zu erkennen.' },
    { q: 'Wird der Name irgendwo gespeichert?', a: 'Nein. Das Blatt entsteht in Ihrem Browser, es wird nichts an einen Server gesendet.' },
    { q: 'Kann ich im US-Letter-Format drucken?', a: 'Ja. Wählen Sie vor dem Drucken A4 oder Letter und drucken Sie in Originalgröße (100 %).' },
  ],
  hubLink: 'Arbeitsblatt mit dem Namen Ihres Kindes',
  card: { title: 'Namen nachspuren', text: 'Namen eingeben und ein Blatt ausdrucken, auf dem Ihr Kind die Buchstaben seines Namens nachspurt.', cta: 'Blatt erstellen' },
};

const pl: NameCopy = {
  title: 'Imię po śladzie: darmowy generator do druku',
  description: 'Wpisz imię dziecka i wydrukuj kartę pracy z imieniem do pisania po śladzie, z liniaturą i pierwszą literą do pokolorowania. Za darmo, bez rejestracji.',
  h1: 'Imię po śladzie do druku',
  lead: 'Wpisz imię dziecka, wybierz wielkie lub małe litery i wydrukuj. Karta powstaje od razu, w Twojej przeglądarce.',
  nameLabel: 'Imię dziecka',
  placeholder: 'Zosia',
  caseLabel: 'Jak pisać',
  rowsLabel: 'Linijki po śladzie',
  characterLabel: 'Pierwsza litera do kolorowania',
  emptyRowLabel: 'Pusta linijka na końcu',
  paperLabel: 'Papier',
  print: 'Drukuj lub zapisz PDF',
  privacy: 'Imię nie jest nigdzie wysyłane ani zapisywane: karta powstaje w Twojej przeglądarce.',
  errEmpty: 'Wpisz imię',
  errInvalid: 'Tylko litery, spacja i łącznik',
  sheetTitle: 'Piszę swoje imię',
  colorHint: 'Pokoloruj pierwszą literę swojego imienia',
  previewLabel: 'Podgląd karty',
  guideTitle: 'Jak nauczyć dziecko pisać swoje imię',
  guide: `<p>Własne imię to często pierwsze słowo, które dziecko chce napisać. Widzi je na szafce w przedszkolu, na rysunkach i na drzwiach pokoju, dlatego te litery poznaje szybciej niż inne.</p>
<h3>Najpierw wielkie litery</h3>
<p>W przedszkolu dzieci zwykle zaczynają od imienia pisanego wielkimi literami drukowanymi: kształty są prostsze. Później przychodzi wielka pierwsza litera i małe pozostałe, a w szkole pismo pisane.</p>
<h3>Codziennie po trochu</h3>
<p>Jedna lub dwie linijki dziennie wystarczą. Najpierw dziecko wodzi palcem po wzorze, potem pisze ołówkiem po śladzie, z góry na dół i od lewej do prawej. W pustej linijce pisze samo.</p>
<h3>Długie imiona</h3>
<p>Przy długim imieniu zacznijcie od zdrobnienia albo od pierwszych liter. Czterolatek nie musi od razu pisać całego „Maksymiliana”.</p>`,
  faqTitle: 'Częste pytania',
  faq: [
    { q: 'W jakim wieku dziecko pisze swoje imię?', a: 'Wiele dzieci pisze swoje imię po śladzie w wieku 4–5 lat, a samodzielnie w zerówce. Wcześniej świetnym początkiem jest rozpoznawanie liter własnego imienia.' },
    { q: 'Czy imię jest gdzieś zapisywane?', a: 'Nie. Karta powstaje w przeglądarce i nic nie jest wysyłane na serwer.' },
    { q: 'Czy mogę drukować w formacie Letter?', a: 'Tak. Przed drukiem wybierz A4 lub Letter i drukuj w skali 100%.' },
  ],
  hubLink: 'Karta pracy z imieniem dziecka',
  card: { title: 'Imię po śladzie', text: 'Wpisz imię dziecka i wydrukuj kartę do pisania liter własnego imienia po śladzie.', cta: 'Utwórz kartę' },
};

const tr: NameCopy = {
  title: 'İsim yazma çalışması: ücretsiz çalışma sayfası',
  description: 'Çocuğun adını yazın, noktalı isim yazma çalışma sayfasını yazdırın: yazı çizgileri ve boyamak için ilk harf. Ücretsiz, üyelik gerekmez.',
  h1: 'İsim yazma çalışma sayfası',
  lead: 'Çocuğun adını yazın, büyük ya da küçük harf seçin ve yazdırın. Sayfa hemen, tarayıcınızda hazırlanır.',
  nameLabel: 'Çocuğun adı',
  placeholder: 'Elif',
  caseLabel: 'Yazım',
  rowsLabel: 'Noktalı satır sayısı',
  characterLabel: 'Boyamak için ilk harf',
  emptyRowLabel: 'Sonda boş satır',
  paperLabel: 'Kâğıt',
  print: 'Yazdır veya PDF olarak kaydet',
  privacy: 'İsim hiçbir yere gönderilmez ve kaydedilmez: sayfa tarayıcınızda hazırlanır.',
  errEmpty: 'Bir isim yazın',
  errInvalid: 'Sadece harf, boşluk ve kısa çizgi',
  sheetTitle: 'Adımı yazıyorum',
  colorHint: 'Adının ilk harfini boya',
  previewLabel: 'Sayfa önizlemesi',
  guideTitle: 'Çocuğa kendi adını yazmayı nasıl öğretirsiniz?',
  guide: `<p>Çocuğun kendi adı, genellikle yazmak istediği ilk kelimedir. Adını çantasında, resimlerinde ve odasının kapısında görür; bu yüzden o harfleri diğerlerinden önce öğrenir.</p>
<h3>Önce büyük harflerle</h3>
<p>Okul öncesinde ad genellikle büyük harflerle yazılır, çünkü çizgileri basittir. 1. sınıfta harfler dik temel harflerle öğretilir; o zaman ilk harf büyük, diğerleri küçük yazılır.</p>
<h3>Her gün biraz</h3>
<p>Günde bir iki satır yeterlidir. Çocuk önce örnek ismin üzerinden parmağıyla geçer, sonra noktaları kalemle yukarıdan aşağıya ve soldan sağa takip eder. Boş satıra tek başına yazar.</p>
<h3>Uzun isimler</h3>
<p>İsim uzunsa ilk harflerle ya da kısaltmasıyla başlayın. 4 yaşındaki bir çocuğun uzun bir ismi baştan sona yazması gerekmez.</p>`,
  faqTitle: 'Sık sorulan sorular',
  faq: [
    { q: 'Çocuk kendi adını kaç yaşında yazar?', a: 'Pek çok çocuk 4–5 yaşında adını noktalardan takip eder, 5–6 yaş civarında da tek başına yazar. Daha önce adındaki harfleri tanıması bile güzel bir başlangıçtır.' },
    { q: 'Yazdığım isim bir yere kaydediliyor mu?', a: 'Hayır. Sayfa tarayıcınızda hazırlanır ve hiçbir sunucuya gönderilmez.' },
    { q: 'Letter boyutunda yazdırabilir miyim?', a: 'Evet. Yazdırmadan önce A4 ya da Letter seçin ve %100 ölçekle yazdırın.' },
  ],
  hubLink: 'Çocuğun adıyla isim yazma çalışması',
  card: { title: 'İsim yazma çalışması', text: 'Çocuğun adını yazın ve kendi adının harflerini noktalardan yazacağı sayfayı yazdırın.', cta: 'Sayfa oluştur' },
};

const en: NameCopy = {
  title: 'Name tracing worksheet: free printable generator',
  description: 'Type your child’s name and print a name tracing worksheet with handwriting lines and the first letter to color. Free, no sign-up.',
  h1: 'Name tracing worksheet maker',
  lead: 'Type your child’s name, choose capitals or lowercase, and print. The worksheet is made instantly, right in your browser.',
  nameLabel: 'Child’s name',
  placeholder: 'Olivia',
  caseLabel: 'Letter case',
  rowsLabel: 'Tracing lines',
  characterLabel: 'First letter to color',
  emptyRowLabel: 'Empty line at the end',
  paperLabel: 'Paper',
  print: 'Print or save as PDF',
  privacy: 'The name isn’t sent or saved anywhere: the worksheet is made in your browser.',
  errEmpty: 'Enter a name',
  errInvalid: 'Use letters, spaces and hyphens only',
  sheetTitle: 'I can write my name',
  colorHint: 'Color the first letter of your name',
  previewLabel: 'Worksheet preview',
  guideTitle: 'How to teach your child to write their name',
  guide: `<p>A child’s own name is usually the first word they want to write. They see it on their backpack, on drawings and on their bedroom door, so they learn those letters faster than any others.</p>
<h3>Start with capitals</h3>
<p>Many preschoolers start with their name in capitals: the strokes are simpler. Before kindergarten, switch to a capital first letter followed by lowercase, the way it’s written at school.</p>
<h3>A little every day</h3>
<p>One or two lines a day is plenty. First your child runs a finger over the model name, then traces the dotted letters with a pencil, top to bottom and left to right. On the empty line, they write it on their own.</p>
<h3>Long names</h3>
<p>If the name is long, start with the first few letters or a nickname. Nobody needs to write “Alexandria” in full at age 4.</p>`,
  faqTitle: 'Frequently asked questions',
  faq: [
    { q: 'When do kids learn to write their name?', a: 'Many children trace their name around 4 to 5 and write it on their own by kindergarten. Before that, recognizing the letters in their name is already a great start.' },
    { q: 'Is the name saved anywhere?', a: 'No. The worksheet is made in your browser, and nothing is sent to a server.' },
    { q: 'Can I print on US Letter paper?', a: 'Yes. Choose A4 or US Letter before printing and print at 100% (actual size).' },
  ],
  hubLink: 'Name tracing worksheet with your child’s name',
  card: { title: 'Name tracing', text: 'Type your child’s name and print a worksheet to trace the letters of their own name.', cta: 'Make a worksheet' },
};

const ru: NameCopy = {
  title: 'Пропись с именем ребёнка: бесплатный генератор',
  description: 'Введите имя ребёнка и распечатайте пропись с его именем: строчки для обводки, разлиновка и первая буква для раскрашивания. Бесплатно и без регистрации.',
  h1: 'Пропись с именем ребёнка',
  lead: 'Введите имя, выберите заглавные или строчные буквы и распечатайте. Пропись создаётся сразу, прямо в браузере.',
  nameLabel: 'Имя ребёнка',
  placeholder: 'Маша',
  caseLabel: 'Как писать',
  rowsLabel: 'Строк для обводки',
  characterLabel: 'Первая буква для раскрашивания',
  emptyRowLabel: 'Пустая строка в конце',
  paperLabel: 'Бумага',
  print: 'Распечатать или сохранить PDF',
  privacy: 'Имя никуда не отправляется и не сохраняется: пропись собирается в вашем браузере.',
  errEmpty: 'Введите имя',
  errInvalid: 'Только буквы, пробел и дефис',
  sheetTitle: 'Пишу своё имя',
  colorHint: 'Раскрась первую букву своего имени',
  previewLabel: 'Как будет выглядеть пропись',
  guideTitle: 'Как научить ребёнка писать своё имя',
  guide: `<p>Своё имя — обычно первое слово, которое ребёнок хочет написать. Он видит его на шкафчике в саду, на рисунках, на двери своей комнаты, поэтому эти буквы запоминает быстрее остальных.</p>
<h3>Сначала печатными заглавными</h3>
<p>До школы имя удобно писать печатными заглавными буквами: у них простые элементы. Ближе к школе можно перейти на заглавную первую букву и строчные остальные. Письменные буквы учат в первом классе.</p>
<h3>Понемногу каждый день</h3>
<p>Одной-двух строчек в день достаточно. Сначала ребёнок проводит пальцем по образцу, потом обводит пунктир карандашом — сверху вниз и слева направо. В пустой строке пишет сам.</p>
<h3>Длинные имена</h3>
<p>Если имя длинное, начните с короткой формы: «Саша» вместо «Александра». В четыре года писать полное имя не обязательно.</p>`,
  faqTitle: 'Частые вопросы',
  faq: [
    { q: 'Во сколько лет ребёнок пишет своё имя?', a: 'Многие дети обводят своё имя в 4–5 лет и пишут его сами к 5–6 годам. До этого отличное начало — узнавать буквы своего имени.' },
    { q: 'Имя где-то сохраняется?', a: 'Нет. Пропись собирается в вашем браузере, на сервер ничего не отправляется.' },
    { q: 'Можно распечатать на бумаге Letter?', a: 'Да. Перед печатью выберите A4 или Letter и печатайте в масштабе 100%.' },
  ],
  hubLink: 'Пропись с именем ребёнка',
  card: { title: 'Пропись с именем', text: 'Введите имя ребёнка и распечатайте пропись, где он обведёт буквы своего имени.', cta: 'Создать пропись' },
};

export const NAME_COPY: Record<Lang, NameCopy> = { pt, es, fr, de, pl, tr, en, ru };
