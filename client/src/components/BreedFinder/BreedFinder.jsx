import React from "react";

function BreedFinder() {

    const [data, setData] = React.useState({
        name: ''
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
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" onChange={handleChange} />
                <button type="submit">Buscar Raza</button>
            </form>
        </div>
    )
};

export default BreedFinder;