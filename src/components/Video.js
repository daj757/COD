import React from 'react'
import {Embed, Container, Divider} from 'semantic-ui-react'
import './video.css'
const Video = (props) => {
    
    return (
        <Container>
             <h1>WEEKLY PRAYER</h1>
             <Divider fitted/>
            <Embed url = {props.link} />
        </Container>
           
    )
    
}

export default Video