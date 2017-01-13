var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const STATES = require('../../data/constantObjects/states');


export default class PeopleSettingSearch extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		country: 'AU',
  		selectValue: ' ',
  		sector: 'technology',
  		clearable: true
  	};
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
		return (

      <div className='people_setting_search_content'>
        <div className='lcontent_header_div'>
          <h4>
            Search For People
          </h4>
        </div>
        <div className='keyword_search'>
          <form className='keyword-search-submit' onSubmit={this.searchKeywords.bind(this)}>
          <p>Full Name Look Up</p>
            <Select
              multi simpleValue
              value={this.state.searchKeywordValues}
              placeholder="Select keyword(s)"
              options={this.state.keywords}
              onChange={this.handleSelectChange.bind(this)} />
          </form>
        </div>
        <div className='location_search'>
        <p>Look Up by Location</p>
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
          <p>Look up By Sector</p>
              <input onChange={this.handleSectorChange.bind(this)} type="checkbox" name="fruit" value="bankingandfinance" />Banking & Finance
              <input onChange={this.handleSectorChange.bind(this)} type="checkbox" name="fruit" value="technology" />Technology
              <input onChange={this.handleSectorChange.bind(this)} type="checkbox" name="fruit" value="EnergyAEng" />Energy & Engineering
        </div>
        <div className='market_search'>
          <p>Look up by Market</p>
            <Select
              multi simpleValue
              value={this.state.searchKeywordValues}
              placeholder="Select market(s)"
              options={this.state.keywords}
              onChange={this.handleSelectChange.bind(this)} />
        </div>
        <div className='function_search'>
          <p>Look up by Functions</p>
            <Select
              multi simpleValue
              value={this.state.searchKeywordValues}
              placeholder="Select function(s)"
              options={this.state.keywords}
              onChange={this.handleSelectChange.bind(this)} />
        </div>
        <div className='salary_range'>
          <p>Look up Salary Range</p>
            <div className='range_bar'>
              <Slider />
            </div>
        </div>

        <div className='search_button'>
          <button type='submit'>Search Jobs</button>
        </div>

      </div>
		)
	}
}
