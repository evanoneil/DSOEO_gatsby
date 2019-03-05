import React from 'react'
import styles from "./mainmessage.module.css"
import BarNP from "../components/bar-np"


export default props => (
<div>
    <div className="fl w-100 w-60-l pa5-l pa4 mh20" >
    <BarNP />
    <h1 className="mt4 f1-l f2-m f3 pr6 fw1 flex-wrap" >{props.largeText}</h1>
  </div>

  <div className="fl w-100 w-40-l pa5-l pa4 mh25" >
  <BarNP />
      <p className="mt4 lh-copy fw1">{props.smallText1}</p>
      <p className="mt4 lh-copy fw1">{props.smallText2}</p>
  </div>
  </div>
)