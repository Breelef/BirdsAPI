const express = require("express");
const app = express();

app.use(express.json());

app.get("/birds", (req, res) => {
    res.send({birds: "this is all birds"})
});

app.get("/birds/:birdType", (req, res) => {
    res.send({birds: req.params.birdType})

});

app.listen(8080);
//git