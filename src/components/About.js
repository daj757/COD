import React from 'react'
import {Embed} from 'semantic-ui-react'
import './about.css'
import david from '../media/david.jpg'
import nasa from '../media/nasa.jpg'
import logo from '../media/logo.png'
const About = () => {
 return(
     <div id="About">
         <h1>ABOUT US</h1>
         <hr></hr>
    <div className="text container grid-container bordersBelow">
            <h3 className="header1">WHO WE ARE</h3>
             <p className= "text1">We are your command center in the coordinated strike against any ailments you and your loved ones are experiencing. We are practitioners who embrace an alternative perspective to your health and healing. 
                We possess years of experience in treating patients. As a result of this experience, we have concluded that the limits placed on patient care can result in limited outcomes.
                As a result of this, we endeavor to combine treatments of the human body with treatments of the human soul. We believe this system demands clinicians with years of
                experience of proven quality care, who will fulfill this promise by contributing our undivided attention to your healing.</p>        
                <p className="name1">Dr. Marcello</p>
        <Embed placeholder={logo} icon="play circle outline" className="interviewVideos video1"  url = {"https://fast.wistia.com/embed/medias/gzw034vnlw"} />
                <p className="name2">Joseph Davis, PA</p>
         <Embed placeholder={logo} icon="play circle outline" className="interviewVideos video2" url = {"https://fast.wistia.com/embed/medias/gzw034vnlw"} />
         </div> 
    <div className="text container bordersBelow">
            <h3>WHY WE ARE DOING THIS?</h3>
             <p>We believe that human life is enriched when treatment of the human body is combined with treatment of the human soul. We therefore offer a one-stop shop to fulfill this high ideal because we believe it saves time, adds convenience, and enriches the human soul. This contributes to the healing process in a priceless way. Everything that we do is geared towards your healing because we believe in your destiny with vibrancy.</p>
             <img className = "aboutImages" src={nasa} alt="astronaut in space" />
             <p style={{fontSize: "19px"}}>Who says you can’t fly higher with time?</p>
         </div> 
 
    <div className="text bordersBelow">
            <h3>WHEN YOU SHOULD PARTICIPATE?</h3>
             <p>This pandemic has proven to us the importance of the fierce urgency of NOW. A delay or lackadaisical approach to your health can be a death sentence. Goliath is loaded and poised to destroy you. His process could be incendiary or it could be a slow and calculated process. Let us team up the army with the weapon to slay the beast. NOW.
                If you have neglected feeding and treating your soul, this is a good place to start experiencing that enrichment today!</p>
                <img className = "aboutImages" src={david} alt="david and goliath" />
         </div> 
         <div className="space" />       
     </div>
 )
}


export default About