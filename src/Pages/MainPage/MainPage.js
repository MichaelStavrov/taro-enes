import s from "./MainPage.module.css";
import cn from "classnames";
import { Container } from "../../Components/Container/Container";
import imageOnMainPage from "../../Assets/images/taroMainPhoto.jpg";
import imageOnMainPage2 from "../../Assets/images/taroMainPhoto2.jpg";
import iconInstagram from "../../Assets/images/instagram.svg";
import { Helmet } from "react-helmet";

export function MainPage() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Расклады на все случаи жизни. Первый вопрос бесплатно!"
        />
        <meta
          name="keywords"
          content="гадание, гадание таро, таро, бесплатное гадание, расклад таро, открыть денежный поток онлайн"
        />
        <title>Расклады на Таро - Энес</title>
      </Helmet>
      <section className={s.mainPage}>
        <Container>
          <div className={s.wrapper}>
            <h1 className={s.title}>Расклады на картах Таро</h1>
            <div className={s.content}>
              <div className={s.imageOnMainPageWrapper}>
                <img
                  className={s.imageOnMainPage}
                  src={imageOnMainPage}
                  alt="imageOnMainPage"
                />
              </div>
              <p className={cn(s.mainText, s.margin0)}>
                Таинственный Оракул, актуальный несколько веков подряд – манящее
                и загадочное Таро. Как любопытно и волнующе прикоснуться к
                неизведанному и познать истину!
              </p>
              <p className={s.mainText}>
                Величественные мудрые Старшие Арканы, детальные придворные
                Младшие Арканы. Они расскажут и покажут вам пути к лучшей жизни,
                выходы из проблемных ситуаций и вернут веру в себя.
              </p>{" "}
              <p className={s.mainText}>
                Что есть Таро? Уникальная, проверенная временем система,
                открывающая вам варианты будущих событий и тонкости и нюансы
                текущих состояний. Предсказывают ли карты Таро будущее в
                привычном понимании? За мою многолетнюю активную практику я
                укрепилась в знании, что Вселенная многомерна, а будущее
                вариативно. Поэтому одного единственного будущего просто не
                существует. Вариаций будущих событий – десятки. Они формируются
                ежедневно, даже в эту секунду вы вершите свое будущее – не
                только действиями, но и мыслями, намерениями, идеями. И кто
                знает, как события вчерашнего дня откликнутся в вашей жизни
                через год! Поэтому расклады на Таро покажут вам то, что случится
                с наибольшей вероятностью.
              </p>
              <div className={s.imageOnMainPageWrapper2}>
                <img
                  className={s.imageOnMainPage}
                  src={imageOnMainPage2}
                  alt="imageOnMainPage2"
                />
              </div>
              <p className={s.mainText}>
                Вам не нравится то, что выдали карты? Тогда просто спросите их,
                что делать, чтобы изменить ход событий в вашу пользу, и таро
                ответят. Таро – не грозный вершитель судеб, а вековой пилигрим,
                указующий верный путь и предупреждающий об опасностях.
              </p>
            </div>
            <p className={s.question}>Первый вопрос бесплатно!</p>
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
            {/* <div className={s.col}>
            <div className={s.imageOnMainPageWrapper}>
              <img
                className={s.imageOnMainPage}
                src={imageOnMainPage}
                alt="imageOnMainPage"
              />
            </div>
            <div className={s.connectionAdaptive}>
              <p className={s.question}>Первый вопрос бесплатно!</p>
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
              Таинственный Оракул, актуальный несколько веков подряд – манящее и
              загадочное Таро. Как любопытно и волнующе прикоснуться к
              неизведанному и познать истину! Величественные мудрые Старшие
              Арканы, детальные придворные Младшие Арканы. Они расскажут и
              покажут вам пути к лучшей жизни, выходы из проблемных ситуаций и
              вернут веру в себя. Что есть Таро? Уникальная, проверенная
              временем система, открывающая вам варианты будущих событий и
              тонкости и нюансы текущих состояний. Предсказывают ли карты Таро
              будущее в привычном понимании? За мою многолетнюю активную
              практику я укрепилась в знании, что Вселенная многомерна, а
              будущее вариативно. Поэтому одного единственного будущего просто
              не существует. Вариаций будущих событий – десятки. Они формируются
              ежедневно, даже в эту секунду вы вершите свое будущее – не только
              действиями, но и мыслями, намерениями, идеями. И кто знает, как
              события вчерашнего дня откликнутся в вашей жизни через год!
              Поэтому расклады на Таро покажут вам то, что случится с наибольшей
              вероятностью. Вам не нравится то, что выдали карты? Тогда просто
              спросите их, что делать, чтобы изменить ход событий в вашу пользу,
              и таро ответят. Таро – не грозный и бескомпромиссный вершитель
              судеб, а вековой пилигрим, указующий верный путь и предупреждающий
              об опасностях.
            </p>
            <div className={s.connection}>
              <p className={s.question}>Первый вопрос бесплатно!</p>
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
          </div> */}
          </div>
        </Container>
      </section>
    </>
  );
}
