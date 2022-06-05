import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <br />
                <li><Link to='/favorites'>Favorites</Link></li>
                <br />
                <li><Link to='/create/breed'>Create a Breed</Link></li>
                <br />
                {/* <li><Link to='/dogs/:id'>Breed Detail</Link></li> */}
            </ul>

        </div>
    )
};

export default NavBar;