import { useState } from 'react';
import { menuCategories, sides } from '../data/menu';
import { getDishImage } from '../data/images';

export function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];
  const isSides = activeId === 'sides';

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section__header fade-up">
          <h2 className="section__title">Меню</h2>
          <p className="section__subtitle">
            Восточные вкусы, грузинские сыры, узбекский плов и кавказский мангал
          </p>
        </div>

        <div className="menu__tabs fade-up" role="tablist" aria-label="Категории меню">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              className={`menu__tab ${activeId === cat.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.title}
            </button>
          ))}
          <button
            role="tab"
            aria-selected={isSides}
            className={`menu__tab ${isSides ? 'menu__tab--active' : ''}`}
            onClick={() => setActiveId('sides')}
          >
            Гарниры и соусы
          </button>
        </div>

        {isSides ? (
          <div className="menu__sides menu__panel">
            <div className="menu__sides-block">
              <h3 className="menu__sides-title">Гарниры</h3>
              <div className="menu__list menu__list--sides">
                {sides.garnishes.map((item) => (
                    <article key={item.name} className="menu__item menu__item--with-img">
                      <div className="menu__item-img-wrap">
                        <img
                            className="menu__item-img"
                            src={getDishImage(item.id)}
                            alt={item.name}
                            loading="lazy"
                        />
                      </div>
                      <div className="menu__item-body">
                        <h3 className="menu__item-name">{item.name}</h3>
                        <span className="menu__item-price">{item.price}</span>
                      </div>
                    </article>
                ))}
              </div>
            </div>
            <div className="menu__sides-block">
              <h3 className="menu__sides-title">Соусы — 70 ₽</h3>
              <div className="menu__sauces">
                {sides.sauces.map((sauce) => (
                  <span key={sauce} className="menu__sauce">
                    {sauce}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="menu__list menu__list--cards menu__panel" role="tabpanel">
            {activeCategory.dishes.map((dish) => (
              <article key={dish.id} className="menu__item menu__item--with-img">
                <div className="menu__item-img-wrap">
                  <img
                    className="menu__item-img"
                    src={getDishImage(dish.id)}
                    alt={dish.name}
                    loading="lazy"
                  />
                </div>
                <div className="menu__item-body">
                  <div className="menu__item-top">
                    <h3 className="menu__item-name">{dish.name}</h3>
                    <span className="menu__item-price">{dish.price}</span>
                  </div>
                  {dish.description && dish.description !== '—' && (
                    <p className="menu__item-desc">{dish.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
