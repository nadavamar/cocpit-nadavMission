import React, { useContext, useState } from "react";
import classes from "./Main.module.css";
import Warpper from "../UI/Warpper";
import Altitude from "./Altitude";
import His_deg from "./His_Deg";
import Adi from "./Adi";
import DataContext from '../../contextFolder/Data-context'

export default function () {
  const [switchScreen, setSwitchScreem] = useState("true");
  const myctx=useContext(DataContext);

  const chengeScreen = () => {
    setSwitchScreem(!switchScreen);
  };

  return (
    <Warpper>
      <div className={`${classes.guidesBoard}`}>
        <div className={classes.buttons}>
          <button disabled={switchScreen} className="btn btn-primary mb-2" onClick={chengeScreen}> Visual</button>
          <button disabled={!switchScreen} className="btn btn-primary" onClick={chengeScreen}>Text</button>
        </div>
        {switchScreen ? (
          <>
            <Altitude />
            <His_deg />
            <Adi />
          </>
        ) : (
            <>
          <div><h3>3000/ {myctx.altitude}</h3></div>  
          <div><h3>360 / {myctx.HIS} </h3></div>  
          <div><h3>100 / {myctx.ADI} </h3></div>  
            </>
          
        )}
      </div>
    </Warpper>
  );
}
