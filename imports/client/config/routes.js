var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
import Library from '../containers/Library';
import Main from '../containers/Main';
import Home from '../containers/Home';
import Aboutus from '../containers/Aboutus';
import Methodology from '../containers/Methodology';
import Execution from '../containers/Execution';
import BankingAFinance from '../containers/BankingAFinance';
import EnergyAEng from '../containers/EnergyAEng';
import IT from '../containers/IT';
import LifeSciences from '../containers/LifeSciences';
import ExecSearch from '../containers/ExecSearch';
import ContingentSearch from '../containers/ContingentSearch';
import CampaignServices from '../containers/CampaignServices';
import Contact from '../containers/Contact';
import LibrarySettings from '../containers/LibrarySettings';
import Portal from '../containers/Portal';
import PortalSettings from '../containers/PortalSettings';
import JobDescription from '../containers/JobDescription';
import People from '../containers/People';
import PeopleSettings from '../containers/PeopleSettings';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Library' component={Library} />
      <Route path='Aboutus' component={Aboutus} />
      <Route path='Methodology' component={Methodology} />
      <Route path='Execution' component={Execution} />
      <Route path='BankingAFinance' component={BankingAFinance} />
      <Route path='EnergyAEng' component={EnergyAEng} />
      <Route path='IT' component={IT} />
      <Route path='LifeSciences' component={LifeSciences} />
      <Route path='ExecSearch' component={ExecSearch} />
      <Route path='ContingentSearch' component={ContingentSearch} />
      <Route path='CampaignServices' component={CampaignServices} />
      <Route path='Contact' component={Contact} />
      <Route path='Library_settings' component={LibrarySettings} />
      <Route path='Portal' component={Portal} />
      <Route path='Portal_settings' component={PortalSettings} />
      <Route path='People' component={People} />
      <Route path='People_settings' component={PeopleSettings} />
      <Route path='Job_description/:jobId' component={JobDescription} />
    </Route>
  </Router>
);

module.exports = routes;
