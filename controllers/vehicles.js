const vehicles = require('../data/vehicles');

const list = (req, res) => {
  console.log("Inside my GET /vehicles route");
  res.json(vehicles)
};

const show = (req, res) => {
  console.log("Inside my GET /vehicles route");
  let id = req.params.id;
  let foundVehicle = vehicles.find(vehicle => vehicle._id == id);
  if(!foundVehicle){
    res.status(400).json({ msg: `No vehicle by the id of: ${id}`})
  }
  res.json(foundVehicle)
};

const create = (req, res) => {
  console.log("inside POST /vehicles route");
  let counter = vehicles.length + 1;

  let newVehicle = {
    _id: counter,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
  }

  vehicles.push(newVehicle);
  counter++;
  res.json({ msg: `Vehicle Added`, newVehicle})
};

module.exports = { list, show, create }


// const {vehicles} = require('../data/vehicles')

// const list = (req, res) => {
//     // res.json(vehicles)
//     res.json(vehicles)
// }

// const show = (req, res) => {
//     // .some HOF will return a true or false based on the condition put in. here we are asking does a vehicle id # equal the requested vehicle id. If true, send that vehicle. If false, send the error message
//     const found = vehicles.some(vehicles=> vehicles._id === parseInt(req.params._id));
//     if(found) {
//         res.json(vehicles.filter(vehicles => vehicles._id === parseInt(req.params._id)));
//     }
//     else{
//     // postman will return a 200 (request went through) status, but we want to return a 400 'bad request' b/c the vehicle id wasn't found
//         res.status(400).json({ msg: `No vehicle with the id of ${req.params._id} found`})
//     }
// }

// const create = (req, res) => {
//     let counter = vehicles.length+1; 

//     const newVehicle ={
//         _id: counter,
//         imgUrl: req.body.imgUrl,
//         year: req.body.year,
//         make: req.body.make,
//         model: req.body.model,
//         price: req.body.price,
//         km: req.body.km,
//         miles: req.body.miles,
//         fuel: req.body.fuel,
//         city: req.body.city,
//         isNew: req.body.isNew
//     }
//         vehicles.push(newVehicle);
//         counter++;
//     res.json({msg: `vehicle added, newVehicle`})
// };


// module.exports = { list, show, create }

