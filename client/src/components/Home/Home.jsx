import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

import s from "../Home/home.module.css";


function Home() {
    const dispatch = useDispatch()
    const breeds = useSelector(state => state.breeds)

    useEffect(() => {
        dispatch(getBreeds())
    }, [dispatch])

    return (
        <div>
            <h1>Conocé todas las razas del mundo acá</h1>
            <div className={s.background} >
                {
                    breeds && breeds.map(e => {
                        return (
                            <div key={e.Imagen.id} className={s.box}>
                                <div className={s.box} ><Link to={`/dogs/${e.ID}`}>
                                    <div className={s.divimagen}>
                                        <img src={e.Imagen.url} alt={e.Nombre} className={s.desvanecer} />
                                        <div className={s.box}>
                                            <h3 >Raza:  {e.Nombre}</h3>
                                            <h4 >Temperamento/s:  {e.Temperamento}</h4>
                                            <h4 >Peso:  {e.Peso.metric} kilos</h4>

                                        </div>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Home;