import React from "react";
import { Link } from "react-router-dom";

import s from '../LandingPage/landingPage.module.css';

function LandingPage() {
  return (
    <div className={s.background}>
      <h1>deperros.com</h1>
      <div>
      <Link to='/home'><button className={s.button}>INGRESAR</button></Link>
      </div>
    </div>
  )
};

export default LandingPage;