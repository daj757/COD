import React from 'react'
import {Icon, List, Responsive} from 'semantic-ui-react'


const Contact = () => {
   
 return(
     <div>
       <h1 id="Connect">CONNECT WITH US</h1>
         <hr/>
         <Responsive maxWidth={768}>
         <div className="listMobile">
<List  size="huge" relaxed inverted>
    <List.Item >
    <Icon size="large" name='facebook' />
      <List.Content >
        <List.Header href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  size="large" name='twitter' />
      <List.Content>
        <List.Header href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  size="large" name='youtube' />
      <List.Content>
        <List.Header href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon size="large" name='mail' />
      <List.Content>
        <List.Header href="mailto:TheClinicsOfDavid@gmail.com">TheClinicsOfDavid@gmail.com</List.Header>
      </List.Content>
    </List.Item>
  </List>
  </div>
  </Responsive>
                        {/* Component for desktop */}
  <Responsive minWidth={768}>
         <div className="listDesktop">
<List size="big" relaxed="very" inverted horizontal linked list>
    <List.Item >
    <Icon size="big" name='facebook' />
      <List.Content >
        <List.Header href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  size="big" name='twitter' />
      <List.Content>
        <List.Header href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon  size="big" name='youtube' />
      <List.Content>
        <List.Header href="https://www.facebook.com/The-Clinics-Of-David-103503817964254" target="_blank">The Clinics of David</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon size="big" name='mail' />
      <List.Content>
        <List.Header href="mailto:TheClinicsOfDavid@gmail.com">TheClinicsOfDavid@gmail.com</List.Header>
      </List.Content>
    </List.Item>
  </List>
  </div>
  </Responsive>
     </div>
 )
}


export default Contact