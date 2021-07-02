import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

const render = (RootComponent: any) =>
  ReactDOM.render(React.createElement(RootComponent), document.getElementById('app-root'))

render(Root)
