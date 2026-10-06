import type { Letter } from '../lib/routes';

// TODO(review): Turkish copy is a first draft — have a native speaker check it.
const cap = (s: string) => s.charAt(0).toLocaleUpperCase('tr') + s.slice(1);

export default {
  langName: 'Türkçe',
  locale: 'tr_TR',
  nav: { tracing: 'Harf yazma', app: 'Uygulama', download: 'İndir' },
  store: { appStoreTop: 'App Store’dan', googlePlayTop: 'Google Play’den' },
  footer: {
    about: 'ABC Alphabet, AVIA YAZILIM’da ebeveynler ve geliştiriciler tarafından yapılıyor.',
    contact: 'E-posta',
    privacy: 'Gizlilik',
    language: 'Dil',
  },
  skip: 'İçeriğe geç',

  home: {
    title: '3–6 yaş için alfabe uygulaması ve ücretsiz harf yazma',
    description: 'Her harfin bir karakter olduğu, ana dili konuşanların seslendirdiği alfabe uygulaması. Ücretsiz harf yazma çalışma sayfaları A–Z, PDF, kayıt yok.',
    h1: 'Ana dili konuşanların sesiyle konuşan alfabe',
    sub: (langs: number, games: number) => `${langs} dil · ${games} oyun · 3–6 yaş çocuklar için`,
    heroNote: 'İlk altı harf ücretsiz.',
    freeTitle: 'Ebeveynler için ücretsiz',
    freeLead: 'Yazdırın ve ekransız çalışın. Kayıt yok, e-posta yok.',
    tracingCard: { title: 'Harf yazma çalışması A–Z', text: 'Her harf için bir sayfa: büyük ve küçük harfi takip etme, resimli bir kelime ve harfin karakteriyle boyama sayfası.', cta: 'Çalışma sayfalarını aç' },
    coloringCard: { title: 'Karakterli boyama sayfaları', text: 'Uygulamadaki harf karakterleri boyama sayfası olarak. Kasım ayında, yılbaşı setiyle birlikte geliyor.', soon: 'Yakında' },
    howTitle: 'Uygulama nasıl çalışır',
    how: [
      { title: 'Her harf bir karakter', text: 'A ağaç, K kirpi, P penguen. Çocuk harfi tablodan değil, karakter üzerinden hatırlar.' },
      { title: 'Ana dili konuşanların sesi', text: 'Tüm harfler ve kelimeler ana dili konuşanlar tarafından seslendirildi. Çocuğunuz doğru telaffuzu ilk günden duyar.' },
      { title: 'Parmakla yazma', text: 'Çocuk harfi ekranda parmağıyla, nokta nokta takip eder. Sonra aynı harfi kalemle yazmak kolaylaşır.' },
    ],
    screensAlt: 'ABC Alphabet uygulama ekranı',
    langsTitle: 'Tek uygulamada sekiz alfabe',
    langsText: 'Türkçe, İngilizce, Almanca, Fransızca, İspanyolca, Portekizce, Lehçe ve Rusça. Dili ayarlardan değiştirin; her alfabedeki ilerleme ayrı kaydedilir.',
    abroadTitle: 'Yurt dışında yaşayan aileler için',
    abroadText: 'Evde konuşulan dilin alfabesi ve okulda öğrenilen alfabe tek uygulamada. Çocuk ikisini sırayla öğrenir, iki ayrı programla uğraşmanıza gerek kalmaz.',
    trustTitle: 'Bilmekte fayda var',
    trust: [
      'Satın almalardan önce ebeveyn kilidi',
      'Kısa çalışmalar: her seferinde bir harf',
      'Her alfabe için ayrı ilerleme',
    ],
  },

  tracing: {
    title: 'Harf yazma çalışması A–Z: ücretsiz PDF çalışma sayfaları',
    description: 'Okul öncesi için 29 harf yazma çalışma sayfası: büyük ve küçük harf takibi, resimli kelime ve boyama. Ücretsiz PDF, kayıt gerekmez.',
    h1: 'Harf yazma çalışması: ücretsiz çalışma sayfaları A–Z',
    lead: 'Türk alfabesinin her harfi için ayrı bir sayfa, Ç, Ğ, I, İ, Ö, Ş ve Ü dahil. Sayfada: takip edilecek büyük harf, yazma satırları, resimli bir kelime ve ABC Alphabet uygulamasındaki karakterle boyama sayfası.',
    downloadAll: 'Tüm alfabeyi indir (PDF)',
    gridTitle: 'Bir harf seçin',
    setsTitle: 'Setler',
    sets: [
      { title: 'Ünlüler', letters: ['A', 'E', 'I', 'İ', 'O', 'Ö', 'U', 'Ü'], note: 'Başlamak için iyi bir yer: ünlüler uzatılarak söylenebilir, çocuk onları kelimelerde kolayca duyar.' },
      { title: 'Noktalı ve noktasız', letters: ['C', 'Ç', 'G', 'Ğ', 'I', 'İ', 'S', 'Ş'], note: 'Yalnızca bir nokta ya da çengel farkı olan çiftler. Aynı gün, önce biri sonra diğeriyle çalışın.' },
    ],
    guideTitle: 'Çalışma sayfalarıyla nasıl çalışılır',
    guide: `
<p>Kısaca: günde 5–10 dakika, her seferinde bir harf ve yalnızca çocuğunuz istekli olduğu sürece. Birçok çocuk 4–5 yaşında harf takip etmeye hazırdır. Yaşa değil ele bakın: çocuğunuz kalemi sağlam tutuyor ve kapalı bir daire çizebiliyorsa başlayabilirsiniz.</p>
<h3>Önce harfle tanışın</h3>
<p>Harfi kalem olmadan tanıtın. Sesini söyleyin, bir kutunun ya da tabelanın üzerinde bulun, birlikte üç kelime düşünün. Her sayfada resimli bir kelime var, onunla başlayın: “Bu bir ağaç. Ağaç A ile başlar.”</p>
<h3>Önce parmak, sonra kalem</h3>
<p>Çocuğunuz büyük harfi önce parmağıyla, yazıldığı gibi yukarıdan aşağıya takip etsin. El, yönü böyle öğrenir. Ardından kesik çizgileri kalemle takip edin. Yumuşak ya da kalın üçgen bir kalem, tükenmez kalemden daha kolaydır.</p>
<h3>Satırlar</h3>
<p>İlk satır büyük harf, ikinci satır küçük harf, sonra kelime. Son satır boş: çocuğunuzdan harfi yardımsız yazmasını isteyin. Her şeyi bir seferde doldurmaya gerek yok. İki düzgün harf, yorgun ve eğri bir satırdan iyidir.</p>
<h3>Henüz olmuyorsa</h3>
<p>Harfin çizgiden taşması, ayna yazısı, benzer harfleri karıştırmak 6–7 yaşına kadar normaldir. Her hatayı düzeltmeyin. Elinizi onun elinin üzerine koyarak birlikte takip edin ve ara verin. Ertesi gün genellikle daha iyi gider.</p>
<h3>Sonunda boyama</h3>
<p>İkinci sayfada harfin karakteriyle bir boyama sayfası var. Takip etmenin ödülü ve aynı ince motor becerilerin çalışması.</p>
<h3>Ne sıklıkla</h3>
<p>Haftada üç dört sayfa yeterli. Böylece tüm alfabeyi iki üç ayda, acele etmeden bitirirsiniz. Zor gelen ya da karıştırılan harflere geri dönün.</p>
`,
  },

  letter: {
    title: (l: Letter) => `${l.letter} harfi yazma çalışması: ücretsiz PDF`,
    description: (l: Letter) => `Okul öncesi için ${l.letter} harfi çalışma sayfası: ${l.letter} ve ${l.lower} takibi, resimli “${l.word}” kelimesi${l.coloring ? ' ve boyama' : ''}. A4 PDF.`,
    h1: (l: Letter) => `${l.letter} harfi: ${l.coloring ? 'yazma ve boyama' : 'yazma çalışması'}`,
    lead: (l: Letter) => `${l.letter} harfi: ${l.word}. Sayfayı yazdırın ve harfi kesik çizgi üzerinden takip edin.`,
    download: 'PDF indir',
    previewAlt: (l: Letter) => `${l.letter} harfi yazma çalışma sayfası, ${l.word} resmiyle`,
    characterAlt: (l: Letter) => `${cap(l.word ?? '')}: ABC Alphabet uygulamasında ${l.letter} harfinin karakteri`,
    wordsTitle: (l: Letter) => `${l.letter} ile başlayan kelimeler`,
    wordsInsideTitle: (l: Letter) => `İçinde ${l.letter} olan kelimeler`,
    wordAlt: (w: string) => `Resim: ${w}`,
    howTitle: 'Nasıl çalışılır',
    how: [
      'Harfi ve sesini söyleyin, resmi gösterin.',
      'Büyük harfi parmakla yukarıdan aşağıya takip edin.',
      'Satırları kalemle takip edin: büyük harf, küçük harf, kelime.',
      'Son satırı kesik çizgi olmadan kendi başına yazsın.',
    ],
    prev: 'Önceki harf',
    next: 'Sonraki harf',
    all: 'Tüm harfler',
    sheetPage: '1. sayfa: yazma, 2. sayfa: boyama',
  },

  appBlock: {
    title: (l?: Letter) => (l ? `${l.letter} harfini uygulamada dinleyin` : 'Ana dili konuşanların sesiyle harfler'),
    text: 'ABC Alphabet uygulamasında her harf canlanır: karakter hareket eder, bir ses harfi söyler ve çocuk harfi parmağıyla takip eder. Ayrıca dikkat, hafıza ve ilk okuma için 11 oyun.',
  },

  app: {
    title: 'ABC Alphabet uygulaması: 8 dilde harf öğrenme',
    description: 'iPhone, iPad ve Android için alfabe uygulaması: harf karakterleri, ana dili konuşanların seslendirmesi ve 8 dilde 11 eğitici oyun.',
    h1: 'ABC Alphabet uygulaması',
    lead: '3–6 yaş çocuklar için alfabe uygulaması: harf karakterleri, ana dili konuşanların sesi ve harf bulma, birleştirme ve takip etme oyunları.',
    redirecting: 'Uygulama mağazası açılıyor…',
  },

  privacy: {
    title: 'Gizlilik politikası | ABC Alphabet',
    description: 'abcalphabetkids.com çerez kullanmaz ve kişisel veri toplamaz. Ziyaret istatistikleri çerezsiz Cloudflare Web Analytics ile tutulur.',
    h1: 'Gizlilik',
    body: `
<p>Bu web sitesini AVIA YAZILIM LİMİTED ŞİRKETİ işletmektedir. Aşağıda sitenin hangi verileri işlediği kısaca anlatılıyor. Uygulamanın kendi gizlilik politikası App Store ve Google Play’de yer alır.</p>
<h2>Yapmadıklarımız</h2>
<ul><li>Çerez kullanmayız. Tarayıcıda yalnızca sizin seçtiğiniz site dili saklanır (localStorage) ve hiçbir yere gönderilmez.</li><li>Kayıt ve e-posta adresi istemeyiz: çalışma sayfaları doğrudan indirilir.</li><li>Reklam ve reklam takipçisi yoktur.</li></ul>
<h2>Ziyaret istatistikleri</h2>
<p>Ziyaretleri Cloudflare Web Analytics ile sayarız. Bu hizmet çerez kullanmaz, ziyaretçi profili oluşturmaz ve sizi diğer sitelerde takip etmez. Yalnızca toplam sayıları görürüz: sayfa görüntülemeleri, ülke, cihaz türü.</p>
<h2>Barındırma</h2>
<p>Site GitHub Pages üzerinde barındırılır. Her web sunucusu gibi GitHub da sayfayı iletmek için teknik olarak IP adresinizi alır. Ayrıntılar GitHub’ın gizlilik bildirimindedir.</p>
<h2>Mağaza bağlantıları</h2>
<p>App Store ve Google Play düğmeleri, geldiğiniz sayfanın etiketini taşır (örneğin site_tr_home). Hangi sayfaların faydalı olduğunu anlamamızı sağlar ve sizinle ilgili veri içermez.</p>
<h2>İletişim</h2>
<p>Verilerle ilgili sorular: <a href="mailto:hello@aviayazilim.com">hello@aviayazilim.com</a>.</p>
`,
  },
};
