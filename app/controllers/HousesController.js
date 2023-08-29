import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
  let template = ``
  AppState.houses.forEach(h => template += h.houseTemplate)
  setHTML('houses-list', template)
}


export class HousesController {
  constructor() {
    console.log('connected to the House Controller')
    this.getHouses()
    AppState.on('houses', _drawHouses)
    AppState.on('account', _drawHouses)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async createHouse() {
    // debugger
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log('creating House')
      await housesService.createHouse(formData)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async deleteHouse(houseId) {
    try {
      housesService.deleteHouse(houseId)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async editHouse(houseId, formData) {
    this.drawEditForm()
    try {
      console.log('editing house', houseId)
      await housesService.editHouse(houseId, formData)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  drawEditForm() {
    let template = AppState.activeHouse.EditHouseForm
    setHTML('houses-list', template)

  }

  setActiveHouse(houseId) {
    console.log('Setting the active House:', houseId)
    housesService.setActiveHouse(houseId)
  }
}