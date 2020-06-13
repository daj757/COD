import React from 'react'
import {Embed} from 'semantic-ui-react'
import logo from '../media/logo.png'
const Video = (props) => {
    
    return (
        <div >
             <h1>WEEKLY PRAYER</h1>
            <hr className="underline"/>
            <Embed className="actualVideo" placeholder={logo} icon="play circle outline" url = {props.link} />
        </div>
           
    )
    
}

export default Video