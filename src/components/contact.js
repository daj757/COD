import React from 'react'
import {Icon, Grid} from 'semantic-ui-react'
import './contact.css'


const Contact = () => {
   
 return(
     <div>
       <div id="Connect" className="header contactHeader">
             <hr/>
         <h1>CONNECT WITH US</h1>
         <hr/>
         </div>
         <Grid className="contactInfo" stackable columns={4}>
           
         <Grid.Column >
         <a href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">
            <Icon size="small" name='facebook' className="icons first"/>
             The Clinics of David</a>
          </Grid.Column>
          <Grid.Column >
          <a href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">
            <Icon className="icons" size="small" name='youtube' />
             The Clinics of David</a>
          </Grid.Column>
          <Grid.Column>
          <a href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">
            <Icon className="icons" size="small" name='twitter' />
             The Clinics of David</a>
          </Grid.Column>
          <Grid.Column >
          <a href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">
            <Icon className="icons" size="small" name='mail' />
          The Clinics of David</a>
          </Grid.Column>
         

  </Grid>
     </div>
 )
}


export default Contact