export function Contacts() {
  return (
    <section className="section contacts" id="contacts">
      <div className="container">
        <div className="section__header fade-up">
          <h2 className="section__title">Контакты</h2>
          <p className="section__subtitle">Приходите в гости или забронируйте стол заранее</p>
        </div>

        <div className="contacts__grid">
          <div className="contacts__info fade-up">
            <div className="contacts__item">
              <div className="contacts__icon">📍</div>
              <div>
                <div className="contacts__label">Адрес</div>
                <div className="contacts__value">
                  Санкт-Петербург, ул. Парашютная, 63к1с1
                  <br />
                  2 этаж, ЖК Шуваловский
                </div>
              </div>
            </div>

            <div className="contacts__item">
              <div className="contacts__icon">🚇</div>
              <div>
                <div className="contacts__label">Метро</div>
                <div className="contacts__value">Комендантский проспект</div>
              </div>
            </div>

            <div className="contacts__item">
              <div className="contacts__icon">📞</div>
              <div>
                <div className="contacts__label">Телефон</div>
                <div className="contacts__value">
                  <a href="tel:+79650065843">+7 (965) 006-58-43</a>
                </div>
              </div>
            </div>

            <div className="contacts__item">
              <div className="contacts__icon">🕐</div>
              <div>
                <div className="contacts__label">Режим работы</div>
                <div className="contacts__value">Ежедневно с 11:00</div>
              </div>
            </div>

            <div className="contacts__item">
              <div className="contacts__icon">💬</div>
              <div>
                <div className="contacts__label">Бронирование</div>
                <div className="contacts__value">
                  <a href="https://t.me/BOBOYSPB" target="_blank" rel="noopener noreferrer">
                    Telegram @BOBOYSPB
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://t.me/BOBOYSPB"
              className="button button--primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
            >
              Забронировать стол
            </a>
          </div>

          <div className="contacts__map fade-up">
            <iframe
              title="Карта ресторана Бобой"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A&ll=30.249081%2C60.035104&z=16&pt=30.249081,60.035104,pm2rdm"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
