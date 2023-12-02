const express = require("express");
const PhoneRotes = express.Router();
const { ModelPhoneData } = require("../models/Phone.module");


PhoneRotes.post("/post", async (req, res) => {
    const data = req.body
  try {
    let store = new ModelPhoneData(data)
    store.save()
    res.status(200).send("number is added")
  } catch (err){
    res.status(404).send({ msg: "someting went wrong", error: err });
  }
});



PhoneRotes.post("/search", async (req, res) => {
  const {data} = req.body
try {
  let allData = await ModelPhoneData.find({firstName : {$regex: data}});
    res.status(200).send({ data: allData });
} catch (err){
  res.status(404).send({ msg: "someting went wrong", error: err });
}
});







PhoneRotes.delete("/delete/:id", async (req, res) => {
  const {id} = req.params
  try {
    let allData = await ModelPhoneData.deleteOne({"_id": id});
    res.status(200).send("data is deleted");
  } catch {
    res.status(404).send({ msg: "someting went wrong" });
  }
});


PhoneRotes.get("/", async (req, res) => {
  try {
    let allData = await ModelPhoneData.find();
    res.status(200).send({ data: allData });
  } catch {
    res.status(404).send({ msg: "someting went wrong" });
  }
});






module.exports = { PhoneRotes };
