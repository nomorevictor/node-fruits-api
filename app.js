var express = require("express");
var app = express();
app.get("/fruits", (req, res, next) => {
    res.json(["Mango","Banana","Mandarin","Strawberry"]);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});