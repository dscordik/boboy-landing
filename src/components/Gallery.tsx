const images = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    alt: 'Интерьер ресторана',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    alt: 'Блюда на столе',
  },
  {
    src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    alt: 'Шашлык на мангале',
  },
  {
    src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80',
    alt: 'Плов',
  },
  {
    src: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80',
    alt: 'Хачапури',
  },
  {
    src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80',
    alt: 'Лимонады',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Сервировка',
  },
];

export function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section__header fade-up">
          <h2 className="section__title section__title--light">Галерея</h2>
          <p className="section__subtitle section__subtitle--light">
            Атмосфера, блюда и моменты из жизни чайханы
          </p>
        </div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery__item ${img.wide ? 'gallery__item--wide' : ''} fade-up`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
