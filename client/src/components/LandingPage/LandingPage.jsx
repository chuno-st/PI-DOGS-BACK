import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
      <div>
          <h2>deperros.com</h2>
          <button><Link to = '/home'>INGRESAR</Link></button>
      </div>
        
    )
};

export default LandingPage;