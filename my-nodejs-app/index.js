const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
const { Schema } = mongoose;
const app = express();
app.use(cors())
const bodyParser = require("body-parser");
const { validationResult } = require("express-validator");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://emil:1e2m3i4l@cluster0.der8evf.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

//DB TABLE
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  birthdate: Number,
  email : String,
});

const user = mongoose.model("user", userSchema);

app.get("/api/user", (req, res) => {
  user.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

app.get('/api/user/:id', (req, res) => {

    let id = req.params.id;

    user.findById(id, (err, doc) => {
        if (!err) {
            if (doc)
                res.json(doc);
            else
                res.status(404).json({ "message": "Not found!" })
        }
        else {
            res.status(500).json(err)
        }
    })

})

app.post("/api/user", (req, res) => {
  var user = new user({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    email: req.body.email,
  });
  user.save();
  res.send("Success!!");
});

app.put('/api/user/:id', (req, res) => {

    let id = req.params.id;

    user.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.json({ 'message': 'success' });
        }
        else {
            res.status(500).json(err);
        }
    })
})

app.delete('/api/user/:id', (req, res) => {

    let id = req.params.id;

    user.findByIdAndDelete(id, (err) => {
        if (!err)
            res.json({ 'messagae': 'Success!' })
        else
            res.status(500).json(err)
    })
})

app.listen(5000, () => {
  console.log("Server is running!!");
});