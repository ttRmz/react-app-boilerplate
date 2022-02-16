import "./index.scss"
import "./i18n"

import React from "react"
import ReactDOM from "react-dom"

import { App } from "./app"
import * as serviceWorker from "./serviceWorker"

const mountingPoint = document.getElementById(
  process.env.REACT_APP_MOUNTING_POINT_ID || "root",
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  mountingPoint,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
