import s from "./Contacts.module.css";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import "yup-phone";
import { Container } from "../../Components/Container/Container";
import iconInstagram from "../../Assets/images/instagram.svg";
import { Helmet } from "react-helmet";
// import { InputText } from "../../Components/InputText/InputText";
// import { InputPhone } from "../../Components/InputPhone/InputPhone";
// import { InputSelect } from "../../Components/InputSelect/InputSelect";
// import { TextArea } from "../../Components/TextArea/TextArea";

export function Contacts() {
  // const initialValues = {
  //   firstName: "",
  //   email: "",
  //   service: "",
  //   question: "",
  //   file: "",
  //   // phone: "+7 (",
  //   // lastName: "",
  //   // email: "",
  //   // acceptedTerms: false, // added for our checkbox
  //   // jobType: "", // added for our select
  // };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Задайте первый бесплатный вопрос картам таро прямо сейчас"
        />
        <meta
          name="keywords"
          content="заказать расклад таро онлайн, услуги таролога онлайн, гадания недорого онлайн, точные расклады таро онлайн"
        />
        <title>Закажите расклад таро онлайн</title>
      </Helmet>
      <section className={s.contacts}>
        <Container>
          <div className={s.wrapper}>
            <h1 style={{ display: "none" }}>Заказать гадание</h1>
            <p className={s.mainText}>
              <span className={s.freeQuestion}>
                Мы с вами немного познакомились, и я хочу сделать вам подарок!
                <br />
                Первый вопрос для вас совершенно бесплатный.
              </span>
            </p>
            <h2 className={s.listTitle}>Как правильно задать вопрос?</h2>
            <ol className={s.list}>
              <li className={s.item}>Указать имя, дату рождения</li>
              <li className={s.item}>Приложить ваше фото</li>
              <li className={s.item}>Сформулировать запрос максимально емко</li>
              <li className={s.item}>
                Задать временной отрезок (неделя, месяц, год)
              </li>
            </ol>
            <p className={s.mainText}>
              Желательно задавать открытые вопросы, так вы получите больше
              информации от карт.
            </p>
            <h3>Не знаете, как сформулировать вопрос для Таро?</h3>
            <p className={s.mainText}>
              Напишите мне по указанным контактам, и мы вместе найдем верное
              оформление для вашего запроса.
              <br />
              Используйте мудрость Таро во благо!
            </p>
            <div className={s.connection}>
              <div className={s.container}>
                <p className={s.row}>Задайте вопрос прямо сейчас</p>
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
              <p className={s.or}>ИЛИ</p>
              <div className={s.container}>
                <p className={s.row}>Пришлите свой вопрос мне на почту</p>
                <p className={s.email}>TaroEnesHappy@gmail.ru</p>
              </div>
            </div>
            {/* <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(24, "Не более 24 символов!")
                .required("Обязательно для заполнения"),
              email: Yup.string()
                .email("Неверный формат email")
                .required("Обязательно для заполнения"),
              service: Yup.string()
                .oneOf(["1-question", "3-questions", "full"])
                .required("Выберите один из вариантов"),
              question: Yup.string().required("Обязательно для заполнения"),
              // phone: Yup.string().phone().required("Required"),
              // lastName: Yup.string()
              //   .max(20, "Must be 20 characters or less")
              //   .required("Required"),
              // acceptedTerms: Yup.boolean()
              //   .required("Required")
              //   .oneOf([true], "You must accept the terms and conditions."),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                console.log(values)
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm(initialValues);
              }, 400);
            }}
          > */}
            {/* <Form className={s.form}>
              <div className={s.field}>
                <InputText
                  style={{
                    borderRadius: "5px",
                    width: "240px",
                    height: "40px",
                  }}
                  name="firstName"
                  type="text"
                  autoFocus="autoFocus"
                  placeholder="Ваше имя *"
                />
              </div>
              <div className={s.field}>
                <InputText
                  style={{
                    borderRadius: "5px",
                    width: "240px",
                    height: "40px",
                  }}
                  name="email"
                  type="text"
                  placeholder="Ваш email *"
                />
              </div>
              <div className={s.field}>
                <InputSelect
                  style={{
                    borderRadius: "5px",
                    width: "240px",
                    height: "40px",
                  }}
                  label="Выберите гадание"
                  name="service"
                >
                  <option className={s.option} value="">
                    Выберите из списка
                  </option>
                  <option className={s.option} value="1-question">
                    1 вопрос - 1000&#8381;
                  </option>
                  <option className={s.option} value="3-questions">
                    3 вопроса - 2000&#8381;
                  </option>
                  <option className={s.option} value="full">
                    Расклад - 3000&#8381;
                  </option>
                </InputSelect>
              </div>
              <div className={s.field}>
                <TextArea
                  name="question"
                  type="text"
                  placeholder="Задайте свой вопрос"
                />
              </div>
              <button className={s.btnInstagram} type="submit">
                Отправить
              </button>
            </Form>
          </Formik> */}
          </div>
        </Container>
      </section>
    </>
  );
}
