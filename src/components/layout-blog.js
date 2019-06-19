import React from 'react';
import Helmet from 'react-helmet'
import '../layouts/tachyons/css/tachyons.css'
import MainMessage from "../components/mainmessage"
import Header from "../components/header"
import BottomMessage from "../components/bottommessage"



const Layout = ({ children }) => (
  <React.Fragment>
        <Helmet
      title="Design Studio of Evan O'Neil"
      meta={[
        { name: "description", content: "Design for Social Action" },
        { name: "keywords", content: "design, houston, progressive, branding" }
      ]}
    />
        <Header />

<MainMessage
      largeText="Recent research and experiments"
      smallText1=""
    />
    <main className="content">{children}</main>

    <BottomMessage />

  </React.Fragment>
)

export default Layout;





