import React from 'react'
import Bar from './bar'


export default props => (
<div>
    <div className="fl w-100 w-60-l  ph5-l ph4  mh20 " >
    
    <h1 className="mt4  lh-title-ns f3-m f2 pr6 fw3 flex-wrap" >{props.largeText}</h1>
    </div>
    <div className="fl w-30-l mt2 ph0-l ph4  mh20">
    <p className="lh-copy mt4 f5 fw1">{props.smallText1}</p>
  </div>

  <Bar />
  </div>
)