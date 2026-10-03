import { menuCategories, popularIds } from '../data/menu';
import { getDishImage } from '../data/images';

export function Popular() {
  const popularDishes = popularIds
    .map((id) => {
      for (const cat of menuCategories) {
        const dish = cat.dishes.find((d) => d.id === id);
        if (dish) return dish;
      }
      return null;
    })
    .filter(Boolean);

  return (
    <section className="section popular" id="popular">
      <div className="container">
        <div className="section__header fade-up">
          <h2 className="section__title">Популярные блюда</h2>
          <p className="section__subtitle">То, что гости заказывают чаще всего</p>
        </div>

        <div className="popular__grid">
          {popularDishes.map((dish) =>
            dish ? (
              <article key={dish.id} className="popular__card fade-up">
                <img
                  className="popular__card-img"
                  src={getDishImage(dish.id)}
                  alt={dish.name}
                  loading="lazy"
                />
                <div className="popular__card-body">
                  <h3 className="popular__card-name">{dish.name}</h3>
                  <div className="popular__card-price">{dish.price}</div>
                  {dish.description && dish.description !== '—' && (
                    <p className="popular__card-desc">{dish.description}</p>
                  )}
                </div>
              </article>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
