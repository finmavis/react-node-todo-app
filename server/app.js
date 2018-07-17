const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const indexRoute = require("./routes/index");
const indexApiRoute = require("./routes/api");

app.use(express.static(__dirname + "/public", {maxage:"4h"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api/todos", indexApiRoute);
app.use("/", indexRoute);

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server Started!");
});