const { Schema } = require('mongoose');

const PositionsSchema = new Schema({
    product : String , 
    name : Number,
    qty : Number,
    avg : Number,
    price : Number,
    net: String,
    day: String, 
    isLoss: Boolean,

});

module.exports ={ PositionsSchema };
