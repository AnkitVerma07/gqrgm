var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class Aboutus extends Component {

render() {
  return (
    <div className="container-aboutus" >

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
          <h4>About GQR</h4>
          <p>GQR is a specialist search advisory and talent acquisition firm. We operate at the leading-edge of human capital where talent is most highly valued and innovation most highly sought. We specialise in delivering rare and uncommon talent to the most challenging sectors.</p>
          <p>We are a collective of expert headhunters and leverage considerable pooled resources through collaborative project teams to deliver the intellectual and muscular capital essential for competitive advantage.</p>
          <p>GQR operates with intelligence, diligence, tenacity and a relentless work ethic. We are proud of our role as ambassadors and trusted advisors to elite institutions and aspirational leaders alike.</p>
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
