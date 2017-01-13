import { Mongo } from 'meteor/mongo';
const Jobs = new Mongo.Collection('jobs');

if(Meteor.isServer){

Meteor.publish('allJobs', function() {
	return Jobs.find({}, {
		limit: 50,
		sort: {lastUpdated:1}
	});
});

Meteor.methods({

	insertNewJob(job){
		if(!Meteor.userId()){
			throw new Meteor.Error('not logged in');
			console.log('you are not logged in');
		}

	Jobs.insert({
    jobTitle: job.jobTitle,
    location: job.location,
    resign: job.resign,
    compensation: job.compensation,
    keywords: job.keywords,
    description: job.description,
    responsabilities: job.responsabilities,
    industry: job.industry,
    requirements: job.requirements,
    yearsNeeded: job.yearsNeeded,
		createdAt: job.date
			});
}


});
}



export default Jobs;
