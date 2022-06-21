import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchBreed } from "../../redux/actions/actions";

import s from "../BreedFinder/breedFinder.module.css"

function BreedFinder() {

    const [search, setSearch] = useState('')
    const breed = useSelector(state => state.searchBreed)
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(searchBreed(search))
        setSearch('')
    }

    return (
        <div className={s.style}>
            <form onSubmit={handleSubmit}>
                <input className={s.input} type="text" placeholder="Nombre de la raza..." value={search} onChange={handleChange} />
                <button className={s.button} type="submit" disabled={!search ? true : false}>Buscar Raza</button>
            </form>
            {breed ? breed.map(e => (
                <div className={s.style2} key={e.ID}>
                    <Link to={`/dogs/${e.ID}`}><button className={s.links}>{e.Nombre}</button></Link>
                </div>
            )) : <div><h2>"La raza que intentas buscar no existe"</h2></div>}
            <br />
        </div>
    )
};

export default BreedFinder;