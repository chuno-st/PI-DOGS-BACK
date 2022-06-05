import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delFav } from '../../redux/actions/actions'

function Favorites({ favBreed, delFav }) {
    return (
        <div>
            {favBreed.length > 0 ?
                <>
                    <h1>Razas favoritas</h1>
                    <ul>
                        {favBreed.map((e) => (
                            <>
                                <Link to={`/dogs/${e.ID}`}>
                                    <h3>{e.Nombre}</h3>
                                </Link>
                                <button onClick={() => delFav(e)}>ELIMINAR DE FAVORITOS</button>
                            </>
                        ))}
                    </ul>
                </>
                : <h1>AÚN NO TENES RAZAS FAVORITAS</h1>
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        favBreed: state.favBreed
    }

};

export default connect(mapStateToProps, { delFav })(Favorites);

// - - - - - - - COMPONENTE CON CONNECT  - - - - -//