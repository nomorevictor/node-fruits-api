var express = require("express");
var app = express();
app.get("/fruits", (req, res, next) => {
    res.json(["Mango","Banana","Mandarin","Strawberry"]);
   });
app.listen(8083, () => {
 console.log("Server running on port 8083");
});