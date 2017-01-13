import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Items from '../../api/Items';


export default class Item extends Component {

	vote(){
		Meteor.call('voteOnItem', this.props.item);
	}

	constructor(props) {
	super(props);
	this.state = {
		isHidden: true
	};
}

toggleNav() {
	this.setState({
		isHidden: !this.state.isHidden
	});
}

renderNav() {
	return (
		<nav className='item_description'>
			<p>Title: {this.props.item.name}</p>
			<p>Description: {this.props.item.bio}</p>
			<p>Author: {this.props.item.author}</p>
			<p>Likes: {this.props.item.likes}</p>
		</nav>
	);
}
	render() {
		 const { isHidden } = this.state;
		return (
			<div className='item' >
			<div className='item_wrapper'>
					<div className='item_container-wrapper'>
					<button className='image_container' onClick={this.toggleNav.bind(this)}>
							<img src='http://static1.businessinsider.com/image/58419e3eba6eb601688b63b4-2400/undefined' width="500" height="500" id='image_holder_1' >
							</img>
						<div className='title_container'>
							<a href={this.props.item.url}>
								<h5 className='title_header'>
									<span>
								{this.props.item.name}
								</span>
							</h5>
							</a>
						</div>
						<div className='footer_container'>
							<div className='author_container'>
							<img className='author-img' src='http://www.postcardfromholland.com/portrait_small.jpg'/>
							<span>author name</span>
							</div>
							<div className='bio_container'>

								<div className='social_share'>
									<a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank">
										<img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
									</a>
									<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com" target="_blank">
		 								<img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
 								 </a>
								 <a href="https://plus.google.com/share?url=https://simplesharebuttons.com" target="_blank">
        	 					<img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
    						 </a>
								 <a href="https://plus.google.com/share?url=https://simplesharebuttons.com" target="_blank">
									 <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print" />
								 </a>
								</div>
							</div>
							<div className='like_button' onClick={this.vote.bind(this)}>
									<div className='heart'>
									</div>
									<div className='likes_count'>
									<span>{this.props.item.likes} Likes</span>
									</div>
							</div>
						</div>
					</button>
				</div>
					<div className='description_div'>
					<ReactCSSTransitionGroup
						 transitionName='item_description_nav'
						 transitionEnterTimeout={1000}
						 transitionLeaveTimeout={1000}>
						{ !isHidden && this.renderNav()}
					</ReactCSSTransitionGroup>
				</div>
			</div>
			</div>
		)
	}
}
