var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class CampaignServices extends Component {

render() {
  return (
    <div className="container-campaign" >

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
          <h4>Campaign Services</h4>
          <p>Our Employer Campaign Services include bespoke research and strategic services. Our deep expertise affords an unparalleled vantage point from which to drive informed staffing strategies through superior market insights and actionable sector specific intelligence.</p>
          <div className='execsearch-list'>
          <div className='execsearch-list1'>
          <p>Strategic Services:</p>
          <ul>
            <li>Employer Marketing</li>
            <li>Managed Advertising</li>
            <li>Graduate Recruiting Programs</li>
          </ul>
          </div>
          <div className='execsearch-list2'>
          <p>Research & Advisory:</p>
          <ul>
            <li>Bespoke Research</li>
            <li>Outplacement Services</li>
            <li>Recruitment Process Outsourcing</li>
          </ul>
          </div>
          </div>
          <p>We are able to leverage extensive experience, expertise and purchasing power to design, orchestrate and execute a suite of managed campaign services. For more information about our bespoke campaign services please contact Simon Kenyon, Head of Global Client Services.</p>
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
