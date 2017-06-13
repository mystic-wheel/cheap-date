// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component name="Mike" />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./root.js', () => {
    const NextRoot = require('./root').default
    render(NextRoot)
  })
}
