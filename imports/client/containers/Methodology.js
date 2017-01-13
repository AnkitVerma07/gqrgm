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
    <div className="container" >

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
          <h4>Methodology</h4>
          <p>GQR represents the next generation in talent acquisition. Our methodology is the result of a designed evolution. We excel in the art and science of recruiting, blending classic search architecture with contemporary execution strategies.</p>
          <ul>
            <li>Deep Market Specialisation</li>
            <li>Proactive Talent Acquisition</li>
            <li>Global Market Coverage</li>
          </ul>
          <p>Advanced specialisation, headhunting and global access form the centrepiece of our uncompromised approach; devised to ensure that we are able to interpret accurately, resource comprehensively, represent effectively and execute with confidence, speed and precision.</p>
          <p>We do not seek to be all things to all people; simply the very best within our field.</p>
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

      <div className="parallax3">
      </div>
      
      <div className='footer'>
        <Footer />
      </div>
      
    </div>

      );
  }
}
