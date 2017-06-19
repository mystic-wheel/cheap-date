// @flow
import React from 'react'
import PlaceContainer from './PlaceContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = () => (
  <Router>
    <Route path="/place/:id" component={PlaceContainer} />
  </Router>
)

export default Root
