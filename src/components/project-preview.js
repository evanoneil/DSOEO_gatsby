import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import '../layouts/tachyons/css/tachyons.css'


const ProjectPreview = ({ title, description, slug, tags, imageData }) => (
  <div class="fl w-50-l w-100  pa5-l pa4  black-90 bg-white mh32" >
  <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <div class="w-40-ns w-100 pr4 fl">

    <h2 class="mt3 fw1 f3 mb3">      {title}
    </h2>
    <p class="f7 mt0 light-blue lh-copy">{tags}</p>

    <p class="mt3 fw1 f6">      <Link className="moon-gray" to={`/${slug}/`}>View this project &rarr;</Link>
</p>
            
            </div>
<div class="w-60-ns w-100 fl">
        <p class="mt3  lh-copy fw1">{description}</p>

            </div>
</div>
);

export default ProjectPreview;