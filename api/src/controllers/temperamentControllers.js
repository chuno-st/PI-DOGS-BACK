require('dotenv').config();
const { Temperament } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');
const { GET_BREEDS } = process.env;

// --------------- << CARGA INICIAL DE LA BASE DE DATOS >> ---------------

async function getAllTemperaments() {
    try {

        let temperamentsApi = (await axios(`${GET_BREEDS}`)).data.map(e => (e.temperament));
        // console.log('-----------------------------------------------------------',temperamentssss);

        let tempJoin = temperamentsApi.join()
        // console.log('-----------------------------------------------------------',temp)

        let tempSplit = tempJoin.split(/\s*,\s*/);
        // console.log('-----------------------------------------------------------',tempSplit)

        let tempSet = Array.from(new Set(tempSplit))
        // console.log('-----------------------------------------------------------',tempE)

        let tempObj = {}
        Array.prototype.push.apply(tempObj, tempSet)
        delete tempObj.length
        // console.log('-----------------------------------------------------------',temper)

        let tempEntries = Object.entries(tempObj);
        // console.log('-----------------------------------------------------------',temperrrr)

        let allTemperaments = tempEntries.map(e => ({ id: e[0], name: e[1] }))
        // console.log('-----------------------------------------------------------',allTemperaments)

        await Temperament.bulkCreate(allTemperaments);
        console.log('Temperamentos cargados en DB correctamente')

    } catch (error) {
        console.log(error)
    }
};

// async function getTemperamentsFromDB(req, res, next) {
//     // let temperaments = await Temperament.findAll()
//     //     let allTemperaments = await Temperament.findAll()
//     let temperaments = await Temperament.findAll({

//         where: Temperament.sequelize.literal(`SELECT id, unnest(string_to_array(name, ', ')) AS name FROM temperaments`)

//     })
//     res.send(temperaments)

// }

// --------------- << GET - a '/temperaments' >> ---------------

function getTemperamentsFromDB(req, res, next) {
    Temperament.findAll()
        .then(temperaments => res.send(temperaments))
        .catch(e => next(e))
}

module.exports = {
    getAllTemperaments,
    getTemperamentsFromDB
}