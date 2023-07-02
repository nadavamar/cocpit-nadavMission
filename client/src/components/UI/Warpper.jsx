import React from 'react'
import  classes from'./warpper.module.css'

export default function Warpper(props) {
  return (
    <div className={classes.mainDiv}>
        {props.children}
    </div>
  )
}
