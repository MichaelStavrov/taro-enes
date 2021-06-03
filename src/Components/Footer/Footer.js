import s from "./Footer.module.css";
import { Container } from "../Container/Container";

export function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.content}>
          <small>Copyright © 2017-2021 Taro-NS.ru, LLC</small>
        </div>
      </Container>
    </footer>
  );
}
