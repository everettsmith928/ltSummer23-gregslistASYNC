import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get houseTemplate() {
    return `<div class="col-6 elevation-3" onclick="app.HousesController.setActiveHouse('${this.id}')">
    <h1></h1>
    <h1> ${this.price}</h1>
    <img src="" class="img-fluid">
    <p>${this.description}</p>
    ${this.computeButtons}
    </div>
    `
  }

  get EditHouseForm() {
    return `Testing`
  }

  get computeButtons() {
    console.log('Computing buttons')
    if (AppState.account == null || AppState.account.id != this.creatorId) return ''
    return `<button onclick="app.HousesController.deleteHouse('${this.id}')">Delete House</button>
    <button onclick="app.HousesController.drawEditForm()">Edit House</button>`
  }
}