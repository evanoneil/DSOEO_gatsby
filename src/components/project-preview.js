import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import '../layouts/tachyons/css/tachyons.css'


const ProjectPreview = ({ title, description, slug, skills, imageData }) => (
  <div className="fl w-50-l w-100  pa5-l pa4  black-90 bg-white mh32" >
  <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <div className="w-40-ns w-100 pr4 fl">

    <h2 className="mt3 fw1 f3 mb3">      {title}
    </h2>
    <p className="f7 mt0 purple ttu lh-copy">{skills}</p>

    <p className="mt3 fw1 f6">      <Link className="black" to={`/${slug}/`}>Project Details &rarr;</Link>
</p>
            
            </div>
<div className="w-60-ns w-100 fl">
        <p className="mt3  lh-copy fw1">{description}</p>

            </div>
</div>
);

export default ProjectPreview;