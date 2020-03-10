import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './index.scss'

global.APP_VERSION = process.env.REACT_APP_VERSION
global.APP_NAME = process.env.REACT_APP_NAME

const mountingPoint = document.getElementById(
  process.env.REACT_APP_MOUNTING_POINT_ID,
)

ReactDOM.render(<App />, mountingPoint)
