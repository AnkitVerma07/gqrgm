import React, { Component } from 'react'; 
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

export default class Footer extends Component {

	componentDidMount() {

	 }

	render() {

		return (
		
		    <div id='footerWrapper'>
      <div id='bottombg'>
      </div>
      <div id='footer'>
        <div id='footertop'>
          <div className='f1'>
            <div id='bankingandfinance'>
            </div>
            Trading, Strategy, Research <br/>RQA,Finance,Operations, IT<br/>
            <div id='informationtechnology'>
            </div>
            Software Engineering<br/> Infrastructure, Data & IT<br/>
            <div id='aboutus'>
            </div>
            <a href='about.php'>Who We Are</a><br/>
            <a href='methodology.php'>Methodology</a><br/>
            <a href='execution.php'>Execution</a><br/>
          </div>
          <div className='f2'>
            <div id='newyork'>
            </div>
            +1 212 763 8333
            <div id='houston'>
            </div>
            +1 713 474 2424
            <div id='losangeles'>
            </div>
            +1 310 807 5030
          </div>
          <div className='f3'>
            <div id='map'>
              <div id='marker1' className='marker'>
              </div>
              <div id='marker2' className='marker'>
              </div>
              <div id='marker3' className='marker'>
              </div>
              <div id='marker4' className='marker'>
              </div>
              <div id='marker5' className='marker'>
              </div>
              <div id='marker6' className='marker'>
              </div>
            </div>
            <div id='followus'>
              <a target="_blank" href='http://www.linkedin.com/company/gqr-global-markets/?trk=top_nav_home'>
              <div id='facebook'>
              </div>
              </a>
              <a target="_blank" href='https://twitter.com/GQRGlobalMarket '>
              <div id='twitter'>
              </div>
              </a>
              <a target="_blank" href='http://www.linkedin.com/company/gqr-global-markets/careers?trk=top_nav_careers'>
              <div id='linkedin'>
              </div>
              </a>
              <a href='#' target="_blank">
              <div id='youtube'>
              </div>
              </a>
            </div>
          </div>
          <div className='f4'>
            <div id='london'>
            </div>
            +44 203 141 8000
            <div id='hongkong'>
            </div>
            +852 3678 6738
            <div id='sydney'>
            </div>
                        +61 280 754 730
          </div>
          <div className='f5'>
            <div id='commoditiesandenergy'>
            </div>
            Sales, Trading, Research <br/> Oil, Gas, Power, Renewables<br/>
                        <div id='life_sciences_footer'></div>
                        R&D, Manufacturing, Technology, Biostats, Informatics
            <div id='clientservices'></div>
            <a href='executive.php'>Executive Search</a><br/>
            <a href='contingent.php'>Contingent Search</a><br/>
            <a href='campaign.php'>Campaign Services</a><br/>

          </div>
          </div>
        <div className='footer_divider'></div>
        <div id='footerbottom'>
          <div className='f1'>
            <a href='mailto:careers@gqrgm.com'>Join GQR Global Markets</a>
          </div>
          <div className='f2'>
            <a href='termsofbusinessus.pdf'>US Terms of Business</a>
          </div>
          <div className='f3'>
            &copy; 2016 GQR Global Markets
          </div>
          <div className='f4'>
            <a href='termsofbusinessuk.pdf'>UK Terms of Business</a>
          </div>
          <div className='f5'>
            <a href='privacypolicy.pdf'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>

			);
	}
}