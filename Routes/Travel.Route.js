const express = require("express");
const TravelRotes = express.Router();
const { ModelTravelData } = require("../models/Travel.module");

TravelRotes.get("/", async (req, res) => {
  try {
    res.status(200).send("welcome to travel routes");
  } catch {
    res.status(404).send({ msg: "someting went wrong" });
  }
});

TravelRotes.post("/post", async (req, res) => {
    const data = req.body
  try {
    let store = new ModelTravelData(data)
    store.save()
    res.status(200).send("data is added")
  } catch (err){
    res.status(404).send({ msg: "someting went wrong", error: err });
  }
});

TravelRotes.post("/filter", async (req, res) => {
    const {Sort, Filter} = req.body
    console.log(Sort, Filter)
    let sort = ""

    if(Sort == "desc"){
       sort = 1
    }else{
        sort = -1
    }
  try {

    if(Filter == ""){
        let store = await ModelTravelData.find().sort({"BudgetPerPerson":sort})
        res.status(200).send({store})
    }else if(Sort == ""){
        let store = await ModelTravelData.find({"Destination":Filter})
        res.status(200).send({store})
    }else{
        let store = await ModelTravelData.find({"Destination":Filter}).sort({"BudgetPerPerson":sort})
        res.status(200).send({store})
    }
   
  } catch (err){
    res.status(404).send({ msg: "someting went wrong", error: err });
  }
});

TravelRotes.get("/get", async (req, res) => {
  try {
    let allData = await ModelTravelData.find();
    res.status(200).send({ data: allData });
  } catch {
    res.status(404).send({ msg: "someting went wrong" });
  }
});

module.exports = { TravelRotes };
