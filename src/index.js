import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { App } from "./Components/App/App";
import Favicon from "react-favicon";
import logo from "./Assets/images/taroLogo.jpg";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <Favicon url={logo} />
      <App />
    </>,
    rootElement
  );
} else {
  render(
    <>
      <Favicon url={logo} />
      <App />
    </>,
    rootElement
  );
}

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// import { hydrate, render } from "react-dom";

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }
