import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './nav.css'
import logo from '../media/logo.png'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name, name1 }) =>  {
    this.setState({ activeItem: name })
    document.querySelector('#'+name1).scrollIntoView({ 
      behavior: 'smooth',
    });
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu  divided  fixed={'top'} widths={3} style={{backgroundColor: '#5680E9'}}inverted>
         <Menu.Item
         className="nav" 
          name1="About"
          name="About Us"
          active={activeItem === 'About Us'}
          onClick={this.handleItemClick}
          link
       />
        <Menu.Item
          className="nav" 
          name1="Prayer"
          name='Weekly Prayer'
          active={activeItem === 'Weekly Prayer'}
          onClick={this.handleItemClick}
        ><img src={logo}></img></Menu.Item>
       <Menu.Item className="nav" 
          name1="Connect"
          name='Connect with us'
          active={activeItem === 'Connect with us'}
          onClick={this.handleItemClick}
/>       
      </Menu>
      
    )
  }
}