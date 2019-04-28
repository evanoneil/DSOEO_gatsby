import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import styles from './header.module.css';


export default props => (

  
  <nav className="w-100 relative top-0-1 left-0-1 ph0-l-md pa5-l pa4 fl items-baseline z-1">
    <div className="fl w-third pr1 w-100">
      <div className="fl"><a href="https://www.evanoneil.studio" className={styles.sitetitleheader}><h3 className="fw3">Design Studio of Evan O'Neil</h3></a></div>
    </div>
    <div className="fl w-two-thirds ph3 w-100 tr">
      <a className="dib ma3 pa1 purple" href="https://www.instagram.com/evanoneil.studio" aria-label="instagram.com/evanoneil.studio"><FaInstagram /></a>
      <a className="dib ma3 pa1 purple" href="mailto:evan@evanoneil.studio" aria-label="evan@evanoneil.studio"><FaRegEnvelope /></a>
    </div>
  </nav>

  )