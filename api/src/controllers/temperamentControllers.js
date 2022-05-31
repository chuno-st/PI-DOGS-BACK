require('dotenv').config();
const { Temperament } = require('../db')
const axios = require('axios');
const {
    API_KEY, GET_BREEDS,
} = process.env;


async function getAllTemperaments() {
    try {
        let temperaments = (await axios(`${GET_BREEDS}`)).data.map(e => ({ id: e.id, name: e.temperament }));
        temperaments.forEach(element => {(element.name?.split(/\s*;\s*/))});
        // temperaments.forEach(element => {(element.id  )});
        
        // temperaments.forEach(element => {(Object.create =)})
        

        console.log(temperaments);
        await Temperament.bulkCreate(temperaments)
        console.log('Temperamentos cargados en DB correctamente')
    } catch (error) {
        console.log(error);
    }
}

// async function getTemperamentsFromDB(req, res, next) {
//     let allTemperaments = await Temperament.findAll()
//     res.send(allTemperaments)

// }

function getTemperamentsFromDB(req, res, next) {
    Temperament.findAll()
        .then(temperaments => res.send(temperaments))
        .catch(e => next(e))
}

module.exports = {
    getAllTemperaments,
    getTemperamentsFromDB
}