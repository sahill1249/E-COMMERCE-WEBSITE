const mongosse = require("mongoose");


const prodSchema = new mongosse.Schema({
    name: String,
    color: String,
    imageurl: String,
    items: String,

    sizes: {
        type: [Number],
        default: () => Array(8).fill(0)
    },

    prices: {
        type: [Number],
        default: () => Array(8).fill(0)
    },
});

module.exports = mongosse.model("prod",prodSchema);