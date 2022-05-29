const axios = require('axios')
require('dotenv').config();
const {
    GET_BREEDS,
  } = process.env;


async function getAllBreeds(req, res, next) {
    try {
        let breeds = (await axios(`${GET_BREEDS}`)).data.results
        res.send(breeds)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllBreeds
}