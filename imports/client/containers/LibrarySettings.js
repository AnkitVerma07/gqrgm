var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react';
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';
import Items from '../../api/Items';

export default class LibrarySettings extends Component {
  componentDidMount(){

		this.setState({
			data: Items.find().fetch()
		});
	}

	addExternalItems(event) {
		event.preventDefault();
		const link = this.refs.link.value.trim();
		if(link != '' ){
		  Meteor.call('insertNewExternalItem',link, (err, res) => {
		  	if(!err){
		  		this.refs.link.value = '';
		  	}
		  });
		}
	}

  addLinkItems(event) {
    event.preventDefault();

    const insertInternal = {
       title: this.refs.title.value.trim(),
       image: this.refs.image.value.trim(),
       author: this.refs.author.value.trim(),
       author_img: this.refs.author_img.value.trim(),
       internal_link: this.refs.internal_link.value.trim(),
       description: this.refs.description.value.trim()
    }
    if(insertInternal.internal_link != '' ){
      Meteor.call('insertNewInternalItem',insertInternal, (err, res) => {
        if(!err){
          this.refs.title.value = '';
          this.refs.image.value = '';
          this.refs.author.value = '';
          this.refs.author_img.value = '';
          this.refs.internal_link.value = '';
          this,refs.description.value= '';
        }
      });
    }
  }

render() {
  return (
    <div className="container-it" >
      <Sticky enabled={true} bottomBoundary={5000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      </Sticky>

      <div className="parallax3">
      </div>

      <div className='main'>
        <header>
          <h1>
            Library Settings
          </h1>
        </header>
        <form className='new-external-items' onSubmit={this.addExternalItems.bind(this)}>
          <p>External Link:</p>
          <p>link:</p><input type='text' ref='link'/>
          <button type='submit'>Add Link</button>
        </form>

        <form className='new-link-items' onSubmit={this.addLinkItems.bind(this)}>
          <p>Build Link:</p>
          <p>title:</p><input type='text' ref='title'/>
          <p>link:</p><input type='text' ref='internal_link'/>
          <p>image:</p><input type='text' ref='image'/>
          <p>author:</p><input type='text' ref='author'/>
          <p>author image:</p><input type='text' ref='author_img'/>
          <p>description:</p><input type='text' ref='description'/>
          <button type='submit'>Add Link</button>
        </form>

      </div>

      <div className="parallax3">
      </div>

      <div className='footer'>
        <Footer />
      </div>

      </div>

      );
  }
}
