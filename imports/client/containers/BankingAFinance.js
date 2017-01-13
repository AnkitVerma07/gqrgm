var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class BankingAFinance extends Component {

render() {
  return (
    <div className="container-bankingAfinance" >

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
          <h4>Banking & Finance</h4>
          <p>GQR Global Markets’ Banking & Finance teams operate in dedicated market focused teams and functional specialisms.</p>
          <p>We represent a select portfolio of elite financial organizations and deliver the most suitably qualified professionals unbounded by jurisdiction or time zone. Our specialist areas of coverage include:</p>
          <ul>
            <li>Global Markets & Capital Management</li>
            <li>Private Banking & Wealth Management</li>
            <li>Quantitative Research & Analytics</li>
            <li>Risk Management & Insurance</li>
            <li>Technology, Finance & Operations</li>
            <li>Capital Markets & Corporate Finance</li>
          </ul>
          <p>For all enquiries please contact us.</p>
        </div>

        <div className='rcontent'>
          <h5>PRACTICE AREAS</h5>
          <ul className='offices-list'>
            <li>Executive & Leadership</li>
            <hr className='style-five'/> 
            <li>Global Markets</li>
            <hr className='style-five'/> 
            <li>Capital Management</li>
            <hr className='style-five'/> 
            <li>Investment Management</li>
            <hr className='style-five'/> 
            <li>Wealth Management</li>
            <hr className='style-five'/> 
            <li>Electronic Trading</li>
            <hr className='style-five'/> 
            <li>Quantitative Research</li>
            <hr className='style-five'/> 
            <li>Risk Management</li>
            <hr className='style-five'/> 
            <li>Insurance</li>
            <hr className='style-five'/> 
            <li>Finance</li>
            <hr className='style-five'/> 
            <li>Operations</li>
            <hr className='style-five'/> 
            <li>Technology</li>
            <hr className='style-five'/> 
            <li>Investment Banking</li>
            <hr className='style-five'/> 
            <li>Corporate Finance</li>
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
