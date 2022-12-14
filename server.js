const express = require('express');
const app = express();

const cards = [ 
  { number: "456", id: 7 },
  { number: "678", id: 34 },
  { number: "789", id: 5 },
  { number: "890", id: 15 },
  { number: "345", id: 56 },
 ];


app.get("/card/:id", function (req, res) {
  res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
  
  const idOfcard = parseInt(req.params.id);
  const card = cards.find((card) => card.id === idOfcard);
  
  if (!card) {
    res.status(404).send();
  }
  res.status(200).json(card);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});