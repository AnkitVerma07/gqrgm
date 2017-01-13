import React, { Component } from 'react'; 
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Menu = require('react-burger-menu').slide;


export default class DropDown extends Component {

	render() {
		return (
		<Menu>
        <a id="home" className="menu-item" href="/">Home</a>
   		   <Link to='/App'>
            <a id="about" className="menu-item" >Library</a>
        </Link>
        <Link to='/Aboutus'>
            <a id="about" className="menu-item" >About GQR</a>
        </Link>
      </Menu>
		)
	}
} 