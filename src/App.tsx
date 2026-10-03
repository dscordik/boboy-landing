import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Popular } from './components/Popular';
import { KidsRoom } from './components/KidsRoom';
import { Gallery } from './components/Gallery';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up--visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="page__bg" aria-hidden="true" />
      <div className="page__content">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Popular />
          <KidsRoom />
          <Gallery />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
