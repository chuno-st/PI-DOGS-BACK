import React from "react";
import { Link } from "react-router-dom";

import s from "../NavBar/navBar.module.css"

function NavBar() {

    return (
        <nav className={s.style}>
            <h1><Link to='/'>deperros.com</Link></h1>
            <ul className={s.ul}>
                <p className={s.link}><Link to='/home'> HOME </Link></p>
                <Link to='/favoritos'><p className={s.link}> FAVORITOS </p></Link>
                <Link to='/create/breed'><p className={s.link}> CREAR RAZA </p></Link>
            </ul>
        </nav>
    )
};

export default NavBar;