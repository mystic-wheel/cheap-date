// @flow

export type $Place = {
  name: string,
  about: string,
  hours: Object,
  id: string,
  location: Object,
  cover: {
    source: string,
    offset_x: number,
    offset_y: number,
  },
  picture: {
    data: {
      is_silhouette: boolean,
      url: string,
    },
  },
}

export type $Special = {
  name: string,
}

export type $Specials = Array<$Special>
