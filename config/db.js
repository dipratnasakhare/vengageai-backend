const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb://dipratnasakhare:dipratnasakhare@cluster0-shard-00-00.tpfba.mongodb.net:27017,cluster0-shard-00-01.tpfba.mongodb.net:27017,cluster0-shard-00-02.tpfba.mongodb.net:27017/phonebook?ssl=true&replicaSet=atlas-kb0fad-shard-0&authSource=admin&retryWrites=true&w=majority")

module.exports = { connect }