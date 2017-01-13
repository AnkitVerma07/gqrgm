import React, { Component } from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Jobs from '../../api/Jobs';


export default class PeopleItem extends Component {

	constructor(props) {
	super(props);
	this.state = {

	};
}


	render() {
		return (
			<div className='people' >
			<div className='item_wrapper'>
					<div className='item_container-wrapper'>
					<div className='image_container'>
							<img src='http://static1.businessinsider.com/image/58419e3eba6eb601688b63b4-2400/undefined' width="500" height="500" id='image_holder_1' >
							</img>
						<div className='title_container'>
								<h5 className='title_header'>
									<span>
								{this.props.people.firstName + ' ' + this.props.people.lastName}
								</span>
							</h5>
						</div>
						<div className='footer_container'>
							<div className='industry_container'>
							<img className='industry-img' src='http://www.postcardfromholland.com/portrait_small.jpg'/>
							<span>Industry</span>
							</div>
							<div className='bio_container'>
									<p>Person descrption here</p>
								<div className='email_people'>
									<p>person contact information here</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}
}
