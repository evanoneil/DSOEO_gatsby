import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import '../layouts/tachyons/css/tachyons.css'

export default ({ children }) => (
  <StaticQuery
  query={graphql`
  query LayoutQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
       render={data => (
         <>
           <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
           <body class="w-100 bg-white sans-serif">
<div>
             {children}
           </div>
           </body>
         </>
       )}
     />
   )