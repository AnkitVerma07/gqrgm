var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class LifeSciences extends Component {

render() {
  return (
    <div className="container" >

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
          <h4>Life Sciences</h4>
          <p>GQR Life Sciences represents a global portfolio of Biotechnology, Pharmaceuticals and Medical Device companies. In a constantly evolving market, our deep market specialization and proactive talent acquisition methodology, accelerates the delivery of highly skilled and niche candidates throughout the Life Sciences domain. Utilizing our cross-industry network we are able to deliver on traditional life sciences skill sets, as well as cater to the competitive demand for Data Science and Technology talent.</p>
          <p>GQR continually revise and extend our market expertise, developing and utilizing accurate, up-to-the-moment information on people, markets and competitor-specific data.</p>
          <p>GQR Life Sciences comprises four core disciplines:</p>
          <ul>
            <li>
              <p>Biometrics & Technology</p>
              <p>Biostatisticians; Bioinformatics: Data Scientists; Software Developers; Business Intelligence; Data Warehousing and Management; Big Data Engineers; Database Developers</p>
            </li>
            <li>
              <p>R&D</p>
              <p>Clinical, CMC, Marketing, Promotions</p>
            </li>
            <li>
              <p>Medical & Clinical</p>
              <p>Clinical Development, Medical Affairs, Drug Safety/Pharmacovigilance, Clinical Ops, MSL’s, Medical Communications</p>
            </li>
            <li>
              <p>HEOR</p>
              <p>Health Economics, Outcomes Research, Market Access, Pricing & Reimbursement, Epidemiology</p>
            </li>
          </ul>
          <p>Each specialized business unit is augmented by dedicated research and resourcing teams.For more information, please contact us at lifesciences@gqrgm.com</p>
        </div>

        <div className='rcontent'>
          <h5>PRACTICE AREAS</h5>
          <ul className='offices-list'>
            <li>Senior Appointments</li>
            <hr className='style-five'/> 
            <li>Manufacturing & Controls</li>
            <hr className='style-five'/> 
            <li>Regulatory Affairs & Medical Liaisons</li>
            <hr className='style-five'/> 
            <li>Research & Development</li>
            <hr className='style-five'/> 
            <li>Clinical Research & Trials</li>
            <hr className='style-five'/> 
            <li>Pharmacovigilance & Drug Safety</li>
            <hr className='style-five'/> 
            <li>Data Science</li>
            <hr className='style-five'/> 
            <li>BioStatistics</li>
            <hr className='style-five'/> 
            <li>Informatics</li>
            <hr className='style-five'/> 
            <li>Engineering</li>
            <hr className='style-five'/> 
            <li>Diagnostics & Medical Devices</li>
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
