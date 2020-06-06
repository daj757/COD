import React from 'react'
import {Embed, Container, Divider} from 'semantic-ui-react'
import './video.css'
import hands from '../media/hands.svg'
const Video = (props) => {
    
    return (
        <Container>
             <h1>WEEKLY PRAYER</h1>
            <hr/>
            <Embed className="interviewVideos" icon="plus" url = {props.link} />
        </Container>
           
    )
    
}

export default Video