import React from 'react'
import styles from "./mainmessage.module.css"
import BarNP from "../components/bar-np"


export default props => (
<div>
    <div className="fl w-100 w-60-l pa5-l pa4 mh20" >
    <BarNP />
    <h2 class="fw1 f2">Ideas</h2>
      <p class="lh-copy fw1">“Good communication is good listening” comes from the idea that as a visual communicator I can best gain a deeper understanding and be effective in my work through asking questions and listening to others. My visual communication work is influenced by the ideas of Kenya Hara and Kings of Convenience, namely that removing unnecessary noise engages the mind and allows space for messages to be actively received.</p>
      <h2 class="fw1 f2 fw1">Bio</h2>
      <p class="lh-copy fw1">Evan has been integrating public interest and social responsibility into his design work for over 10 years; he is currently Co-Founder of PG Public Interest, an organization working to bridge the gap between visual communicators and advocacy organizations in Houston. He is a Project M alumnus, was named a League of Women Voters Rising Star, was a co-founding partner in Houston’s first B-Corporation, and was named one of the “Best in Texas” by AIGA in 2014. Evan is also currently the Co-Director of Design Advocacy for AIGA Houston.</p>
    
    
    </div>

    <div className="fl w-100 w-40-l pa5-l pa4 mh25" >
    <BarNP />
    <h2 class="fw1 f2">Articles</h2>
    <p class="lh-copy fw1"><a class="" href="https://www.mcsweeneys.net/articles/mla-formatted-outline-for-a-drake-album">McSweeneys "MLA Formatted Outline for a Drake Album"</a></p>

    <p class="lh-copy fw1"><a class="" href="https://www.houstonchronicle.com/local/gray-matters/article/Mayor-Turner-says-Houston-is-a-welcoming-city-11247870.php">Houston Chronicle "Mayor Turner Says Houston is a Welcoming City..."</a></p>
    
    <p class="lh-copy fw1"><a class="" href="http://offcite.org/how-the-barker-and-addicks-dams-work/">Houston Chronicle / OffCite "How the Barker and Adickes Dams Work"</a></p>
    
    <p class="lh-copy fw1"><a class="" href="https://www.houstonchronicle.com/local/gray-matters/article/Want-to-be-a-political-activist-Here-s-how-to-11136601.php">Houston Chronicle "Want to be a Political Activist? ..."</a></p>
    </div>

  </div>
)