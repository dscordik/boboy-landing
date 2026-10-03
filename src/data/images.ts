/**
 * Фото блюд — локальные файлы из src/assets/dishes/
 * Имена файлов = как ты скачал (без переименования)
 */

const localModules = import.meta.glob('../assets/dishes/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

/** id блюда → имя твоего файла в dishes/ */
const fileMap: Record<string, string> = {
  // Завтраки
  blini: 'blini.webp',
  syrniki: 'sirniki.webp',
  omelet: 'omlet.webp',
  sausages: 'sosiski.webp',

  // Выпечка / Хачапури
  'khachapuri-megrel': 'xachapurimegrelski.webp',
  'khachapuri-adjar': 'hachapuriadjarski.webp',
  'bread-basket': 'xlebkorzina.webp',
  lavash: 'tonkilavash.webp',
  lepyoshka: 'uzbeklepeshka.webp',
  buns: 'bulochki2-4.webp',
  'cheburek-cheese': 'chebureksir.webp',
  'cheburek-beef': 'cheburmuaso.webp',
  'cheburek-lamb': 'cheburbaran.webp',

  // Холодные закуски
  'cheese-plate': 'sirtarelks.webp',
  'meat-plate': 'misnaytarelka.webp',
  'combo-plate': 'sirmasoassorti.webp',
  'eggplant-rolls': 'ruletikibaclaz.webp',
  'veg-bouquet': 'ovoshbuket.webp',
  herring: 'marinseldcartoska.webp',
  pickles: 'solenia.webp',

  // Салаты
  'uzbek-salad': 'uzbeksalat.webp',
  'greek-salad': 'grechsalat.webp',
  'eastern-salad': 'vostochsalat.webp',
  caesar: 'zecarkrev.webp',
  'chicken-corn': 'salatkurizakukuruzakart.webp',
  'yakhna-til': 'zxnatil.webp',
  'eggplant-tomato': 'salattomatbaclaz.webp',
  'crispy-eggplant': 'salatxrustbaclaz.webp',
  'warm-beef': 'salatgovadinabaclaz.webp',

  // Горячие закуски
  strips: 'stripsi.webp',
  'chicken-breaded': 'kurizavpanirovke.webp',
  'garlic-croutons': 'grenkissirom.webp',
  'bbq-wings': 'krilishkibarbeku.webp',
  dolma: 'dolmabakinski.webp',
  'hot-suluguni': 'gorachsuluguni.webp',
  'shrimp-batter': 'krevetkivklare.webp',

  // Супы
  kharcho: 'harcho.webp',
  lagman: 'lagman.webp',
  'kuza-shurpa': 'kyzahurpa.webp',
  shurpa: 'hyrpagovidina.webp',
  'mushroom-cream': 'gribnoikremsup.webp',
  'creamy-fish': 'slivochyxa.webp',
  borsch: 'borsh.webp',
  'chicken-soup': 'kurinsup.webp',
  'tom-yum': 'tomam.webp',

  // Горячее
  'beef-steak': 'steikgovidina.webp',
  'salmon-steak': 'steiklosos.webp',
  beefstroganoff: 'bifstorganofkurgov.webp',
  'potato-chicken': 'cartofelkurizaslivoch.webp',
  'kazan-kebab': 'kazankebabgov.webp',
  zharkoe: 'zarkoeboboi.webp',
  julienne: 'zylenkurcartrib.webp',
  tagliatelle: 'talyteleckurgribslivosh.webp',
  'creamy-pasta': 'slivoshpastalososcrevet.webp',
  manti: 'manticgovid.webp',
  'khinkali-cheese': 'ximkalibabisir.webp',
  'khinkali-beef': 'ximkalibabigoviadina.webp',
  'khinkali-lamb': 'himkalibabibaranina.jpeg',
  plov: 'tachkentskiplov.jpg',
  'plov-chaikh': 'plovchain.png',

  // Мангал
  'lula-chicken': 'lyliaizziaplenka.webp',
  'lula-beef': 'lyliaizgoviadini.jpg',
  'lula-lamb': 'lyliaizgoviadini.jpg',
  'lamb-loin': 'koreikaiagnenka.jpg',
  'shashlik-wings': 'sashlikizkurinihkriliev.jpg',
  'shashlik-fillet': 'sashlikizkurinogofile.jpg',
  'shashlik-thigh': 'sashlikizbedrachiken.jpg',
  'shashlik-beef': 'sashlikizgoviadini.jpg',
  'caucasian-shashlik': 'kavkazkisashlikizgoviadini.jpg',
  'shashlik-lamb': 'saslikmakotbaranina.webp',
  'fillet-cheese': 'fileziplenka.webp',
  'saj-chicken': 'sadzkur.webp',
  'saj-meat': 'sadzmasnoi.webp',
  assorti: 'assortisashlikov.webp',

  // Пицца
  margarita: 'margarita.webp',
  'four-cheese': '4sira.webp',
  teriyaki: 'teiakipizza.webp',

  // Десерты
  napoleon: 'napoleon.webp',
  medovik: 'medovik.webp',
  cheesecake: 'chizkeykcoko.webp',
  baklava: 'turezmoroz.webp',
  'fruit-plate': 'fruitstarelka.webp',
  'ice-cream': 'moroz3shar.webp',

  // Детское
  'kids-pizza': 'margarita.webp',
  nuggets: 'cartfrinagets.webp',
  'kids-burger': 'babychikenburg.webp',
  'kids-cutlet': 'kotletapure.webp',
  'kids-sausages': 'sosiskimakaroni.webp',
  'kids-salad': 'salatsosmitanoidetski.webp',
  'kids-borsch': 'borshziplinok.webp',

  // Бар
  'lemonade-note': 'limonadbokal.webp',
  milkshake: 'molochkokteli.webp',
  cocktails: 'avtorkokteli.webp',
  shots: 'shotiki.webp',
  'author-tea': 'avtorchai.webp',
  'regular-tea': 'deftea.webp',
  'author-coffee': 'avtorcofe.webp',
  'regular-coffee': 'defcofee.webp',

  // Гарниры
  fries: '3cart.webp',
  garnishes: '4garnir.webp',
  'potato-mushrooms': 'cartsgribami.webp',
  'grilled-vegetables': 'vegetables.webp',
};

function findLocal(id: string): string | null {
  const fileName = fileMap[id];
  if (!fileName) return null;

  const match = Object.keys(localModules).find((k) => {
    const name = k.split('/').pop()?.toLowerCase() ?? '';
    return name === fileName.toLowerCase();
  });

  return match ? localModules[match] : null;
}

export const defaultDishImage =
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';

export function getDishImage(id: string): string {
  const local = findLocal(id);
  if (local) return local;
  return defaultDishImage;
}