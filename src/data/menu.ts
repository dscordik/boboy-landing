export interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  dishes: Dish[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Завтраки',
    dishes: [
      {
        id: 'blini',
        name: 'Блинчики 3 шт.',
        price: '290 ₽',
        description: 'Со сметаной и сгущёнкой',
      },
      {
        id: 'syrniki',
        name: 'Сырники 3 шт.',
        price: '330 ₽',
        description: 'Со сметаной и сгущёнкой',
      },
      {
        id: 'omelet',
        name: 'Омлет греческий',
        price: '350 ₽',
        description: 'Сливочный омлет, зелень, томаты, красный лук, маслины, сыр фета',
      },
      {
        id: 'sausages',
        name: '+ Куриные сосиски 2 шт.',
        price: '+120 ₽',
        description: 'Дополнение к омлету',
      },
    ],
  },
  {
    id: 'bakery',
    title: 'Выпечка / Хачапури',
    dishes: [
      {
        id: 'khachapuri-megrel',
        name: 'Хачапури по-мегрельски',
        price: '590 ₽',
        description: 'Сыр сулугуни',
        popular: true,
      },
      {
        id: 'khachapuri-adjar',
        name: 'Хачапури по-аджарски',
        price: '490 ₽',
        description: 'Сыр сулугуни + желток',
        popular: true,
      },
      {
        id: 'bread-basket',
        name: 'Хлебная корзина',
        price: '350 ₽',
        description: 'Тонкий лаваш, узбекская лепёшка, ржаные и картофельные булочки',
      },
      {
        id: 'lavash',
        name: 'Тонкий лаваш',
        price: '100 ₽',
        description: '—',
      },
      {
        id: 'lepyoshka',
        name: 'Узбекская лепёшка',
        price: '130 ₽',
        description: 'Золотистая тандырная с хрустящей корочкой',
      },
      {
        id: 'buns',
        name: 'Булочки 2 / 4 шт.',
        price: '80 / 150 ₽',
        description: 'Ржаные и картофельные',
      },
      {
        id: 'cheburek-cheese',
        name: 'Чебурек с сыром и зеленью',
        price: '250 ₽',
        description: '—',
      },
      {
        id: 'cheburek-beef',
        name: 'Чебурек с говядиной',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'cheburek-lamb',
        name: 'Чебурек с бараниной',
        price: '320 ₽',
        description: '—',
      },
    ],
  },
  {
    id: 'cold',
    title: 'Холодные закуски',
    dishes: [
      {
        id: 'cheese-plate',
        name: 'Сырная тарелка',
        price: '750 ₽',
        description: 'Пармезан, дорблю, гауда, чеддер + мёд + грецкий орех',
      },
      {
        id: 'meat-plate',
        name: 'Мясная тарелка',
        price: '890 ₽',
        description: 'Ростбиф, говяжий язык, куриное филе + горчичный соус',
      },
      {
        id: 'combo-plate',
        name: 'Сырно-мясное ассорти',
        price: '1490 ₽',
        description: 'Комбо сырной + мясной тарелки',
      },
      {
        id: 'eggplant-rolls',
        name: 'Рулетики из баклажанов',
        price: '490 ₽',
        description: 'Баклажан, сырная начинка (фета + гауда + сливочный), грецкий орех',
      },
      {
        id: 'veg-bouquet',
        name: 'Овощной букет',
        price: '490 ₽',
        description: 'Перец, помидор, огурец, зелень',
      },
      {
        id: 'herring',
        name: 'Маринованная сельдь с картофелем',
        price: '470 ₽',
        description: 'Сельдь, беби-картофель, красный лук, укроп + булочка',
      },
      {
        id: 'pickles',
        name: 'Домашние соленья',
        price: '450 ₽',
        description: 'Огурцы, помидоры, черемша, капуста, перец',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Салаты',
    dishes: [
      {
        id: 'uzbek-salad',
        name: 'Узбекский салат',
        price: '330 ₽',
        description: 'Помидор, огурец, красный лук, итальянская заправка',
      },
      {
        id: 'greek-salad',
        name: 'Греческий салат',
        price: '490 ₽',
        description: 'Помидор, огурец, айсберг, перец, маслины, красный лук, фета',
      },
      {
        id: 'eastern-salad',
        name: 'Восточный салат с ветчиной и гаудой',
        price: '550 ₽',
        description: 'Ветчина индейки, гауда, курица, перец, горошек, соус айоли-устричный',
      },
      {
        id: 'caesar',
        name: 'Цезарь с цыплёнком / креветками',
        price: '520 / 620 ₽',
        description: 'Айсберг + ромейн, соус цезарь, перепелиные яйца, черри, гренки, пармезан',
        popular: true,
      },
      {
        id: 'chicken-corn',
        name: 'Салат с курицей, кукурузой и картофелем пай',
        price: '510 ₽',
        description: 'Курица, кукуруза, картофель пай, яйца, солёные огурцы, майонез',
      },
      {
        id: 'yakhna-til',
        name: 'Яхна-тил',
        price: '490 ₽',
        description: 'Говяжий язык, солёные + свежие огурцы, жареный лук, майонез',
      },
      {
        id: 'eggplant-tomato',
        name: 'Салат с жареными баклажанами и томатами',
        price: '450 ₽',
        description: 'Баклажан, помидор, свит-чили, кинза, рукола',
      },
      {
        id: 'crispy-eggplant',
        name: 'Салат с хрустящими баклажанами и страчателлой',
        price: '590 ₽',
        description: 'Баклажан, страчателла, микс салата, айоли-устричный',
      },
      {
        id: 'warm-beef',
        name: 'Тёплый салат с говядиной, баклажанами и страчателлой',
        price: '690 ₽',
        description: 'Говядина, баклажан, страчателла, помидор, микс, устричный соус',
      },
    ],
  },
  {
    id: 'hot-appetizers',
    title: 'Горячие закуски',
    dishes: [
      {
        id: 'strips',
        name: 'Стрипсы куриные',
        price: '390 ₽',
        description: 'С сырным соусом',
      },
      {
        id: 'chicken-breaded',
        name: 'Курочка в панировке',
        price: '450 ₽',
        description: 'С розовым соусом',
      },
      {
        id: 'garlic-croutons',
        name: 'Гренки с чесноком и сыром',
        price: '350 ₽',
        description: 'С соусом тартар',
      },
      {
        id: 'bbq-wings',
        name: 'Крылышки барбекю',
        price: '450 ₽',
        description: 'С соусом BBQ + кунжут',
      },
      {
        id: 'dolma',
        name: 'Долма по-бакински 5 / 8 шт.',
        price: '510 / 620 ₽',
        description: 'Со сметаной',
      },
      {
        id: 'hot-suluguni',
        name: 'Горячий сулугуни',
        price: '450 ₽',
        description: 'С брусничным соусом',
      },
      {
        id: 'shrimp-batter',
        name: 'Креветки в кляре',
        price: '590 ₽',
        description: 'С соусом сладкий чили',
      },
    ],
  },
  {
    id: 'soups',
    title: 'Супы',
    dishes: [
      {
        id: 'kharcho',
        name: 'Харчо',
        price: '490 ₽',
        description: 'С рисом и говядиной',
      },
      {
        id: 'lagman',
        name: 'Азиатский лагман',
        price: '550 ₽',
        description: 'Лапша удон + ваджа',
      },
      {
        id: 'kuza-shurpa',
        name: 'Куза-шурпа с говядиной',
        price: '—',
        description: 'Большие куски говядины, картофель, специи',
      },
      {
        id: 'shurpa',
        name: 'Шурпа с говядиной',
        price: '—',
        description: '—',
      },
      {
        id: 'mushroom-cream',
        name: 'Грибной крем-суп',
        price: '390 ₽',
        description: '+ гренки',
      },
      {
        id: 'creamy-fish',
        name: 'Сливочная уха с треской и лососем',
        price: '550 ₽',
        description: '—',
      },
      {
        id: 'borsch',
        name: 'Борщ с говядиной',
        price: '430 ₽',
        description: '+ сметана',
      },
      {
        id: 'chicken-soup',
        name: 'Куриный суп',
        price: '350 ₽',
        description: '—',
      },
      {
        id: 'tom-yum',
        name: 'Том ям с морепродуктами',
        price: '650 ₽',
        description: 'Креветки, мидии, кальмар, рис',
        popular: true,
      },
    ],
  },
  {
    id: 'hot',
    title: 'Горячее',
    dishes: [
      {
        id: 'beef-steak',
        name: 'Стейк из говядины с соусом демиглас',
        price: '890 ₽',
        description: '—',
      },
      {
        id: 'salmon-steak',
        name: 'Стейк из лосося на гриле',
        price: '—',
        description: '+ тартар + микс салата',
      },
      {
        id: 'beefstroganoff',
        name: 'Бефстроганов из курицы / говядины',
        price: '550 / 650 ₽',
        description: '+ гарнир на выбор',
      },
      {
        id: 'potato-chicken',
        name: 'Картофель с курицей в сливочном соусе с сыром',
        price: '590 ₽',
        description: '—',
      },
      {
        id: 'kazan-kebab',
        name: 'Казан-кебаб из говядины',
        price: '650 ₽',
        description: '+ картофель',
      },
      {
        id: 'zharkoe',
        name: 'Жаркое «Бобой» из говядины с овощами',
        price: '590 ₽',
        description: '—',
      },
      {
        id: 'julienne',
        name: 'Жульен с курицей, картофелем и грибами',
        price: '490 ₽',
        description: '—',
      },
      {
        id: 'tagliatelle',
        name: 'Тальятелле с курицей и грибами в сливочном соусе',
        price: '490 ₽',
        description: '—',
      },
      {
        id: 'creamy-pasta',
        name: 'Сливочная паста с лососем и креветками',
        price: '620 ₽',
        description: '—',
      },
      {
        id: 'manti',
        name: 'Манты с говядиной 3 / 5 шт.',
        price: '370 / 510 ₽',
        description: 'Со сметаной',
        popular: true,
      },
      {
        id: 'khinkali-cheese',
        name: 'Хинкали / беби-хинкали (сыр)',
        price: '90 / 45 ₽',
        description: 'Мин. заказ 3 шт. / беби от 6 шт.',
        popular: true,
      },
      {
        id: 'khinkali-beef',
        name: 'Хинкали / беби-хинкали (говядина)',
        price: '105 / 50 ₽',
        description: 'Мин. заказ 3 шт. / беби от 6 шт.',
        popular: true,
      },
      {
        id: 'khinkali-lamb',
        name: 'Хинкали / беби-хинкали (баранина)',
        price: '115 / 55 ₽',
        description: 'Мин. заказ 3 шт. / беби от 6 шт.',
      },
      {
        id: 'plov',
        name: 'Ташкентский / Самаркандский плов',
        price: '490 ₽',
        description: '—',
        popular: true,
      },
      {
        id: 'plov-chaikh',
        name: 'Плов чайханский 1 кг / 4 кг',
        price: '1350 / 4900 ₽',
        description: 'По предзаказу за 3 часа',
      },
    ],
  },
  {
    id: 'mangal',
    title: 'Мангал',
    dishes: [
      {
        id: 'lula-chicken',
        name: 'Люля из цыплёнка',
        price: '490 ₽',
        description: '—',
      },
      {
        id: 'lula-beef',
        name: 'Люля из говядины',
        price: '590 ₽',
        description: '—',
      },
      {
        id: 'lula-lamb',
        name: 'Люля из баранины',
        price: '690 ₽',
        description: '—',
      },
      {
        id: 'lamb-loin',
        name: 'Корейка ягнёнка',
        price: '425 ₽ (1 шт.)',
        description: 'Минимальный заказ от 2 шт.',
      },
      {
        id: 'shashlik-wings',
        name: 'Шашлык из куриных крыльев',
        price: '450 ₽',
        description: '—',
      },
      {
        id: 'shashlik-fillet',
        name: 'Шашлык из куриного филе',
        price: '520 ₽',
        description: '—',
      },
      {
        id: 'shashlik-thigh',
        name: 'Шашлык из бедра цыплёнка',
        price: '550 ₽',
        description: '—',
      },
      {
        id: 'shashlik-beef',
        name: 'Шашлык из говядины',
        price: '690 ₽',
        description: '—',
        popular: true,
      },
      {
        id: 'caucasian-shashlik',
        name: 'Кавказский шашлык из говядины',
        price: '750 ₽',
        description: '—',
      },
      {
        id: 'shashlik-lamb',
        name: 'Шашлык из мякоти баранины',
        price: '890 ₽',
        description: '—',
      },
      {
        id: 'fillet-cheese',
        name: 'Филе цыплёнка на мангале с сыром и зеленью',
        price: '490 ₽',
        description: '—',
      },
      {
        id: 'saj-chicken',
        name: 'Садж куриный',
        price: '2500 ₽',
        description: '—',
        popular: true,
      },
      {
        id: 'saj-meat',
        name: 'Садж мясной',
        price: '2950 ₽',
        description: '—',
        popular: true,
      },
      {
        id: 'assorti',
        name: 'Ассорти шашлыков',
        price: '1850 ₽',
        description: 'Бедро + говядина + люля баранина',
      },
    ],
  },
  {
    id: 'pizza',
    title: 'Пицца',
    dishes: [
      {
        id: 'margarita',
        name: 'Маргарита',
        price: '450 ₽',
        description: 'Моцарелла, томаты, томатный соус',
      },
      {
        id: 'four-cheese',
        name: 'Четыре сыра',
        price: '550 ₽',
        description: 'Чеддер, моцарелла, дорблю, пармезан, сливочный соус, орегано',
      },
      {
        id: 'teriyaki',
        name: 'Цыплёнок терияки',
        price: '550 ₽',
        description: 'Филе, моцарелла, томаты, соус терияки, кунжут',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    dishes: [
      {
        id: 'napoleon',
        name: 'Наполеон',
        price: '320 ₽',
        description: '—',
      },
      {
        id: 'medovik',
        name: 'Медовик',
        price: '320 ₽',
        description: '—',
      },
      {
        id: 'cheesecake',
        name: 'Чизкейк с шоколадом',
        price: '450 ₽',
        description: '—',
      },
      {
        id: 'baklava',
        name: 'Турецкая пахлава с мороженым',
        price: '450 ₽',
        description: '—',
      },
      {
        id: 'fruit-plate',
        name: 'Фруктовая тарелка 1000 г',
        price: '1650 ₽',
        description: 'Сезонные фрукты (уточнять состав)',
      },
      {
        id: 'ice-cream',
        name: 'Мороженое (ваниль/шоколад/клубника)',
        price: '130 / 350 ₽',
        description: '1 шарик / 3 шарика',
      },
    ],
  },
  {
    id: 'kids',
    title: 'Детское меню',
    dishes: [
      {
        id: 'kids-pizza',
        name: 'Пицца Маргаритка',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'nuggets',
        name: 'Наггетсы с картофелем фри и кетчупом',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'kids-burger',
        name: 'Беби чикен бургер',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'kids-cutlet',
        name: 'Куриная котлетка с пюре',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'kids-sausages',
        name: 'Сосиски с цветными макарошками',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'kids-salad',
        name: 'Овощной салатик со сметаной',
        price: '290 ₽',
        description: '—',
      },
      {
        id: 'kids-borsch',
        name: 'Борщ с цыплёнком',
        price: '290 ₽',
        description: 'Со сметаной',
      },
    ],
  },
  {
    id: 'bar',
    title: 'Бар',
    dishes: [
      {
        id: 'lemonade-note',
        name: 'Лимонады (бокал / кувшин)',
        price: '290 / 690 ₽',
        description: 'Малина-грейпфрут, Клубничный, Ягодный бобой, Вишня-гранат, Мохито б/а, Тропический, Имбирный',
        popular: true,
      },
      {
        id: 'milkshake',
        name: 'Молочные коктейли',
        price: '450 ₽',
        description: 'Ванильный / Шоколадный / Клубничный',
      },
      {
        id: 'cocktails',
        name: 'Авторские коктейли',
        price: '350–520 ₽',
        description: 'Гранатовый лонг-айленд, Негрони, Крем-брюле, Восточная страсть, Беллини, Апероль, Порнстар, Пина Колада и др.',
      },
      {
        id: 'shots',
        name: 'Шотики',
        price: '490–530 ₽',
        description: 'Ещё по одной, Ромовая маракуйя, Клубничный шёлк',
      },
      {
        id: 'author-tea',
        name: 'Авторские чаи',
        price: '450 ₽',
        description: 'Тропический, Клубника-персик, Медово-имбирный, Малиновый, Пряная вишня, Облепиховый, Ташкентский',
      },
      {
        id: 'regular-tea',
        name: 'Обычный чай 1000 мл',
        price: '350 ₽',
        description: 'Ассам, Эрл Грей, Сенча, Жасмин, Молочный улун и др.',
      },
      {
        id: 'author-coffee',
        name: 'Авторский кофе',
        price: '250–370 ₽',
        description: 'Раф имбирное печенье, Финиковый латте, Бамбл, Гранатовый эспрессо-тоник',
      },
      {
        id: 'regular-coffee',
        name: 'Обычный кофе',
        price: '190–310 ₽',
        description: 'Эспрессо, Американо, Капучино, Флэт уайт, Латте, Раф',
      },
    ],
  },
];

export const sides = {
  garnishes: [
    { id: 'garnishes', name: 'Пюре / Рис / Фасоль', price: '170 ₽' },
    { id: 'fries', name: 'Айдахо / Фри / Беби', price: '210 ₽' },
    { id: 'grilled-vegetables', name: 'Овощи / Шампиньоны на мангале', price: '290 ₽' },
    { id: 'potato-mushrooms', name: 'Жареный картофель с грибами', price: '310 ₽' },
  ],
  sauces: [
    'Сырный',
    'Чесночный',
    'Тартар',
    'Сметана',
    'Кетчуп',
    'Майонез',
    'Розовый',
    'Барбекю',
    'Брусничный',
    'Аджика',
    'Сацебели',
    'Сладкий чили',
  ],
};

export const popularIds = [
  'khachapuri-megrel',
  'khachapuri-adjar',
  'plov',
  'khinkali-cheese',
  'khinkali-beef',
  'shashlik-beef',
  'tom-yum',
  'caesar',
  'saj-meat',
  'manti',
  'lemonade-note',
];
