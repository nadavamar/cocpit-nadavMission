import React, { useContext, useEffect } from "react";
import classes from "./ADI.module.css";
import dataContext from "../../contextFolder/Data-context";

export default function Adi() {
  const myctx = useContext(dataContext);
  let DefaultColor = true;
  let adiBG;

  let backgroundColorA = "";

  if (myctx.ADI > 100 || (myctx.ADI < -100 && myctx.ADI !== null)) {
    adiBG = <p>invalid input
,enter 100,0,-100</p>;
    DefaultColor = false;
  }
  switch (myctx.ADI) {
    case "100":
      backgroundColorA = "blue";
      break;
    case "0":
      backgroundColorA = "linear-gradient(blue, green)";
      break;
    case "-100":
      backgroundColorA = "green";
      break;
  }

console.log(backgroundColorA);
  return (
    <div
      className={classes.mainAdi}
      style={{backgroundColor: ` ${ myctx.ADI!=0 ? backgroundColorA: ""}`, background:`${backgroundColorA.includes("li") ? backgroundColorA : ""} `}}
    >
      {!DefaultColor &&  adiBG }
    </div>
  );
}
