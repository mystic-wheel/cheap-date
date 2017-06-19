// @flow
import React from 'react'
import Place from './Place'
import { observer, inject } from 'mobx-react'
import AppState from './AppState'

type $Props = {
  state: AppState,
  match: {
    params: {
      id: string,
    },
  },
}

@inject('state') @observer
class PlaceContainer extends React.Component {
  props: $Props
  
  componentDidMount = () => {
    this.props.state.getPlace(this.props.match.params.id)
    this.props.state.getSpecials(this.props.match.params.id)
  }
  
  render = () => (
    this.props.state.place !== null && this.props.state.specials !== null
      ? <Place place={this.props.state.place} specials={this.props.state.specials} />  
      : <div>Loading</div>
  )
}

export default PlaceContainer
