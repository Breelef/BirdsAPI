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

app.get("/birds/:id", (req, res) => {
    let birdToFind = birds.find(bird => bird.id === Number(req.params.id)); 
    res.send(birds[birds.indexOf(birdToFind)]);
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
    let birdtoDelete = birds.find(bird => bird.id === Number(req.params.id)); 
    let birdIndex = birds.indexOf(birdtoDelete);
    birds.splice(birdIndex, 1);
    res.send(birds);
});

app.listen(8080);
//git