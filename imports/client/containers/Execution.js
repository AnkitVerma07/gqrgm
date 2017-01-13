var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class Methodology extends Component {

render() {
  return (
    <div className="container-execution" >

      <Sticky enabled={true} top={50} bottomBoundary={2000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      </Sticky>

      <div className="parallax3">
      </div>

      <div className='main' >

        <div className='lcontent'>
          <h5>ABOUT</h5>
          <hr className='style-seven'/> 
          <ul className="lcontent-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <Link to='/Aboutus'>
              <a role="menuitem" tabIndex="-1" href="#">About GQR</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/Methodology'>
              <a role="menuitem" tabIndex="-1" href="#">Methodology</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <Link to='/Execution'>
              <a role="menuitem" tabIndex="-1" href="#">Execution</a>
              </Link>
            </li>
            <hr className='style-seven'/> 
          </ul>
        </div>

        <div className='ccontent'>
          <h4>Execution</h4>
          <p>Our connections, friendships, unique partnerships and joint-ventures stand in testament to our reputation, history and permanence.</p>
          <p>Ultimately it is our proven track-record that speaks volumes of who we truly are. To get in touch with an extensively networked, well informed and accountable professional partner please contact us.</p>
        </div>

        <div className='rcontent'>
          <h5>OUR OFFICES</h5>
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


      <div className='footer'>
        <Footer />
      </div>
      
    </div>

      );
  }
}
