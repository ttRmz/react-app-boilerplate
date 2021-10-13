import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './i18n'
import './index.scss'
import * as serviceWorker from './serviceWorker'

global.APP_VERSION = process.env.REACT_APP_VERSION
global.APP_NAME = process.env.REACT_APP_NAME

const mountingPoint = document.getElementById(
  process.env.REACT_APP_MOUNTING_POINT_ID || 'root',
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
