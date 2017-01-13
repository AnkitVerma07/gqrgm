import React, { Component } from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



export default class AdminNav extends Component {

	constructor(props) {
	super(props);
	this.state = {

	};
}


	render() {
		return (
      <div className='admin-menu'>
        <div className="btn dropdown">
          <div className="dropdown-toggle" id="menu1" data-toggle="dropdown">ADMIN
          </div>
          <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <Link to='/Library_settings'>
              <a role="menuitem" tabIndex="-1">Library Admin</a>
              </Link>
            </li>
            <li role="presentation" className="divider"></li>
            <li role="presentation">
                <Link to='/Portal_settings'>
                <a role="menuitem" tabIndex="-1">Portal Admin</a>
                </Link>
            </li>
            <li role="presentation" className="divider"></li>
            <li role="presentation">
                <Link to='/People_settings'>
                <a role="menuitem" tabIndex="-1">People Admin</a>
                </Link>
            </li>
          </ul>
        </div>
      </div>
		)
	}
}
