import React, { useContext } from 'react'
import classes from './HIS.module.css'
import {AiOutlineArrowUp } from 'react-icons/ai';
import dataContect from '../../contextFolder/Data-context'

export default function His_Deg() {
const myctx=useContext(dataContect);
let invalidInput=true;

if(myctx.HIS>360 || myctx.HIS<0){
invalidInput=false
}
const markerRotate={
  rotate: myctx.altitude ==null ? '0deg' :`${myctx.HIS}deg`,
}

  return (
    <div className={classes.mainHis}>
      <div className={`${classes.his0} ${classes.number} `}>0</div>
      <div className={`${classes.his90} ${classes.number} `}>90</div>
      {invalidInput ?   <div className="marker"  style={markerRotate}><AiOutlineArrowUp/></div>
      : <p className={classes.p}>invalid input,enter 0-360</p> }
      <div className={`${classes.his180} ${classes.number} `}>180</div>
      <div className={`${classes.his270} ${classes.number} `}>270</div>
    </div>
  )
}
