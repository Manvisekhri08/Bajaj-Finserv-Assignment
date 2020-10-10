const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
const Patients = require("./models/patient")



const connectionURL = "mongodb+srv://Manvi:sSwe8Gg5kZaLeyQW@cluster0.4r8kw.mongodb.net/Patients?retryWrites=true&w=majority"

//Connecting to DataBase
mongoose.connect(connectionURL,{ useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log("Connected to database!");
}).catch(() => {
    console.log("Connection failed!");
});
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Server
const port = 3000;
const server = app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});

app.get('/', (req, res,next) => {
    Patients.find({Mobno: '90875564332'}).then(data => {
        if (data) {
            res.status(200).json(data);
        } else {
            console.log('Data not found');
        }
    }).catch(error => {
        console.log('Data not found');
      });
    }) 

