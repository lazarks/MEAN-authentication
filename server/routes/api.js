const express = require("express");
const router = express.Router();

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

module.exports = router;
