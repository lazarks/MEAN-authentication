const express = require("express");
const router = express.Router();

const User = require("../models/user");

const mongoose = require("mongoose");
const db = "mongodb+srv://lazar037:lazar037pw@cluster0.xguqk.mongodb.net/eventsDB?retryWrites=true&w=majority";
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

// registration api
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

// login api
router.post("/login", (req, res) => {
    let userData = req.body;

    User.findOne({ email: userData.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send("Invalid email");
            } else if (user.password !== userData.password) {
                res.status(401).send("Invalid password");
            } else {
                res.status(200).send(user);
            }
        }
    });
});

// events api
router.get("/events", (req, res) => {
    let events = [
        {
            _id: "1",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "2",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "3",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "4",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "5",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "6",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
    ];
    res.json(events);
});

router.get("/special", (req, res) => {
    let events = [
        {
            _id: "1",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "2",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "3",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "4",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "5",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
        {
            _id: "6",
            name: "Auto Expo",
            description: "lorem ipsum",
            date: "2022-01-25T19:09:08.511Z",
        },
    ];
    res.json(events);
});

module.exports = router;
