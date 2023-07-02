import React, { useContext } from "react";
import classes from "./altitude.module.css";
import DataContext from "../../contextFolder/Data-context";

export default function Altitude() {
  const myctx = useContext(DataContext);

  let invalidInput = true;

  if (myctx.altitude > 3000 || myctx.altitude < 0) {
    invalidInput = false;
  }

  const percentage = (myctx.altitude / 3000) * 100;
  const markerStyle = {
    top: myctx.altitude == null ? "100%" : `${100 - percentage}%`,
  };

  return (
    <div className={classes.mainAlt}>
      <div className={classes.Altitude}>
        
        <div className={classes.heightInAlt3}>3000</div>
        <div className={classes.heightInAlt2}>2000</div>
        <div className={classes.heightInAlt1}> 1000</div>
        <div className={classes.heightInAlt0}>0</div>
        {invalidInput ? (
          <div className={`${classes.marker}`} style={markerStyle}></div>
        ) : (
          
          <div >
               <p  style={{top:"100px"}}>invalid input</p>
          </div>
        )}
      </div>
    </div>
  );
}
