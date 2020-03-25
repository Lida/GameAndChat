import * as React from "react";
import { render } from "react-dom";

import App from "./App";

import convert from "xml-js";

// const fn = async ({ signal }) => {
//   await fetch("Pandemic/buildFile");
// };

// fn();

// .then(response => {
//   response.text().then(text => {
//     window.Game = convert.xml2js(text, {
//       compact: true,
//       elementNameFn: function(val) {
//         return val.split(".").pop();
//       }
//     });
//   });
// });
// fetch("./buildFile").then(response => {
//   window.GameFile = convert.xml2js(response.body, { compact: true });
// });

const rootElement = document.getElementById("root");
render(<App />, rootElement);
