import s from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../Header/Header";
import { MainPage } from "../../Pages/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { AboutMe } from "../../Pages/AboutMe/AboutMe";

export function App() {
  return (
    <div className={s.app}>
      <BrowserRouter>
        <Header />
        <main className={s.main}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutMe} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
