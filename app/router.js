import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
// import { JobsController } from "./controllers/JobsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
  },
  {
    path: '#/houses',
    controller: HousesController,
    view: `
    
    <div class="container-fluid">
    <section class="row" id="houses-list">
    </section>
    </div>
    <div class="container-fluid">
        <!-- SECTION collapse form -->
        <section class="row ">
          <div class="col-12">

            <button onclick="" class="btn btn-primary" type="button"
              data-bs-toggle="collapse" data-bs-target="#houseFormCollapse" aria-expanded="false"
              aria-controls="collapseExample">
              List House 🚘
            </button>

            <!-- SECTION collapse starts here -->
            <div class="collapse" id="houseFormCollapse">
              <!-- STUB house form -->
              <form class="row p-2" onsubmit="app.HousesController.createHouse()">

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" id="houseBedrooms" name="bedrooms"
                    placeholder="House Bedrooms">
                  <label for="houseBedrooms">House Bedrooms</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" id="houseBathrooms" name="bathrooms" placeholder="House Bathrooms">
                  <label for="houseBathrooms">House Bathrooms</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" min="1950" id="houseYear" name="year"
                    placeholder="House Year">
                  <label for="houseYear">House Year</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" max="10000000" id="housePrice" name="price"
                    placeholder="House Price">
                  <label for="carPrice">House Price</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" max="10000000" id="houseLevels" name="levels"
                    placeholder="House Levels">
                  <label for="houseLevels">House Levels</label>
                </div>


                <div class="form-floating mb-3 col-12">
                  <input required type="text" class="form-control" id="houseimgUrl" name="imgUrl"
                    placeholder="House imgUrl">
                  <label for="houseimgUrl">House Image Url</label>
                </div>

                <div class="form-floating">
                  <textarea required maxLength="144" class="form-control" placeholder="Please describe your house"
                    name="description" id="houseDescription" style="height: 100px"></textarea>
                  <label for="houseDescription">House Description</label>
                </div>

               
                <div class="text-end">
                  <button type="submit" class="btn btn-info">Create Listing</button>

                </div>
              </form>
            </div>

          </div>
        </section> 
    `
  }
]
//
//   {
//     path: '#/jobs',
//     controller: JobsController,
//     view: `<div class="container-fluid">
//     <section class="row" id="jobs-list">
//     </section>
//     </div>`
//   }
// ]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */