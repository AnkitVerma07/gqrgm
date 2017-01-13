import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Items from '../../api/Items';
import Item from '../components/Item';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
var Sticky = require('react-stickynode');
import KendoAutoComplete from 'kendo-ui-react-jquery-autocomplete';
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

class Library extends Component {
	componentDidMount(){

		this.setState({
			data: Items.find().fetch()
		});
	}

	addItems(event) {
		event.preventDefault();
		const link = this.refs.link.value.trim();
		if(link != '' ){
		  Meteor.call('insertNewItem',link, (err, res) => {
		  	if(!err){
		  		this.refs.link.value = '';
		  	}
		  });
		}
	}

	render() {
		if(!this.props.ready) {
			return (<div>
				Loading
				</div>);
		}

			var searchData = this.props.items;
			var searchDataArray = [];
			for (i = 0; i < searchData.length; i++) {
    			var temp = searchData[i].name;
					searchDataArray.push(temp);
			}
		return (

		<div className='container-lib'>

		<Sticky enabled={true}  bottomBoundary={5000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      	</Sticky>

      <div className="parallax3">
      </div>


			<div className='main-content'>
				<header>
					<form className='searchbar-lib'>
						<KendoAutoComplete options={{
							 dataSource: searchDataArray,
							 filter: "startswith",
							 placeholder: "Search...",
							 separator: ", "
					 		}} />
		 			</form>
				</header>
				<main>

					<div className='contentType-lib'>
						<div className='contentType-wrap'>
						{this.props.items.map((item) => {
							return <Item item={item} key={item._id} />
						})}
						</div>
					</div>

					<div className='item-lib-container'>
					<div className='item-lib'>
						<div className='items-wrap'>
						{this.props.items.map((item) => {
							return <Item item={item} key={item._id} />
						})}
						</div>
					</div>
					</div>

				</main>
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
	let itemsSub = Meteor.subscribe('allItems');
	return {
		ready: itemsSub.ready(),
		items: Items.find().fetch()
	}
}, Library);
