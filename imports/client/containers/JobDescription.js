import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KendoAutoComplete from 'kendo-ui-react-jquery-autocomplete';
import { createContainer } from 'meteor/react-meteor-data';
import Jobs from '../../api/Jobs';
import Job from '../components/Job';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
var Sticky = require('react-stickynode');
import Select from 'react-select';
import AccountsUI from '../components/AccountsUI';
import 'react-select/dist/react-select.css';

class JobDescription extends Component {

	componentWillMount(){

	}
	callBackRequest(event) {
		event.preventDefault();
	}
	render() {
		return (

		<div className='container-portal'>

		<Sticky enabled={true}  bottomBoundary={5000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      	</Sticky>

      <div className="parallax3">
      </div>

      <div className='main'>

            <div className='lcontent'>
              <div className='filter_vacancies'>
                <h4>
                  All Vacancies
                </h4>
              </div>


            </div>

            <div className='ccontent'>

                <div className='job_description'>
                  <h4>
                    Job Description
                  </h4>
                </div>
								<div className='job_title'>
									<h4>
                    {this.props.job.jobTitle}
                  </h4>
								</div>
								<div className='job_des_second_row'>
									<p>Date</p><p>{this.props.job.createdAt}</p>
									<p>Location</p><p>{this.props.job.location}</p>
									<p>Compensation</p><p>{this.props.job.compensation}</p>
								</div>
								<div className='job_skills_third_row'>
									<p>Key Skills</p><p>{this.props.job.keywords}</p>
								</div>
								<div className='job_description_fourth_row'>
									<p>Description</p><p>{this.props.job.description}</p>
								</div>
								<div className='job_responsabilities_fifth_row'>
									<p>Responsabilities</p><p>{this.props.job.responsabilities}</p>
								</div>
								<div className='job_requirements_fifth_row'>
									<p>Requirements</p><p>{this.props.job.requirements}</p>
								</div>
								<div className='job_description_legal'>
									<p>While a resume is preferable we also welcome tentative enquiries from well-qualified persons. To speak with an agent please contact one of our regional offices. Utmost confidentiality and discretion is assured.</p>
								</div>
								<div className='job_description_apply_job'>
									<button type='submit'>Add Job</button>
								</div>
								<div className='social_share'>
									<a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
										 <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
								 </a>
								</div>
            </div>

            <div className='rcontent'>

            <div className='callback_request'>
              <h4>
                Callback Request
              </h4>
            </div>
						<div className='callback_request_form'>
							<form className='request_form' onSubmit={this.callBackRequest.bind(this)}>
								<p>FULL NAME</p><input type='text' ref='name_request_form'/>
								<p>TELEPHONE NUMBER</p><input type='text' ref='phone_request_form'/>
								<p>EMAIL ADDRESS</p><input type='text' ref='email_request_form'/>
								<button type='submit'>Request Callback</button>
							</form>
						</div>
						<div className='login'>
									<AccountsUI />
							</div>
            </div>

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

export default createContainer( (props) => {
	return {
		job: Jobs.findOne({_id: props.params.jobId})
	}
}, JobDescription);
