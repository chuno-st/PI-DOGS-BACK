require('dotenv').config();
const { Temperament } = require('../db')
const axios = require('axios');
const {
    API_KEY,
  } = process.env;


async function getAllTemperaments() {
    try {
        let temperaments = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data.map(e => ({ name: e.name }))
        await Temperament.bulkCreate(temperaments)
        console.log('Temperamentos cargados en DB correctamente')
    } catch (error) {
        console.log(error)
    }
}

function getTemperamentsFromDB(req, res, next) {
    Temperament.findAll()
        .then(temperaments => res.send(temperaments))
        .catch(e => next(e))
}

module.exports = {
    getAllTemperaments,
    getTemperamentsFromDB
}