import s from "./MainPage.module.css";
import { Container } from "../../Components/Container/Container";
import imageOnMainPage from "../../Assets/images/taroMainPhoto.jpg";
import iconInstagram from "../../Assets/images/instagram.svg";
// import video from "../../Assets/video/videoMainPage.mp4";

export function MainPage() {
  return (
    
      <section className={s.mainPage}>
      <Container>
        <div className={s.wrapper}>
        <div className={s.col}>
          <div className={s.imageOnMainPageWrapper}>
            <img
              className={s.imageOnMainPage}
              src={imageOnMainPage}
              alt="imageOnMainPage"
            />
            {/* <video className={s.imageOnMainPage} src={video} controls>
              Sorry, your browser doesn't support embedded videos
            </video> */}
          </div>
          <div className={s.connectionAdaptive}>
            <p className={s.question}>Задать любой вопрос прямо сейчас</p>
            <a
              className={s.btnInstagram}
              href="https://instagram.com/taroenes?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <div className={s.iconInstagramWrapper}>
                <img
                  className={s.iconInstagram}
                  src={iconInstagram}
                  alt="instagram"
                />
              </div>
              Instagram
            </a>
          </div>
        </div>

        <div className={s.content}>
          <h2 className={s.title}>Гадание на картах Таро</h2>
          <p className={s.mainText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ea
            reiciendis voluptatum, autem sunt veritatis voluptates hic quo!
            Soluta similique a tempore! Natus adipisci quasi praesentium veniam,
            sit labore fugiat eligendi, cum harum perspiciatis sed dolorem,
            tempora voluptatem ea amet ducimus esse consequatur distinctio
            inventore aperiam ex? Mollitia ad quibusdam, odit itaque impedit.
          </p>
          <div className={s.connection}>
            <p className={s.question}>Задать любой вопрос прямо сейчас</p>
            <a
              className={s.btnInstagram}
              href="https://instagram.com/taroenes?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <div className={s.iconInstagramWrapper}>
                <img
                  className={s.iconInstagram}
                  src={iconInstagram}
                  alt="instagram"
                />
              </div>
              Instagram
            </a>
          </div>
        </div>
        </div>
        </Container>
      </section>
    
  );
}
