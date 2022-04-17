import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	name      : String,
	address   : String,
	foodStyle : String,
	hoursOpen : [ Date ],
	tags      : [ String ],
	likeCount : {
		type    : Number,
		default : 0,
	},
	createdAt : {
		type    : Date,
		default : new Date(),
	},
});

const restaurantInfo = mongoose.model('RestaurantInformation', postSchema);

export default restaurantInfo;
