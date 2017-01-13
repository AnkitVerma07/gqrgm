var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react';
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import PeopleSettingAdd from '../components/PeopleSettingAdd';
import PeopleSettingSearch from '../components/PeopleSettingSearch';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class PeopleSettings extends Component {

  constructor(props) {
	super(props);
	this.state = {
      addPeopleBoolean: false,
      searchPeopleBoolean: false
	};
}
  addPeopleComponent(){
    this.setState({addPeopleBoolean: !this.state.addPeopleBoolean});
    if(this.state.searchPeopleBoolean){
      this.setState({searchPeopleBoolean: false});
    }
  }
  searchPeopleComponent(){
      this.setState({searchPeopleBoolean: !this.state.searchPeopleBoolean});
      if(this.state.addPeopleBoolean){
        this.setState({addPeopleBoolean: false});
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
            People Settings
          </h1>
          <div className='people_admin_nav'>
            <div className='add_people_button'>
              <button type='submit' onClick={this.addPeopleComponent.bind(this)}>Add New People</button>
            </div>
            <div className='search_people_button'>
              <button type='submit' onClick={this.searchPeopleComponent.bind(this)}>Look Up People</button>
            </div>
          </div>

        </header>

        <div className='onclick_add_people'>
          {
            this.state.addPeopleBoolean
            ? <PeopleSettingAdd />
            : null
          }
        </div>

        <div className='onclick_search_people'>
          {
            this.state.searchPeopleBoolean
            ? <PeopleSettingSearch />
            : null
          }
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
