import React from "react";
import Button1 from "./Button1";

const Box=()=>{

return(
        <div className="box" style={{height:"100vh",alignItems:"center",display:"flex",justifyContent:"center"}}>
                <div className="card" style={{height:"500px",width:"300px",backgroundColor:"blue", borderRadius:"2%" }}>
                        < Button1 />
                </div>
        </div>
     );
};


export default Box; 

