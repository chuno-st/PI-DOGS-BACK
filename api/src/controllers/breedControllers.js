const axios = require('axios');
const { Breed } = require('../db');

require('dotenv').config();
const { GET_BREEDS } = process.env;

// --------------- << GET - a '/dogs/:{idRaza}' >> ---------------

const getById = async (req, res, next) => {
    const { id } = req.params
    try {
        let breedById = (await axios(`${GET_BREEDS}`)).data.map(e => ({ ID: e.id, Imagen: e.image.url, Nombre: e.name, Temperamento: e.temperament, Altura: e.height.metric, Peso: e.weight.metric, Años: e.life_span }));
        // console.log('-------breeById-------', breedById)

        let idBreed = breedById.filter((obj) => { if (obj.ID == id) return true });
        // console.log('-------idBreed-------', idBreed)

        let idDbBreeds = await Breed.findAll()
        let idDbBreed = idDbBreeds.map(e => ({ ID: e.id, Imagen: e.image, Nombre: e.name, Temperamento: e.temperament, Altura: e.height, Peso: e.weight, Años: e.life_span }));
        console.log('--------idDbBreeds--------', idDbBreed)

        
        
        let breedByIdDb = idDbBreed.filter((obj) => { if (obj.ID == id) return true });
        // console.log('--------breedByIdDb--------', breedByIdDb)

        let IDBreed = idBreed.concat(breedByIdDb);

        let BreedId = IDBreed[0]
        console.log('--------breedByIdDb--------', Breed)

        if (IDBreed.length === 0) { res.json({ msg: "No existe raza para el Id ingresado" }) }

        res.json(BreedId)

    } catch (error) {
        next(error)
    }
};

// --------------- << GET - a '/dogs?name="...":' >> ---------------

const getBreeds = async (req, res, next) => {
    const { name } = req.query

    if (!name) {
        try {
            let breeds = (await axios(`${GET_BREEDS}`)).data.map(e => ({ ID: e.id, Imagen: e.image, Nombre: e.name, Temperamento: e.temperament, Peso: e.weight }))

            res.json(breeds)
        } catch (error) {
            next(error)
        }
    } else {
        try {
            let apiBreeds = (await axios(`${GET_BREEDS}search?q=${name}`)).data.map(e => ({ ID: e.id, Nombre: e.name }));

            let nameApiBreed = apiBreeds.filter(b => (b.Nombre.toLowerCase().includes(name.toLowerCase())));

            let dbBreeds = await Breed.findAll()
            let dbBreed = dbBreeds.map(e => ({ ID: e.id, Nombre: e.name }));
            // console.log('--------dbBreeds--------', dbBreed)

            let nameDbBreed = dbBreed.filter(b => (b.Nombre.toLowerCase().includes(name.toLowerCase())));
            // console.log('--------nameDbBreeds--------', nameDbBreed)

            let nameBreed = [...nameApiBreed,...nameDbBreed];

            // if (nameBreed.length === 0) { res.status(404).send("La raza que intentas buscar no existe") }

            res.json(nameBreed)
            console.log('--------nameBreed--------', nameBreed)
        } catch (error) {
            if (error.response.status === 404) {
                res.send({ message: "La raza que intentas buscar no existe" })
            } else {
                next(error)
            }
        }
    }
};

// --------------- << POST - a '/dog' >> ---------------

const createBreed = async (req, res) => {
    const { name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, temperaments } = req.body;
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
};

module.exports = {
    getById,
    createBreed,
    getBreeds
};
