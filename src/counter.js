const express = require("express");
const router = express.Router();

let counter = 0;

router.get("/counter", (reg, res) => {
    res.json ({ counter });
});

router-post("/counter/increment", (reg, res) => {
    counter++;
    res.json ({ counter });
});

router-post("/counter/decrement", (req, res) => {
    counter--;
    res.json({ counter });
});

module.exports = router;