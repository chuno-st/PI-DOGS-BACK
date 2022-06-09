import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPage, getBreedDetail, setFav } from "../../redux/actions/actions";

import s from '../BreedDetail/breedDetail.module.css'


function BreedDetail() {

    //necesitamos el id que nos llega por param
    const { id } = useParams()

    //necesitamos la action
    const dispatch = useDispatch()

    //necesitamos el estado global
    const breedDetail = useSelector(state => state.breedDetail)

    // const [favBreed, setFavBreed] = useState('')
    // const favBreeds = useSelector(state => state.favBreeds)

    // dispatch(setFav(favBreeds))
    function handleSubmit(e) {
        e.preventDefault()
        alert('Raza agregada a favoritos')
        dispatch(setFav(breedDetail))
        // favBreeds('')
    }


    //ejecutamos la action cuando se monta el componente
    useEffect(() => {
        dispatch(getBreedDetail(id)) // cuando se monta actualiza el componente

        return () => {
            dispatch(clearPage()) // todo lo que pase en el return es cuando se desmonta el componente
        }
    }, [dispatch, id])

    return (
        <>
            {
                breedDetail ?
                    <>
                        <div className={s.background} key={breedDetail.ID} >
                            <div className={s.box}>
                                <figure>
                                    <img src={breedDetail.Imagen} alt={breedDetail.Nombre} />
                                </figure>
                            </div>
                            <div className={s.box}>
                                <div>
                                    <h3>Raza: {breedDetail.Nombre}</h3>
                                    <p>Temperamento/s: {breedDetail.Temperamento}</p>
                                    <p>Altura: {breedDetail.Altura} cms</p>
                                    <p>Peso: {breedDetail.Peso} kgs</p>
                                    <p>Años: {breedDetail.Años}</p>
                                    <button onClick={handleSubmit}>AÑADIR A FAVORITOS</button>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    (<h1>Cargando raza...</h1>)
            }
        </>
    )
};

export default BreedDetail;