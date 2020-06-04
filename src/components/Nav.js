import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './nav.css'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu  fixed={'top'} widths={3} style={{backgroundColor: '#5680E9'}}inverted>
        <Menu.Item
         className="nav" 
          name='About Us'
          active={activeItem === 'About Us'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        className="nav" 
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        className="nav" 
          name='Rent'
          active={activeItem === 'rent'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}