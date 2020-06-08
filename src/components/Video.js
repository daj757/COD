import React from 'react'
import {Embed, Container} from 'semantic-ui-react'
import './video.css'
const Video = (props) => {
    
    return (
        <Container >
             <h1>WEEKLY PRAYER</h1>
            <hr/>
            <Embed icon="plus" url = {props.link} />
        </Container>
           
    )
    
}

export default Video