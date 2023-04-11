const express = require("express")
const cors  = require("cors")
const { TravelRotes } = require("./Routes/Travel.Route")
const { connect } = require("./config/db")



const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome to backend of mock 15")
})

app.use("/travel", TravelRotes)



app.listen(4000, async () => {
    try{
        await connect
        console.log("server connected to db and runing at 4000 port")
    }catch(err){
        console.log(err)
    }
})