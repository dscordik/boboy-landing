export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section__header fade-up">
          <h2 className="section__title">О нас</h2>
          <p className="section__subtitle">
            Место, где восточное гостеприимство встречается с семейным уютом
          </p>
        </div>

        <div className="about__grid">
          <div className="about__text fade-up">
            <p>
              «Бобой» — восточная семейная чайхана в самом сердце Приморского района.
              Здесь готовят по традиционным рецептам: настоящий мангал на углях, ароматный
              плов, сочные хинкали и хачапури с сыром сулугуни.
            </p>
            <p>
              В интерьере — светлое дерево, живые растения, мягкая мебель с этнической
              обивкой, декоративная печь-очаг и ковры. Тёплая атмосфера, большие порции и
              внимание к каждому гостю.
            </p>
            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">🔥</div>
                <div className="about__feature-title">Настоящий мангал</div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">👨‍👩‍👧‍👦</div>
                <div className="about__feature-title">Семейная атмосфера</div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">🍲</div>
                <div className="about__feature-title">Большие порции</div>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">🌿</div>
                <div className="about__feature-title">Уютный интерьер</div>
              </div>
            </div>
          </div>

          <div className="about__image fade-up">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
              alt="Интерьер чайханы Бобой"
              loading="lazy"
              style={{
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
