import React from 'react';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Video from './components/Video'
import Contact from './components/contact'
import About from './components/About'
import Footer from './components/footer'
import { Container, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {'videoLink' : ''};
  }
  async componentDidMount() {
    const url = 'https://spreadsheets.google.com/feeds/cells/1Kcza1cZRRwXWb3SMb_e_BD3ribfskkQkxpbDzDMzNRE/1/public/full?alt=json'
    let response = await fetch(url);
  
    if (response.ok) { // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
      let videoLink = json.feed.entry[1].content.$t
      this.setState({'videoLink': videoLink})

    } else {
      console.log("error")
    }

  }
  
  render() {
    return (
      <div>
        <Nav/>
        <Landing/>
        <div className="video">
        <Video link ={this.state.videoLink}/>
       </div>
       <div className="about">
        <About />
       </div>
       <div className="contact">
        <Contact />
       </div>
       <Footer />
       </div>
      
     );

  }


}

export default App;
