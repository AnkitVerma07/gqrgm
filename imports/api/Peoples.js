import { Mongo } from 'meteor/mongo';
const Peoples = new Mongo.Collection('peoples');

if(Meteor.isServer){

Meteor.publish('allPeople', function() {
	return Peoples.find({}, {
		limit: 50,
		sort: {lastUpdated:1}
	});
});

Meteor.methods({

	insertNewPeople(people){
		console.log('api', people);
		if(!Meteor.userId()){
			throw new Meteor.Error('not logged in');
			console.log('you are not logged in');
		}

	Peoples.insert({
		firstName: people.firstName,
		lastName: people.lastName,
		location: people.location,
		resign: people.resign,
		keywords: people.keywords,
		compensation: people.compensation,
		industry: people.industry,
		market: people.market,
		description: people.description,
		phone: people.phone,
		email: people.email,
		fbLink: people.fbLink,
		linkedinLink: people.linkedinLink,
		experienceInt: people.experienceInt
			});
}


});
}



export default Peoples;
