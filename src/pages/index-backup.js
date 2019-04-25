import React from 'react'
import Header from "../components/header"
import Layout from "../components/layout"
import MainMessage from "../components/mainmessage"
import Bar from "../components/bar"
import Featured from "../components/featured"
import BottomMessage from "../components/bottommessage"





export default ({ children }) => (
  <Layout>

    <Header />

    <MainMessage
      largeText="Good listening is good communication"
      smallText1="I am interested in visual communication projects in collaboration with advocacy organizations who hold a progressive social mission seeking to make their information more accessible to the public. I enjoy bringing in data visualization, mapping, and a process of clear concise communication to projects."
      smallText2="Send me an email, let's talk."
    />

    <Bar />



    <Featured
      image="../src/assets/onebreath.jpg"
      projectName="One Breath Partnership"
      projectSkills="BRANDING, WEBSITE, MAPPING, DATA-VISUALIZATION, MOTION, LONG-TERM CAMPAIGN"
      projectShortDesc="One Breath Partnership serves to amplify the work of Houston-area scientists in order to educate community members about the impact of air quality on their health. It also provides an outlet for residents to share their stories about the harmful effects of air pollution."
      link1name="Website"
      link1url="https://www.onebreathhou.org"
      link2name="Facebook"
      link2url="https:/www.facebook.com/onebreathhou"
    />

    <Featured
      image={"../assets/genhtx.jpg"}
      projectName="GenHTX"
      projectSkills="BRANDING, WEBSITE"
      projectShortDesc="GenHTX is grassroots, nonpartisan, and all about organizing the next generation of leaders to forge a better Houston for everyone."
      link1name="Website"
      link1url="https://www.genhtx.org"
      link2name="Facebook"
      link2url="https:/www.facebook.com/genhtx"
    />

<Featured
      image={"/assets/sayhu.png"}
      projectName="SAYHU"
      projectSkills="BRANDING, WEBSITE"
      projectShortDesc="SAYHU is a transnational feminist collective that empowers young South Asian Houstonians by creating spaces where they can engage with, learn, and effectively respond to complex social issues that impact their communities."
      link1name="Website"
      link1url="https://www.sayhu.org"
      link2name="Facebook"
      link2url="https:/www.facebook.com/sayhutx"
      />

<Featured
      image="/assets/redlining.jpg"
      projectName="Definite Declining"
      projectSkills="MAPPING, SELF_DIRECTED, BRANDING, WEBSITE"
      projectShortDesc="This project involved the creation of the digital version of the HOLC Residential Security Map from the 1930's that institutionalized the practice of redlining in Houston, and around America. I believe this is the first time this map has been brought online, I hope it will serve as a useful tool to explore how the practice of redlining still affects our city 80+ years later."
      link1name="Website"
      link1url="https://houston.definitedeclining.org/"
      link2name="GitHub"
      link2url="https://github.com/evanoneil/houston_redlining"
      />

<Featured
      image="/assets/cite-hc.jpg"
      projectName="Houston Chronicle 
      / Cite Magazine"
      projectSkills="DESIGN, MAPPING"
      projectShortDesc="I contributed the visuals to this article explaining how the Adickes and Barker Dams work in collaboration with Florence Tang, Andrew Albers, Ernesto Alfaro, Raj Mankad, and Allyn West."
      link1name="Houston Chronicle"
      link1url="https://www.houstonchronicle.com/local/gray-matters/article/How-the-Barker-and-Addicks-dams-work-12171719.php"
      link2name="OffCite"
      link2url="http://offcite.org/how-the-barker-and-addicks-dams-work/"
      />

<Featured
      image="/assets/fwft.jpg"
      projectName="Fran Watson for Texas"
      projectSkills="BRANDING, WEBSITE, LONG-TERM CAMPAIGN"
      projectShortDesc="I was proud to serve as Digital Director for friend and community leader Fran Watson's campaign for State Senate in District 17."
      />

<Featured
      image="/assets/el_modena.png"
      projectName="El Modena"
      projectSkills="MUSIC, BRANDING, WEBSITE, SELF_DIRECTED"
      projectShortDesc="Music has always been a major part of my personal life, El Modena brings together my love of creating music with utopian science-fiction for ambient style music with backing field-recordings from my travels. My first audio/visual album The Expanded Present will be released in the summer of 2019."
      link1name="Website"
      link1url="https://www.elmodena.io"
      link2name="Bandcamp"
      link2url="https:/elmodena.bandcamp.com/"
      />
<BottomMessage />


  </Layout>
)
