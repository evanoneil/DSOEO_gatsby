import React from 'react';
// import Helmet from 'react-helmet'
import { Link } from 'gatsby';
import '../layouts/tachyons/css/tachyons.css'
import MainMessage from "../components/mainmessage"
import Header from "../components/header"
import BottomMessage from "../components/bottommessage"



const LayoutPage = ({ children }) => (
  <React.Fragment>
        <Header />


    <main className="content">{children}</main>

    <BottomMessage />

  </React.Fragment>
)

export default LayoutPage;





