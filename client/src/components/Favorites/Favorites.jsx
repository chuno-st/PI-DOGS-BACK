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
                    <>
                        {favBreed.map(e => (
                            <div className={s.style2}>
                                <h3 key={e.ID}>
                                    <Link to={`/dogs/${e.ID}`}>
                                        <button className={s.button}>{e.Nombre}</button>
                                    </Link>
                                </h3>
                                <button className={s.button} onClick={() => delFav(e)}>X</button>
                            </div>
                        ))}
                    </>
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