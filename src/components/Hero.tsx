export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content fade-up">
          <h1 className="hero__title">Бобой — восточная семейная чайхана</h1>
          <p className="hero__subtitle">
            Узбекская, кавказская и грузинская кухня. Мангал, плов, хачапури, хинкали и
            авторские лимонады
          </p>
          <div className="hero__actions">
            <a href="#menu" className="button button--primary">
              Посмотреть меню
            </a>
            <a
              href="https://t.me/BOBOYSPB"
              className="button button--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Забронировать стол
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
