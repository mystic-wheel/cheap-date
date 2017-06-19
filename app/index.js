// @flow
import loadFacebookThen from './facebook'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import Root from './Root'
import AppState from './AppState'
const state = new AppState()

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <Provider state={state}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

loadFacebookThen(() => {
  render(Root)
})

if (module.hot) {
  module.hot.accept('./Root.js', () => {
    const NextRoot = require('./Root').default
    render(NextRoot)
  })
}
