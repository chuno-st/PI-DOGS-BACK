require('dotenv').config();
const { Temperament } = require('../db');
const axios = require('axios');
const { GET_BREEDS } = process.env;

// --------------- << CARGA INICIAL DE LA BASE DE DATOS >> ---------------

async function getAllTemperaments() {
    try {

        let temperamentsApi = (await axios(`${GET_BREEDS}`)).data.map(e => (e.temperament));
        console.log('-----------------------------------------------------------',temperamentsApi);

        let tempJoin = temperamentsApi.join()
        console.log('-----------------------------------------------------------',tempJoin)

        let tempSplit = tempJoin.split(/\s*,\s*/);
        console.log('-----------------------------------------------------------',tempSplit)

        let tempSet = Array.from(new Set(tempSplit))
        console.log('-----------------------------------------------------------',tempSet)

        let tempObj = {}
        Array.prototype.push.apply(tempObj, tempSet)
        delete tempObj.length
        console.log('-----------------------------------------------------------',tempObj)

        let tempEntries = Object.entries(tempObj);
        console.log('-----------------------------------------------------------',tempEntries)

        let allTemperaments = tempEntries.map(e => ({ ID: e[0], name: e[1] }))
        console.log('-----------------------------------------------------------',allTemperaments)

        await Temperament.bulkCreate(allTemperaments);
        console.log('Temperamentos cargados en DB correctamente')

    } catch (error) {
        console.log(error)
    }
};

// --------------- << GET - a '/temperaments' >> ---------------

async function getTemperamentsFromDB(req, res, next) {
    try {
        let dbTemperaments = await Temperament.findAll()
        let allTemperaments = dbTemperaments.map(e => ({ ID: e.ID, Nombre: e.name }))

        res.send(allTemperaments)
        console.log('--------allTemperaments--------', allTemperaments)
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllTemperaments,
    getTemperamentsFromDB
};
