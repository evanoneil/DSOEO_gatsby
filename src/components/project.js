import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';


const Project = ({ title, description, url, skills, secondlink, url2title, collaborators, imageData }) => (
    <React.Fragment>
        <Helmet
      title= {title} 
      meta={[
        { name: "description", content: "Design for Social Action" },
        { name: "keywords", content: "design, houston, progressive, branding" }
      ]}
    />

    <div class="fl w-30-l w-100  pa5-l pa4  black-90 bg-white" >


      <h2 class="mt3 fw1 f2 mb3">{title}</h2>
      <p class="f7 mt0 light-blue lh-copy ttu">{skills}</p>

      <p class="mt3  lh-copy fw1">{description}</p>
      <p class="mt3 fw1">      
      <a href={url}>View this project online &rarr;</a>
      </p>
        


  </div>

  <div class="fl w-20-l w-100  pa5-l pa4  black-90 bg-white" >


    <h3 class="mt3 fw1 f4 mb3">Collaborators</h3>
    <p class="mt3 f7 fw1">{collaborators}</p>
    <br />
    <h3 class="mt3 fw1 f4 mb3">Additional Links</h3>
    <p class="mt3 f7 fw1"><a href={secondlink}>{url2title} &rarr;</a></p>

</div>

  <div class="fl w-50-l w-100  pa5-l pa4  black-90 bg-white" >

  <Image fluid={imageData} alt={title} />
  <br />
  <br />
  <br />
  <br />


</div>
    </React.Fragment>
    
);

export default Project;