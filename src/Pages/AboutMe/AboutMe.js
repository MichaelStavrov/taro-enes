import { Container } from "../../Components/Container/Container";
import s from "./AboutMe.module.css";
import photo1 from "../../Assets/images/aboutMePhoto1.jpg";
import photo2 from "../../Assets/images/aboutMePhoto2.jpg";
import photo3 from "../../Assets/images/aboutMePhoto3.jpg";
import photo4 from "../../Assets/images/aboutMePhoto4.jpg";

export function AboutMe() {
  return (
    <section className={s.aboutMe}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.col}>
            <div className={s.imageWrapper}>
              <img className={s.img} src={photo2} alt="photo2" />
            </div>
            <div className={s.imageWrapper}>
              <img className={s.img} src={photo1} alt="photo1" />
            </div>
          </div>
          <div className={s.content}>
            <h3 className={s.title}>Обо мне</h3>
            <p className={s.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              molestias dolorum placeat beatae temporibus molestiae ducimus
              debitis dolorem accusantium quam omnis non modi rerum quis dolore
              alias deserunt sequi quo, iusto quod excepturi nisi. Veniam
              tempore quaerat praesentium maiores laudantium explicabo nostrum
              debitis quasi. Hic, quidem beatae impedit soluta neque vel optio
              nihil nisi officia maxime nobis nulla ea nam dolorem vero
              blanditiis? At, dolor quia. Eos minima optio id voluptatem nostrum
              recusandae, cum rerum aperiam reprehenderit eaque, deserunt nemo
              dolores quidem repudiandae blanditiis, accusantium voluptas?
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
              Voluptate saepe sequi numquam, inventore delectus voluptates omnis
              ab nam. Adipisci explicabo quasi incidunt quaerat omnis nesciunt
              labore, ipsa harum exercitationem perferendis! Nobis, fugiat minus
              incidunt explicabo aspernatur id harum, excepturi doloribus ut
              praesentium eos mollitia iste adipisci earum quod est, fugit
              libero esse nostrum. Excepturi, molestiae quisquam omnis
              praesentium error sit, non soluta nobis adipisci laborum nemo
              culpa magnam quos blanditiis sequi ducimus dolore necessitatibus
              labore quam accusamus autem? Molestias similique, at error quidem
              minus, autem ab amet, repellat eveniet alias labore accusantium
              aperiam vero perspiciatis maxime! Beatae non minima sunt,
              reiciendis autem ratione voluptatum ipsa magnam optio! Aliquam nam
              dignissimos maxime fugiat possimus. Possimus, ut. Quis facilis
              itaque fuga quam, cupiditate dolorem.
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
  );
}
