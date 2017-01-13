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
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const STATES = require('../../data/constantObjects/states');

class Portal extends Component {
constructor(props) {
	super(props);
	this.state = {
		country: 'AU',
		selectValue: ' ',
		sector: 'technology',
		clearable: true
	};
}
componentWillMount(){
		this.setState({
			keywords: [
							{ label: 'Chocolate', value: 'chocolate' },
							{ label: 'Vanilla', value: 'vanilla' },
							{ label: 'Strawberry', value: 'strawberry' },
							{ label: 'Caramel', value: 'caramel' },
							{ label: 'Cookies and Cream', value: 'cookiescream' },
							{ label: 'Peppermint', value: 'peppermint' },
						],
			searchKeywordValues:[]
		});
	}
	propTypes: {
		label: React.PropTypes.string
	}
defaultProps () {
		return {
			label: 'States:',

		};
	}
updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
	}
  searchKeywords(event) {
		event.preventDefault();
    console.log("Selected: " + this.state.searchKeywordValues);
  }

	switchCountry (event) {
		var newCountry = event.target.value;
		console.log('Country changed to ' + newCountry);
		this.setState({
			country: newCountry,
			selectValue: null
		});
	}

	switchSector (event) {
		var newSector = event.target.value;
		console.log('Country changed to ' + newSector);
		this.setState({
			sector: newSector
		});
	}
	handleSectorChange (event){
		console.log(event.target.value);
	}
	callBackRequest(event) {
		event.preventDefault();
	}

	handleSelectChange (searchKeywordValues) {
			this.setState({ searchKeywordValues });
		}

	render() {
		var options = STATES[this.state.country];
		if(!this.props.ready) {
			return (<div>
				Loading
				</div>);
		}

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
              <div className='lcontent_header_div'>
                <h4>
                  Filter Vacancies
                </h4>
              </div>
              <div className='keyword_search'>
								<form className='keyword-search-submit' onSubmit={this.searchKeywords.bind(this)}>
								<p>keyword search</p>
									<Select
										multi simpleValue
										value={this.state.searchKeywordValues}
										placeholder="Select keyword(s)"
										options={this.state.keywords}
										onChange={this.handleSelectChange.bind(this)} />
								</form>
              </div>
							<div className='location_search'>
							<p>LOCATION</p>
								<Select ref="stateSelect"
									autofocus options={options}
									simpleValue
									clearable={this.state.clearable}
									 name="selected-state"
										value={this.state.selectValue}
										onChange={this.updateValue.bind(this)}  />
								<div className="checkbox-list">
									<label className="checkbox">
										<input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry.bind(this)}/>
										<span className="checkbox-label">Americas</span>
									</label>
									<label className="checkbox">
										<input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry.bind(this)}/>
										<span className="checkbox-label">EMEA</span>
									</label>
									<label className="checkbox">
										<input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry.bind(this)}/>
										<span className="checkbox-label">APAC</span>
									</label>
								</div>
							</div>
							<div className='sector_search'>
								<p>SECTOR</p>
									  <input onChange={this.handleSectorChange.bind(this)} type="checkbox" name="fruit" value="bankingandfinance" />Banking & Finance
									  <input onChange={this.handleSectorChange.bind(this)} type="checkbox" name="fruit" value="technology" />Technology
									  <input onChange={this.handleSectorChange.bind(this)} type="checkbox" name="fruit" value="EnergyAEng" />Energy & Engineering
							</div>
							<div className='market_search'>
								<p>Market</p>
									<Select
										multi simpleValue
										value={this.state.searchKeywordValues}
										placeholder="Select market(s)"
										options={this.state.keywords}
										onChange={this.handleSelectChange.bind(this)} />
							</div>
							<div className='function_search'>
								<p>Functions</p>
									<Select
										multi simpleValue
										value={this.state.searchKeywordValues}
										placeholder="Select function(s)"
										options={this.state.keywords}
										onChange={this.handleSelectChange.bind(this)} />
							</div>
							<div className='salary_range'>
								<p>Salary Range</p>
									<div className='range_bar'>
										<Slider />
									</div>
							</div>

							<div className='search_button'>
								<button type='submit'>Search Jobs</button>
							</div>

            </div>

            <div className='ccontent'>

                <div className='ccontent_header_div'>
                  <h4>
                    Current Vacancies
                  </h4>
                </div>
								<div className='portal-lib-container'>
								<div className='portal-lib'>
									<div className='portal-wrap'>
									{this.props.jobs.map((job) => {
										return <Job job={job} key={job._id} />
									})}
									</div>
								</div>
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

export default createContainer( () => {
	let jobSub = Meteor.subscribe('allJobs');

	return {
		ready: jobSub.ready(),
		jobs: Jobs.find().fetch()
	}
}, Portal);
