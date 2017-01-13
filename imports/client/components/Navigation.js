import React, { Component } from 'react';
import AccountsUI from '../components/AccountsUI';
import AdminNav from './AdminNav';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

export default class Navigation extends Component {

	constructor(props) {
	super(props);
	this.state = {
		userId: Meteor.userId()
	};
}
	render() {
		console.log(Meteor.userId());
		let showAdmin = this.state.userId ? <AdminNav /> : '';
		return (

		<div className="container">
			<div className='nav-header'>
			<Link to='/'>
				<img className='nav_header_img'/>
  			</Link>
  			</div>
  			<div className='menu'>
  			<div className='aboutus-menu'>
	  			<div className="btn dropdown">
	    			<div className="dropdown-toggle" id="menu1" data-toggle="dropdown">ABOUT
	    			</div>
		    		<ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
		      		<li role="presentation">
		         		<Link to='/Aboutus'>
		      			<a role="menuitem" tabIndex="-1">About us</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/Methodology'>
		      			<a role="menuitem" tabIndex="-1">Methodology</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/Execution'>
		      			<a role="menuitem" tabIndex="-1">Execution</a>
		      			</Link>
		      		</li>
							<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/People'>
		      			<a role="menuitem" tabIndex="-1">People</a>
		      			</Link>
		      		</li>
		    		</ul>
	  			</div>
  			</div>

  			<div className='markets-menu'>
	  			<div className="btn dropdown">
	    			<div className="dropdown-toggle" id="menu1" data-toggle="dropdown">MARKETS
	    			</div>
		    		<ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
		      		<li role="presentation">
		         		<Link to='/BankingAFinance'>
		      			<a role="menuitem" tabIndex="-1">Banking & Finance</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/EnergyAEng'>
		      			<a role="menuitem" tabIndex="-1">Energy & Engineering</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/IT'>
		      			<a role="menuitem" tabIndex="-1">Information Technology</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/LifeSciences'>
		      			<a role="menuitem" tabIndex="-1">Life Sciences</a>
		      			</Link>
		      		</li>
		    		</ul>
	  			</div>
  			</div>

  			<div className='services-menu'>
	  			<div className="btn dropdown">
	    			<div className="dropdown-toggle" id="menu1" data-toggle="dropdown">SERVICES
	    			</div>
		    		<ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
		      		<li role="presentation">
		         		<Link to='/ExecSearch'>
		      			<a role="menuitem" tabIndex="-1">Executive Search</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/ContingentSearch'>
		      			<a role="menuitem" tabIndex="-1">Contingent Search</a>
		      			</Link>
		      		</li>
		      		<li role="presentation" className="divider"></li>
		      		<li role="presentation">
		         		<Link to='/CampaignServices'>
		      			<a role="menuitem" tabIndex="-1">Campaign Services</a>
		      			</Link>
		      		</li>
		    		</ul>
	  			</div>
  			</div>

  			<div className='library-menu'>
	  			<div className="btn dropdown">
	  				<Link to='/Library'>
		      			<a role="menuitem" tabIndex="-1">LIBRARY</a>
		      		</Link>
	  			</div>
  			</div>

  			<div className='contactus-menu'>
	  			<div className="btn dropdown">
	  				<Link to='/Contact'>
		      			<a role="menuitem" tabIndex="-1">CONTACT</a>
		      		</Link>
	  			</div>
  			</div>

				<div className='portal-menu'>
					<div className="btn dropdown">
						<Link to='/Portal'>
								<a role="menuitem" tabIndex="-1">PORTAL</a>
							</Link>
					</div>
				</div>

			</div>
			{showAdmin}
  		<div className='login'>
        		<AccountsUI />
      	</div>


		</div>

			);
	}
}
