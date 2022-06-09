import React from "react";
import { Link } from "react-router-dom";

import s from "../NavBar/navBar.module.css"

function NavBar() {

    return (
        <nav className={s.style}>
            <Link to='/'><button className={s.link1}>deperros.com</button></Link>
            <ul className={s.ul}>
                <Link to='/home'><button className={s.link}> HOME </button></Link>
                <Link to='/favoritos'><button className={s.link}> FAVORITOS </button></Link>
                <Link to='/create/breed'><button className={s.link}> CREAR RAZA </button></Link>
            </ul>
        </nav>
    )
};

export default NavBar;