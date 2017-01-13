var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class ContingentSearch extends Component {

render() {
  return (
    <div className="container-contingent" >

      <Sticky enabled={true} top={50} bottomBoundary={2000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      </Sticky>

      <div className="parallax3">
      </div>

      <div className='main'>

        <div className='lcontent'>
          <h5>SERVICES</h5>
           <hr className='style-seven'/> 
          <ul className="lcontent-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <Link to='/ExecSearch'>
              <a role="menuitem" tabIndex="-1">Executive Search</a>
              </Link>
            </li>
             <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/ContingentSearch'>
              <a role="menuitem" tabIndex="-1">Contingent Search</a>
              </Link>
            </li>
             <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/CampaignServices'>
              <a role="menuitem" tabIndex="-1">Campaign Services</a>
              </Link>
            </li>
             <hr className='style-seven'/>  
          </ul>
        </div>

        <div className='ccontent'>
          <h4>Contingent Search</h4>
          <p>Through our advanced specialisation and relentless proactivity we are able to leverage our extensive networks to provide a rapidly deployable portfolio of suitable individuals for Permanent, Interim and Contract mandates.</p>
          <p>We continually extend our market expertise, capturing, developing and utilising accurate, up-to-the-moment information on people, markets and competitor-specific data. Continuous compilation and revision of our proprietary, global network and effective data warehousing and mining forms the foundation of our competitive advantage in accelerating your search. Our expertise enables us to interpret, analyse, source, select, screen and shortlist before our competitors have even completed their first talent map.</p>
        </div>

        <div className='rcontent'>
          <h5>OUR OFFICES</h5>
          <ul className='offices-list'>
            <li>London</li>
             <hr className='style-five'/> 
            <li>Hong Kong</li>
             <hr className='style-five'/> 
            <li>Sydney</li>
             <hr className='style-five'/> 
            <li>Los Angeles</li>
             <hr className='style-five'/> 
            <li>Houston</li>
             <hr className='style-five'/> 
            <li>New York</li>
             <hr className='style-five'/> 
          </ul>
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
