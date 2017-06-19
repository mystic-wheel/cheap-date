// @flow
import type { $Place, $Specials } from './Types'
import React from 'react'

type $Props = {
  place: $Place,
  specials: $Specials,
}

const Place = ({ place: { cover, name, about, picture }, specials }: $Props) => (
  <div>
    <img src={cover.source} />
    <div>
      <img src={picture.data.url} />
      <div>
        <h1>{name}</h1>
        <h3>{about}</h3>
      </div>
    </div>
    <h2>Specials</h2>
    {specials.map(special => <div key={special.name}>{special.name}</div>)}
  </div>
)

export default Place
