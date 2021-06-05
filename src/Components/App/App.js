import s from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../Header/Header";
import { MainPage } from "../../Pages/MainPage/MainPage";
import { Footer } from "../Footer/Footer";
import { AboutMe } from "../../Pages/AboutMe/AboutMe";
import { Services } from "../../Pages/Services/Services";
import { Contacts } from "../../Pages/Contacts/Contacts";

export function App() {
  return (
    <div className={s.app}>
      <BrowserRouter>
        <Header />
        <main className={s.main}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
