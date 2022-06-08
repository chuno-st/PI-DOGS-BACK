import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delFav } from '../../redux/actions/actions'

import s from '../Favorites/favorites.module.css'

function Favorites({ favBreed, delFav }) {
    return (
        <div className={s.style}>
            {favBreed.length > 0 ?
                <>
                    <h2>Razas favoritas</h2>
                    <span>
                        {favBreed.map(e => (
                            <h3 key={e.ID}>
                                <Link to={`/dogs/${e.ID}`}>
                                    <p>{e.Nombre}</p>
                                </Link>
                                <button onClick={() => delFav(e)}>ELIMINAR DE FAVORITOS</button>
                            </h3>
                        ))}
                    </span>
                </>
                : 
                <h2>Aún no tienes razas favoritas</h2>
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        favBreed: state.favBreeds
    }

};

export default connect(mapStateToProps, { delFav })(Favorites);

// - - - - - - - COMPONENTE CON CONNECT  - - - - -//