import React from "react";
import { Link } from "react-router-dom";

import s from "../Footer/footer.module.css"

function Footer() {

    return (
        <nav className={s.style}>
            <ul className={s.ul}>
                <button className={s.link1}>Individual Project - Henry Dogs  |  Alumno: Bruno Stauber PT-05  |  June 2022</button>
                <Link to={{ pathname: 'https://www.linkedin.com/in/brunostauber/' }} target="_blank"> <button className={s.link}> LinkedIn </button></Link>
                <Link to={{ pathname: 'https://github.com/chuno-st' }} target="_blank"> <button className={s.link}> Github </button></Link>
            </ul>
        </nav>
    )
};

export default Footer;