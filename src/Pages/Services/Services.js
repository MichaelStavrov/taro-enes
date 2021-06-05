import s from "./Services.module.css";
import { Container } from "../../Components/Container/Container";
import question1 from "../../Assets/images/1question.jpg";
import questions3 from "../../Assets/images/3questions.jpg";
import full from "../../Assets/images/full.jpg";
import iconInstagram from "../../Assets/images/instagram.svg";

const services = [
  {
    id: 1,
    name: "1 вопрос",
    image: question1,
    description:
      "Мы подробнейшим образом рассмотрим 1 важный для вас вопрос, сделаем прогноз развития ситуации, узнаем итог, обсудим детали.",
    price: 500,
  },
  {
    id: 2,
    name: "3 вопроса",
    image: questions3,
    description:
      "Накопилось много вопросов из разных областей жизни? Это мне знакомо. Трудно спросить только про любовь, если еще интересно узнать и про деньги, и про предназначение. Пакет 3 вопроса придуман специально для вас!",
    price: 900,
  },
  {
    id: 3,
    name: "Расклад",
    image: full,
    description:
      "При помощи раскладов на Таро можно подробно рассмотреть глобальные тематические запросы. Совместимость пары. Рентабельность бизнеса. Предназначение. Кармические задачи. Годовой расклад. Расклад на все сферы жизни. И многое другое",
    price: 1500,
  },
];



export function Services() {
  return (
    <section className={s.services}>
      <Container>
        <div className={s.wrapper}>
          <h3 className={s.title}>Мои услуги</h3>
          <div className={s.list}>
            {services.map(({ id, name, image, description, price }) => (
              <div className={s.item} key={id}>
                <h4 className={s.itemTitle}>&#171;{name}&#187;</h4>
                <div className={s.itemContent}>
                  <div className={s.imageWrapper}>
                    <img className={s.img} src={image} alt={image} />
                  </div>
                  <p className={s.description375w}>{description}</p>
                  {/* <div className={s.price375w}>{price} &#8381;</div> */}
                  <div className={s.col}>
                    <p className={s.description}>{description}</p>

                    {/* <div className={s.price}>{price} &#8381;</div> */}
                  </div>
                </div>
                <div className={s.price}>{price} &#8381;</div>
              </div>
            ))}
          </div>
          <div className={s.connection}>
            <p className={s.question}>Задай любой вопрос прямо сейчас!</p>
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
      </Container>
    </section>
  );
}
