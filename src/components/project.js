import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Project = ({ title, description, url, imageData }) => (
    <React.Fragment>
    <div class="fl w-30-l w-100  pa5-l pa4  black-90 bg-white" >


      <h2 class="mt3 fw1 f2 mb3">{title}</h2>
      <p class="f7 mt0 light-blue lh-copy">tags</p>

      <p class="mt3  lh-copy fw1">{description}</p>
      <p class="mt3 fw1">      
      <Link to={url}>View this project online &rarr;</Link>
      </p>
        


  </div>

  <div class="fl w-20-l w-100  pa5-l pa4  black-90 bg-white" >


    <h3 class="mt3 fw1 f4 mb3">Collaborators</h3>
    <p class="mt3 f7 fw1">collaborators</p>
    <br />
    <h3 class="mt3 fw1 f4 mb3">Press</h3>
    <p class="mt3 f7 fw1"><Link to={url}>Press &rarr;</Link></p>

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