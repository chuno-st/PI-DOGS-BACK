const axios = require('axios');
// const Breed = require('../models/Breed');
const { Op, Breed, Temperament } = require('../db');

require('dotenv').config();
const {
    GET_BREEDS, APY_KEY
} = process.env;

const getById = async (req, res, next) => {
    const { id } = req.params
    try {
        // let breedById = (await axios(`${GET_BREEDS}`)).data.filter(id).map(e => ({ Imagen: e.image, Nombre: e.name, Temperamento: e.temperament, Altura: e.height , Peso: e.weight , Años: e.life_span}))
        let temperamentosDB = await Temperament.findAll({
            where: {
                id
            }
        })
        res.send(temperamentosDB)
        
    } catch (error) {
        next (error)
    }
}

const getBreeds = async (req, res, next) => {
    const { name } = req.query
    if (name) {
        try {
            let breed = (await axios(`${GET_BREEDS}search?q=${name}`)).data.map(e => ({ Nombre: e.name }))
            res.send(breed)
            console.log(breed)
        } catch (error) {
            next(error)
        }

    } else {
        try {
            let breeds = (await axios(`${GET_BREEDS}`)).data.map(e => ({ Imagen: e.image, Nombre: e.name, Temperamento: e.temperament, Peso: e.weight }))
            res.json(breeds)
        } catch (error) {
            next(error)
        }

    }
}



const createBreed = async (req, res) => {
    const { name, height_min, height_max, weight_min, weight_max, life_span } = req.body;
    if (!name || !height_min || !height_max || !weight_min || !weight_max) {
        return res.status(404).send('Falta completar campos obligatorios')
    }
    try {
        const newBreed = await Breed.create(req.body);
        res.status(201).json(newBreed);
    }
    catch (error) {
        res.status(404).send('Error en alguno de los datos provistos')
    }
}



module.exports = {
    getById,
    createBreed,
    getBreeds
}