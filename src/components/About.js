import React from 'react'
import {Grid} from 'semantic-ui-react'
import './about.css'
import david from '../media/david.jpg'
import nasa from '../media/nasa.jpg'
import logo from '../media/logo.png'
import doctorMarcello from '../media/marcello.jpg'
const About = () => {
 return(
     <div id="About">
         <div className="header">
             <hr/>
         <h1>ABOUT US</h1>
         <hr/>
         </div>
            <h3 >WHO WE ARE</h3>
            <div className="text">
             <p>We are your command center in the coordinated strike against any ailments you and your loved ones are experiencing. We are practitioners who embrace an alternative perspective to your health and healing. 
                We possess years of experience in treating patients. As a result of this experience, we have concluded that the limits placed on patient care can result in limited outcomes.
                As a result of this, we endeavor to combine treatments of the human body with treatments of the human soul. We believe this system demands clinicians with years of
                experience of proven quality care, who will fulfill this promise by contributing our undivided attention to your healing.</p>    
                </div>   
                <Grid stackable columns={2}>
                <Grid.Column className="text">
                <p className="name">Dr. A. Beresford Marcello</p>
                <img className="marcelloImage" src={doctorMarcello} />
                <div className="bioText">
                <p>Dr. A. Beresford Marcello responded to his calling to medicine with commitment to academic excellence and commitment to service to humankind.  This commitment led him to experiences that included being chosen as a Research Scholar as a college student, as well as mentoring high school students in the insights matriculating into college.
                    As a practitioner of medicine, Dr. Marcello has continued to challenge himself in digging deeper in his service.  This has led him to developing programs such as a Pregnancy Devotional for pregnant families, creating an instructional Guide called "Why The Christian Student Should Become a Medical Doctor, as well as the guide to "Academic Excellence.  </p>
                    <p>Digging deeper within has afforded Dr. Marcello to the insight that the Human Soul also requires treatment, along with the Human Body.  Dr. Marcello has responded to this calling by creating a team that has developed The Clinics of David...A Medical platform that intends to treat the body and soul.  A graduate of the Texas Tech University College
                    of Medicine, Dr. Al Marcello continues his excellence in patient care, but he continues to dig deeper in broadening his horizon in obtaining wisdom that will contribute to alleviating the ills that plague his patients now and into the future.</p>
                    </div>
                </Grid.Column>
                <Grid.Column>
        {/* <Embed placeholder={logo} icon="play circle outline" className="interviewVideos video1"  url = {"https://fast.wistia.com/embed/medias/gzw034vnlw"} /> */}
                <p className="name">Joseph Davis, PA</p>
       
                </Grid.Column>
                <Grid.Column>
    <div className="text">
            <h3>WHY WE ARE DOING THIS?</h3>
             <p>We believe that human life is enriched when treatment of the human body is combined with treatment of the human soul. We therefore offer a one-stop shop to fulfill this high ideal because we believe it saves time, adds convenience, and enriches the human soul. This contributes to the healing process in a priceless way. Everything that we do is geared towards your healing because we believe in your destiny with vibrancy.</p>
             <img className = "astronautImage" src={nasa} alt="astronaut in space" />
             <p style={{fontSize: "19px"}}>Who says you can’t fly higher with time?</p>
         </div> 
         </Grid.Column>
         <Grid.Column>
    <div className="text">
            <h3>WHEN YOU SHOULD PARTICIPATE?</h3>
             <p>This pandemic has proven to us the importance of the fierce urgency of NOW. A delay or lackadaisical approach to your health can be a death sentence. Goliath is loaded and poised to destroy you. His process could be incendiary or it could be a slow and calculated process. Let us team up the army with the weapon to slay the beast. NOW.
                If you have neglected feeding and treating your soul, this is a good place to start experiencing that enrichment today!</p>
                <img className = "pathsImage" src={david} alt="david and goliath" />
         </div> 
         </Grid.Column>
         </Grid> 
         <div className="space" />       
     </div>
 )
}


export default About