import React from 'react';
// import Helmet from 'react-helmet'
import '../layouts/tachyons/css/tachyons.css'
import Header from "../components/header"
import BottomMessage from "../components/bottommessage"



const LayoutPage = ({ children }) => (
  <React.Fragment>
        <Header />


    <main className="content">{children}</main>


  </React.Fragment>
)

export default LayoutPage;





