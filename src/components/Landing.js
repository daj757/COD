import React from 'react'
import logo from '../media/logo.png'
import landing from '../media/landing.jpg'
import './landing.css'
import hands from '../media/hands.svg'

const Landing = () => {
    return (
        <div className="main">
        <div className="space"></div>        
        <div className="text">
            <h1>Welcome to The Clinics of David!<br/> We appreciate your time in discovering who we are and what
            sets us apart. <br/>We are The Clinics of David!</h1>
            <p>  
            The Clinics of David is your weapon against disease. We are here to build an Army of David’s (and Mary’s) to develop a coordinated strike against any pathology that threatens your health or the health of your loved ones. We are here to support YOU as slay any Goliath’s that threaten your health and your journey through life. We believe there is strength in numbers and together we can stand mightily against ANY disease that threatens your health, joy, and wellbeing.
            </p>
            <p>
            The Clinics of David believes in combining the treatments of the human body with the treatments of the human soul. We are allopathic medical physicians who have broadened our horizons to acknowledge the power that comes combining western medicine with treatment of the human soul. We believe in the power of the mind in the healing process. We believe in the power of prayer.
            </p>
            <p>
            The Clinics of David is your belief center. This is the place you can fortify the attack against disease with confidence, prayer, support, and a listening ear. Please acknowledge the Sling of David in our content as a symbol of our complete focus in slaughtering the Goliath that threatens your health, against any ailment in your life.
            </p>
            <p>
            The Clinics of David is your center for courage. We have courage built into our DNA. Our desire is that you will build mountain high courage on your path towards healing.
            </p>
            <p>
            The Clinics of David is the story about your battle and victory against Goliath.
            </p>
            <p>
            We pray Blessings upon your life and we pray Courage on your journey in all your endeavors.
            </p>
          <img className="hands" src={hands} alt="praying hands" />
        </div>
        <div className="space"></div>  
        </div>

    )
}

export default Landing