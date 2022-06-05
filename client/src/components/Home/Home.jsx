import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, setFav } from "../../redux/actions/actions";
import { Link } from "react-router-dom";


function Home() {
    const dispatch = useDispatch()
    const breeds = useSelector(state => state.breeds)

    useEffect(() => {
        dispatch(getBreeds())
    }, [dispatch])

    return (
        <div>
            {
                breeds && breeds.map(e => {
                    return (
                        <div key={e.Imagen.id} >
                            {/* <img src={e.Imagen.url} alt={e.Nombre} /> */}
                            <h3>Raza:
                                <Link to={`/dogs/${e.ID}`}>{e.Nombre}</Link>
                            </h3>
                            <h4>Temperamento/s:  {e.Temperamento}</h4>
                            <h4>Peso:  {e.Peso.metric} kilos</h4>
                            <button onClick={() => setFav(e)}>AGREGAR A RAZAS FAVORITAS</button>

                        </div>
                    )
                })
            }
        </div>
    )
};

export default Home;