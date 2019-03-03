import React from 'react'
import Container from '../components/container-black'

const FeatImg = props => (
  <div className="fl w-100 w-60-l black">
    <img src={props.feature} alt="title"/>
  </div>
)

const Feature = props => (
  <div className="fl w-100 w-40-l pr5">


    <h2 className="mt3 fw1 f2 mb3">{props.projectName}</h2>
    <p className="f7 mt0 light-blue lh-copy">{props.skills}</p>

    <p className="mt3  lh-copy fw1">{props.shortDescription}</p>
  </div>
)

export default () => (
  <Container>
    <Feature
      projectName="One Breath Partnership"
      skills="BRANDING, WEBSITE, MAPPING, DATA-VISUALIZATION, MOTION GRAPHICS, ART DIRECTION, LONG-TERM CAMPAIGN"
      shortDescription="One Breath Partnership is a catalyst for information and education. It serves to amplify the work of Houston-area scientists, researchers, academics, and physicians in order to educate community members about the impact of air quality on their health. It also provides an outlet for residents to share their stories about the harmful effects of air pollution."
    />
    <FeatImg feature="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg" />
  </Container>
)
