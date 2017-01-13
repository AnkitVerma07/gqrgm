import React, { Component } from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Jobs from '../../api/Jobs';


export default class Job extends Component {

	constructor(props) {
	super(props);
	this.state = {

	};
}


	render() {
		return (
			<div className='job' >
			<div className='item_wrapper'>
					<div className='item_container-wrapper'>
					<div className='image_container'>
						<Link to={'/Job_description/'+this.props.job._id}>
							<img src='http://static1.businessinsider.com/image/58419e3eba6eb601688b63b4-2400/undefined' width="500" height="500" id='image_holder_1' >
							</img>
							</Link>
							<div className='top_industry_container'>
							<img className='top_industry-img' src='http://www.postcardfromholland.com/portrait_small.jpg'/>
							<span>Industry</span>
							<p>job description</p>
							</div>
						<div className='title_container'>
								<h5 className='title_header'>
									<span>
								{this.props.job.jobTitle}
								</span>
							</h5>
						</div>
						<div className='footer_container'>
							<div className='industry_container'>
							<img className='industry-img' src='http://www.postcardfromholland.com/portrait_small.jpg'/>
							<span>Content Type</span>
							</div>
							<div className='bio_container'>

								<div className='social_share'>
									<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com" target="_blank">
		 								<img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
 								 </a>
								 <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
										<img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
								</a>
								 <a href="https://plus.google.com/share?url=https://simplesharebuttons.com" target="_blank">
									 <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print" />
								 </a>
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
