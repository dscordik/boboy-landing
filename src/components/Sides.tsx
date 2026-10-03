import { sides } from '../data/menu';

export function Sides() {
  return (
    <section className="section sides" id="sides">
      <div className="container">
        <div className="section__header fade-up">
          <h2 className="section__title">Гарниры и соусы</h2>
        </div>

        <div className="sides__grid">
          <div className="fade-up">
            <h3 className="sides__block-title">Гарниры</h3>
            <ul className="sides__list">
              {sides.garnishes.map((item) => (
                <li key={item.name} className="sides__item">
                  <span className="sides__item-name">{item.name}</span>
                  <span className="sides__item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up">
            <h3 className="sides__block-title">Соусы — 70 ₽</h3>
            <div className="sides__sauces">
              {sides.sauces.map((sauce) => (
                <span key={sauce} className="sides__sauce">
                  {sauce}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
