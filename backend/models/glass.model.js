const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewsModel = new Schema({date: String, author: String, rating: Number, title: String, text: String})
const glassSchema = new Schema({ id: {type: Number}, image: String, title: { type: String}, price: Number, rate: Number, prevprice: Number, images: Array, reviews: {total: Number, comments: [reviewsModel]},   });
const Glass = mongoose.model('Glass', glassSchema, 'Glass');
module.exports = Glass;

// {
// "id":2,
// "title":"Monarch",
// "image":"url1",
// "price":400,
// "rate":4,
// "prevprice":550,
// "images":[
//    "url1",
//    "url1"
// ],
// "reviews":{
//    "total":43,
//    "comments":[
//       {
//          "date":"22 / 10 / 2020",
//          "author":"Dan Balan0",
//          "rating":4,
//          "title":"Rocks",
//          "text":"Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it."
//       },
//       {
//          "date":"22 / 10 / 2020",
//          "rating":5,
//          "author":"Dan Balan0",
//          "title":"Rocks",
//          "text":"Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it."
//       }
//    ]
// }
// }
