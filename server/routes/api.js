const express = require("express");
const router = express.Router();

const User = require("../models/user");

const mongoose = require("mongoose");
const db = "mongodb+srv://lazar037:lazar037pw@cluster0.xguqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(db, (err) => {
    if (err) {
        console.error("Error!" + err);
    } else {
        console.log("Connected to mongodb");
    }
});

router.get("/", (req, res) => {
    res.send("hello [api]");
});

router.post("/register", (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    });
});

module.exports = router;
