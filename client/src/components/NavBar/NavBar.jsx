import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <br />
                <li><Link to='/favoritos'>Favoritos</Link></li>
                <br />
                <li><Link to='/create/breed'>Create a Breed</Link></li>
            </ul>
            <hr />
        </div>
    )
};

export default NavBar;