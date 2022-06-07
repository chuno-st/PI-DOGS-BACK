import React, { useState } from "react";
import { createBreed } from "../../redux/actions/actions";

function CreateBreed() {

    const [state, setState] = useState({

        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span_min: '',
        life_span_max: '',
        errors: {
            name: '',
            height_min: '',
            height_max: '',
            weight_min: '',
            weight_max: '',
            life_span_min: '',
            life_span_max: '',
        },
        disabled: true
    })

    const modeloTemperamentos = { nombre: '' }; // Creamos un modelo de Temperamentos para poder usar este objeto para agregar al state cada vez que agregamos un temperamento
    const [temperamentos, setTemperamentos] = useState([
        { ...modeloTemperamentos },
    ]);

    const [temperament, setTemperament] = useState({ nombre: '' })

    const agregaTemperamentos = () => {
        setTemperamentos([...temperamentos, { ...modeloTemperamentos }]); // Hacemos una copia del state que teniamos y agregamos un objeto nuevo al state.
    };

    function handleTemperamentChange(e) {
        setTemperament({ ...temperament, [e.target.name]: e.target.value })
    }

    function handleTemperamentosChange(e) {
        const temperamentos = [...temperament];
        temperamentos[e.target.id][e.target.dataset.name] = e.target.value;
        setTemperamentos(temperamentos)
    }


    function handleChange(e) {
        // console.log(e.target.name)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        const { value, name } = e.target;
        let errors = state.errors;

        switch (name) {
            case 'name':
                let nombrePattern = /\S+@\S+\.\S+/;
                errors.name = !nombrePattern.test(value) ? 'El dato no debe contener números ni caractéres especiales' : '';
                break;
            case 'height_min':
                errors.height_min = value <= 0 ? 'El dato debe ser un número mayor a cero' : '';
                break;
            case 'height_max':
                errors.height_max = value <= 0 ? 'El dato debe ser un número mayor a cero' : value > state.height_min ? '' : 'La altura máxima debe ser mayor a la altura mínima';
                break;
            case 'weight_min':
                errors.weight_min = value <= 0 ? 'El dato debe ser un número mayor a cero' : '';
                break;
            case 'weight_max':
                errors.weight_max = value <= 0 ? 'El dato debe ser un número mayor a cero' : value > state.weight_min ? '' : 'El peso máximo debe ser mayor al peso mínimo';
                break;
            case 'life_span_min':
                errors.life_span_min = value <= 0 ? 'El dato debe ser un número mayor a cero' : '';
                break;
            case 'life_span_max':
                errors.life_span_max = value <= 0 ? 'El dato debe ser un número mayor a cero' : value > state.life_span_min ? '' : 'La esperanza de vida máxima debe ser mayor a la esperanza de vida mínima';
                break;
            default:
                break;
        }

    }

    function handleOnSubmit(e) {
        // e.preventDefault()
        // alert('Raza creada con exito')
        (createBreed())
        setState('')
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>{!state.name ? null : <h3>{'Nombre de la raza'}</h3>}<input type="text" name="name" value={state.name} onChange={handleChange} placeholder='Nombre de la raza' required /></label>
                {!state.errors.name ? null : <h5>{state.errors.name}</h5>}
                <br />
                <label>{!state.height_min ? null : <h4>{'Altura mínima (cm)'}</h4>}<input type="number" name="height_min" value={state.height_min} onChange={handleChange} placeholder='Altura mínima (centímetros)' required /></label>
                {!state.errors.height_min ? null : <h5>{state.errors.height_min}</h5>}
                <br />
                <label>{!state.height_max ? null : <h4>{'Altura máxima (cm)'}</h4>}<input type="number" name="height_max" value={state.height_max} onChange={handleChange} placeholder='Altura máxima (centímetros)' required /></label>
                {!state.errors.height_max ? null : <h5>{state.errors.height_max}</h5>}
                <br />
                <input type="number" name="weight_min" value={state.weight_min} onChange={handleChange} placeholder='Peso mínimo (kilogramos)' required />
                {!state.errors.weight_min ? null : <h5>{state.errors.weight_min}</h5>}
                <br />
                <input type="number" name="weight_max" value={state.weight_max} onChange={handleChange} placeholder='Peso máximo (kilogramos)' required />
                {!state.errors.weight_max ? null : <h5>{state.errors.weight_max}</h5>}
                <br />
                <input type="number" name="life_span_min" value={state.life_span_min} onChange={handleChange} placeholder='Esperanza de vida mínima (años)' />
                {!state.errors.life_span_min ? null : <h5>{state.errors.life_span_min}</h5>}
                <br />
                <input type="number" name="life_span_max" value={state.life_span_max} onChange={handleChange} placeholder='Esperanza de vida máxima (años)' />
                {!state.errors.life_span_max ? null : <h5>{state.errors.life_span_max}</h5>}
                <br />
                <input type="text" name="nombre" value={temperament.value} onChange={handleTemperamentChange} />
                <br />
                <input type="button" value="Agregar un temperamento" onClick={agregaTemperamentos} />
                {
                    temperamentos.map((e, i) => (
                        <div key={`temperamento-${i}`}>
                            <input
                                type="text"
                                name={`nombre-${i}`}
                                id={i}
                                data-name="nombre"
                                value={e.nombre}
                                placeholder={`Temperamento #${i + 1}`}
                                onChange={handleTemperamentosChange} // agregamos el metodo a cada imput que generamos
                            />
                        </div>
                    ))
                }
                <button type="submit" disabled={!state.errors ? true : false}>Crear Raza</button>
            </form>
        </div>
    )
};

export default CreateBreed;

// name: { },
// height_min: { },
// height_max: { },
// weight_min: { },
// weight_max: { },
// life_span_min: { },
// life_span_max: { }