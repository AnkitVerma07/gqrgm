var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



export default class PeopleSettingAdd extends Component {

	constructor(props) {
	super(props);
	this.state = {

	};
}
componentWillMount(){
  this.setState({
    searchKeywordValues:[],
    keywords: [
            { label: 'Chocolate', value: 'chocolate' },
            { label: 'Vanilla', value: 'vanilla' },
            { label: 'Strawberry', value: 'strawberry' },
            { label: 'Caramel', value: 'caramel' },
            { label: 'Cookies and Cream', value: 'cookiescream' },
            { label: 'Peppermint', value: 'peppermint' },
          ]
  });
}

  handleSelectChange (searchKeywordValues) {
    this.setState({ searchKeywordValues });
  }

addPeopleItem(event) {
  event.preventDefault();
  const people = {
     firstName: this.refs.people_firstname.value.trim(),
     lastName: this.refs.people_lastname.value.trim(),
     location: this.refs.people_location.value.trim(),
     resign: this.refs.people_resign.value.trim(),
     keywords: this.state.searchKeywordValues,
     compensation: this.refs.people_compensation.value.trim(),
     industry: this.refs.people_industry.value.trim(),
     market: this.refs.people_market.value.trim(),
     description: this.refs.people_description.value.trim(),
     phone: this.refs.people_phone.value.trim(),
     email: this.refs.people_email.value.trim(),
     fbLink: this.refs.people_fb.value.trim(),
     linkedinLink: this.refs.people_linkedin.value.trim(),
     experienceInt: this.refs.people_experience.value.trim()
  }
  console.log('people', people);
  if(people.title != '' ){
    Meteor.call('insertNewPeople',people, (err, res) => {
      if(!err){
        this.refs.people_firstname.value = '',
        this.refs.people_lastname.value = '',
        this.refs.people_location.value = '',
        this.refs.people_resign.value = '',
        this.state.searchKeywordValues,
        this.refs.people_compensation.value = '',
        this.refs.people_industry.value = '',
        this.refs.people_market.value = '',
        this.refs.people_description.value = '',
        this.refs.people_phone.value = '',
        this.refs.people_email.value = '',
        this.refs.people_fb.value = '',
        this.refs.people_linkedin.value = '',
        this.refs.people_experience.value = ''
      }
    });
  }
}

	render() {

		return (
      <div className='people_setting_add'>
      <form className='new-link-items' onSubmit={this.addPeopleItem.bind(this)}>
        <p>Add new user(people):</p>
        <p>First Name:</p><input type='text' ref='people_firstname'/>
        <p>Last Name:</p><input type='text' ref='people_lastname'/>
        <p>Location:</p><input type='text' ref='people_location'/>
        <p>Resign:</p><input type='text' ref='people_resign'/>
        <p>Compensation:</p><input type='text' ref='people_compensation'/>
        <p>Key Skills:</p><Select
          multi simpleValue
          value={this.state.searchKeywordValues}
          placeholder="Insert keyword(s)"
          options={this.state.keywords}
          onChange={this.handleSelectChange.bind(this)} />
        <p>Sector/Industry:</p><input type='text' ref='people_industry'/>
        <p>Market Functions:</p><input type='text' ref='people_market'/>
        <p>Description:</p><input type='text' ref='people_description'/>
        <p>Phone Number:</p><input type='text' ref='people_phone'/>
        <p>Email:</p><input type='text' ref='people_email'/>
        <p>Years Of Experience:</p><input type='text' ref='people_experience'/>
        <p>FB link:</p><input type='text' ref='people_fb'/>
        <p>Linkedin link:</p><input type='text' ref='people_linkedin'/>
        <button type='submit'>Add Job</button>
      </form>
      </div>
		)
	}
}
