import React from 'react'
import {Grid} from 'semantic-ui-react'
import './about.css'
const About = () => {
 return(
     <div>
         <h1>ABOUT US</h1>
         <hr></hr>
         <Grid stackable columns={2}>
    <Grid.Column>
    <div className="text">
            <h3>WHO WE ARE</h3>
             <p>We are your command center in the coordinated strike against any ailments you and your loved ones are experiencing. We are practitioners who embrace an alternative perspective to your health and healing. 
                We possess years of experience in treating patients. As a result of this experience, we have concluded that the limits placed on patient care can result in limited outcomes.
                As a result of this, we endeavor to combine treatments of the human body with treatments of the human soul. We believe this system demands clinicians with years of
                experience of proven quality care, who will fulfill this promise by contributing our undivided attention to your healing.</p>
         </div> 
    </Grid.Column>
    <Grid.Column>
    <div className="text">
            <h3>WHY WE ARE DOING THIS?</h3>
             <p>We believe that human life is enriched when treatment of the human body is combined with treatment of the human soul. We therefore offer a one-stop shop to fulfill this high ideal because we believe it saves time, adds convenience, and enriches the human soul. This contributes to the healing process in a priceless way. Everything that we do is geared towards your healing because we believe in your destiny with vibrancy.</p>
         </div> 
         <div className="space" />
    </Grid.Column>
  </Grid>
        
     </div>
 )
}


export default About