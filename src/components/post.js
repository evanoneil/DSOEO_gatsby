import React from 'react';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import Bar from './bar'

import PortableText from "@sanity/block-content-to-react";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const Project = ({ title, description, content, url, published, skills, secondlink, url2title, collaborators, category, imageData }) => (
    <React.Fragment>
        <Helmet
      title= {title} 
      meta={[
        { name: "description", content: "Design for Social Action" },
        { name: "keywords", content: "design, houston, progressive, branding" }
      ]}
    />
<div>
    <div className="fl w-50-l w-100  ph5-l ph4 black-90 bg-white " >
      <h2 class="mt3 fw1 f2 mb3">{title}</h2>
      <p class="f7 mt0 light-blue lh-copy ttu skills">{skills}</p>
      <p class="mt3 fw1">      
      {/* <a href={url}>View this project online &rarr;</a> */}
      </p>
  </div>

  <div class="fl w-20-l w-100  ph5-l ph4  black-90 bg-white" >
    <h3 class="mt3 fw1 f4 mb3">Published on</h3>
    <p class="mt3 f7 fw1">{published}</p>
    <br />
</div>

  <div class="fl w-30-l w-100  ph5-l ph4  black-90 bg-white" >
  <h3 class="mt3 fw1 f4 mb3">Category</h3>
    <p class="mt3 f7 fw1">{category}
</p>
    </div>

<Bar />
</div>
    <div class="fl w-40-l w-100  pa5-l pa4  black-90 bg-white" >
  <Image fluid={imageData} alt={title} />
  </div>    <div class="fl w-60-l w-100  pa5-l pa4  black-90 bg-white" >

  <p class="mt3  lh-copy fw1">
  <PortableText blocks={content} serializers={serializers} projectId="0xfk5i93" dataset="production" />
  </p>

  <br />
  <br />
  <br />
  <br />


</div>
    </React.Fragment>
    
);

export default Project;