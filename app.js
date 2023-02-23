const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
const birds = [
{id: 1, name: "Gråspurv"}
];
let idInc = 2;

app.get("/birds", (req, res) => {
    res.send(birds);
});

app.get("/birds/:birdType", (req, res) => {
    res.send({birds: req.params.birdType})

});

app.post("/birds", (req, res) => {
    let bird = req.body;
    bird.id = idInc;
    idInc++;
    birds.push(bird);
    res.send(bird);
});

app.patch("/birds/:id", (req, res) => {
    let birdToPatch = birds.find(bird => bird.id === Number(req.params.id)); 
    let birdIndex = birds.indexOf(birdToPatch);
    birds[birdIndex].name = req.body.name;
    res.send(birds);

});

app.delete("/birds/:id", (req, res) => {
    let birdToPatch = birds.find(bird => bird.id === Number(req.params.id)); 
    let birdIndex = birds.indexOf(birdToPatch);
    birds.splice(birdIndex, 1);
    res.send(birds);
});

app.listen(8080);
//git