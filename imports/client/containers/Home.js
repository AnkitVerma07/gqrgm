var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DropDown from '../components/DropDown';

export default class Home extends Component {
  componentDidMount(){

  }

render() {
  return (
    <div className="container-home" >

      <Sticky enabled={true} bottomBoundary={5000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      </Sticky>

      <div className="parallax">

      </div>

      <div className='main' >
        <div className='tcontent'>
          <h1>
              Welcome to GQR Global Markets
          </h1>
        </div>
        <div className='lcontent'>
          <h4>MARKET EXPERTISE</h4>
          <hr className='style-seven'/>
          <ul className="lcontent-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <Link to='/BankingAFinance'>
              <a role="menuitem" tabIndex="-1" href="#">Banking & Finance</a>
              </Link>
            </li>
            <hr className='style-seven'/>
            <li role="presentation">
              <Link to='/EnergyAEng'>
              <a role="menuitem" tabIndex="-1" href="#">Engery & Engineering</a>
              </Link>
            </li>
            <hr className='style-seven'/>
            <li role="presentation">
              <Link to='/IT'>
              <a role="menuitem" tabIndex="-1" href="#">Information & Technology</a>
              </Link>
            </li>
            <hr className='style-seven'/>
            <li role="presentation">
              <Link to='/LifeSciences'>
              <a role="menuitem" tabIndex="-1" href="#">Life Sciences</a>
              </Link>
            </li>
            <hr className='style-seven'/>
          </ul>
        </div>

        <div className='ccontent'>
          <h2>GQR Global Markets</h2>
          <div className='mcontent'>
          <p> GQR Global Markets is an award-winning international Banking & Finance, Energy & Engineering, Information Technology and Life Sciences search specialist. </p>
          <p> We unite the most talented people with the most pioneering organisations throughout the Americas, Europe and Asia-Pacific to find the very best opportunities wherever they may be located. </p>
          </div>
      </div>

        <div className='rcontent'>
          <h4>OUR OFFICES</h4>
          <ul className='offices-list'>
            <li>New York (Americas)</li>
            <hr className='style-five'/>
            <li>Houston  (Americas)</li>
            <hr className='style-five'/>
            <li>Los Angeles  (Americas)</li>
            <hr className='style-five'/>
            <li>London (EMEA)</li>
            <hr className='style-five'/>
            <li>Hong Kong (APAC)</li>
            <hr className='style-five'/>
            <li>Sydney (APAC)</li>
            <hr className='style-five'/>
          </ul>
        </div>
      </div>
      <div className="parallax2"></div>

      <div className='footer'>
        <Footer />
      </div>


    </div>

      );
  }
}
