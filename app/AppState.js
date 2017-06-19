// @flow
import type { $Place, $Specials } from './Types'
import { observable } from 'mobx'

class AppState {
  @observable place: $Place | null = null
  @observable specials: $Specials | null = null
  
  getPlace = (id: string) => {
    window.FB.api(
      `/${id}`,
      'GET', {
        access_token: '1986387731598775|lBSW_LmNFBZrKVjRzl7oyDr-Gvs',
        fields: 'name,about,hours,location,cover,picture'
      },
      (place: $Place) => {
        this.place = place
      }
    )
  }
  
  getSpecials = (id: string) => {
    setTimeout(() => {
      this.specials = [
        {name: 'Happy Hour'},
        {name: 'Lotsa Wings'},
        {name: 'Figwidgets'},
        {name: 'Nasty Bites'},
        {name: 'Tasticular Cancer'}
      ]
    }, 200)
  }
}

export default AppState
