import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, getTemperament, filterByTemperament, filterByCreated, orderByName, orderByWeight } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

import s from "../Home/home.module.css";


function Home() {

    const dispatch = useDispatch()
    const breeds = useSelector(state => state.breeds)
    const allTemperaments = useSelector(state => state.temperaments)

    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [breedsPerPage, setBreedsPerPage] = useState(8)
    const indexOfLastBreed = currentPage * breedsPerPage
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage
    const currentBreeds = breeds.slice(indexOfFirstBreed, indexOfLastBreed)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(breeds.length / breedsPerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        dispatch(getBreeds())
    }, [dispatch])

    useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

    function handleFilterTemperament(e) {
        dispatch(filterByTemperament(e.target.value))
    }

    function handleFilterCreated(e) {
        dispatch(filterByCreated(e.target.value))
    }

    function handleOrderByName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleOrderByWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <h1>Conocé todas las razas del mundo acá</h1>
            <div >
                <label> Filtrar razas por:
                    <select onChange={e => handleFilterTemperament(e)}>
                        {allTemperaments && allTemperaments.map(e => {
                            return (
                                <option key={e.ID} value={e.Nombre}> {e.Nombre} </option>
                            )
                        })}
                    </select>
                </label>
                <label>
                    <select onChange={e => handleFilterCreated(e)}>
                        <option value="all">Todas</option>
                        <option value="api">Existentes</option>
                        <option value="bd">Creadas</option>
                    </select>
                </label>
            </div>
            <div>
                <label> Ordenar razas por:
                    <select onChange={e => handleOrderByName(e)}>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </label>
                <label>
                    <select onChange={e => handleOrderByWeight(e)}>
                        <option value="mayor">Mayor peso</option>
                        <option value="menor">Menor peso</option>
                    </select>
                </label>
            </div>
            <div className={s.background} >
                {
                    currentBreeds && currentBreeds.map(e => {
                        return (
                            <div key={e.ID}>
                                <div className={s.box} ><Link to={`/dogs/${e.ID}`}>
                                    <figure>
                                        <img src={e.Imagen.url } alt={e.Nombre} />
                                        <div className={s.capa}>
                                            <h3 >Raza:  {e.Nombre}</h3>
                                            <p >Temperamento/s:  {e.Temperamento}</p>
                                            <p >Peso:  {e.Peso} kilos</p>
                                        </div>
                                    </figure>
                                </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <ul>
                    {pageNumbers && pageNumbers.map(n => {
                        return (
                            <button className={s.link} onClick={() => paginated(n)}>{n}</button>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Home;