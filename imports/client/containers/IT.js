var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class IT extends Component {

render() {
  return (
    <div className="container-it" >

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
          <h4>Technology</h4>
          <p>The Information Technology division recruits for cutting-edge software, data and computer-driven organisations, through Financial Services, Big Data, Internet, Mobile, eCommerce, Gaming and Digital Media. We represent a select portfolio of organisations ranging from multinational financial institutions to early stage high-tech start-ups.</p>
          <p>We operate in dedicated sector teams focused into highly specialised functional verticals. Our specialist coverage include:</p>
          <ul>
            <li>Software Engineering, Programming & Development</li>
            <li>Digital, Web, Mobile & Product Development</li>
            <li>Infrastructure, Systems, Networks & Support</li>
            <li>ERP, CRM and Business Intelligence</li>
            <li>Storage, Virtualisation & Cloud</li>
            <li>Data & Predictive Analytics</li>
          </ul>
        </div>

        <div className='rcontent'>
          <h5>PRACTICE AREAS</h5>
          <ul className='offices-list'>
            <li>Senior Appointments</li>
            <hr className='style-five'/> 
            <li>Software Engineering</li>
            <hr className='style-five'/> 
            <li>Application Development</li>
            <hr className='style-five'/> 
            <li>Network & Security</li>
            <hr className='style-five'/> 
            <li>Support, QA & Testing</li>
            <hr className='style-five'/> 
            <li>Storage & Virtualisation</li>
            <hr className='style-five'/> 
            <li>Data Analytics</li>
            <hr className='style-five'/> 
            <li>Business Intelligence</li>
            <hr className='style-five'/> 
            <li>Data Warehousing</li>
            <hr className='style-five'/> 
            <li>Business Analysis</li>
            <hr className='style-five'/> 
            <li>Projects & Change</li>
            <hr className='style-five'/> 
            <li>Enterprise Solutions</li>
            <hr className='style-five'/> 
            <li>Financial Technology</li>
            <hr className='style-five'/> 
            <li>Digital Media</li>
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
