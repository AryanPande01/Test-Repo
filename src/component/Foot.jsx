import React from 'react';
import "./Foot.css"

const Foot=()=>{
    return(
        <nav>
            <div className="Foot"><p><p>keeper {new Date().toLocaleString()}</p></p></div>
        </nav>
    );
}

export default Foot;