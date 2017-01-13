var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react';
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class PortalSettings extends Component {

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

  addJobItem(event) {
    event.preventDefault();
    const job = {
       jobTitle: this.refs.job_title.value.trim(),
       location: this.refs.job_location.value.trim(),
       resign: this.refs.job_resign.value.trim(),
       compensation: this.refs.job_compensation.value.trim(),
       keywords: this.state.searchKeywordValues,
       description: this.refs.job_description.value.trim(),
       responsabilities: this.refs.job_responsibilities.value.trim(),
       industry: this.refs.job_industry.value.trim(),
       requirements: this.refs.job_requirements.value.trim(),
       yearsNeeded: this.refs.job_experience_needed.value.trim(),
       createdAt: this.refs.job_date.value.trim()
    }
    if(job.title != '' ){
      Meteor.call('insertNewJob',job, (err, res) => {
        if(!err){
          this.refs.job_title.value = '';
          this.refs.job_location.value = '';
          this.refs.job_resign.value = '';
          this.refs.job_compensation.value = '';
          this.refs.job_description.value = '';
          this.refs.job_responsibilities.value= '';
          this.refs.job_industry.value= '';
          this.refs.job_requirements.value= '';
          this.refs.job_experience_needed.value= '';
          this.refs.job_date.value= '';
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
            Portal Settings
          </h1>
        </header>

        <form className='new-link-items' onSubmit={this.addJobItem.bind(this)}>
          <p>New Job Item:</p>
          <p>Job Title:</p><input type='text' ref='job_title'/>
          <p>Location:</p><input type='text' ref='job_location'/>
          <p>Resign:</p><input type='text' ref='job_resign'/>
          <p>Compensation:</p><input type='text' ref='job_compensation'/>
          <p>Key Skills:</p><Select
            multi simpleValue
            value={this.state.searchKeywordValues}
            placeholder="Insert keyword(s)"
            options={this.state.keywords}
            onChange={this.handleSelectChange.bind(this)} />
          <p>Description:</p><input type='text' ref='job_description'/>
          <p>Responsabilities:</p><input type='text' ref='job_responsibilities'/>
          <p>Industry:</p><input type='text' ref='job_industry'/>
          <p>Requirements:</p><input type='text' ref='job_requirements'/>
          <p>Years of experience needed:</p><input type='text' ref='job_experience_needed'/>
          <p>Date:</p><input type='text' ref='job_date'/>
          <button type='submit'>Add Job</button>
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
