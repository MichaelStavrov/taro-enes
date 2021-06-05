import { useState } from "react";
import cn from "classnames";
import s from "./Header.module.css";
import iconLogo from "../../Assets/images/taroLogo.jpg";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

const sectionTitles = [
  { id: 1, name: "Главная", path: "" },
  { id: 2, name: "Обо мне", path: "about" },
  { id: 3, name: "Услуги", path: "services" },
  // { id: 4, name: "Цены", path: "prices" },
  { id: 5, name: "Контакты", path: "contacts" },
];

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  document.addEventListener("click", (e) => {
    setShowMenu(false);
  });

  function handleBtnMenuClick(e) {
    e.stopPropagation();
    setShowMenu(true);
  }

  return (
    <header className={s.header}>
      <Container>
        <div className={s.content}>
          <Link to="/" className={s.logo}>
            <div className={s.iconLogoWrapper}>
              <img className={s.iconLogo} src={iconLogo} alt="logo" />
            </div>
            <h1 className={s.titleLogo}>Таро Энес</h1>
          </Link>
          {showMenu && <div className={s.substrate} />}
          <button className={s.btnBurgerMenu} onClick={handleBtnMenuClick}>
            <span></span>
          </button>
          
          <nav
            className={cn(s.navigation, {
              [s.vidgetNav]: showMenu,
            })}
          >
          <button className={s.btnClose}></button>
            <ul className={s.listNav}>
              {sectionTitles.map(({ id, name, path }) => (
                <Link to={`/${path}`} className={s.itemNav} key={id}>
                  {name.toUpperCase()}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
