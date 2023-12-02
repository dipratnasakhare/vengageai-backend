const mongoose = require("mongoose")

const PhoneData = mongoose.Schema({
firstName: {type:String, require:true},
lastName : {type:String, require:true},
company: {type:String, require:true},
number: {type:Number, require:true},
})

const ModelPhoneData = mongoose.model("PhoneData", PhoneData)

module.exports = { ModelPhoneData }