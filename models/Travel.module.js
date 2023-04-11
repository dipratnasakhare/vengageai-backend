const mongoose = require("mongoose")

const TravelData = mongoose.Schema({
Name: {type:String, require:true},
Email : {type:String, require:true},
Destination: {type:String, require:true},
NoOfTravellers: {type:Number, require:true},
BudgetPerPerson: {type:Number, require:true}
})

const ModelTravelData = mongoose.model("TravelData", TravelData)

module.exports = { ModelTravelData }