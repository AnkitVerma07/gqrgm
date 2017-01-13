import { Mongo } from 'meteor/mongo';
var Xray = require('x-ray');
const Items = new Mongo.Collection('items');

if(Meteor.isServer){

Meteor.publish('allItems', function() {
	return Items.find({}, {
		limit: 50,
		sort: {lastUpdated:1}
	});
});

Meteor.publish('userItems', function(){
	return Items.find({user: this.userId});
});

Meteor.methods({

	insertNewExternalItem(link){
		check(link, String);

		if(!Meteor.userId()){
			throw new Meteor.Error('not logged in');
			console.log('you are not logged in');
		}
		var xray = new Xray();

		var tname;
		var i = 0;
		xray(link, 'title')(Meteor.bindEnvironment(function(err, title) {
  			tname = title;
  			insert();
		}));

		var image;
		xray(link, 'img@src')(Meteor.bindEnvironment(function(err, img) {
  			image = img;
  			insert();
		}));

		var header;
		xray(link, 'h1')(Meteor.bindEnvironment(function(err, h1) {
  			header = h1;
  			insert();
		}));

		function insert() {
 			 if (i > 1 && tname != null && image != null && header != null) {
 			 	Items.insert({
    				url: link,
    				name: tname,
    				bio: header,
    				image: image,
    				likes: 0
  					});
 			 }
  		else {
  			i++;
  			 }
		}

	},
	insertNewInternalItem(insertInternal){
		if(!Meteor.userId()){
			throw new Meteor.Error('not logged in');
			console.log('you are not logged in');
		}

	Items.insert({
			url: insertInternal.internal_link,
			name: insertInternal.title,
			bio: insertInternal.description,
			image: insertInternal.image,
			likes: 0,
			author: insertInternal.author,
			author_img: insertInternal.author_img
			});
},
	voteOnItem(item) {
	check(item, Object);
	if(!Meteor.userId()){
		throw new Meteor.Error('not logged in');
		console.log('you are not logged in');
	}

		Items.update(item._id, {
			$inc: {
				'likes' : 1
			}
		})

	}
});
}



export default Items;
