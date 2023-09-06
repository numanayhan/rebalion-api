const express = require("express");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

const port = 3600

app.get('/',(req,res) =>{
    res.send("Hello Test")
});

app.listen(port,() => {
    console.log("TEST Ok");
})