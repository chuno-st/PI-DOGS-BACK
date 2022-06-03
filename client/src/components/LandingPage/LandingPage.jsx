import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
      <div>
          <h2>deperris.com</h2>
          <button onClick={'INGRESAR'}><Link to = '/home'>INGRESAR</Link></button>
      </div>
        
    )
};

export default LandingPage;