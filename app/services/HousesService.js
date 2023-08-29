import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"

// const _sandboxApi = axios.create({
//   baseURL: "https://sandbox.codeworksacademy.com",
//   timeout: 8000
// })

class HousesService {
  constructor() {

  }

  async getHouses() {
    const response = await api.get(`api/houses`)
    const importedHouses = response.data.map(dataObject => new House(dataObject))
    console.log('Grabbing the Houses', response.data, importedHouses)
    AppState.houses = importedHouses
  }

  async createHouse(formData) {
    const res = await api.post(`api/houses`, formData)
    console.log(res.data)
    const newHouse = new House(res.data)
    AppState.houses.push(newHouse)
    AppState.emit('houses')
  }

  async deleteHouse(houseId) {
    if (await Pop.confirm('Are you sure you want to delete the house?')) {
      await api.delete(`api/houses/${houseId}`)
      const newHouses = AppState.houses.filter(h => h.id != houseId)
      AppState.houses = newHouses
      console.log('house deleted')
    } else {
      return console.log('failed')
    }
  }

  async editHouse(houseId, formData) {
    const res = await api.put(`api/houses/${houseId}`, formData)
    console.log(res.data, 'Editing the House')

    const updatedHouse = new House(res.data)
    let originalHouseIndex = AppState.houses.findIndex(h => h.id == houseId)
    AppState.houses.splice(originalHouseIndex, 1, updatedHouse)
    AppState.emit('houses')
  }

  setActiveHouse(houseId) {
    AppState.activeHouse = AppState.houses.find(h => h.id == houseId)
    console.log(AppState.activeHouse)
  }
}

export const housesService = new HousesService