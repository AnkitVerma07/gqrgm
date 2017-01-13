import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Peoples from '../../api/Peoples';
import PeopleItem from '../components/PeopleItem';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
var Sticky = require('react-stickynode');
import AccountsUI from '../components/AccountsUI';
import KendoAutoComplete from 'kendo-ui-react-jquery-autocomplete';
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

class People extends Component {

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

  searchKeywords(event) {
		event.preventDefault();
    console.log("Selected: " + this.state.searchKeywordValues);
  }

	callBackRequest(event) {
		event.preventDefault();
	}

	handleSelectChange (searchKeywordValues) {
			this.setState({ searchKeywordValues });
		}

	render() {
		if(!this.props.ready) {
			return (<div>
				Loading
				</div>);
		}
		var peopleNames = ['ankit verma','aakriti shah', 'julian choot'];
		var searchNameArray = [];
		for (i = 0; i < peopleNames.length; i++) {
				var temp = peopleNames[i];
				searchNameArray.push(temp);
		}

		var peopleLocations = ['ankit verma','aakriti shah', 'julian choot'];
		var searchLocationArray = [];
		for (i = 0; i < peopleLocations.length; i++) {
				var temp = peopleLocations[i];
				searchLocationArray.push(temp);
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
                  Search Directory
                </h4>
              </div>
							<p>Name</p>
							<form className='searchbar-lib'>
								<KendoAutoComplete options={{
									 dataSource: searchNameArray,
									 filter: "startswith",
									 placeholder: "Search...",
									 separator: ", "
									}} />
							</form>
							<p>Location</p>
							<form className='searchbar-lib'>
								<KendoAutoComplete options={{
									 dataSource: searchLocationArray,
									 filter: "startswith",
									 placeholder: "Search...",
									 separator: ", "
									}} />
							</form>

							<div className='search_button'>
								<button type='submit'>Search select type(s)</button>
							</div>

            </div>

            <div className='ccontent'>

                <div className='ccontent_header_div'>
                  <h4>
                    People
                  </h4>
                </div>
								<div className='people-lib-container'>
								<div className='people-lib'>
									<div className='people-wrap'>
									{this.props.peoples.map((people) => {
										return <PeopleItem people={people} key={people._id} />
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
	let peopleSub = Meteor.subscribe('allPeople');

	return {
		ready: peopleSub.ready(),
		peoples: Peoples.find().fetch()
	}
}, People);
