import s from "./AboutMe.module.css";
import { Helmet } from "react-helmet";
import { Container } from "../../Components/Container/Container";
import photo1 from "../../Assets/images/aboutMePhoto1.jpg";
import photo2 from "../../Assets/images/aboutMePhoto2.jpg";
import photo3 from "../../Assets/images/aboutMePhoto3.jpg";
import photo4 from "../../Assets/images/aboutMePhoto4.jpg";

export function AboutMe() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Опытный таролог психолог с авторской системой раскладов на таро онлайн"
        />
        <meta
          name="keywords"
          content="лучшие гадания онлайн, онлайн расклады таро, прорицание онлайн, мудрость таро, искусство прорицания онлайн"
        />
        <title>Авторская методика раскладов таро</title>
      </Helmet>
      <section className={s.aboutMe}>
        <Container>
          <div className={s.wrapper}>
            <h1 style={{ display: "none" }}>Таролог с авторской методикой</h1>
            <div className={s.col}>
              <div className={s.imageWrapper}>
                <img className={s.img} src={photo2} alt="photo2" />
              </div>
              <div className={s.imageWrapper}>
                <img className={s.img} src={photo1} alt="photo1" />
              </div>
            </div>
            <div className={s.content}>
              <h2 className={s.title}>Обо мне</h2>
              <p className={s.description}>
                Приветствую Вас! Вы зашли сюда в надежде найти ответ на
                актуальный для вас вопрос? Я дам вам ответ!{" "}
              </p>
              <p className={s.description}>
                Я Энес, практикующий таролог с высшим психологическим
                образованием. Расклады на Таро в моем исполнении – сжатые факты,
                четкие рекомендации, ожидаемая вариативность событий. Я не маг,
                не чародей и не гадалка. Таро – искусство прорицания, и я с
                радостью прорицаю для вас через потоки мироздания.
              </p>
              <div className={s.images}>
                <div className={s.imageWrapperMinWidth}>
                  <img className={s.img} src={photo2} alt="photo2" />
                </div>
                <div className={s.imageWrapperMinWidth}>
                  <img className={s.img} src={photo1} alt="photo1" />
                </div>
              </div>
              <p className={s.description}>
                Советы раскладов Таро укажут вам верный путь, предназначение,
                исход события и путь к мечте. Также карты укажут на опасности и
                на способы избежать эти опасности. Раскладов существует
                множество. В работе я использую свои авторские методики, а также
                с уважением и благоговением перед бездной знаний обращаюсь к
                раскладам великих мастеров.
              </p>
              <p className={s.description}>
                Таро – архетипичная система, символьная азбука. Я читаю по ней,
                как по книге. Но не воздействую на оппонента. Мантическая
                отрасль, к которой относится Таро, не позволяет оказывать
                энергетического воздействия на квирента. А значит, процесс
                расклада безопасен для вас, мой уважаемый гость. Я готова помочь
                вам прямо сейчас, задавайте вопрос! Используйте мудрость Таро во
                благо!
              </p>
            </div>
            <div className={s.col}>
              <div className={s.imageWrapper}>
                <img className={s.img} src={photo3} alt="photo3" />
              </div>
              <div className={s.imageWrapper}>
                <img className={s.img} src={photo4} alt="photo4" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
