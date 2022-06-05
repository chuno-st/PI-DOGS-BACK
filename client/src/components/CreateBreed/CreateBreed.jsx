import React from "react";

function CreateBreed() {

    const [data, setData] = React.useState({

        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span_min: '',
        life_span_max: ''
    })

    function handleChange(e) {
        // console.log(e.target.name)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        alert(data.name, data.height_min)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Nombre/Raza <input type="text" name="name" onChange={handleChange} /></label>
                <br />
                <label>Altura (mín) <input type="text" name="height_min" onChange={handleChange} /></label>
                <br />
                <label>Altura (máx) <input type="text" name="height_max" onChange={handleChange} /></label>
                <br />
                <label>Peso (mín) <input type="text" name="weight_min" onChange={handleChange} /></label>
                <br />
                <label>Peso (máx) <input type="text" name="weight_max" onChange={handleChange} /></label>
                <br />
                <label>Años (mín) <input type="text" name="life_span_min" onChange={handleChange} /></label>
                <br />
                <label>Años (máx) <input type="text" name="life_span_max" onChange={handleChange} /></label>
                <br />
                <button type="submit">Crear Raza</button>
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