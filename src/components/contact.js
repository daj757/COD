import React from 'react'
import {Icon, List} from 'semantic-ui-react'
import './contact.css'

const Contact = () => {
   
 return(
     <div>
         <h1>CONNECT WITH US</h1>
         <hr/>
         <div className="listMobile">
<List  size="huge" relaxed inverted animated>
    <List.Item href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">
    <Icon name='facebook' />
      <List.Content >
        <List.Header >The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  name='twitter' />
      <List.Content>
        <List.Header>The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  name='youtube' />
      <List.Content>
        <List.Header>The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  name='mail' />
      <List.Content>
        <List.Header>The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
  </List>
  </div>
     </div>
 )
}


export default Contact