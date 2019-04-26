import React from 'react';
import Helmet from 'react-helmet'
import { Link } from 'gatsby';
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
      largeText="Good listening is good communication"
      smallText1="I am interested in visual communication projects in collaboration with advocacy organizations who hold a progressive social mission seeking to make their information more accessible to the public. I enjoy bringing in data visualization, mapping, and a process of clear concise communication to projects."
      smallText2="Send me an email, let's talk."
    />
    <main className="content">{children}</main>

    <BottomMessage />

  </React.Fragment>
)

export default Layout;





