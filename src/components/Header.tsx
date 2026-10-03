import { useState, useEffect } from 'react';

const navItems = [
  { href: '#about', label: 'О нас' },
  { href: '#menu', label: 'Меню' },
  { href: '#popular', label: 'Популярное' },
  { href: '#kids', label: 'Детям' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contacts', label: 'Контакты' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <a href="#" className="header__logo" onClick={closeMenu}>
            Бобой<span>.</span>
          </a>

          <nav className="header__nav" aria-label="Основная навигация">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="header__nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              href="https://t.me/BOBOYSPB"
              className="button button--primary button--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Бронь
            </a>
            <button
              className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="header__burger-line" />
              <span className="header__burger-line" />
              <span className="header__burger-line" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu__list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="mobile-menu__link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://t.me/BOBOYSPB"
              className="button button--primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              Забронировать стол
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
