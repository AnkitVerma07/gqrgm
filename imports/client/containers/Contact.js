var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Sticky = require('react-stickynode');
import React, { Component } from 'react'; 
import AccountsUI from '../components/AccountsUI';
import Navigation from '../components/Navigation';
import DropDown from '../components/DropDown';
import Footer from '../components/Footer';

export default class Contact extends Component {

contactEmail(event){
    event.preventDefault();
    console.log('firstname', this.refs.firstName.value.trim());
    

}

render() {
  return (
    <div className="container-contact" >

      <Sticky enabled={true} top={50} bottomBoundary={2000}>
        <div className='navigationbar' >
        <Navigation />
        </div>
      </Sticky>

      <div className="parallax3">
      </div>

      <div className='main'>

        <div className='lcontent'>
          <h5>DIRECTIONS</h5>
          <hr className='style-seven'/> 
          <ul className="lcontent-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <h6>NEW YORK</h6>
              <p>360 Madison Avenue,</p>
              <p>New York, NY, 10017</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>CHICAGO</h6>
              <p>155 North Wacker Drive,</p>
              <p>Chicago, IL 60606</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>SAN FRANCISCO</h6>
              <p>101 California Street,</p>
              <p>San Francisco, CA 94111</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>LOS ANGELES</h6>
              <p>631 Wilshire Boulevard,</p>
              <p>Santa Monica, CA 90401</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>BOSTON</h6>
              <p>745 Atlantic Avenue,</p>
              <p>Boston, MA 02111</p>
            </li>
            <hr className='style-seven'/> 
          </ul>
        </div>

        <div className='ccontent'>
          <h4>Contact Us</h4>
          <form className='new-items' onSubmit={this.contactEmail.bind(this)}>
            <div className='firstnamediv'>
            <p>FIRST NAME</p>
            <input type='text' ref='firstName'/>
            </div>
            <div className='lastnamediv'>
            <p>LAST NAME</p>
            <input type='text' ref='lastName'/>
            </div>
            <div className='emaildiv'>
            <p>EMAIL ADDRESS</p>
            <input type='text' ref='email'/>
            </div>
            <div className='phonediv'>
            <p>TELEPHONE NUMBER</p>
            <input type='text' ref='phone'/>
            </div>
            <div className='filediv'>
            <p>ATTACH FILE</p>
            <div className='attachfileinput'>
            <input type='file' ref='file'/>
            </div>
            </div>
            <div className='enquirydiv'>
            <p>NATURE OF ENQURY</p>
            <select ref="natureText">
              <option value=" ">--Please Select--</option>
              <option value="resume">Submit Resume</option>
              <option value="referral">Submit Referral</option>
              <option value="call back">Call-back Request</option>
              <option value="media">Media Enquiry</option>
              <option value="working at gqr">Working at GQR</option>
              <option value="compliment/complaint">Compliment/Complaint</option>
              <option value="other">Other Enquiry</option>
            </select>
            </div>
            <div className='messagediv'>
            <p>ADDITIONAL MESSAGE</p>
            <textarea ref='text' cols='40' rows='5'></textarea>
            </div>
            <button type='submit'>Submit Message</button>
          </form>
        </div>

        <div className='rcontent'>
          <h5>DIRECTIONS</h5>
          <hr className='style-seven'/> 
          <ul className="lcontent-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <h6>LONDON</h6>
              <p>Westminster Tower,</p>
              <p>London, SE1 7SP</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>HONG KONG</h6>
              <p>Two Exchange Square, </p>
              <p>Hong Kong, HK</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>SYDNEY</h6>
              <p>1 Macquarie Place,</p>
              <p>Sydney, NSW 2000</p>
            </li>
            <hr className='style-seven'/> 
            <li role="presentation">
              <h6>HOUSTON</h6>
              <p>2800 Post Oak Blvd, </p>
              <p>Houston, TX 77056</p>
            </li>
            <hr className='style-seven'/> 
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
