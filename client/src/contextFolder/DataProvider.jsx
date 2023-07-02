import React from 'react'
import createContext from './Data-context'

export default function DataProvider(props) {
  const myContext={
    altitude:props.data?.altitude,
    HIS:props.data?.HIS,
    ADI:props.data?.ADI
  }
console.log();
  return (
    <createContext.Provider value={myContext}>
            {props.children}
    </createContext.Provider>
  )
}
