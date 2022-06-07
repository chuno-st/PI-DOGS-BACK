import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchBreed } from "../../redux/actions/actions";

function BreedFinder() {

    const [search, setSearch] = useState('')
    const breed = useSelector(state => state.searchBreed)
    const dispatch = useDispatch()

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(searchBreed(search))
        setSearch('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={handleChange} />
                <button type="submit" disabled={!search ? true : false}>Buscar Raza</button>
            </form>
            {breed ? breed.map(e => (<div key={e.ID}><Link to={`/dogs/${e.ID}`}> <p>{e.Nombre}</p></Link></div>)) : <div><h2>"La raza que intentas buscar no existe"</h2></div>}
            <hr />
        </div>
    )
};

export default BreedFinder;