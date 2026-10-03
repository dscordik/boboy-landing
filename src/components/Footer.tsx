export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            Бобой<span>.</span>
          </div>
          <p className="footer__text">
            Семейный ресторан Бобой — вкус Востока в сердце Приморского района
          </p>
          <div className="footer__socials">
            <a
              href="https://t.me/BOBOYSPB"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              TG
            </a>
            <a
              href="https://vk.ru/chaihona_boboy"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
            >
              VK
            </a>
            <a
              href="https://yandex.ru/maps/-/CXaPJZpi"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Яндекс Карты"
            >
              📍
            </a>
          </div>
          <p className="footer__copy">© {new Date().getFullYear()} Бобой. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
