// @flow
import React from 'react'

type $Root = {
  name: string,
}

const Root = ({ name }: $Root) => (
  <div>Howdy {name}</div>
)

export default Root
