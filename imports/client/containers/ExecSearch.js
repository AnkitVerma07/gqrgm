var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class ExecSearch extends Component {

render() {
  return (
    <div className="container-exec" >

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
          <h4>Executive Search</h4>
          <p>GQR is a specialist search advisory and talent acquisition firm. We provide a full suite of solutions tailored to deliver upon strategic objectives.</p>
          <p>We deploy a comprehensive and uncompromised methodology to secure the most qualified human capital available globally. We are careful to understand your requirements and committed to providing an exceptional level of service.</p>
          <div className='execsearch-list'>
          <div className='execsearch-list1'>
          <ul>
            <li>Advanced Market Specialisation</li>
            <li>Proactive Talent Acquisition</li>
            <li>Proprietary Intelligence</li>
          </ul>
          </div>
          <div className='execsearch-list2'>
          <ul>
            <li>Accurate Interpretation</li>
            <li>Effective Representation</li>
            <li>Confidentiality and Discretion</li>
          </ul>
          </div>
          </div>
          <p>For more information about our Contingent Search services please contact Simon Kenyon, Head of Global Client Services.</p>
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
