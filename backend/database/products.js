const mongosse = require("mongoose");

const prodSchema = mongosse.Schema({
    name: String,
    rate: Number,
    color:String,
    quantity: Number,
    imageurl:String,
    items:String,
    sizes:{
    type: [Number],
    default: [0, 0, 0, 0, 0, 0, 0, 0]
},
});

module.exports = mongosse.model("prod",prodSchema);