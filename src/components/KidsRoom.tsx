import kidsVideo from '../assets/video/kids-room.mp4';
import kidsPoster from '../assets/video/kids-room-poster.jpg';

export function KidsRoom() {
  return (
    <section className="section kids" id="kids">
      <div className="container">
        <div className="kids__grid">
          <div className="kids__text fade-up">
            <h2 className="section__title">Детская комната</h2>
            <p className="kids__lead">
              Пока взрослые наслаждаются обедом, малыши играют в яркой комнате с мягкими
              игрушками.
            </p>
            <ul className="kids__features">
              <li>🧸 Мягкие игрушки и пуфики-зверята</li>
              <li>🎨 Яркий, весёлый интерьер</li>
              <li>🍽️ Отдельное детское меню</li>
            </ul>
            <a href="#contacts" className="kids__link">
              Забронировать стол →
            </a>
          </div>

          <div className="kids__video-wrap fade-up">
            <video
              className="kids__video"
              src={kidsVideo}
              poster={kidsPoster}
              controls
              playsInline
              preload="metadata"
              aria-label="Видео детской комнаты в чайхане «Бобой»"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
