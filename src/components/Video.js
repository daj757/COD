import React from 'react'
import {Embed, Container} from 'semantic-ui-react'
import logo from '../media/logo.png'
const Video = (props) => {
    
    return (
        <Container >
             <h1>WEEKLY PRAYER</h1>
            <hr/>
            <Embed placeholder={logo} icon="play circle outline" url = {props.link} />
        </Container>
           
    )
    
}

export default Video