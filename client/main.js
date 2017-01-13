import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from '../imports/client/config/routes';

Meteor.startup(() => {
	render(routes, document.getElementById('render-target'));
});


