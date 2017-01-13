var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class EnergyAEng extends Component {

render() {
  return (
    <div className="container-energyAeng" >

      <Sticky enabled={true} top={50} bottomBoundary={2000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      </Sticky>

      <div className="parallax3">
      </div>

      <div className='main'>

        <div className='lcontent'>
          <h5>MARKET EXPERTISE</h5>
          <hr className='style-seven'/> 
          <ul className="lcontent-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <Link to='/BankingAFinance'>
              <a role="menuitem" tabIndex="-1">Banking & Finance</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/EnergyAEng'>
              <a role="menuitem" tabIndex="-1">Engery & Engineering</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/IT'>
              <a role="menuitem" tabIndex="-1">Information & Technology</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/LifeSciences'>
              <a role="menuitem" tabIndex="-1">Life Sciences</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
          </ul>
        </div>

        <div className='ccontent'>
          <h4>Engery & Engineering</h4>
          <p>Our Energy & Engineering practice leverages the specialist expertise and execution capabilities of a team of dedicated agents.</p>
          <p>We approach the industry from an uncommon vantage point, adept in providing a spectrum of Financial, Technical, Commercial and Operational expertise. We posses intimate knowledge across the energy cycle and specialise in the following areas:</p>
          <ul>
            <li>Global Markets</li>
            <li>Oil & Gas</li>
            <li>Minerals & Mining</li>
            <li>Renewables, Energy & Utilities</li>
          </ul>
          <p>To explore your options with an accountable professional please contact us.</p>
        </div>

        <div className='rcontent'>
          <h5>PRACTICE AREAS</h5>
          <ul className='offices-list'>
            <li>Senior Appointments</li>
            <hr className='style-five'/> 
            <li>Sales & Trading</li>
            <hr className='style-five'/> 
            <li>Structuring & Analytics</li>
            <hr className='style-five'/> 
            <li>Subsurface Engineering</li>
            <hr className='style-five'/> 
            <li>Geology & Geophysics</li>
            <hr className='style-five'/> 
            <li>Subsea Engineering</li>
            <hr className='style-five'/> 
            <li>Drilling & Completions</li>
            <hr className='style-five'/> 
            <li>Well Engineering</li>
            <hr className='style-five'/> 
            <li>Process Engineering</li>
            <hr className='style-five'/> 
            <li>Technical Services</li>
            <hr className='style-five'/> 
            <li>Topside/ QHSE</li>
            <hr className='style-five'/> 
            <li>Power Generation</li>
            <hr className='style-five'/> 
            <li>Power & Transmission</li>
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
